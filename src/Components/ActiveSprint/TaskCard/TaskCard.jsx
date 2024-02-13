import "./TaskCard.scss";

const TaskCard = ({ task }) => {
  return (
    <div className="task-info">
      <div className="task-info__title">
        <h3>{task.title}</h3>
        <span>{task.taskId}</span>
      </div>
      <div className="task-info__desc">
        <p>
          <span>Исполнитель:</span> {task.assignee}
        </p>
        <p><span>Описание:</span> {task.description}</p>
        <p>
          <span>Спринт:</span> {task.sprint}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
