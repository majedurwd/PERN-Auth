import {loginHandler, registerController} from "../controllers";
import { Router } from "express";


const promtRouter = Router();

promtRouter.get("/", (req, res) => {
    res.json({ message: "Welcome to the API" });
})

export default promtRouter;