const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser =require("body-parser");
const cors = require("cors");
require("dotenv/config");

//middlewares
app.use(cors())
app.use(bodyParser.json());


//import Routes
const postRoute = require("./routes/posts");
app.use("/posts", postRoute)

//ROUTES 
app.get("/", (req,res,) =>{
    res.send("Home")
});



//conect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log("connected to DB!")
)

//listen to the port
app.listen(4000);
