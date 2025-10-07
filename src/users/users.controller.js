import { Router } from "express";
import  {UsersService} from "./users.service.js"
import cors from "cors";
const router = Router();

const usersService = new UsersService();

router.post("/", cors() , (req, res) => {
const users = usersService.createUser(req.body);
  res.status(201).json(users);
  }
);

export const usersRouter = router;
