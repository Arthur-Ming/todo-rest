import ToDo from './todo.model.js';
import { NotFoundError } from '../../errors/appErrors.js';

export const getAll = async () => {
  return await ToDo.find();
};

export const get = async (todoId) => {
  const todo = await ToDo.findById(todoId);
  if (!todo) {
    throw new NotFoundError('todo', { id: todoId });
  }
  return todo;
};

export const create = async (todo) => {
  return await ToDo.create(todo);
};

export const remove = async (todoId) => {
  const todo = await ToDo.findByIdAndDelete(todoId);

  if (!todo) {
    throw new NotFoundError('todo', { id: todoId });
  }
  return todo;
};

export const update = async (todoId, body) => {
  const todo = await ToDo.findByIdAndUpdate(todoId, body, {
    new: true,
  });

  if (!todo) {
    throw new NotFoundError('todo', { id: todoId });
  }
  return todo;
};
