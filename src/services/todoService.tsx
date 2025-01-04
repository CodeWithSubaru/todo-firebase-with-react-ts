import { deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { todoCollection, todoCollectionById } from "../models/todos";
import { Todo } from "../types/todo";
import { Dispatch, SetStateAction } from "react";

export const getTodoList = async (
  callback: Dispatch<SetStateAction<Todo[]>>
) => {
  try {
    const unsubscribe = onSnapshot(todoCollection, (querySnapshot) => {
      const todosArr: Todo[] = [];
      querySnapshot.forEach((doc) => {
        const todo = doc.data() as Todo;
        todosArr.push(todo);
      });

      callback(todosArr);
    });
    return () => unsubscribe();
  } catch (err) {
    if (err instanceof Error) console.log(err.message);

    console.error(err);
  }
};

export const updateTodo = async (todo: Todo) => {
  try {
    const todoDoc = todoCollectionById(todo.id!);
    await updateDoc(todoDoc, { isCompleted: !todo.isCompleted });
  } catch (err) {
    console.error(err);
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const todoDoc = todoCollectionById(id);

    await deleteDoc(todoDoc);
  } catch (err) {
    console.error(err);
  }
};
