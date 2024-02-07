import { useEffect, useState } from "react";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [assignee, setAssignee] = useState("");
  const [timeHours, setTimeHours] = useState(0);
  const [timeDays, setTimeDays] = useState(0);
  const [description, setDescription] = useState("");
  const [taskId, setTaskId] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");
  const [watchers, setWatchers] = useState("");
  const [timeToSprintEnd, setTimeToSprintEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Отправка данных на сервер для создания задачи
    // Проверки на обязательные поля и валидацию времени до окончания спринта
  };

  const generateTaskId = () => {
    let randomLetter = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = Math.floor(Math.random() * 10000) + 1;

    while (randomLetter.length < 2) {
      randomLetter += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    setTaskId(`${randomLetter}-${numbers}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Subtitle:</label>
      <input
        type="text"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        required
      />

      <label>Author:</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <label>Assignee:</label>
      <input
        type="text"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        required
      />

      <label>Time (hours):</label>
      <input
        type="number"
        value={timeHours}
        onChange={(e) => setTimeHours(e.target.value)}
      />

      <label>Time (days):</label>
      <input
        type="number"
        value={timeDays}
        onChange={(e) => setTimeDays(e.target.value)}
      />

      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        minLength={40}
        required
      ></textarea>

      <button type="button" onClick={generateTaskId}>
        Generate Task ID
      </button>
      <p>Task ID: {taskId}</p>

      {/* Дополнительные необязательные поля */}
      <label>Additional Comments:</label>
      <textarea
        value={additionalComments}
        onChange={(e) => setAdditionalComments(e.target.value)}
        minLength={40}
      ></textarea>

      <label>Watchers:</label>
      <input
        type="text"
        value={watchers}
        onChange={(e) => setWatchers(e.target.value)}
      />

      <label>Time to Sprint End:</label>
      <input
        type="text"
        value={timeToSprintEnd}
        onChange={(e) => setTimeToSprintEnd(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default AdminPanel;
