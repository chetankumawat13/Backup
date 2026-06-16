import { Router } from "express";
const authRouter = Router()
import { registerValidation } from "../validators/auth.validators.js";
import { registerUser } from "../controllers/auth.controller.js";



authRouter.post("/register",registerValidation,registerUser)


export default authRouter