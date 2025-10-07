import { Router } from "express";
import { TwitsService } from "./twit.service.js";
const router = Router();

const twistService = new TwitsService();

router.post("/", (req, res) => {
  if (!req.body?.text?.length){
    return res.status(400).json({message: 'Message is required!'})
  }
  const twit = twistService.createTwit(req.body);
  res.status(201).json(twit);
});

export const twitRouter = router;
