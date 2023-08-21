const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.port || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes
const todoRoutes = require("./routes/todos");

//mount the todo aspi routes

app.use("/api/v1",todoRoutes);

app.listen(PORT ,() => {
    console.log(`server started successfully at ${PORT}`);
})

//db connection 
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req,res) => {
    res.send(`<h1> This is HomePage baby </h1>`);
})