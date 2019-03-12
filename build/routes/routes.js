"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _trimRequest = _interopRequireDefault(require("trim-request"));

var _user = _interopRequireDefault(require("../middleware/user"));

var _caterer = _interopRequireDefault(require("../middleware/caterer"));

var _meal = _interopRequireDefault(require("../middleware/meal"));

var _order = _interopRequireDefault(require("../middleware/order"));

var _orderControllers = _interopRequireDefault(require("../controllers/orderControllers"));

var _menuControllers = _interopRequireDefault(require("../controllers/menuControllers"));

var _mealControllers = _interopRequireDefault(require("../controllers/mealControllers"));

var _catererControllers = _interopRequireDefault(require("../controllers/catererControllers"));

var _authControllers = _interopRequireDefault(require("../controllers/authControllers"));

var _userControllers = _interopRequireDefault(require("../controllers/userControllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router(); //Orders routes


router.get("/orders", _authControllers.default.verifyAdminToken, _orderControllers.default.getOrder);
router.post("/orders", _trimRequest.default.body, _authControllers.default.verifyAdminToken, _order.default.validateModifyOrder, _orderControllers.default.postOrder);
router.put("/orders/:id", _trimRequest.default.body, _authControllers.default.verifyAdminToken, _orderControllers.default.updateOrderName);
router.post("/orders/checkout", _trimRequest.default.body, _authControllers.default.verifyAdminToken, _orderControllers.default.checkoutOrders);
router.get("/orders/user", _authControllers.default.verifyAdminToken, _orderControllers.default.getOrderItems); // Menu routes

router.get("/menu", _authControllers.default.verifyAdminToken, _menuControllers.default.getMenu);
router.post("/menu", _trimRequest.default.body, _meal.default.validateAddMealToMenu, _authControllers.default.verifyAdminToken, _menuControllers.default.postMenu);
router.post("/menu/caterer", _trimRequest.default.body, _meal.default.validateAddMealToMenu, _authControllers.default.verifyAdminToken, _menuControllers.default.getSingleMenu); //Meals routes

router.get("/meals", _authControllers.default.verifyAdminToken, _mealControllers.default.getMeal);
router.post("/meals", _trimRequest.default.body, _authControllers.default.verifyAdminToken, _meal.default.validateUpdateMeal, _mealControllers.default.postMeal);
router.put("/meals/:id", _trimRequest.default.body, _meal.default.validateUpdateMeal, _authControllers.default.verifyAdminToken, _mealControllers.default.updateMealName);
router.delete("/meals/:id", _authControllers.default.verifyAdminToken, _mealControllers.default.deleteMeal); // caterer routes

router.post("auth/caterer/signup", _trimRequest.default.body, _authControllers.default.verifyAdminToken, _catererControllers.default.registerCaterer); // auth routes

router.post("/auth/signup", _trimRequest.default.body, _user.default.validateRegister, _userControllers.default.registerUser);
router.post("/auth/login", _trimRequest.default.body, _user.default.validateLogin, _userControllers.default.loginUser);
router.post('/auth/caterer/signup', _trimRequest.default.body, _caterer.default.validateRegister, _catererControllers.default.registerCaterer);
router.post('/auth/caterer/login', _trimRequest.default.body, _caterer.default.validateLogin, _catererControllers.default.loginCaterer);
var _default = router;
exports.default = _default;
//# sourceMappingURL=routes.js.map