import { useState, useEffect } from "react";

const CreateTaskSprint = () => {
  const [formDataSprint, setFormDataSprint] = useState({
    taskName: "",
    taskDescription: "",
    sprintName: "",
    sprintGoal: "",
    sprintDuration: "",
    sprintStartDate: "",
    sprintEndDate: ""
  });

  useEffect(() => {
    // Генерация уникального идентификатора задачи
    // Логика здесь
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDataSprint);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataSprint({ ...formDataSprint, [name]: value });
  };

  return (
    <form onSubmit={e => handleSubmit(e)} className="form">
      <input
        type="text"
        name="taskName"
        value={formDataSprint.taskName}
        onChange={handleInputChange}
        placeholder="Task Name"
      />
      {/* Добавьте остальные поля для задачи (описание и т.д.) */}
      <input
        type="text"
        name="sprintName"
        value={formDataSprint.sprintName}
        onChange={handleInputChange}
        placeholder="Sprint Name"
      />
      <input
        type="text"
        name="sprintGoal"
        value={formDataSprint.sprintGoal}
        onChange={handleInputChange}
        placeholder="Sprint Goal"
      />
      <input
        type="number"
        name="sprintDuration"
        value={formDataSprint.sprintDuration}
        onChange={handleInputChange}
        placeholder="Sprint Duration"
      />
      <input
        type="datetime-local"
        name="sprintStartDate"
        value={formDataSprint.sprintStartDate}
        onChange={handleInputChange}
      />
      <input
        type="datetime-local"
        name="sprintEndDate"
        value={formDataSprint.sprintEndDate}
        onChange={handleInputChange}
      />

    <button type="submit">Добавить</button>
    </form>
  );
};

export default CreateTaskSprint;
