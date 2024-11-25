import { useRef } from 'react';

export default function TodoForm({ addTodo }) {
  const searchInputRef = useRef(null);
  return (
    <div className="w-full flex justify-center">
      <form
        className="flex justify-center items-center gap-4 h-14 w-2/5 rounded-2xl shadow-inset p-5"
        onSubmit={(e) => {
          e.preventDefault();
          const val = searchInputRef.current.value.trim();
          if (val.length < 1) return;
          addTodo(val);
          searchInputRef.current.value = '';
        }}
      >
        <input
          type="text"
          name="todo"
          placeholder="Add more task"
          className="bg-transparent w-full text-secondary border-none outline-none p-2 px-4"
          ref={searchInputRef}
        />
        <button type="submit">
          <img src="/src/assets/Enter.svg" alt="Enter" className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
}
