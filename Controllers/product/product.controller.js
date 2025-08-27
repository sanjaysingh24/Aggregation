import { Product } from "../../models/productModel/product.model.js";

export const addProduct = async(req,res)=>{
    const{name,category,price,inStock} = req.body;
    try{
      const senddata = await Product.create({
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