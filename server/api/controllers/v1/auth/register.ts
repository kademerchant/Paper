import { Router, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { registerUser } from "../../../services/registerService";

const router = Router();
//const jwtSecret = process.env.JWT_SECRET;

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, username, password } = req.body;
    const newUser = await registerUser(name, email, username, password);
    res.json(newUser);
  } catch (err: any) {
    res.status(400).json({ message: err.message }); // Changed to 400 for validation errors
  }
});

export default router;
