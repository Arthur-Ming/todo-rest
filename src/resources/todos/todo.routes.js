import { Router } from 'express';
import validator from '../../utils/validation/validator.js';
import schemas from '../../utils/validation/schemas.js';
import { asyncHandler } from '../../utils/asyncHandler.js';
import { getTodos, getTodoById, createTodo, deleteTodo, updateTodo } from './todo.controllers.js';

const router = Router();

const { todoId, todo } = schemas;

router
  .get('/todos', getTodos)
  .get('/todos/:todoId', validator(todoId, 'params'), asyncHandler(getTodoById))
  .post('/todos', validator(todo, 'body'), asyncHandler(createTodo))
  .delete('/todos/:todoId', validator(todoId, 'params'), asyncHandler(deleteTodo))
  .put(
    '/todos/:todoId',
    validator(todoId, 'params'),
    validator(todo, 'body'),
    asyncHandler(updateTodo)
  );

export default router;
