import CheckBox from './CheckBox';

export default function Todo({ todo, toggleCompleted, isShadowInset }) {
  return (
    <div
      className={
        (isShadowInset ? 'shadow-inset' : 'shadow-outset') +
        ' h-14 flex gap-4 items-center p-5 rounded-2xl'
      }
    >
      <CheckBox
        isChecked={todo.completed}
        toggleChecked={() => toggleCompleted(todo.id)}
        id={todo.id}
      />
      <label
        htmlFor={todo.id}
        className={
          'text-secondary font-bold text-lg cursor-pointer ' +
          (todo.completed ? 'line-through' : '')
        }
      >
        {todo.label}
      </label>
    </div>
  );
}
