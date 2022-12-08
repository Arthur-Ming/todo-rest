import ToDo from "./todo.model.js";
import { todoByIdSelector } from "./todo.selectors.js";

export const getTodos = async (req, res) => {
  const todos = await ToDo.find();
  res.send(todos);
};

export const getTodoById = async (req, res, next) => {
  const { todoId } = req.params;
  /*  try { */
  const todo = await todoByIdSelector(todoId);
  res.send(todo);
  /*  } catch (err) {
    next(err);
  } */

  /*  ToDo.findById(todoId)
    .then((todo) => res.send(todo))
    .catch((error) => handleError(res, error)); */
};

export const addTodo = (req, res) => {
  const body = req.body;

  const todo = new ToDo(body);
  todo
    .save()
    .then((result) => res.status(201).send(result))
    .catch((error) => {
      console.log(error);
    });
};

export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  await ToDo.findByIdAndDelete(todoId);
  res.sendStatus(200);
};

export const editTodo = async (req, res) => {
  const { todoId } = req.params;

  const body = req.body;

  ToDo.findByIdAndUpdate(
    todoId,
    body,
    { returnDocument: "after" },
    (err, todo) => {
      if (err) {
        console.log(err);
        res.status(404).send(err);
      } else {
        res.status(200).send(todo);
      }
    }
  );
};
