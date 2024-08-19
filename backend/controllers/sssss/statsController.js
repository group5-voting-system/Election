const User = require("../models/results_user");
const LocalList = require("../models/results_local_list");
const LocalCandidate = require("../models/results_local_candidate");

exports.getStats = async (req, res) => {
  try {
    const localVoteCount = await User.getLocalVoteCount();
    const listsInfo = await LocalList.getListsInfo();
    const candidatesInfo = await LocalCandidate.getCandidatesInfo();
    const votingRateByCircle = await User.getVotingRateByCircle();
    const thresholdByCircle = await User.getThresholdByCircle();
    const listsInfoWithThreshold = await LocalList.getListsInfoWithThreshold();
    const topCandidates = await LocalList.getTopCandidatesForLists(
      listsInfoWithThreshold
    );
    const specialSeats = await LocalList.getSpecialSeats();

    res.json({
      localVoteCount,
      listsInfo,
      candidatesInfo,
      votingRateByCircle,
      thresholdByCircle,
      listsInfoWithThreshold,
      topCandidates,
      specialSeats,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
