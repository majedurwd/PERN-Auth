import { loginHandler, registerController } from "../controllers";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", loginHandler);
authRouter.post("/register", registerController);

export default authRouter;
