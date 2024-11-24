import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import TodoList from './components/TodoList';
import TodoLabel from './components/TodoLabel';
import {
  getCompletedTodo,
  getUncompletedTodo,
  toggleTodoStatus,
} from './utils/todoUtils';
function App() {
  const [todos, setTodos] = useState([]);
  let lastId = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
  function addTodo(todo) {
    setTodos([...todos, { id: lastId, label: todo, completed: false }]);
    lastId++;
  }
  const toggleCompleted = (id) => {
    setTodos(toggleTodoStatus(todos, id));
  };
  const completedTodos = getCompletedTodo(todos);
  const uncompletedTodos = getUncompletedTodo(todos);
  return (
    <div className="bg-primary w-screen min-h-screen p-7 px-36 flex flex-col gap-12">
      <Search addTodo={addTodo} />
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
