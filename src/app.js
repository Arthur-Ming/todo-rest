import express from "express";
import cors from "cors";
import todoRoutes from "./resources/todos/todo.routes.js";
import bodyParser from "body-parser";
import errorHandler from "./errors/errorHandler.js";

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(todoRoutes);

app.use(errorHandler);

export default app;
