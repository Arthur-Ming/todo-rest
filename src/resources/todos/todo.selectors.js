import ToDo from "./todo.model.js";
import { NotFoundError } from "../../errors/appErrors.js";

export const todoByIdSelector = async (todoId) => {
  const todo = await ToDo.findById(todoId);
  if (!todo) {
    throw new NotFoundError("todo", { todoId });
  }
  return todo;
};
