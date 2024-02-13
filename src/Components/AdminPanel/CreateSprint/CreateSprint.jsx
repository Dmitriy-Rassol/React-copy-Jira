import { useState, useEffect } from "react";
import LessInput from "../../StateLessInputs/LessInput";
import FullInput from "../../StateFullInputs/FullInput";
import SelectComponent from "../../SelectComponent/SelectComponent";
import "./CreateSprint.scss";
const CreateSprint = ({ propSetSprints, propSprints, propsModalActive }) => {
  const [formDataSprint, setFormDataSprint] = useState({
    sprintId: "",
    sprintName: "",
    sprintGoal: "",
    sprintDuration: "",
    sprintStartDate: "",
    sprintEndDate: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const newSprintId = currentDate.getTime();
    setFormDataSprint({ ...formDataSprint, sprintId: newSprintId });
    propSetSprints([
      ...propSprints,
      { ...formDataSprint, sprintId: newSprintId },
    ]);
    setFormDataSprint({
      sprintId: "",
      sprintName: "",
      sprintGoal: "",
      sprintDuration: "",
      sprintStartDate: "",
      sprintEndDate: "",
    });
    propsModalActive(false);
  };

  const setSprintEnd = () => {
    if (
      formDataSprint.sprintDuration.length &&
      formDataSprint.sprintStartDate.length
    ) {
      let originalDate = new Date(formDataSprint.sprintStartDate);
      let week = parseInt(formDataSprint.sprintDuration.split("")[0]) * 7;
      originalDate.setDate(originalDate.getDate() + week);
      let sprintEnd = (formDataSprint.sprintEndDate = originalDate
        .toISOString()
        .slice(0, 10));
      setFormDataSprint({ ...formDataSprint, sprintEndDate: sprintEnd });
    }
  };

  useEffect(() => {
    setSprintEnd();
  }, [formDataSprint.sprintDuration, formDataSprint.sprintStartDate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataSprint({ ...formDataSprint, [name]: value });
  };

  return (
      <form onSubmit={(e) => handleSubmit(e)} className="form">
      <h4>Добавить спринт</h4>
      <LessInput
        required={true}
        type={"text"}
        propsName={"sprintName"}
        value={formDataSprint.sprintName}
        onChangeProps={handleInputChange}
        title={"Название спринта"}
      />
      <FullInput
        required={true}
        title={"Цель спринта"}
        localType={"textarea"}
        value={formDataSprint.sprintGoal}
        propsName={"sprintGoal"}
        minLength={1}
        placeholder={""}
        onChangeProps={handleInputChange}
      />
      <SelectComponent
        required={true}
        title={"Время спринта"}
        propsName={"sprintDuration"}
        value={formDataSprint.sprintDuration}
        onChangeProps={handleInputChange}
        propsDefaultValue={"Выберите продолжительность"}
        items={["1 неделя", "2 недели", "3 недели"]}
      />
      <FullInput
        localType={"date"}
        title={"Начало спринта"}
        propsName={"sprintStartDate"}
        value={formDataSprint.sprintStartDate}
        required={true}
        onChangeProps={handleInputChange}
      />
      <FullInput
        localType={"date"}
        title={"Конец спринта"}
        propsName={"sprintEndDate"}
        value={formDataSprint.sprintEndDate}
        required={false}
        disabled={true}
        onChangeProps={handleInputChange}
      />

      <button type="submit">Добавить</button>
    </form>
  );
};

export default CreateSprint;
