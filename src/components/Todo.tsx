import CheckBox from './CheckBox';
import TodoType from '../models/todo';

type TodoProp = {
  todo: TodoType;
  toggleCompletedMutation: Function;
  isShadowInset: boolean;
};
export default function Todo({
  todo,
  toggleCompletedMutation,
  isShadowInset,
}: TodoProp) {
  return (
    <div
      className={
        (isShadowInset ? 'shadow-inset' : 'shadow-outset') +
        ' h-14 flex gap-4 items-center p-5 rounded-2xl'
      }
    >
      <CheckBox
        isChecked={todo.completed}
        toggleChecked={() =>
          toggleCompletedMutation({ id: todo.id, completed: todo.completed })
        }
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
