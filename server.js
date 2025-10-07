import express from "express";
import { twitRouter } from "./src/twit/twit.controller.js";
const app = express();

async function main() {
  app.use(express.json());
  app.use("/api/twits", twitRouter);

app.all(/.*/, (req, res) => {
    res.status(404).json({ message: "Not found" });
});



  app.listen(4200, () => {
    console.log("Port - 4200");
  });
}

main();
