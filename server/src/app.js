import "@babel/polyfill";
import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import Routes from "./routes/routes";
import sequelize from "./db/db";
import fileUpload from "express-fileupload";
import cors from "cors";
import { config } from "dotenv";
import router from "./routes/routes";
import { userInfo } from "os";
import swaggerDocument from "./swagger.json";

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
  res.send("Welcome to My Meal App...");
});

app.use(cors());
app.use(fileUpload());
app.use("/api/v1", Routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));



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
