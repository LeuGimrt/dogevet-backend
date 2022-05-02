import { Router } from "express";
import {
  petDetails,
  getAllPets,
  getPets,
  newPet,
  searchPet,
} from "../controllers/pets.controller";
import validateAdminRole from "../middlewares/validateAdminRole";

const router = Router();

router.get("/", getPets);
router.get("/all", validateAdminRole, getAllPets);
router.get("/:name", validateAdminRole, searchPet);
router.get("/details/:petId", petDetails);
router.post("/new", newPet);

export default router;
