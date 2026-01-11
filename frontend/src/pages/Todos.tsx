import type { Todo } from "@/types/todo.type";
import axios from "axios";
import { Link } from "react-router";

export type TodosProps = {
  todos: Todo[];
};

const Todos = ({ todos }: TodosProps) => {
  return (
    <div className="flex flex-col gap-5 items-center my-10 mx-10">
      {todos?.map((todo) => {
        return (
          // Todo
          <div
            className="todo border border-[#333] rounded shadow-2xl/20  w-full mx-10 py-2 flex flex-col"
            key={todo._id}
          >
            {/* title */}
            <p className="text-2xl font-bold italic py-2 px-3">{todo.title}</p>

            <hr className="w-full h-0.5 bg-black mb-2" />
            {/* Todo Description */}
            <p className="ps-5">{todo.description}</p>

            {/* Status */}
            <p className="ps-5 py-1 text-green-800">
              <b className="pr-2">Status : </b>
              <span className="text-sm font-semibold">{todo.status}</span>
            </p>

            <div className="btns self-end">
              <button
                className="px-3 py-2 rounded text-white font-semibold bg-red-700 cursor-pointer"
                onClick={() => {
                  axios.delete(`/api/todos/${todo._id}`);
                }}
              >
                Delete
              </button>

              <Link
                to={`${todo._id}/edit`}
                className="px-3 py-2 text-md rounded bg-blue-600  mx-3 text-white font-semibold italic"
              >
                Update Todo
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
