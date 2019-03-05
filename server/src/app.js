import "@babel/polyfill";
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import Routes from "./routes/routes";
import sequelize from "./config/db";
import fileUpload from "express-fileupload";
import cors from "cors";
import User from "./models/user";
import Caterer from "./models/caterer";
import Meal from "./models/meals";
import Menu from "./models/menu";
import Order from "./models/orders";
import OrderItem from "./models/orderItem";
import { config } from "dotenv";

config();
const app = express();

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.get("/", (req, res) => {
  res.send("hello World");
});

app.use(cors());
app.use(fileUpload());
app.use("/api/v1", Routes);


User.hasMany(Order, { constraints: true, onDelete: "CASCADE" });
User.hasMany(OrderItem, { constraints: true, onDelete: "CASCADE" });
Order.belongsTo(Caterer, { constraints: true, onDelete: "CASCADE" });
Meal.belongsTo(Caterer, { constraints: true, onDelete: "CASCADE" });
Menu.belongsTo(Caterer, { constraints: true, onDelete: "CASCADE" });
OrderItem.belongsTo(Meal, { constraints: true, onDelete: "CASCADE" });


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App started and listening on port: ${port}`);
});

sequelize
  .sync()
  .then(() => {
    console.log("DB Connection has been established");
    app.listen(process.env.PORT, () => {
      app.emit("dbConnected");
    });
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

export default app;
