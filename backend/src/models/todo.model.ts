import { Schema, model } from "mongoose";
import { ITodo } from "../types/todo.type";

const todoSchema = new Schema<ITodo>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Not Started", "In-Progress", "Completed"],
    default: "Not Started",
  },
});

export const Todo = model<ITodo>("Todo", todoSchema);
