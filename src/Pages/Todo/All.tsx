import { useEffect, useState } from "react";
import Add from "./Add";
import { getTodoList } from "@services/todoService";
import List from "./component/List";
import { Todo } from "@type/todo";
import useForm from "@hooks/useForm";

const All = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isUpdateTodo, setUpdateTodo] = useState(false);
  const {
    values: todo,
    setValues,
    handleChange: handleTodoChange,
    reset,
  } = useForm<Todo>({
    title: "",
    description: "",
    isCompleted: false,
    userId: null,
  });

  function toggleUpdateTodo() {
    setUpdateTodo(() => !isUpdateTodo);
  }

  useEffect(() => {
    getTodoList(setTodos);
  }, []);

  return (
    <div className="relative flex flex-wrap items-start gap-x-5 px-5 w-full h-[680px] overflow-y-auto">
      {/* Add Snippet */}
      <Add
        isUpdateTodo={isUpdateTodo}
        onToggleUpdateTodo={toggleUpdateTodo}
        className="sticky top-0 left-0 w-1/2 h-full overflow-hidden"
        todo={todo}
        handleTodoChange={handleTodoChange}
        setValues={setValues}
        reset={reset}
      />

      {/* List of Snippets */}
      <div className="relative h-full flex-1 flex flex-col gap-y-5 justify-start items-center overflow-y-auto">
        {todos.length === 0 ? (
          <p className="text-white my-auto">Loading...</p>
        ) : (
          todos.map((todo) => (
            <List
              key={todo.id}
              onToggleUpdateTodo={toggleUpdateTodo}
              todo={todo}
              setValues={setValues}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default All;
