export const getStoredTodos = function () {
  const storedTodos = localStorage.getItem('todos');
  try {
    return JSON.parse(storedTodos) || [];
  } catch (e) {
    console.error('Failed to parse todos from localstorage: ', e);
    return [];
  }
};
