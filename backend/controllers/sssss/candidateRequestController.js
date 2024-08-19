const CandidateRequest = require("../models/candidateRequest");

exports.getAllRequests = async (req, res) => {
  try {
    const requests = await CandidateRequest.getAll();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRequestById = async (req, res) => {
  try {
    const request = await CandidateRequest.getById(req.params.id);
    if (request) {
      res.json(request);
    } else {
      res.status(404).json({ message: "Request not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createRequest = async (req, res) => {
  try {
    const id = await CandidateRequest.create(req.body);
    res.status(201).json(id[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRequest = async (req, res) => {
  try {
    await CandidateRequest.update(req.params.id, req.body);
    res.json({ message: "Request updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteRequest = async (req, res) => {
  try {
    await CandidateRequest.delete(req.params.id);
    res.json({ message: "Request deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
