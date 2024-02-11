import { useEffect, useState } from "react";
import LessInput from "../../StateLessInputs/LessInput";
import FullInput from "../../StateFullInputs/FullInput";
import SelectComponent from "../../SelectComponent/SelectComponent";
import "./CreateTask.scss";
const CreateTask = ({
  propsUsers,
  propsSprintsData,
  propsTasks,
  propsSetTasks,
}) => {
  const [formDataTask, setFormDataTask] = useState({
    title: "",
    subtitle: "",
    author: "",
    assignee: "",
    time: 1,
    hoursEnd: 0,
    daysEnd: 0,
    sprint: "",
    description: "",
    taskId: "",
    additionalComments: "",
    watchers: "",
    timeToSprintEnd: "",
    status: "ToDo"
  });

  const [sprintsName, setSprintsName] = useState([]);
  const [sprintsEnd, setSprintsEnd] = useState([]);
  const [sprintData, setSprintData] = useState([]);

  useEffect(() => {
    const generateTaskId = () => {
      let randomLetter = "";
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numbers = Math.floor(Math.random() * 10000) + 1;

      while (randomLetter.length < 2) {
        randomLetter += letters.charAt(
          Math.floor(Math.random() * letters.length)
        );
      }
      setFormDataTask({ taskId: `${randomLetter}-${numbers}` });
    };
    generateTaskId();

    const sprintNames = propsSprintsData.map((sprint) => {
      return sprint.sprintName;
    });
    setSprintsName(sprintNames);

    setSprintData(propsSprintsData);

    const sprintsEndDate = propsSprintsData.map((sprint) => {
      return sprint.sprintEndDate;
    });
    setSprintsEnd(sprintsEndDate);
  }, [propsSprintsData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    propsSetTasks([...propsTasks, { ...formDataTask }]);
     setFormDataTask({
      title: "",
      subtitle: "",
      author: "",
      assignee: "",
      time: 1,
      hoursEnd: 0,
      daysEnd: 0,
      sprint: "",
      description: "",
      taskId: "",
      additionalComments: "",
      watchers: "",
      timeToSprintEnd: ""
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "sprint") {
      const sprintTarget = sprintData.filter(
        (sprint) => sprint.sprintName == value
      );
      setFormDataTask({
        ...formDataTask,
        timeToSprintEnd: sprintTarget[0].sprintEndDate,
        [name]: value,
        status: "ToDo"
      });
    } else {
      setFormDataTask({
        ...formDataTask,
        [name]: value,
        status: "ToDo"
      });
    }
  };

  const handleInputTimeChange = (event) => {
    const { value } = event.target;
   
    const hours = parseInt(value);
    if (hours > 8) {
      const remainingHours = hours % 8;
      const days = Math.floor(hours / 8);
      setFormDataTask({
        ...formDataTask,
        hoursEnd: remainingHours,
        daysEnd: days,
        time: parseInt(value)
      });
    } else {
      setFormDataTask({
        ...formDataTask,
        hoursEnd: hours,
        daysEnd: 0,
        time: parseInt(value)
      });
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <h4>Задача: {formDataTask.taskId}</h4>
      <LessInput
        required={true}
        title={"Заголовок"}
        propsName={"title"}
        type={"text"}
        value={formDataTask.title}
        onChangeProps={handleInputChange}
      />
      <LessInput
        required={true}
        title={"Подзаголовок задачи"}
        propsName={"subtitle"}
        type={"text"}
        value={formDataTask.subtitle}
        onChangeProps={handleInputChange}
      />
      <SelectComponent
        required={true}
        title={"Автор"}
        propsName={"author"}
        value={formDataTask.author}
        onChangeProps={handleInputChange}
        propsDefaultValue={"Выберите автора"}
        items={propsUsers}
      />
      <SelectComponent
        required={true}
        title={"Исполнитель"}
        propsName={"assignee"}
        value={formDataTask.assignee}
        onChangeProps={handleInputChange}
        propsDefaultValue={"Выберите исполнителя"}
        items={propsUsers}
      />
      <LessInput
        required={true}
        title={"Часов на исполнение"}
        propsName={"time"}
        type={"number"}
        value={formDataTask.time}
        onChangeProps={handleInputTimeChange}
      />
      <SelectComponent
        required={true}
        title={"Спринт"}
        propsName={"sprint"}
        value={formDataTask.sprint}
        onChangeProps={handleInputChange}
        propsDefaultValue={"Выберите Спинт"}
        items={sprintsName}
      />
      <FullInput
        localType={"date"}
        title={"Конец спринта"}
        propsName={"timeToSprintEnd"}
        value={formDataTask.timeToSprintEnd}
        disabled={true}
        onChangeProps={handleInputChange}
      />
      <FullInput
        required={true}
        title={"Описание задачи"}
        localType={"textarea"}
        value={formDataTask.description}
        propsName={"description"}
        minLength={40}
        placeholder={"Не меньше 40 символов"}
        onChangeProps={handleInputChange}
      />
      <FullInput
        title={"Дополнительные пояснения"}
        localType={"textarea"}
        value={formDataTask.additionalComments}
        propsName={"additionalComments"}
        minLength={40}
        placeholder={"Не меньше 40 символов"}
        required={false}
        onChangeProps={handleInputChange}
      />
      <SelectComponent
        title={"Наблюдающий"}
        propsName={"watchers"}
        value={formDataTask.watchers}
        onChangeProps={handleInputChange}
        propsDefaultValue={"Выберите наблюдающего"}
        items={propsUsers}
      />

      <button type="submit">Добавить</button>
    </form>
  );
};

export default CreateTask;
