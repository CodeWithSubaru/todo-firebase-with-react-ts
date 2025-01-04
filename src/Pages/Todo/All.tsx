import { useEffect, useState } from "react";
import Add from "./Add";
import { getTodoList } from "../../services/todoService";
import List from "./component/List";
import { Todo } from "../../types/todo";

const All = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodoList(setTodos);
  }, []);

  return (
    <div>
      <Add />
      <div className="max-w-sm mx-auto h-64 overflow-auto">
        {todos.map((todo) => (
          <List key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default All;
