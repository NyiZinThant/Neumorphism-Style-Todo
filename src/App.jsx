import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoLabel from './components/TodoLabel';
import {
  getCompletedTodo,
  getUncompletedTodo,
  toggleTodoStatus,
} from './utils/todoUtils';
import { getStoredTodos } from './lib/localStorage';
function App() {
  const [todos, setTodos] = useState(getStoredTodos);
  let lastId = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
  function addTodo(todo) {
    const newTodo = [...todos, { id: lastId, label: todo, completed: false }];
    setTodos(newTodo);
    localStorage.setItem('todos', JSON.stringify(newTodo));
    lastId++;
  }
  const toggleCompleted = (id) => {
    const newTodo = toggleTodoStatus(todos, id);
    setTodos(newTodo);
    localStorage.setItem('todos', JSON.stringify(newTodo));
  };
  const completedTodos = getCompletedTodo(todos);
  const uncompletedTodos = getUncompletedTodo(todos);
  return (
    <div className="bg-primary w-screen min-h-screen p-7 px-36 flex flex-col gap-12">
      <TodoForm addTodo={addTodo} />
      {uncompletedTodos.length !== 0 && (
        <TodoList
          todos={uncompletedTodos}
          toggleCompleted={toggleCompleted}
          isShadowInset={false}
        />
      )}
      {completedTodos.length !== 0 && (
        <div className="flex flex-col gap-12">
          <TodoLabel>Completed</TodoLabel>
          <TodoList todos={completedTodos} toggleCompleted={toggleCompleted} />
        </div>
      )}
    </div>
  );
}

export default App;
