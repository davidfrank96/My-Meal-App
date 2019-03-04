import express from "express";
import OrderControllers from "../controllers/orderControllers";
const orderRoutes = express.Router();

orderRoutes.get("/orders", OrderControllers.getOrder);

orderRoutes.post("/orders", OrderControllers.postOrder);

orderRoutes.put("/orders/:id", OrderControllers.updateOrderName);

orderRoutes.post("/orders/chechout", OrderControllers.checkoutOrders);

orderRoutes.get("/orders/user", OrderControllers.getOrderItems);





export default orderRoutes;
