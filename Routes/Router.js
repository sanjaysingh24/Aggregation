import { adduser, generateuser } from "../Controllers/user/user.controller.js";

import { Router } from "express";


export const userRouter = Router();
userRouter.post("/adduser", adduser)
userRouter.get("/generateuser",generateuser) //correct it to generateuser
