import Todos from "./pages/Todos";
import Navbar from "./layouts/Navbar";
import { Route, Routes } from "react-router";
import CreateTodo from "./pages/CreateTodo";
import UpdateTodo from "./pages/UpdateTodo";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Todo } from "./types/todo.type";

const App = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  useEffect(() => {
    axios
      .get("/api/todos")
      .then((res) => {
        setTodos(res.data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!todos) return <p>No Todos</p>;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todos todos={todos} />} />
        <Route path="/create" element={<CreateTodo />} />
        <Route path="/:id/edit" element={<UpdateTodo todos={todos} />} />
      </Routes>
    </>
  );
};

export default App;
