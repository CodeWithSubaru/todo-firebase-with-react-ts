import { useEffect, useState, useMemo } from "react";
import Add from "./Add";
import { getTodoList } from "@services/todoService";
import List from "./component/List";
import { Todo } from "@type/todo";
import useForm from "@hooks/useForm";
import { FormInput, FormSelect } from "@components/FormInput";
import Markdown from "@components/Markdown";
import Button from "@components/Button";

const All = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isUpdateTodo, setUpdateTodo] = useState(false);
  const [searchTitleTodo, setSearchTitleTodo] = useState<string>("");
  const [filteredBy, setFilteredBy] = useState("");
  const [viewTodo, setViewTodo] = useState<Todo | null>(null);

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

  // Derived state for filtered todos
  const filteredTodos = useMemo(() => {
    let filter: Todo[] = [...todos];

    // Apply search filtering
    if (searchTitleTodo) {
      filter = filter.filter((todo) =>
        todo.title.toLowerCase().includes(searchTitleTodo.toLowerCase())
      );
    }

    // Apply sorting/filtering based on `filteredBy`
    switch (filteredBy) {
      case "title_asc":
        filter.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title_desc":
        filter.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "favorite":
        filter = filter.filter((todo) => todo.isCompleted);
        break;
      case "date_asc":
        filter.sort((a, b) => {
          const dateA = a.updated_at ? a.updated_at.toDate().getTime() : 0;
          const dateB = b.updated_at ? b.updated_at.toDate().getTime() : 0;

          return dateA - dateB;
        });
        break;
      case "date_desc":
        filter.sort((a, b) => {
          const dateA = a.updated_at ? a.updated_at.toDate().getTime() : 0;
          const dateB = b.updated_at ? b.updated_at.toDate().getTime() : 0;

          return dateB - dateA;
        });
        break;
      default:
        break;
    }

    return filter;
  }, [todos, searchTitleTodo, filteredBy]);

  function handleSetViewTodo(todo: Todo | null) {
    setViewTodo(todo);
  }

  if (viewTodo) {
    return (
      <div className="w-full">
        <Button
          variant="secondary"
          className="me-0 w-1/4"
          onClick={() => handleSetViewTodo(null)}
        >
          Back
        </Button>
        <Markdown type="md" markdown={viewTodo.description} className="p-2" />
      </div>
    );
  }

  return (
    <div className="flex flex-col px-2 lg:px-5 gap-y-5">
      <div className="relative flex flex-col gap-y-5 sm:flex-row items-start gap-x-5 w-full min-h-[580px]">
        {/* Add Snippet */}
        <Add
          isUpdateTodo={isUpdateTodo}
          onToggleUpdateTodo={toggleUpdateTodo}
          className="static sm:sticky top-0 left-0 w-full sm:w-1/2 h-full overflow-hidden"
          todo={todo}
          handleTodoChange={handleTodoChange}
          setValues={setValues}
          reset={reset}
        />

        {/* List of Snippets */}
        <div className="relative w-full sm:w-1/2 h-full flex-1 flex flex-col gap-y-5 justify-start items-center">
          <div className="w-full flex justify-stretch sticky top-0 left-0 bg-gray-900 z-10">
            <FormInput
              containerClassName="w-2/4 mr-auto"
              placeholder="Search for title..."
              value={searchTitleTodo}
              onChange={(e) => setSearchTitleTodo(e.target.value)}
            />

            <FormSelect
              containerClassName="w-1/4"
              className="h-full"
              value={filteredBy}
              onChange={(e) => setFilteredBy(e.target.value)}
            >
              <FormSelect.Option>Filter By</FormSelect.Option>
              <FormSelect.Option value="title_asc">
                Title Ascending
              </FormSelect.Option>
              <FormSelect.Option value="title_desc">
                Title Descending
              </FormSelect.Option>
              <FormSelect.Option value="favorite">Favorite</FormSelect.Option>
              <FormSelect.Option value="date_asc">
                Date Ascending
              </FormSelect.Option>
              <FormSelect.Option value="date_desc">
                Date Descending
              </FormSelect.Option>
            </FormSelect>
          </div>

          {filteredTodos.length === 0 ? (
            <p className="text-white my-auto">No Results Found...</p>
          ) : (
            filteredTodos.map((todo) => (
              <List
                onSetViewTodo={handleSetViewTodo}
                key={todo.id}
                onToggleUpdateTodo={toggleUpdateTodo}
                todo={todo}
                setValues={setValues}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default All;
