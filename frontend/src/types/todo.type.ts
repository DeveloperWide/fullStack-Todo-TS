export type TodoStatus = "Not Started" | "In-Pending" | "Completed";
export interface Todo {
  _id: string;
  title: string;
  description: string;
  status: TodoStatus;
}
