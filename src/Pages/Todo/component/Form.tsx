import { ChangeEvent, FormEvent } from "react";
import AddPlus from "/image/add-plus.svg";
import { FormInput, FormTextArea } from "../../../components/FormInput";
import { Todo } from "../../../types/todo";
import Button from "../../../components/Button";

interface Props {
  todo: Todo;
  onTodoChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  addBtnLoading: boolean;
}

const Form = ({ todo, onTodoChange, onSubmit, addBtnLoading }: Props) => {
  return (
    <form
      onSubmit={onSubmit}
      className="block mx-auto mt-10 my-5 max-w-sm p-6 space-y-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <FormInput
        label="Title"
        name="title"
        value={todo.title}
        onChange={onTodoChange}
        placeholder="ex: Title 1"
      />

      <FormTextArea
        label="Description"
        name="description"
        value={todo.description}
        onChange={onTodoChange}
        placeholder="ex: Describe your task..."
      />

      <Button
        className="flex justify-center items-center leading-3 gap-x-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        disabled={addBtnLoading}
      >
        <img src={AddPlus} alt="plus icon" className="h-4 w-4" />
        <span className="self-end uppercase tracking-wide">
          {addBtnLoading ? "Saving..." : "Add"}
        </span>
      </Button>
    </form>
  );
};

export default Form;
