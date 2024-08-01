import { Router, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import {
  registerUser,
  usernameOrEmailExists,
} from "../../../services/registerService";

const router = Router();
//const jwtSecret = process.env.JWT_SECRET;

router.post("/register", async (req: Request, res: Response) => {
  try {
    
    const { name, email, username, password } = req.body;
    const ciUsername = username.toLowerCase()
    const newUser = await registerUser(name, email, username, ciUsername, password);
    res.json(newUser);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

//for client side to check if an email or username is already linked to an acc
router.post("/register/exists", async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;
    const exists = await usernameOrEmailExists(username, email);
    res.status(200).json({ exists });
    console.log("Backend exists value:", exists);
  } catch (err: any) {
    res.status(500).json({ err });
  }
});

export default router;
