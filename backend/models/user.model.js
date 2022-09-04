const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    added_on:{
        type:Date,
        default:Date.now()               
    },
    // status:{
    //     type:String,
    //     default:'active'
    // }
})


module.exports=mongoose.model('user',UserSchema)