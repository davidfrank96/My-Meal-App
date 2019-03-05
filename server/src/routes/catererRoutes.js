import express from "express";
import CatererController from "../controllers/catererControllers";
const catererRoutes = express.Router();

catererRoutes.post("/caterer/signup", CatererController.registerCaterer);



export default catererRoutes;