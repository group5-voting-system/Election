const PartyList = require("../models/partylist");

exports.getAllLists = async (req, res) => {
  try {
    const lists = await PartyList.getAllLists();
    res.json(lists);
  } catch (error) {
    res.status(500).json({ error: "خطأ في استرجاع القوائم" });
  }
};

exports.vote = async (req, res) => {
  const { listId, nationalId } = req.body;

  try {
    // التحقق مما إذا كان المستخدم قد صوت بالفعل
    const hasVoted = await PartyList.hasUserVoted(nationalId);

    if (hasVoted) {
      return res.status(400).json({ error: "لقد قمت بالتصويت بالفعل" });
    }

    // زيادة عدد الأصوات للقائمة المحددة
    await PartyList.incrementVotes(listId);

    // تحديث حالة IS_PARTY_VOTE للمستخدم
    await PartyList.updateUserVoteStatus(nationalId);

    res.json({ message: "تم التصويت بنجاح وتحديث حالة المستخدم" });
  } catch (error) {
    console.error("Error during voting process:", error);
    res.status(500).json({ error: "خطأ في عملية التصويت" });
  }
};
