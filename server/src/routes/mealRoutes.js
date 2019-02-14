import express from "express";
import meals from "../db/meals";
import mealControllers from "../controllers/mealControllers";
const mealRoutes = express.Router();

mealRoutes.get("/meals", mealControllers.getMeal);

mealRoutes.post("/meals", mealControllers.postMeal);

mealRoutes.patch("/meals/:id", mealControllers.updateMealName);

mealRoutes.delete("/meals/:id", mealControllers.deleteMeal);

export default mealRoutes;