import { useState } from "react";
import type { Todo } from "@/types/todo.type";
import axios from "axios";

type TodoFormState = Omit<Todo, "_id">;
type TodoFormProps =
  | {
      mode: "update";
      todoToBeUpdated: Todo;
    }
  | { mode: "create" };
const Form = (props: TodoFormProps) => {
  const [todo, setTodo] = useState<TodoFormState>(() => {
    if (props.mode == "update") {
      return {
        title: props.todoToBeUpdated?.title,
        description: props.todoToBeUpdated?.description,
        status: props.todoToBeUpdated?.status,
      };
    }

    return {
      title: "",
      description: "",
      status: "Not Started",
    };
  });

  const onChangehandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setTodo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (props.mode === "create") {
      axios
        .post(`/api/todos/`, todo)
        .then((res) => {
          console.log(res.data);
          setTodo({
            title: "",
            description: "",
            status: "Not Started",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put(`/api/todos/${props.todoToBeUpdated._id}`, todo)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
      <div className="title flex flex-col gap-1">
        <label htmlFor="title" className="text-xl font-bold italic">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={todo.title}
          onChange={onChangehandler}
          placeholder="Running..."
          className="border border-[#333] shadow-xl/20 outline-none rounded py-3 px-2 mx-2 font-semibold italic capitalize"
        />
      </div>
      <div className="description flex flex-col gap-1">
        <label htmlFor="description" className="text-xl font-bold italic">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          cols={30}
          rows={4}
          onChange={onChangehandler}
          value={todo.description}
          placeholder="Task Description here..."
          className="border border-[#333] shadow-xl/20 outline-none rounded py-3 px-2 mx-2 font-semibold italic capitalize"
        ></textarea>
      </div>

      <div className="status">
        <label
          htmlFor="status"
          className="text-green-900 font-bold text-xl italic"
        >
          Status
        </label>

        <select
          name="status"
          id="status"
          className="border border-black rounded p-1 mx-2 my-1 font-semibold text-green-900"
          value={todo.status}
          onChange={onChangehandler}
        >
          <option value="Not Started">Not Started</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <input
        type="submit"
        value="Submit"
        className="px-3 py-2 font-semibold italic rounded bg-blue-600 cursor-pointer text-white flex-1"
      />
    </form>
  );
};

export default Form;
