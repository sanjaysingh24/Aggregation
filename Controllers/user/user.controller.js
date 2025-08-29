import { User } from "../../models/userModel/user.model.js";
import { faker } from "@faker-js/faker";
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
export const generateuser = async(req,res)=>{
console.log("generateuser");
    try{
   const users = [];
   for(let i=0;i<500;i++){
    users.push({
        name:faker.person.fullName(),
        email:faker.internet.email(),
        age:faker.number.int({min:18,max:60}),
        city:faker.location.city()
    })
   }
   

   await User.insertMany(users);
    res.status(201).json({message:"500 users created successfully"})
        

}catch(err){
    res.status(500).json({ message: "Internal Server Error" });
}

}