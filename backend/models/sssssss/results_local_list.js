const db = require("../db/knex");

class LocalList {
  static async getListsInfo() {
    return await db("LOCAL_LISTS").select(
      "LIST_NAME",
      "CIRCLE_ID",
      "COUNT_OF_VOTES"
    );
  }

  static async getListsInfoWithThreshold() {
    const lists = await db("LOCAL_LISTS").select(
      "LIST_ID",
      "LIST_NAME",
      "CIRCLE_ID",
      "COUNT_OF_VOTES"
    );

    const thresholds = await db("USERS")
      .select("CIRCLE_ID")
      .count("* as local_vote_users")
      .where("IS_LOCAL_VOTE", true)
      .groupBy("CIRCLE_ID");

    const thresholdMap = thresholds.reduce(
      (acc, { CIRCLE_ID, local_vote_users }) => {
        acc[CIRCLE_ID] = local_vote_users * 0.07;
        return acc;
      },
      {}
    );

    const circleMultipliers = { 1: 5, 2: 7, 3: 4 };
    const circleLimits = { 1: 5, 2: 7, 3: 4 };

    const results = {};
    for (const list of lists) {
      if (!results[list.CIRCLE_ID]) {
        results[list.CIRCLE_ID] = {
          lists: [],
          totalVotes: 0,
          allocatedSeats: 0,
          remainingSeats: circleLimits[list.CIRCLE_ID],
        };
      }

      const threshold = thresholdMap[list.CIRCLE_ID] || 0;
      const aboveThreshold =
        list.LIST_ID < 75 && list.COUNT_OF_VOTES > threshold;

      results[list.CIRCLE_ID].lists.push({
        ...list,
        aboveThreshold,
        allocatedSeats: 0,
        remainder: 0,
      });

      if (aboveThreshold) {
        results[list.CIRCLE_ID].totalVotes += list.COUNT_OF_VOTES;
      }
    }

    // تخصيص المقاعد بناءً على النسب
    for (const circleId in results) {
      const circleData = results[circleId];
      const multiplier = circleMultipliers[circleId];
      const divisor = circleData.totalVotes / multiplier;

      for (const list of circleData.lists) {
        if (list.aboveThreshold) {
          const seats = list.COUNT_OF_VOTES / divisor;
          const allocatedSeats = Math.floor(seats);
          list.allocatedSeats = allocatedSeats;
          list.remainder = seats - allocatedSeats;
          circleData.allocatedSeats += allocatedSeats;
        }
      }

      // حساب المقاعد المتبقية
      circleData.remainingSeats =
        circleLimits[circleId] - circleData.allocatedSeats;
      console.log(circleLimits[circleId] - circleData.allocatedSeats);
      // توزيع المقاعد المتبقية
      if (circleData.remainingSeats > 0) {
        // تصفية القوائم لاستبعاد "ورقة بيضاء"
        circleData.lists = circleData.lists.filter((list) => list.LIST_ID < 75);

        // ترتيب القوائم بناءً على الفائض من المقاعد (من الأكبر إلى الأصغر)
        circleData.lists.sort((a, b) => b.remainder - a.remainder);

        // توزيع المقاعد المتبقية بناءً على الترتيب
        for (let i = 0; i < circleData.remainingSeats; i++) {
          if (i >= circleData.lists.length) break;
          circleData.lists[i].allocatedSeats++;
          circleData.remainingSeats; // تقليل عدد المقاعد المتبقية
        }
      }
    }

    return results;
  }

  static async getTopCandidatesForLists(listsInfo) {
    const listIds = Object.values(listsInfo).flatMap((circle) =>
      circle.lists
        .filter((list) => list.allocatedSeats > 0)
        .map((list) => list.LIST_ID)
    );
    const candidates = await db("LOCAL_CANDIDATE")
      .join("USERS", "LOCAL_CANDIDATE.NATIONAL_ID", "USERS.NATIONAL_ID")
      .join("LOCAL_LISTS", "LOCAL_CANDIDATE.LIST_ID", "LOCAL_LISTS.LIST_ID")
      .whereIn("LOCAL_CANDIDATE.LIST_ID", listIds)
      .where("LOCAL_CANDIDATE.TYPE_OF_CHAIR", "مسلم")
      .select(
        "LOCAL_CANDIDATE.LIST_ID",
        "USERS.FULL_NAME",
        "LOCAL_CANDIDATE.TYPE_OF_CHAIR",
        "LOCAL_CANDIDATE.COUNT_OF_VOTES",
        "LOCAL_LISTS.LIST_NAME",
        "LOCAL_LISTS.CIRCLE_ID"
      )
      .orderBy("LOCAL_CANDIDATE.COUNT_OF_VOTES", "desc");

    // طباعة المرشحين للتأكد من وجود بيانات
    console.log("Candidates:", candidates);
    console.log("listInfo:", listsInfo);
    const topCandidates = {};
    for (const circleId in listsInfo) {
      topCandidates[circleId] = [];
      for (const list of listsInfo[circleId].lists) {
        console.log("list:", list);
        console.log("list.allocatedSeats:", list.allocatedSeats);
        if (list.allocatedSeats > 0) {
          // تصفية المرشحين بناءً على LIST_ID
          const listCandidates = candidates
            .filter((c) => c.LIST_ID == list.LIST_ID)
            .slice(0, list.allocatedSeats);

          // طباعة المرشحين لكل قائمة للتأكد
          console.log(`List ${list.LIST_ID} Candidates:`, listCandidates);

          // إضافة المرشحين إلى topCandidates
          topCandidates[circleId].push(...listCandidates);
        }
      }
    }

    // طباعة topCandidates للتأكد من النتيجة النهائية
    console.log("Top Candidates:", topCandidates);

    return topCandidates;
  }

