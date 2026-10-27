import { updateTask } from "../api/taskApi";

export default function TaskList({ tasks, onTaskUpdated }) {
  const handleToggle = async (task) => {
    try {
      const updatedTask = await updateTask(task.id, !task.completed);
      onTaskUpdated(updatedTask);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task)} aria-label={`Mark ${task.title} ${task.completed ? "incomplete" : "complete"}`} />
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
