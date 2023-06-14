const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
   
}, {
    timestamps:true
});

const User=mongoose.model('User',userSchema);
// Which i write model function first Argumnet it will be table / collection name ,
//  Automatically LowerCAse And Pluaral

module.exports = User;