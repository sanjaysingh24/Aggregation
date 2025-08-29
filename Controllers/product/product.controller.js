import { faker } from "@faker-js/faker";
import { Products } from "../../models/productModel/product.model.js";

export const addProduct = async(req,res)=>{
    const{name,category,price,inStock} = req.body;
    try{
      const senddata = await Products.create({
        name,
        category,
        price,
        inStock
      })
      return res.status(201).json({message:"Product created successfully",data:senddata.name});
    }catch(err){
        res.status(500).json({message:"Internal Server Error"})
    }
}
export const generateproduct = async(req,res)=>{

    try{
   const products = [];
   for(let i=0;i<1500;i++){
     products.push({
        name: faker.commerce.productName(),
        category: faker.commerce.department(),
        price: parseFloat(faker.commerce.price({ min: 100, max: 5000 })), // 100 - 5000 INR
        inStock: faker.number.int({ min: 0, max: 200 }) // stock quantity
      });
   }
   

  await Products.insertMany(products);
    res.status(201).json({message:"1500 product created successfully"})
        

}catch(err){
    res.status(500).json({ message: "Internal Server Error" });
}

}

export const getproduct = async(req,res)=>{
    try{
        // simple matching like where 
        // let product = await Products.aggregate([{$match:{inStock:{$lt:100}}}])

        // grouping by the category
        // let product = await Products.aggregate([{
        //     $group:{
        //          _id:"$category",totalProducts:{$avg:"$inStock"} }
        // }])

        // select speocific fields
        // let product = await Products.aggregate([{$project:{name:1,category:1,Mrp:{$add:["$price",100]}}}])
        
        //sorting

        let product = await Products.aggregate([{$sort:{inStock:1}}]);
      
        return res.status(200).json({message:"similar products with their total stocks",data:product})
    }catch(err){
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// aggregation pipelines
