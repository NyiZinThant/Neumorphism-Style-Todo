export const getCompletedTodo = function (todos) {
  if (!todos) {
    console.error("todos can't be null");
    return [];
  }
  return todos.filter((todo) => todo.completed);
};
export const getUncompletedTodo = function (todos) {
  if (!todos) {
    console.error("todos can't be null");
    return [];
  }
  return todos.filter((todo) => !todo.completed);
};
export const toggleTodoStatus = function (todos, id) {
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
