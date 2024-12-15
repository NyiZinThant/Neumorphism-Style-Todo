import Todo from '../models/todo';
import { v4 as uuidv4 } from 'uuid';
import { toggleTodoStatus } from '../utils/todoUtils';
export const getStoredTodos = function (): Todo[] {
  const storedTodos = localStorage.getItem('todos') || '';
  try {
    return JSON.parse(storedTodos) || [];
  } catch (e) {
    console.error('Failed to parse todos from localstorage: ', e);
    return [];
  }
};

export const storeTodos = function (newTodos: Todo[]): void {
  if (!newTodos) {
    console.error('New todo is empty');
    return;
  }
  localStorage.setItem('todos', JSON.stringify(newTodos));
};
export const addTodo = async function (label: string): Promise<Todo[]> {
  await new Promise((resolve) => setTimeout(resolve, 0));
  const newId = uuidv4();
  const newTodos: Todo[] = [...todos, { id: newId, label, completed: false }];
  todos = newTodos;
  storeTodos(newTodos);
  return todos;
};
export const toggleCompleted = async (id: string): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 0));
  const newTodos: Todo[] = toggleTodoStatus(todos, id);
  todos = newTodos;
  storeTodos(newTodos);
  return todos;
};
let todos: Todo[] = getStoredTodos();
