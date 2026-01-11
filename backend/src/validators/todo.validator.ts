import { ITodo } from "../types/todo.type";
import ExpressError from "../utils/ExpressError";

export const validateReqBody = (todo: ITodo) => {
  if (!todo.title || !todo.description || !todo.status) {
    throw new ExpressError("All fields are Required", 400);
  }
};
