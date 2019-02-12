import express from "express";
import menu from "../db/menu";
import menuControllers from "../controllers/menuControllers";
const menuRoutes = express.Router();

menuRoutes.get("/menu", menuControllers.getMenu);

export default menuRoutes;
