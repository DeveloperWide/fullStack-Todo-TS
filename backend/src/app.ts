import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import todoRoutes from "./routes/todo.route";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Error Handler Middleware
app.use(errorHandler);

export default app;
