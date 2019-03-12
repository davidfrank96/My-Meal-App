"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes/routes"));

var _db = _interopRequireDefault(require("./db/db"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = require("dotenv");

var _os = require("os");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import swaggerDocument from "./swagger.json";
(0, _dotenv.config)();
var app = (0, _express.default)();
app.use((0, _morgan.default)("dev"));
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.get("/", function (req, res) {
  res.send("Welcome to My Meal App...");
});
app.use((0, _cors.default)());
app.use((0, _expressFileupload.default)());
app.use("/api/v1", _routes.default); //app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log("App started and listening on port: ".concat(port));
});

_db.default.sync().then(function () {
  console.log("DB Connection has been established");
  app.listen(process.env.PORT, function () {
    app.emit("dbConnected");
  });
}).catch(function (err) {
  console.error("Unable to connect to the database:", err);
});

var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map