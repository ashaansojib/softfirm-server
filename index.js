const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const port = process.env.PORT || 9988;

// load config & vers
dotenv.config({path: './config/config.env'});

// load routes here
const users = require("./routes/Users");

// app middleware
app.use(express.json());
app.use(cors());

// routes call here
app.use("/api/users", users);

// db connect here

// error defaine after routes

// default route
app.get('/', (req, res) =>{
    res.send("The server is running.")
});
app.listen(port, ()=>{
    console.log(`The server is running on: ${port}`);
});