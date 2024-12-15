import Todo from '../models/todo';
import { toggleTodoStatus } from '../utils/todoUtils';
import axios from 'axios';

export const getTodo = async function (): Promise<Todo[]> {
  try {
    const url = import.meta.env.VITE_API_URL;
    const response = await axios.get<Todo[]>(`${url}/api/v1/todos`, {
      responseType: 'json',
      transformResponse: (body) => body,
    });
    console.log(`${url}/api/v1/todos`, response);

    if (response.headers['Content-Type'] !== 'application/json') {
      throw new Error('Wrong Response Format');
    }
    const todos: Todo[] = response.data;
    return todos;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.code, error.message);
    } else {
      console.error(error);
    }
  } finally {
    return [];
  }
};
// export const addTodo = async function (label: string): Promise<Todo[]> {};
// export const toggleCompleted = async (id: string): Promise<Todo[]> => {
//   await new Promise((resolve) => setTimeout(resolve, 0));
//   const newTodos: Todo[] = toggleTodoStatus(todos, id);
//   todos = newTodos;
//   storeTodos(newTodos);
//   return todos;
// };
// let todos: Todo[] = getStoredTodos();
