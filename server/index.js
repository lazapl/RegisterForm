const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/elo")


const Employee = require("./Models/User")



app.post("/login",(req,res)=>{
    const {email, password} = req.body
   
    Employee.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json({status: "Success"})
            }else{
                res.json("the password is incorect")
            }
        }else{
            res.json("Account dosnt exist")
        }
    })

})



app.post("/register",(req,res)=>{
    Employee.create(req.body)
    .then(employeeMent => res.json(employeeMent))

})

app.listen(4000,()=>{
    console.log("server works")
})