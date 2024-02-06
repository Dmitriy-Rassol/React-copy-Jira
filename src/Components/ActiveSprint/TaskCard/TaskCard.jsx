const TaskCard = ({ task }) => {
  return (
    <div >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Assignee: {task.assignee}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskCard;
