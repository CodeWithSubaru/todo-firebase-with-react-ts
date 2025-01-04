export interface Todo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  userId: string | null;
}
