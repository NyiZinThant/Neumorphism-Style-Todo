import { afterEach, describe, expect, it, vi } from 'vitest';
import { getStoredTodos, storeTodos } from '../../src/lib/localStorage';
import Todo from '../../src/models/todo';

describe('getStoredTodos', () => {
  afterEach(() => {
    localStorage.clear();
  });
  it("should return empty array if don't have todos in localStorage", () => {
    expect(getStoredTodos()).toEqual([]);
  });
  it('should return array of todos if todos exist', () => {
    const todos = [{ id: 1, label: 'task 1', completed: false }];
    localStorage.setItem('todos', JSON.stringify(todos));
    expect(getStoredTodos()).toEqual(todos);
  });
});

describe('storeTodos', () => {
  afterEach(() => {
    localStorage.clear();
  });
  it('should return undefined with console.error if new todo is empty', () => {
    const errorSpy = vi.spyOn(console, 'error');
    // @ts-expect-error expected 1 argument
    storeTodos();
    expect(errorSpy).toHaveBeenCalled();
  });
  it('should store new todo in localStorage', () => {
    const todos: Todo[] = [{ id: '1', label: 'task 1', completed: false }];
    storeTodos(todos);
    expect(getStoredTodos()).toEqual(todos);
  });
});
