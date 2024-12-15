import TodoType from '../models/todo';
import Todo from './Todo';
type TodoListProp = {
  todos: TodoType[];
  toggleCompletedMutation: Function;
  isShadowInset?: boolean;
};
export default function TodoList({
  todos,
  toggleCompletedMutation,
  isShadowInset = true,
}: TodoListProp) {
  return (
    <div className="grid grid-cols-2 gap-x-32 gap-y-8">
      {todos.map((todo) => (
        <Todo
          todo={todo}
          toggleCompletedMutation={toggleCompletedMutation}
          key={todo.id}
          isShadowInset={isShadowInset}
        />
      ))}
    </div>
  );
}
