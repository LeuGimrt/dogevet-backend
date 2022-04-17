import { Router } from "express";
import { newConsult } from "../controllers/consults.controller";

const router = Router();

router.post("/new", newConsult);
export default router;
