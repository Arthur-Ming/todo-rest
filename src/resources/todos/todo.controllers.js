import { get, getAll, create, remove, update } from './todo.service.js';

export const getTodos = async (ctx) => {
  ctx.body = await getAll();
};

export const getTodoById = async (ctx) => {
  const { todoId } = ctx.params;
  ctx.body = await get(todoId);
};

export const createTodo = async (ctx) => {
  const body = ctx.request.body;
  ctx.body = await create(body);
};

export const deleteTodo = async (ctx) => {
  const { todoId } = ctx.params;
  ctx.body = await remove(todoId);
};

export const updateTodo = async (ctx) => {
  const { todoId } = ctx.params;
  const body = ctx.request.body;

  ctx.body = await update(todoId, body);
};
