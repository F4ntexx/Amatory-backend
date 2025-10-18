
import { Router } from "express";
import cors from "cors";

const router = Router();
const user = [];

router.post("/", cors(), (req, res) => {
  const userData = req.body.data || req.body;
  user.push(userData);
  res.status(200).json(user);
});

router.get("/", cors(), (req, res) => {
  const aa = user[0];
  res.json(aa);
  console.log(aa);
});

export const usersRouter = router;
