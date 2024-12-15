import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoLabel from './components/TodoLabel';
import { getCompletedTodo, getUncompletedTodo } from './utils/todoUtils';
import { addTodo, toggleCompleted } from './api/todoApi';
import Todo from './models/todo';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getTodo } from './api/todoApi';
function App() {
  const queryClient = useQueryClient();
  const { data: todos } = useQuery<Todo[]>({
    queryFn: getTodo,
    queryKey: ['todos'],
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
  const { mutateAsync: toggleCompletedMutation } = useMutation({
    mutationFn: async ({
      id,
      completed,
    }: {
      id: string;
      completed: boolean;
    }) => {
      return await toggleCompleted(id, completed);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
  const completedTodos = getCompletedTodo(todos ?? []);
  const uncompletedTodos = getUncompletedTodo(todos ?? []);
  return (
    <div className="bg-primary w-screen min-h-screen p-7 px-36 flex flex-col gap-12">
      <TodoForm addTodoMutation={addTodoMutation} />
      {uncompletedTodos.length !== 0 && (
        <TodoList
          todos={uncompletedTodos}
          toggleCompletedMutation={toggleCompletedMutation}
          isShadowInset={false}
        />
      )}
      {completedTodos.length !== 0 && (
        <div className="flex flex-col gap-12">
          <TodoLabel>Completed</TodoLabel>
          <TodoList
            todos={completedTodos}
            toggleCompletedMutation={toggleCompletedMutation}
          />
        </div>
      )}
    </div>
  );
}

export default App;
