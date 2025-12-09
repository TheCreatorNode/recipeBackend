import express from "express";
const app = express();

import morgan from "morgan";
import cors from "cors";

import recipeRouter from "./routes/recipeRouter.js";
import config from "./config/config.js";

if (config.env === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cors());
app.use("/api/v1/recipe", recipeRouter);

export default app;
