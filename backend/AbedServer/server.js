// const express = require("express");
// const app = express();
// const votingRoutes = require('./routes/votingRoutes');

// const PORT = 5000;
// const cors = require("cors");

// const bodyParser = require("body-parser");

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());
// app.use('/voting', votingRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const app = express();

const candidateRequestRoutes = require("./routes/candidateRequests");
const localListRoutes = require("./routes/localLists");

const votingRoutes = require('./routes/votingRoutes');




const PORT = 5000;
const cors = require("cors");

const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//registeration
const register_router = require("./routes/register_router");
app.use("/db/vs", register_router);

app.use("/api/candidate-requests", candidateRequestRoutes);
app.use("/api/local-lists", localListRoutes);

app.use('/voting', votingRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

