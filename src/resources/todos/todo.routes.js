import { Router } from 'express';
import validator from '../../utils/validation/validator.js';
import schemas from '../../utils/validation/schemas.js';
import { getTodos, getTodoById, createTodo, deleteTodo, updateTodo } from './todo.controllers.js';

const router = Router();

const { todoId, todo } = schemas;

router
  .get('/todos', getTodos)
  .get('/todos/:todoId', validator(todoId, 'params'), getTodoById)
  .post('/todos', validator(todo, 'body'), createTodo)
  .delete('/todos/:todoId', validator(todoId, 'params'), deleteTodo)
  .put('/todos/:todoId', validator(todoId, 'params'), validator(todo, 'body'), updateTodo);

export default router;
