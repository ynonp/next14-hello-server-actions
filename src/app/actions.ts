"use server";

import { Task } from "./types"

const tasks: Array<Task> = [
  {id: 1, text: 'hello nextjs', done: true},
  {id: 2, text: 'server actions', done: false},
];

export async function getTodoItems() {
  return tasks;
}

export async function addTodoItem(task: Omit<Task, 'id'>) {
  const newTask: Task = {...task, id: tasks.length + 1};
  tasks.push(newTask);
  console.log(`Tasks is now: `, tasks);
  return newTask;
}