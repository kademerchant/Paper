import { Router } from "express";
import authRoutes from "./auth/index"


const router = Router()

router.use("/auth", authRoutes)

export default router
