import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export const User = mongoose.model("User",userSchema)