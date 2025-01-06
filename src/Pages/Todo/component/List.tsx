import Markdown from "@components/Markdown";
import CheckMarkShaded from "/image/check-circle-shaded.svg";
import CheckMark from "/image/check-circle.svg";
import { deleteTodo, updateIsCompleteTodo } from "@services/todoService";
import { Todo } from "@type/todo";
import { Dispatch, SetStateAction } from "react";
const List = ({
  todo,
  onToggleUpdateTodo,
  setValues,
}: {
  todo: Todo;
  onToggleUpdateTodo: () => void;
  setValues: Dispatch<SetStateAction<Todo>>;
}) => {
  return (
    <div
      className={
        "w-full p-2 mb-1 text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      }
    >
      <div className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-t-lg  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:focus:ring-gray-500 dark:focus:text-white">
        <div
          className="cursor-pointer flex gap-2"
          onClick={() => updateIsCompleteTodo(todo)}
        >
          <img
            src={todo.isCompleted ? CheckMarkShaded : CheckMark}
            alt=""
            className="h-5 w-5"
          />
          <h3
            className={
              (todo.isCompleted ? "line-through" : "") + " font-semibold"
            }
          >
            {todo.title}
          </h3>
        </div>

        <div className="flex space-x-2">
          <div
            className="cursor-pointer"
            style={{ transform: "rotateY(180deg)" }}
            onClick={() => {
              setValues(todo);
              onToggleUpdateTodo();
            }}
          >
            <span>&#9998;</span>
          </div>
          <span className="cursor-pointer" onClick={() => deleteTodo(todo.id!)}>
            &times;
          </span>
        </div>
      </div>
      <Markdown
        type="md"
        markdown={todo.description}
        className="max-h-52 overflow-auto p-2"
      />
    </div>
  );
};

export default List;
