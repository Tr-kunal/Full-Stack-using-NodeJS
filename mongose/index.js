const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/Backend')
    .then(()=>{
        console.log("DB Connected")
    })
    .catch(()=>{
        console.log("DB not connected")
    })

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    age:Number,
    city:String
})

const Users = mongoose.model("Users",userSchema)

// Users.create({
//     username:"kunal",
//     password:"kunal@123",
//     age:21,
//     city:"Agra"
// }).then(()=>{
//     console.log("Documnet created")
// })

// Users.find({})
//     .then((data)=>{
//         console.log(data);
//     })

// Users.findOne({})
//     .then((data)=>{
//         console.log(data);
//     })

// Users.find({city:"Agra"})
//     .then((data)=>{
//         console.log(data);
//     })

// Users.findById("69b91638f9562162aaadde22")
//     .then((data)=>{
//         console.log(data);
//     })

// Users.findByIdAndUpdate(("69b9173a84e4971d414a2a06"),{city:"Gurugram"})
//     .then(()=>{
//         console.log("Updated Successfully")
//     })

Users.updateMany({},{age:25})
    .then(()=>{
        console.log("Updated Successfully")
    })

app.listen(5000);