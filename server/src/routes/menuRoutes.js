import express from "express";
import menu from "../models/menu";
import menuControllers from "../controllers/menuControllers";
const menuRoutes = express.Router();

menuRoutes.get("/menu", menuControllers.getMenu);

menuRoutes.post("/menu", menuControllers.postMenu);

menuRoutes.post("/menu/caterer", menuControllers.getSingleMenu);

export default menuRoutes;
