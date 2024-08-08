import { Router } from "express";
import registerRoutes from "./register";
import loginRoutes from "./login";

const router = Router();

router.use(registerRoutes);
router.use(loginRoutes);

export default router;
