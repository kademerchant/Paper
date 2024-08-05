import express from "express";
import { config } from "../config/config"
import cors from "cors";
import v1Routes from "./controllers/v1/index";

console.log("\n\x1b[30m\x1b[47m%s\x1b[0m", "Starting server...");


const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/v1", v1Routes); // Include 'v1' in the path

app
  .listen(PORT, () => {
    console.log(`\n\x1b[1mServer is listening on port: \x1b[4m${PORT}\x1b[0m`);
  })
  .on("error", (err) => {
    console.log("\x1b[4m\x1b[31m", err);
  });