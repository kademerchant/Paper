import { Router, Request, Response } from "express";
import { validateCredentials } from "../../../services/loginService";
import jwt from "jsonwebtoken"
import { config } from "../../../../config/config"

const router = Router();

router.post(
  "/validate-credentials",
  async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const validationResponse = await validateCredentials(username, password);
      if (!validationResponse) {
        return null;
      }
      res.status(200).json({ id: validationResponse });
    } catch (err: any) {
      res.status(400).json({ message: "Invalid credentials" });
    }
  }
);
export default router;


router.post("/login", (req: Request, res: Response) => {
  const { id } = req.body

  
  if (!config.SECRET_KEY) {
    return res.status(500).json({ message: "Server configuration error" });
  }

  const token = jwt.sign({ id }, config.SECRET_KEY, { expiresIn: '24h' });
  res.status(200).json({token})
})