import { Router } from "express";
import authRouter from "./auth.router";
import promtRouter from "./promt.router";


const router = Router();

router.use("/auth", authRouter)
router.use("/promt", promtRouter);


export default router;