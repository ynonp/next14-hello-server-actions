import { getTodoItems } from "./actions";
import Counter from './counter';
import NewTaskForm from './new_task_form';
export default async function Home() {
  const tasks = await getTodoItems();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello World</p>
      <Counter />
      <Counter />
      <Counter />
      <ul>
        <li>Server Components</li>
        <li>Client Components</li>
      </ul>
      <h2>
        tasks:
      </h2>
      <NewTaskForm />
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <input type="checkbox" checked={t.done} disabled={true} />
              {t.text}
          </li>
        ))}
      </ul>
    </main>
  )
}
