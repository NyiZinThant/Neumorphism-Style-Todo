import Todo from '../models/todo';
import axios from 'axios';
const url = import.meta.env.VITE_API_URL;
// Fetch all todos from API
export const getTodo = async function (): Promise<Todo[]> {
  try {
    const response = await axios.get<Todo[]>(`${url}/api/v1/todos`);
    const todos: Todo[] = response.data;
    return todos;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.code, error.message);
    } else {
      console.error(error);
    }
    return [];
  }
};
// Adds a new todo to the API
export const addTodo = async function (label: string): Promise<Todo[]> {
  try {
    await axios.post(`${url}/api/v1/todos`, { label });
    return await getTodo();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.code, error.message);
    } else {
      console.error(error);
    }
    return [];
  }
};
// Updates the completion status of a specific todo item
export const toggleCompleted = async (
  id: string,
  completed: boolean
): Promise<Todo[]> => {
  try {
    await axios.patch(`${url}/api/v1/todos`, {
      id,
      completed: !completed,
    });
    return await getTodo();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.code, error.message);
    } else {
      console.error(error);
    }
    return [];
  }
};
