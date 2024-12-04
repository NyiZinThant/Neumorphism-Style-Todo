import Todo from '../models/todo';

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
