import { useEffect, useState } from "react";
import LessInput from "../../StateLessInputs/LessInput";
import FullInput from "../../StateFullInputs/FullInput";
import SelectComponent from "../../SelectComponent/SelectComponent";
import "./CreateTask.scss";
const CreateTask = () => {
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
  });

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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDataTask);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormDataTask({
      ...formDataTask,
      [name]: value,
    });
  };

  const handleInputTimeChange = (event) => {
    const { name, value } = event.target;
    setFormDataTask({
      ...formDataTask,
      [name]: value,
    });
    const hours = parseInt(value);
    if (hours > 8) {
      const remainingHours = hours % 8;
      const days = Math.floor(hours / 8);
      setFormDataTask({
        ...formDataTask,
        hoursEnd: remainingHours, 
        daysEnd: days,
      });
    } else {
      setFormDataTask({
        ...formDataTask,
        hoursEnd: hours,
        daysEnd: 0,
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
        title={"Автор"}
        propsName={"author"}
        value={formDataTask.author}
        onChangeProps={handleInputChange}
        propsDefaultValue={"Выберите автора"}
        items={["Алексей", "Елена", "Дмитрий"]}
      />
      <SelectComponent
        title={"Исполнитель"}
        propsName={"assignee"}
        value={formDataTask.assignee}
        onChangeProps={handleInputChange}
        propsDefaultValue={"Выберите исполнителя"}
        items={["Алексей", "Елена", "Дмитрий"]}
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
        title={"Спринт"}
        propsName={"sprint"}
        value={formDataTask.sprint}
        onChangeProps={handleInputChange}
        propsDefaultValue={"Выберите Спинт"}
        items={["Спринт 1", "Спринт 2", "Спринт 3"]}
      />
      <FullInput
        localType={"date"}
        title={"Конец спринта"}
        propsName={"timeToSprintEnd"}
        value={formDataTask.timeToSprintEnd}
        required={false}
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
        items={["Алексей", "Елена", "Дмитрий"]}
      />

      <button type="submit">Добавить</button>
    </form>
  );
};

export default CreateTask;
