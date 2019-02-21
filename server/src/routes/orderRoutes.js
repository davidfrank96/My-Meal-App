import express from "express";
import orders from "../db/orders";
import orderControllers from "../controllers/orderControllers";
const orderRoutes = express.Router();

orderRoutes.get("/orders", orderControllers.getOrder);

orderRoutes.post("/orders", orderControllers.postOrder);

orderRoutes.put("/orders/:id", orderControllers.updateOrderName);

export default orderRoutes;
