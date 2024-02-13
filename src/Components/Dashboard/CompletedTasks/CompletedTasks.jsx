import { useEffect, useState } from "react";
import "./CompletedTasks.scss";
const CompletedTasks = ({ propsTasks }) => {
  const [tasks, setTasks] = useState(propsTasks);

  useEffect(() => {
    setTasks(propsTasks);
  }, [propsTasks]);

  const completedTasks = tasks.filter((task) => task.status === "Done");
  return (
    <div className="completed-tasks">
      <h2>Выполненные задачи</h2>
      {completedTasks.map((task) => (
        <div className="task-item" key={task.taskId}>
          <div>
            <h4 className="task-title">{task.title}</h4>
            <div className="task-info">
              <div>
                <span>Автор:</span> {task.author}
              </div>
              <div>
                <span>Исполнитель:</span> {task.assignee}
              </div>
              <div>
                <span>Описание:</span> {task.description}
              </div>
              {task.additionalComments && (
                <div>
                  <span>Дополнительные комментарии:</span>{" "}
                  {task.additionalComments}
                </div>
              )}
              {task.watchers && (
                <div>
                  <span>Наблюдатель:</span> {task.watchers}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;
