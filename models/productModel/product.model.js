import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        category:{
            type:String
        },
        price:{
         type:Number
        },
        inStock:{
        type:Number
        }
    },{timestamps:true}
)

export const Products = new mongoose.model('Products',productSchema)