const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine","ejs");
app.use(express.static("Public"));
app.set("views",__dirname+"/Public");

app.get("/",(req,res)=>{
    res.render("ejs/Home");
})

app.get("/work",(req,res)=>{
    res.render("ejs/projects");
})

app.get("/journey",(req,res)=>{
    res.render("ejs/education");
})

app.get("/skill",(req,res)=>{
    res.render("ejs/skill.ejs")
})


let port = 3000;
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})