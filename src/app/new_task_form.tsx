"use client";

import { addTodoItem } from "./actions";
import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();

  async function handleSubmit(data: FormData) {
    const text = data.get('text') as string;
    const done = !!(data.get('done') as string);
    const newTask = await addTodoItem({text, done});
    console.log(newTask);
    router.refresh();
  }

  return (
    <form action={handleSubmit}>
      <label>
        <label>
          Text:
          <input type="text" name="text" />
        </label>

        <label>
          Done:
          <input type="checkbox" name="done" />
        </label>
        
        <input type="submit" value="Save" />
      </label>
    </form>
  )
}