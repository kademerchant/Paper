import { Router, Request, Response } from "express";


const router = Router();

router.post("/login", (req: Request, res: Response) => {
  try {

  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});
export default router;
