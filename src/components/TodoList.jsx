import Todo from './Todo';

export default function TodoList({
  todos,
  toggleCompleted,
  isShadowInset = true,
}) {
  return (
    <div className="grid grid-cols-2 gap-x-32 gap-y-8">
      {todos.map((todo) => (
        <Todo
          todo={todo}
          toggleCompleted={toggleCompleted}
          key={todo.id}
          isShadowInset={isShadowInset}
        />
      ))}
    </div>
  );
}
