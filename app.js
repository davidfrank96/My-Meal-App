import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
//import partyRoutes from "./routes/partyRoutes";
//import officeRoutes from "./routes/officeRoutes";

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

//app.use("/api/v1/", partyRoutes);
//app.use("/api/v1/", officeRoutes);

app.listen(port, () => {
  console.log(`App started and listening on port: ${port}`);
});

export default app;
