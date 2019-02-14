import express from "express";
import orders from "../db/orders";
import orderControllers from "../controllers/orderControllers";
const orderRoutes = express.Router();

orderRoutes.get("/orders", orderControllers.getOrder);

orderRoutes.patch("/orders/:id", orderControllers.updateOrderName);

export default orderRoutes;
