import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import menuRoutes from "./routes/menuRoutes";
import mealRoutes from "./routes/mealRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello World");
});

app.use("/api/v1/", menuRoutes);
app.use("/api/v1/", mealRoutes);
app.use("/api/v1/", orderRoutes);

app.listen(port, () => {
  console.log(`App started and listening on port: ${port}`);
});

export default app;
