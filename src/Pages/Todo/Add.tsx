import { addDoc, collection } from "firebase/firestore";
import { FormEvent, useState } from "react";
import Form from "./component/Form";
import { db } from "@config/firebase";
import { getAuth } from "firebase/auth";
import { Todo } from "@type/todo";
import useForm from "@hooks/useForm";

const Add = () => {
  const {
    values: todo,
    handleChange: handleTodoChange,
    reset,
  } = useForm<Todo>({
    id: "",
    title: "",
    description: "",
    isCompleted: false,
    userId: null,
  });

  const [addBtnLoading, setAddBtnLoading] = useState(false);

  const handleAddTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(todo).every((value) => !value)) return;

    setAddBtnLoading((prevAddBtnLoading) => !prevAddBtnLoading);

    try {
      await addDoc(collection(db, "todos"), {
        ...todo,
        userId: getAuth().currentUser?.uid,
      });
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
      console.log(e);
    } finally {
      setAddBtnLoading((prevAddBtnLoading) => !prevAddBtnLoading);
      reset();
    }
  };

  return (
    <Form
      todo={todo}
      onTodoChange={handleTodoChange}
      onSubmit={handleAddTodo}
      addBtnLoading={addBtnLoading}
    />
  );
};

export default Add;
