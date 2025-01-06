import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import AddPlus from "/image/add-plus.svg";
import { FormInput } from "@components/FormInput";
import { type Todo } from "@type/todo";
import Button from "@components/Button";
import Editor from "@components/Editor";
import clsx from "clsx";

interface Props {
  className?: string;
  todo: Todo;
  setValues: Dispatch<SetStateAction<Todo>>;
  onTodoChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  addBtnLoading: boolean;
}

const Form = ({
  todo,
  setValues,
  onTodoChange,
  onSubmit,
  className,
  addBtnLoading,
}: Props) => {
  return (
    <form
      onSubmit={onSubmit}
      className={clsx(
        "relative p-6 space-y-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
        className
      )}
    >
      <FormInput
        label="Title"
        name="title"
        value={todo.title}
        onChange={onTodoChange}
        placeholder="ex: Title 1"
      />

      <Editor
        markdown={todo.description}
        onChange={(value?: string) =>
          setValues({ ...todo, description: value! })
        }
      />

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800">
        <Button disabled={addBtnLoading}>
          <img src={AddPlus} alt="plus icon" className="h-4 w-4" />
          <span className="self-end uppercase tracking-wide">
            {addBtnLoading ? "Saving..." : "Save"}
          </span>
        </Button>
      </div>
    </form>
  );
};

export default Form;
