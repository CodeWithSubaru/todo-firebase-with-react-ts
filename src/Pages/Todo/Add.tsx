import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import Form from "./component/Form";
import { Todo } from "@type/todo";
import { createTodo, updateTodo } from "@services/todoService";
import { MDXEditorMethods } from "@mdxeditor/editor";

const Add = ({
  todo,
  isUpdateTodo,
  onToggleUpdateTodo,
  handleTodoChange,
  reset,
  setValues,
  className,
}: {
  todo: Todo;
  isUpdateTodo: boolean;
  onToggleUpdateTodo: () => void;
  handleTodoChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  reset: () => void;
  setValues: Dispatch<SetStateAction<Todo>>;
  className?: string;
}) => {
  const editorRef = useRef<MDXEditorMethods>(null);

  const [addBtnLoading, setAddBtnLoading] = useState(false);

  const handleAddTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.title || !todo.description) return;
    setAddBtnLoading((prevAddBtnLoading) => !prevAddBtnLoading);

    try {
      if (isUpdateTodo) {
        updateTodo(todo);
        return;
      }
      createTodo(todo);
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
      console.log(e);

      editorRef.current?.setMarkdown("");
      reset();
    } finally {
      setAddBtnLoading((prevAddBtnLoading) => !prevAddBtnLoading);
      editorRef.current?.setMarkdown("");
      onToggleUpdateTodo();
      reset();
    }
  };

  return (
    <Form
      className={className}
      todo={todo}
      setValues={setValues}
      onTodoChange={handleTodoChange}
      onSubmit={handleAddTodo}
      addBtnLoading={addBtnLoading}
    />
  );
};

export default Add;
