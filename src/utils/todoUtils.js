export const getCompletedTodo = function (todos) {
  return todos.filter((todo) => todo.completed);
};
export const getUncompletedTodo = function (todos) {
  return todos.filter((todo) => !todo.completed);
};
export const toggleTodoStatus = function (todos, id) {
  return todos.map((todo) => {
    if (todo.id === id) todo.completed = !todo.completed;
    return todo;
  });
};
