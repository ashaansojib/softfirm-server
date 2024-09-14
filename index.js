const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const port = process.env.PORT || 9988;
const path = require("path");

// load config & vers
dotenv.config({ path: "./config/config.env" });
const ConnectDB = require("./config/db");
const errorHandler = require("./middleware/error");

// load routes here
const users = require("./routes/Users");
const firmwares = require("./routes/Firmware");
const comments = require("./routes/Comments");
const sharedLinks = require("./routes/SharedLinks");
const moneyManage = require("./routes/MoneyManage");

// app middleware
app.use(cors());
app.use(express.json());

// routes call here
app.use("/api/users", users);
app.use("/api/users/:id", users);
// main products
app.use("/api/firmwares", firmwares);
app.use("/api/firmwares/:id", firmwares);
// comments api
app.use("/api/comments", comments);
app.use("/api/comments/:id", comments);
// shared link api
app.use("/api/links", sharedLinks);
app.use("/api/links/:id", sharedLinks);

// money manage account
app.use("/api/money-manage", moneyManage);
app.use("/api/money-manage/:id", moneyManage);

// db connect here
ConnectDB();

// error defaine after routes
app.use(errorHandler);
// default route
app.get("/", (req, res) => {
  res.send("The server is running.");
});
app.listen(port, () => {
  console.log(`The server is running on: ${port}`);
});
