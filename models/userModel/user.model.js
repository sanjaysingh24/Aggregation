import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,

    },
    email:{
        type:String,
        unique:true,
    
    },
   age: {
    type:Number
   
    },
    city:{
        type:String,
    }
},{timestamps:true});

export const User = mongoose.model("User", userSchema);