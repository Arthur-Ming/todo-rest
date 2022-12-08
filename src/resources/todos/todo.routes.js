import { Router } from "express";
import { idValidator, validator } from "../../utils/validation/validator.js";
import schemas from "../../utils/validation/schemas.js";

import {
  getTodos,
  getTodoById,
  addTodo,
  deleteTodo,
  editTodo,
} from "./todo.controllers.js";

const router = Router();

const { todoId } = schemas;

router
  .get("/todos", getTodos)
  .get(
    "/todos/:todoId",
    /* idValidator */ validator(todoId, "params"),
    getTodoById
  )
  .post("/todos", addTodo)
  .delete("/todos/:todoId", deleteTodo)
  .put("/todos/:todoId", editTodo);

export default router;
