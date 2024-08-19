const express = require("express");
const cors = require("cors");
const knex = require("knex")(require("./knexfile").development);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const ChatRoutes = require("./routes/contactFormRoutes");
app.use("/api", ChatRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
