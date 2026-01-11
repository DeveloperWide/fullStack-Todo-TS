import Form from "@/components/Form";
import type { Todo } from "@/types/todo.type";
import { useParams } from "react-router";

type UpdateTodoProps = {
  todos: Todo[];
};

const UpdateTodo = ({ todos }: UpdateTodoProps) => {
  const { id } = useParams();
  const todo = todos.find((todo) => todo._id === id);

  if (!todo) return <p>No Todo Found</p>;

  return (
    <div className="py-10 px-5 flex justify-center items-center flex-col">
      <h2 className="py-8 font-bold text-5xl text-teal-800">Update Todo</h2>
      <Form mode="update" todoToBeUpdated={todo} />
    </div>
  );
};

export default UpdateTodo;
