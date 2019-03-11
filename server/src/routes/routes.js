import express from "express";
import trimRequest from "trim-request";
import UserMiddleware from "../middleware/user";
import CatererMiddleware from "../middleware/caterer";
import MealMiddleware from "../middleware/meal";
import OrderMiddleware from "../middleware/order";
import OrderControllers from "../controllers/orderControllers";
import menuControllers from "../controllers/menuControllers";
import mealControllers from "../controllers/mealControllers";
import CatererController from "../controllers/catererControllers";
import AuthController from "../controllers/authControllers";
import UserController from "../controllers/userControllers";
const router = express.Router();




//Orders routes
router.get(
  "/orders",
    AuthController.verifyAdminToken,
    OrderControllers.getOrder
);

router.post(
  "/orders",
    trimRequest.body,
    AuthController.verifyAdminToken,
    OrderMiddleware.validateModifyOrder,
    OrderControllers.postOrder
);

router.put(
  "/orders/:id",
  trimRequest.body,
  AuthController.verifyAdminToken,
  OrderControllers.updateOrderName
);

router.post(
  "/orders/checkout",
  trimRequest.body,
  AuthController.verifyAdminToken,
  OrderControllers.checkoutOrders
);

router.get(
  "/orders/user",
  AuthController.verifyAdminToken,
  OrderControllers.getOrderItems
);

// Menu routes
router.get("/menu", AuthController.verifyAdminToken, menuControllers.getMenu);

router.post(
  "/menu",
    trimRequest.body,
    MealMiddleware.validateAddMealToMenu,
  AuthController.verifyAdminToken,
  menuControllers.postMenu
);

router.post(
  "/menu/caterer",
  trimRequest.body,
  MealMiddleware.validateAddMealToMenu,
  AuthController.verifyAdminToken,
  menuControllers.getSingleMenu
);


//Meals routes
router.get("/meals", AuthController.verifyAdminToken, mealControllers.getMeal);

router.post(
  "/meals",
  trimRequest.body,
  AuthController.verifyAdminToken,
  MealMiddleware.validateUpdateMeal,
  mealControllers.postMeal
);

router.put(
  "/meals/:id",
    trimRequest.body,
    MealMiddleware.validateUpdateMeal,
  AuthController.verifyAdminToken,
  mealControllers.updateMealName
);

router.delete("/meals/:id", AuthController.verifyAdminToken, mealControllers.deleteMeal);



// caterer routes
router.post(
  "auth/caterer/signup",
  trimRequest.body,
  AuthController.verifyAdminToken,
  CatererController.registerCaterer
);

// auth routes

router.post(
  "/auth/signup",
  trimRequest.body,
  UserMiddleware.validateRegister,
  UserController.registerUser
);

router.post(
  "/auth/login",
  trimRequest.body,
  UserMiddleware.validateLogin,
  UserController.loginUser
);


router.post(
    '/auth/caterer/signup',
    trimRequest.body,
    CatererMiddleware.validateRegister,
    CatererController.registerCaterer
);

router.post(
    '/auth/caterer/login',
    trimRequest.body,
    CatererMiddleware.validateLogin,
    CatererController.loginCaterer
);



export default router;



