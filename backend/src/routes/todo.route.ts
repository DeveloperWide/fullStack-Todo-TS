import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todo.controller";

const router = Router();
// Get all Todos
router.get("/", getTodos);
// Create Todo
router.post("/", createTodo);
// Update Todo
router.put("/:id", updateTodo);
//Delete Todo
router.delete("/:id", deleteTodo);

export default router;
