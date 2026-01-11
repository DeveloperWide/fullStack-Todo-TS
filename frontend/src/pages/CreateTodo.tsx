import Form from "@/components/Form";

const CreateTodo = () => {
  return (
    <div className="py-10 px-5 flex justify-center items-center flex-col">
      <h2 className="py-8 font-bold text-5xl text-teal-800">Create New Task</h2>
      <Form mode="create" />
    </div>
  );
};

export default CreateTodo;
