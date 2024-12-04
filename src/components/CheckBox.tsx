import { useRef } from 'react';
type CheckBoxProp = {
  isChecked: boolean;
  toggleChecked: Function;
  id: string;
};
export default function CheckBox({
  isChecked,
  toggleChecked,
  id,
}: CheckBoxProp) {
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const checkBoxClass =
    (isChecked ? 'bg-secondary' : 'bg-transparent') +
    ' border-2 border-secondary rounded-full w-4 h-4';
  return (
    <div
      className="relative cursor-pointer flex gap-4"
      onClick={() => {
        toggleChecked();
      }}
    >
      <input
        type="checkbox"
        className="absolute h-0 w-0 cursor-pointer opacity-0"
        ref={checkboxRef}
        defaultChecked={isChecked}
        id={id}
      />
      <span className={checkBoxClass}></span>
    </div>
  );
}
