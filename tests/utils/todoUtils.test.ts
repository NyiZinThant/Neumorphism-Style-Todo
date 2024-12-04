import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  getCompletedTodo,
  getUncompletedTodo,
  toggleTodoStatus,
} from '../../src/utils/todoUtils';
import Todo from '../../src/models/todo';

describe('getCompletedTodo', () => {
  let todos: Todo[] = [];
  beforeEach(() => {
    todos = [
      { id: '1', label: 'Task 1', completed: false },
      { id: '2', label: 'Task 2', completed: true },
      { id: '3', label: 'Task 3', completed: false },
      { id: '4', label: 'Task 4', completed: true },
    ];
  });
  it('should return empty array with console.error if todos are null', () => {
    const errorSpy = vi.spyOn(console, 'error');
    // @ts-expect-error expected 1 argument
    expect(getCompletedTodo()).toEqual([]);
    expect(errorSpy).toHaveBeenCalled();
  });
  it('should return completed todo', () => {
    expect(getCompletedTodo(todos)).toEqual([
      { id: '2', label: 'Task 2', completed: true },
      { id: '4', label: 'Task 4', completed: true },
    ]);
  });
});

describe('getUncompletedTodo', () => {
  let todos;
  beforeEach(() => {
    todos = [
      { id: '1', label: 'Task 1', completed: false },
      { id: '2', label: 'Task 2', completed: true },
      { id: '3', label: 'Task 3', completed: false },
      { id: '4', label: 'Task 4', completed: true },
    ];
  });
  it('should return empty array with console.error if todos are null', () => {
    const errorSpy = vi.spyOn(console, 'error');
    // @ts-expect-error expected 1 arugment
    expect(getUncompletedTodo()).toEqual([]);
    expect(errorSpy).toHaveBeenCalled();
  });
  it('should return uncompleted todo', () => {
    expect(getUncompletedTodo(todos)).toEqual([
      { id: '1', label: 'Task 1', completed: false },
      { id: '3', label: 'Task 3', completed: false },
    ]);
  });
});

describe('toggleTodoStatus', () => {
  let todos;
  beforeEach(() => {
    todos = [
      { id: '1', label: 'Task 1', completed: false },
      { id: '2', label: 'Task 2', completed: true },
      { id: '3', label: 'Task 3', completed: false },
      { id: '4', label: 'Task 4', completed: true },
    ];
  });
  it('should return empty array with console.error if todos are null', () => {
    const errorSpy = vi.spyOn(console, 'error');
    // @ts-expect-error null is unassignable
    expect(toggleTodoStatus(null, 12)).toEqual([]);
    expect(errorSpy).toHaveBeenCalled();
  });
  it('should return empty array with console.error if id is null', () => {
    const errorSpy = vi.spyOn(console, 'error');
    // @ts-expect-error expected 2 arguments
    expect(toggleTodoStatus(todos)).toEqual([]);
    expect(errorSpy).toHaveBeenCalled();
  });
  it('should return empty array with console.error if todos and id is null', () => {
    const errorSpy = vi.spyOn(console, 'error');
    // @ts-expect-error expected 2 arguments
    expect(toggleTodoStatus()).toEqual([]);
    expect(errorSpy).toHaveBeenCalled();
  });
  it('should completed to false for targeted id', () => {
    expect(toggleTodoStatus(todos, '2')).toEqual([
      { id: '1', label: 'Task 1', completed: false },
      { id: '2', label: 'Task 2', completed: false },
      { id: '3', label: 'Task 3', completed: false },
      { id: '4', label: 'Task 4', completed: true },
    ]);
  });
  it('should completed to true for targeted id', () => {
    expect(toggleTodoStatus(todos, '1')).toEqual([
      { id: '1', label: 'Task 1', completed: true },
      { id: '2', label: 'Task 2', completed: true },
      { id: '3', label: 'Task 3', completed: false },
      { id: '4', label: 'Task 4', completed: true },
    ]);
  });
});
