import { db } from "@config/firebase";
import { collection, doc, query } from "firebase/firestore";
import { Todo } from "@type/todo";

export const todoCollection = query(collection(db, "todos"));

export const todoCollectionById = (id: Todo["id"]) => doc(db, "todos", id);
