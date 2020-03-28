const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const transcations = require("./routes/Transcation");
dotenv.config({ path: "./config/config.env" });
const bodyParser = require("body-parser");
const app = express();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

app.use(express.json());
connectDB();

app.use("/api/v1/transcations", transcations);

app.get("/", (req, res, next) => {
  return res.send("hello");
});
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode  on port:${PORT}`.yellow
      .bold
  );
});
