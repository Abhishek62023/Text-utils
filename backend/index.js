const express = require('express')
const EmployModel= require('./conn/connection')
const mongoose = require('mongoose')
const cors= require('cors')

const app =express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/Employ')

app.post('/login',(req,res)=>{
    const{Username,Password}=req.body;
    EmployModel.findOne({Username: Username})
    .then(User=>{
        if(User){
            if(User.Password=== Password){
                res.json('success')
            }else{
                res.json("inavlid password")
            }
        }else{
            res.json("invalid username")
        }
        
    })
})
    



app.post('/register',(req,res)=>{
    EmployModel.create(req.body)
    .then(Employess=> res.json(Employess))
    .catch(err=> res.json(err))
})


app.listen(5000,()=>{
    console.log ('server started')
})