import Todo from '../models/todo';

export const getCompletedTodo = function (todos: Todo[]): Todo[] {
  if (!todos) {
    console.error("todos can't be null");
    return [];
  }
  return todos.filter((todo) => todo.completed);
};
export const getUncompletedTodo = function (todos: Todo[]): Todo[] {
  if (!todos) {
    console.error("todos can't be null");
    return [];
  }
  return todos.filter((todo) => !todo.completed);
};
export const toggleTodoStatus = function (todos: Todo[], id: string): Todo[] {
  if (!todos || !id) {
    console.error("todos can't be null");
    return [];
  }
  return todos.map((todo) => {
    if (todo.id === id) {
      todo = { ...todo, completed: !todo.completed };
    }
    return todo;
  });
};
