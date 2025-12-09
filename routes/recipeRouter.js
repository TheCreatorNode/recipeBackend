import express from "express";
import {
  createRecipe,
  findRecipebyId,
  findAll,
} from "../controllers/recipeControllers.js";

const router = express.Router();

router.post("/create", createRecipe);
router.get("/:id", findRecipebyId);
router.route("/").get(findAll);

export default router;
