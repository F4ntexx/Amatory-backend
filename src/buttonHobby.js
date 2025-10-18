import { Router } from "express";
import cors from "cors";

const router = Router();
const buttonHobby = {
  footbol: false,
  swimming: false,
  basketboll: false,
  knitting: false,
  embroidery: false,
  modeling: false,
  reading: false,
  cooks: false,
  drawing: false,
  photography: false,
  dance: false,
  camping: false,
  singleCombat: false,
  plaingComputerGames: false,
  singing: false,
  otherSports: false,
};

router.post("/", cors(), (req, res) => {
  const hobbyUsers = req.body.data || req.body;
  Object.assign(buttonHobby, hobbyUsers);
  res.status(200).json(buttonHobby);
  console.log(buttonHobby)
});

router.get("/", cors(), (req, res) => {
  res.json(buttonHobby);
});

export const hobbyUsersRouter = router;