  static async getSpecialSeats() {
    const specialSeats = {};

    // CIRCLE_ID = 1, TYPE_OF_CHAIR = 'كوتا'
    const quota1 = await db("LOCAL_CANDIDATE")
      .join("USERS", "LOCAL_CANDIDATE.NATIONAL_ID", "USERS.NATIONAL_ID")
      .join("LOCAL_LISTS", "LOCAL_CANDIDATE.LIST_ID", "LOCAL_LISTS.LIST_ID")
      .where("LOCAL_LISTS.CIRCLE_ID", 1)
      .where("LOCAL_CANDIDATE.TYPE_OF_CHAIR", "كوتا")
      .orderBy("LOCAL_CANDIDATE.COUNT_OF_VOTES", "desc")
      .first(
        "USERS.FULL_NAME",
        "LOCAL_CANDIDATE.COUNT_OF_VOTES",
        "LOCAL_CANDIDATE.TYPE_OF_CHAIR"
      );

    specialSeats["1"] = [quota1];

    // CIRCLE_ID = 2
    const quota2 = await db("LOCAL_CANDIDATE")
      .join("USERS", "LOCAL_CANDIDATE.NATIONAL_ID", "USERS.NATIONAL_ID")
      .join("LOCAL_LISTS", "LOCAL_CANDIDATE.LIST_ID", "LOCAL_LISTS.LIST_ID")
      .where("LOCAL_LISTS.CIRCLE_ID", 2)
      .where("LOCAL_CANDIDATE.TYPE_OF_CHAIR", "كوتا")
      .orderBy("LOCAL_CANDIDATE.COUNT_OF_VOTES", "desc")
      .first(
        "USERS.FULL_NAME",
        "LOCAL_CANDIDATE.COUNT_OF_VOTES",
        "LOCAL_CANDIDATE.TYPE_OF_CHAIR"
      );

    const christian = await db("LOCAL_CANDIDATE")
      .join("USERS", "LOCAL_CANDIDATE.NATIONAL_ID", "USERS.NATIONAL_ID")
      .join("LOCAL_LISTS", "LOCAL_CANDIDATE.LIST_ID", "LOCAL_LISTS.LIST_ID")
      .where("LOCAL_LISTS.CIRCLE_ID", 2)
      .where("LOCAL_CANDIDATE.TYPE_OF_CHAIR", "مسيحي")
      .orderBy("LOCAL_CANDIDATE.COUNT_OF_VOTES", "desc")
      .first(
        "USERS.FULL_NAME",
        "LOCAL_CANDIDATE.COUNT_OF_VOTES",
        "LOCAL_CANDIDATE.TYPE_OF_CHAIR"
      );

    const circassianChechnyan2 = await db("LOCAL_CANDIDATE")
      .join("USERS", "LOCAL_CANDIDATE.NATIONAL_ID", "USERS.NATIONAL_ID")
      .join("LOCAL_LISTS", "LOCAL_CANDIDATE.LIST_ID", "LOCAL_LISTS.LIST_ID")
      .where("LOCAL_LISTS.CIRCLE_ID", 2)
      .where("LOCAL_CANDIDATE.TYPE_OF_CHAIR", "شركسي / شيشاني")
      .orderBy("LOCAL_CANDIDATE.COUNT_OF_VOTES", "desc")
      .first(
        "USERS.FULL_NAME",
        "LOCAL_CANDIDATE.COUNT_OF_VOTES",
        "LOCAL_CANDIDATE.TYPE_OF_CHAIR"
      );

    specialSeats["2"] = [quota2, christian, circassianChechnyan2];

    // CIRCLE_ID = 3
    const quota3 = await db("LOCAL_CANDIDATE")
      .join("USERS", "LOCAL_CANDIDATE.NATIONAL_ID", "USERS.NATIONAL_ID")
      .join("LOCAL_LISTS", "LOCAL_CANDIDATE.LIST_ID", "LOCAL_LISTS.LIST_ID")
      .where("LOCAL_LISTS.CIRCLE_ID", 3)
      .where("LOCAL_CANDIDATE.TYPE_OF_CHAIR", "كوتا")
      .orderBy("LOCAL_CANDIDATE.COUNT_OF_VOTES", "desc")
      .first(
        "USERS.FULL_NAME",
        "LOCAL_CANDIDATE.COUNT_OF_VOTES",
        "LOCAL_CANDIDATE.TYPE_OF_CHAIR"
      );

    const circassianChechnyan3 = await db("LOCAL_CANDIDATE")
      .join("USERS", "LOCAL_CANDIDATE.NATIONAL_ID", "USERS.NATIONAL_ID")
      .join("LOCAL_LISTS", "LOCAL_CANDIDATE.LIST_ID", "LOCAL_LISTS.LIST_ID")
      .where("LOCAL_LISTS.CIRCLE_ID", 3)
      .where("LOCAL_CANDIDATE.TYPE_OF_CHAIR", "شركسي / شيشاني")
      .orderBy("LOCAL_CANDIDATE.COUNT_OF_VOTES", "desc")
      .first(
        "USERS.FULL_NAME",
        "LOCAL_CANDIDATE.COUNT_OF_VOTES",
        "LOCAL_CANDIDATE.TYPE_OF_CHAIR"
      );

    specialSeats["3"] = [quota3, circassianChechnyan3];

    return specialSeats;
  }
}

module.exports = LocalList;
