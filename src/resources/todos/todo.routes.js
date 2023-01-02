import Router from 'koa-router';
import validator from '../../utils/validation/validator.js';
import schemas from '../../utils/validation/schemas.js';
import { getTodos, getTodoById, createTodo, deleteTodo, updateTodo } from './todo.controllers.js';

const todoRouter = Router({ prefix: '/todos' });

const { todoId, todo } = schemas;

todoRouter
  .get('/', getTodos)
  .get('/:todoId', validator(todoId, 'params'), getTodoById)
  .post('/', validator(todo, 'body'), createTodo)
  .delete('/:todoId', validator(todoId, 'params'), deleteTodo)
  .put('/:todoId', validator(todoId, 'params'), validator(todo, 'body'), updateTodo);

export default todoRouter;
