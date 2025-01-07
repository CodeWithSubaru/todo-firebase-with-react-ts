import {
  addDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { todoCollectionById, todoCollectionRef } from "@models/todos";
import { Todo, TodoId } from "@type/todo";
import { Dispatch, SetStateAction } from "react";
import { getAuth } from "firebase/auth/cordova";

/**
 * Get All Todo
 */
export const getTodoList = (setTodos: Dispatch<SetStateAction<Todo[]>>) => {
  checkForErrors(() => {
    const todosQuery = query(
      todoCollectionRef,
      where("userId", "==", getAuth().currentUser?.uid),
      orderBy("updated_at", "desc")
    );

    const unsubscribe = onSnapshot(todosQuery, (querySnapshot) => {
      const newTodos = querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Todo)
      );
      setTodos(newTodos);
    });

    return () => unsubscribe();
  });
};

/**
 * Create Todo
 */

export const createTodo = async (todo: Todo) => {
  checkForErrors(async () => {
    await addDoc(todoCollectionRef, {
      ...todo,
      userId: getAuth().currentUser?.uid,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });
  });
};
/**
 * Update Todo
 */
export const updateTodo = async (todo: Todo) => {
  checkForErrors(async () => {
    const todoDoc = todoCollectionById(todo.id!);
    await updateDoc(todoDoc, { ...todo });
  });
};

export const updateIsCompleteTodo = async (todo: Todo) => {
  checkForErrors(async () => {
    const todoDoc = todoCollectionById(todo.id!);
    await updateDoc(todoDoc, { isCompleted: !todo.isCompleted });
  });
};

/**
 * Delete Todo
 */
export const deleteTodo = async (id: TodoId) => {
  checkForErrors(async () => await deleteDoc(todoCollectionById(id)));
};

function checkForErrors(fn: () => void) {
  try {
    fn();
  } catch (err) {
    if (err instanceof Error) console.log(err.message);

    console.error(err);
  }
}
