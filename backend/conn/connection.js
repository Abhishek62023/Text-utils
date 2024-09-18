const mongoose = require('mongoose')

const EmploySchema=new mongoose.Schema({
    Username:String,
    Email:String,
    Password:String
})
   

const EmployModel = mongoose.model('Employess',EmploySchema)


module.exports= EmployModel

