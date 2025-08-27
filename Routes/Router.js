import { adduser } from "../Controllers/user/user.controller.js";

import { Router } from "express";


export const userRouter = Router();
userRouter.post("/adduser", adduser);
