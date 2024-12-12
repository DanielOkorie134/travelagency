const path=require("path")
const express=require("express");
const { dir } = require("console");
const app=express();

const port=5000
app.use(express.static(path.join(__dirname,'assets')))

app.get("/home",(req,res) => {
    res.sendFile(path.join(__dirname, 'view', 'first.html'))
})
app.get("/stores",(req,res) => {
    res.sendFile(path.join(__dirname, 'view', 'stores.html'))
})
app.get("/login",(req,res) => {
    res.sendFile(path.join(__dirname, 'view', 'login.html'))
})
app.get("/book",(req,res) => {
    res.sendFile(path.join(__dirname, 'view', 'book.html'))
})
app.get("/about",(req,res) => {
    res.sendFile(path.join(__dirname, 'view', 'about.html'))
})
app.get("/contact",(req,res) => {
    res.sendFile(path.join(__dirname, 'view', 'contact.html'))
})
app.get("/places",(req,res) => {
    res.sendFile(path.join(__dirname, 'view', 'places.html'))
})
app.get("/signup",(req,res) => {
    res.sendFile(path.join(__dirname, 'view', 'signup.html'))
})
app.listen( port,() => {
    console.log ("server is running")
})