const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.get('/',(req,res)=>{
    res.send("working fine")
})


const loc = path.join(__dirname,'index.html');
app.get('/about',(req,res)=>{
    res.sendFile(loc)
})

app.get('/profile',(req,res)=>{
    res.render("profile")
})

app.get('/payment',(req,res)=>{
    res.render("abc")
})

const todo = ['coding','sleeping','eating'];

app.get('/todo',(req,res)=>{
    res.render("todo",{todo})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});