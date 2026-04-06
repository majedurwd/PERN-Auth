import {loginHandler} from "../handlers";
import { Router } from "express";


const authRouter = Router();

authRouter.post("/login", loginHandler)

export default authRouter;