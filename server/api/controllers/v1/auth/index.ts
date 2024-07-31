import { Router } from "express"
import registerRoutes from "./register"

const router = Router()

router.use(registerRoutes)

export default router