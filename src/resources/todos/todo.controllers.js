import { get, getAll, create, remove, update } from './todo.service.js';
import { StatusCodes } from 'http-status-codes';

export const getTodos = async (req, res) => {
  const todos = await getAll();
  res.send(todos);
};

export const getTodoById = async (req, res) => {
  const { todoId } = req.params;

  const todo = await get(todoId);
  res.send(todo);
};

export const createTodo = async (req, res) => {
  const body = req.body;

  const todo = await create(body);
  res.status(StatusCodes.OK).send(todo);
};

export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  const todo = await remove(todoId);
  res.send(todo);
};

export const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const body = req.body;

  const todo = await update(todoId, body);
  res.status(StatusCodes.OK).send(todo);
};
