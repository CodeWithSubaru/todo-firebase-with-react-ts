import { Timestamp } from "firebase/firestore";

export interface Todo {
  id?: string;
  title: string;
  description: string;
  isCompleted: boolean;
  userId: string | null;
  created_at?: Timestamp;
  updated_at?: Timestamp;
}

export type TodoId = Todo["id"];
