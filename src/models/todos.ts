import { db } from "@config/firebase";
import { TodoId } from "@type/todo";
import { collection, doc } from "firebase/firestore";

export const todoCollectionRef = collection(db, "todos");

export const todoCollectionById = (id: TodoId) => doc(db, "todos", id!);
