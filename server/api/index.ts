import express from "express";
import dotenv from "dotenv";
import cors from "cors";

console.log("\n\x1b[30m\x1b[47m%s\x1b[0m", "Starting server...");
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app
  .listen(PORT, () => {
    console.log(`\n\x1b[1mServer is listening on port: \x1b[4m${PORT}\x1b[0m`);
  })
  .on("error", (err) => {
    console.log("\x1b[4m\x1b[31m", err);
  });
