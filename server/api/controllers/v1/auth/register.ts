import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

const router = Router()
const prisma = new PrismaClient()
const jwtSecret = process.env.JWT_SECRET


router.post('/register', async (req: Request, res: Response) => {

})



