const express = require("express");
const app = express();
const candidateRequestRoutes = require("./routes/candidateRequests");
const localListRoutes = require("./routes/localLists");
const PORT = 5000;
const cors = require("cors");
const partyListRoutes = require("./routes/partyListRoutes");
const partyListvoteRoutes = require("./routes/partyListvoteRoutes");
const localListvoteRoutes = require("./routes/voteRoutes");
const statsRoutes = require("./routes/stats");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/candidate-requests", candidateRequestRoutes);
app.use("/api/local-lists", localListRoutes);
app.use("/api", partyListRoutes);
app.use("/api", localListvoteRoutes);
app.use("/api/party_list_votes", partyListvoteRoutes);
app.use("/api/stats", statsRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
