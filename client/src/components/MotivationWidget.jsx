import { useMemo } from "react";

export default function MotivationWidget({ tasks = [] }) {
  const progress = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const remaining = total - completed;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    return { total, completed, remaining, percentage };
  }, [tasks]);

  return (
    <section className="motivation-widget progress-widget" aria-labelledby="progress-title">
      <h3 id="progress-title">Today's Progress</h3>
      <p className="progress-count">{progress.completed} of {progress.total} tasks completed</p>
      <div className="progress-track" role="progressbar" aria-label="Tasks completed" aria-valuemin={0} aria-valuemax={progress.total || 1} aria-valuenow={progress.completed} aria-valuetext={`${progress.completed} of ${progress.total} tasks completed`}>
        <div className="progress-fill" style={{ width: progress.percentage + "%" }} />
      </div>
      {progress.total === 0 ? <p>Add a task to start tracking your progress.</p> :
        progress.remaining === 0 ? <p>All tasks completed. Great work!</p> :
        <p>{progress.remaining} {progress.remaining === 1 ? "task" : "tasks"} left to complete.</p>}
    </section>
  );
}
