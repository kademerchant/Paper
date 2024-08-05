import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
};