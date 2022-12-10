import express from 'express';
import cors from 'cors';
import todoRoutes from './resources/todos/todo.routes.js';
import bodyParser from 'body-parser';
import errorHandler from './errors/errorHandler.js';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { NotFoundError } from './errors/appErrors.js';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(todoRoutes);

app.use((_req, _res, _next) => {
  throw new NotFoundError(null, null, getReasonPhrase(StatusCodes.NOT_FOUND));
});

app.use(errorHandler);

export default app;
