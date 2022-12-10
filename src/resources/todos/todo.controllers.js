import { get, getAll, create, remove, update } from './todo.service.js';
import { StatusCodes } from 'http-status-codes';

export const getTodos = async (req, res) => {
  const todos = await getAll();
  res.send(todos);
};

export const getTodoById = async (req, res, next) => {
  const { todoId } = req.params;

  try {
    const todo = await get(todoId);
    res.send(todo);
  } catch (err) {
    return next(err);
  }
};

export const createTodo = async (req, res, next) => {
  const body = req.body;

  try {
    const todo = await create(body);
    res.status(StatusCodes.OK).send(todo);
  } catch (err) {
    return next(err);
  }
};

export const deleteTodo = async (req, res, next) => {
  const { todoId } = req.params;

  try {
    await remove(todoId);
    res.sendStatus(StatusCodes.OK);
  } catch (err) {
    return next(err);
  }
};

export const updateTodo = async (req, res, next) => {
  const { todoId } = req.params;
  const body = req.body;

  try {
    const todo = await update(todoId, body);
    res.status(StatusCodes.OK).send(todo);
  } catch (err) {
    return next(err);
  }
};
