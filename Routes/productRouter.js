import addProduct from "../Controllers/product/product.controller.js";
import express from "express";
export const productRouter = express.Router();
productRouter.post("/addproduct",addProduct);
