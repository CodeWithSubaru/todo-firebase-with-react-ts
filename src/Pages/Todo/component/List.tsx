import CheckMarkShaded from "/image/check-circle-shaded.svg";
import CheckMark from "/image/check-circle.svg";
import { deleteTodo, updateTodo } from "@services/todoService";
import { Todo } from "@type/todo";

const List = ({ todo }: { todo: Todo }) => {
  return (
    <div className="mb-1 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white">
      <div className="relative flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-t-lg  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:focus:ring-gray-500 dark:focus:text-white">
        <div className="cursor-pointer" onClick={() => updateTodo(todo)}>
          <img
            src={todo.isCompleted ? CheckMarkShaded : CheckMark}
            alt=""
            className="h-5 w-5"
          />
        </div>

        <div className="text-center self-center">
          <h3
            className={
              (todo.isCompleted ? "line-through" : "") + " font-semibold"
            }
          >
            {todo.title}
          </h3>
          <p className="text-xs">{todo.description}</p>
        </div>
        <span className="cursor-pointer" onClick={() => deleteTodo(todo.id!)}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default List;
