const express = require("express");
const port = 8008;
const path = require("path");



const app = express()

app.set("view engine","ejs")
app.use(express.urlencoded())
app.use("/public",express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/blog",(req,res)=>{
    res.render("blog")
})

app.get("/cart",(req,res)=>{
    res.render("cart")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/services",(req,res)=>{
    res.render("services")
})


app.get("/shop",(req,res)=>{
    res.render("shop")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Port started : " + port)
})
