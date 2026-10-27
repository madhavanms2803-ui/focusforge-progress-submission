import { useState } from "react";
import { createTask } from "../api/taskApi";

export default function AddTask({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title.trim()) return;
    try {
      const newTask = await createTask(title.trim());
      onTaskAdded(newTask);
      setTitle("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };
  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input aria-label="Task title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Add a task..." />
      <button type="submit">Add Task</button>
    </form>
  );
}
