import { Router, Request, Response } from "express";
import NextAuth from "next-auth/next"
import { options } from "api/services/loginService";

const handler = NextAuth(options)
const router = Router();

router.post("/login", (req: Request, res: Response) => {
  try {

  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});
export default router;
