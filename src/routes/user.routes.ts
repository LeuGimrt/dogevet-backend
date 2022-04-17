import { getUser, updateUser } from "../controllers/user.controller";
import { Router } from "express";
import validateToken from "../middlewares/validateToken";

const router = Router();

router.get("/my-info", validateToken, getUser);
router.put("/edit", validateToken, updateUser);

export default router;
