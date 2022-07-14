const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const series = require("./routes/series");

app.use(express.json());
app.use(cors());
app.use("/series", series);
app.use(express.static("public"));

dotenv.config();
const PORT = process.env.PORT ?? 8080;

app.get("/", function (req, res) {
  console.log(req);
  res.send("Welcome to meet the characters api!");
});

app.listen(PORT, () => {
  console.log("Server listening on http://localhost:" + PORT);
});
