import mongoose from "mongoose";

export const  connectDb = async()=>{
    try{
        let conn = await mongoose.connect("mongodb://localhost:27017/aggregation");
        if(conn){
            console.log("Database connected successfully");
        }
        else{
            console.log("Database connection failed");
        }
    }catch(err){
        console.log("Error connecting to database:", err);
    }
}