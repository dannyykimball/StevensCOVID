const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//MongoDB login key
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
  initialize();
});

function initialize() {
  const userRouter = require("./routes/user/user");
  app.use("/User", userRouter);
  const sessionRouter = require("./routes/session/session");
  app.use("/Session", sessionRouter);
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
