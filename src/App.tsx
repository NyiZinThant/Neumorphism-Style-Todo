import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoLabel from './components/TodoLabel';
import {
  getCompletedTodo,
  getUncompletedTodo,
  toggleTodoStatus,
} from './utils/todoUtils';
import { getStoredTodos, storeTodos } from './lib/localStorage';
import { v4 as uuidv4 } from 'uuid';
import Todo from './models/todo';
function App() {
  const [todos, setTodos] = useState<Todo[]>(getStoredTodos);
  function addTodo(label: string) {
    const newId = uuidv4();
    const newTodos: Todo[] = [...todos, { id: newId, label, completed: false }];
    setTodos(newTodos);
    storeTodos(newTodos);
  }
  const toggleCompleted = (id: string) => {
    const newTodos: Todo[] = toggleTodoStatus(todos, id);
    setTodos(newTodos);
    storeTodos(newTodos);
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
