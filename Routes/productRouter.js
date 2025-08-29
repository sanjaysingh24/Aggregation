import {addProduct, generateproduct, getproduct} from "../Controllers/product/product.controller.js";
import express from "express";
export const productRouter = express.Router();
productRouter.post("/addproduct",addProduct)
productRouter.get("/generateproduct",generateproduct)
.get("/getproduct",getproduct)