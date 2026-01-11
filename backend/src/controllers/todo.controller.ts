import { Request, Response } from "express";
import { Todo } from "../models/todo.model";
import { ITodo } from "../types/todo.type";
import { validateReqBody } from "../validators/todo.validator";
import ExpressError from "../utils/ExpressError";

export const getTodos = async (req: Request, res: Response) => {
  const todos = await Todo.find();

  return res.status(200).json({
    message: "All Todos",
    todos,
  });
};
export const createTodo = async (
  req: Request<{}, {}, ITodo>,
  res: Response
) => {
  const { title, description, status } = req.body;

  validateReqBody({ title, description, status });

  const todo = await Todo.create({
    title,
    description,
    status,
  });

  return res.status(201).json({
    message: "Todo Created Successfully",
    todo,
  });
};

export const updateTodo = async (
  req: Request<{ id: string }, {}, ITodo>,
  res: Response
) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  validateReqBody({ title, description, status });

  const todo = await Todo.findByIdAndUpdate(
    id,
    { title, description, status },
    { new: true }
  );

  if (!todo) {
    throw new ExpressError("Todo NOT Found", 404);
  }

  return res.status(200).json({
    message: "Todo Updated Successfully",
    todo,
  });
};
export const deleteTodo = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndDelete(id);

  if (!todo) {
    throw new ExpressError("No Todo Found", 404);
  }

  return res.status(200).json({
    message: "Todo Successfully Deleted",
  });
};
