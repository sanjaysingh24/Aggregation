import { User } from "../../models/userModel/user.model.js";
export const adduser = async(req,res)=>{
    const {name,email,age,city}=req.body;
    try{
         let data = await User.create({
            name,
            email,
            age,
            city
         })
         return res.status(201).json({message: "User created successfully", data:data.name});
    }catch(err){
        res.status(500).json({ message: "Internal Server Error" });
    }
}
