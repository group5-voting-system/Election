const Users = require("../models/users");
const LocalLists = require("../models/localLists");
const LocalCandidates = require("../models/localCandidates");

exports.getLists = async (req, res) => {
  try {
    const lists = await LocalLists.getAllLists();
    res.json(lists);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch lists" });
  }
};

exports.getCandidates = async (req, res) => {
  try {
    const { listId } = req.params;
    const candidates = await LocalCandidates.getCandidatesByListId(listId);
    const candidatesWithNames = await Promise.all(
      candidates.map(async (candidate) => {
        const user = await Users.getUserByNationalId(candidate.NATIONAL_ID);
        return { ...candidate, FULL_NAME: user.FULL_NAME };
      })
    );
    res.json(candidatesWithNames);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch candidates" });
  }
};

exports.voteForCandidates = async (req, res) => {
  try {
    const { candidateIds } = req.body;
    await Promise.all(
      candidateIds.map((id) => LocalCandidates.incrementVotes(id))
    );
    res.json({ message: "Votes recorded successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to record votes" });
  }
};

exports.voteForList = async (req, res) => {
  try {
    const { listId, nationalId } = req.body;

    // التحقق من حالة التصويت قبل السماح بالتصويت
    const hasVoted = await Users.checkLocalVoteStatus(nationalId);
    if (hasVoted) {
      return res.status(400).json({ error: "لقد قمت بالتصويت مسبقًا" });
    }

    await LocalLists.incrementVotes(listId);
    await Users.updateLocalVoteStatus(nationalId);

    res.json({ message: "تم تسجيل التصويت بنجاح وتحديث حالة التصويت المحلي" });
  } catch (error) {
    console.error("Error recording vote:", error);
    res.status(500).json({ error: "فشل في تسجيل التصويت" });
  }
};

exports.checkVoteStatus = async (req, res) => {
  try {
    const { nationalId } = req.params;
    const hasVoted = await Users.checkLocalVoteStatus(nationalId);
    res.json({ hasVoted });
  } catch (error) {
    console.error("Error checking vote status:", error);
    res.status(500).json({ error: "فشل في التحقق من حالة التصويت" });
  }
};
