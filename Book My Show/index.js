const express = require("express");
const port = 1008;
const app = express();
const path = require("path");
app.set("view engine","ejs");
const db = require('./config/db')

app.use(express.urlencoded({ extended: true}));
app.use("/uploads",express.static(path.join (__dirname,"uploads")));
app.use("/public",express.static(path.join (__dirname,"public")))

app.use("/",require('./routes/route'))

app.listen(port,(err)=>{
    err?console.log(err):console.log(`Port Started on : http://localhost:${port}`)   
});