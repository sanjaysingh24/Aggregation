import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    product:{
        type:[mongoose.Schema.Types.ObjectId],
        
        ref:'Product'

    },
    total:{
       type:Number
    },
    status:{
      type:String
    }
        
    
})
export const Order = mongoose.Schema('Order',orderSchema);