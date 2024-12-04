import { ReactNode } from 'react';

type TodoLabelProp = {
  children: ReactNode;
};
export default function TodoLabel({ children }: TodoLabelProp) {
  return <h1 className="text-secondary text-2xl m-0">{children}</h1>;
}
