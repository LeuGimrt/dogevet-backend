import { Router } from "express";
import {
  dogDetails,
  getAllDogs,
  getDogs,
  newDog,
  searchDog,
} from "../controllers/dogs.controller";
import validateAdminRole from "../middlewares/validateAdminRole";

const router = Router();

router.get("/", getDogs);
router.get("/allDogs", validateAdminRole, getAllDogs);
router.get("/:name", validateAdminRole, searchDog);
router.get("/details/:dogId", dogDetails);
router.post("/new", newDog);

export default router;
