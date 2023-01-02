import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import todoRouter from './resources/todos/todo.routes.js';
import errorHandler from './errors/errorHandler.js';

const app = new Koa();

app.use(errorHandler);

app.use(bodyParser());

app.use(todoRouter.routes());

export default app;
