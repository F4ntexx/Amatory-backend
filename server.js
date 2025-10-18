import express from "express";
import { usersRouter } from "./src/users/users.controller.js";
import { hobbyUsersRouter } from "./src/buttonHobby.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

async function main() {
  app.use(express.json());
  app.use(cors());
  app.use("/api/users", usersRouter);
  app.use("/hobbyUsers", hobbyUsersRouter);
  app.get(/.*/, (req, res) => {
    res.status(200);
  });

  app.listen(process.env.PORT || 4200, () => {
    console.log("Port - 4200");
  });
}

main();
