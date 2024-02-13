import { useEffect, useState } from "react";
import LessInput from "../../StateLessInputs/LessInput";
import SelectComponent from "../../SelectComponent/SelectComponent";
import "./CreateUser.scss";

const CreateUser = ({ propsSetUsers, propsUsers }) => {
  const [formDataUser, setFormDataUser] = useState({
    userId: "",
    fullName: "",
    position: "",
    department: "",
  });

  const [localDepartments, setLocalDepartments] = useState([
    "Проектирования программного обеспечения",
    "Разработки",
    "Внедрения и сопровождения",
    "Тестирования и документирования",
  ]);

  const [localPositions, setLocalPositions] = useState([
    "Frontend",
    "Backend",
    "Designer",
    "Tester",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const newUserId = currentDate.getTime();
    setFormDataUser({ ...formDataUser, userId: newUserId });
    propsSetUsers([...propsUsers, { ...formDataUser, userId: newUserId }]);
    setFormDataUser({
      userId: "",
      fullName: "",
      position: "",
      department: "",
    });
  };

  const handleParticipantChange = (e) => {
    const { name, value } = e.target;
    setFormDataUser({ ...formDataUser, [name]: value });
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <h4>Добавить пользователя</h4>
        <LessInput
          title={"ФИО исполнителя"}
          type={"text"}
          required={true}
          propsName={"fullName"}
          value={formDataUser.fullName}
          onChangeProps={handleParticipantChange}
        />
        <SelectComponent
          required={true}
          title={"Должность"}
          propsName={"position"}
          value={formDataUser.position}
          onChangeProps={handleParticipantChange}
          propsDefaultValue={"Выберите должность"}
          items={localPositions}
        />
        <SelectComponent
          required={true}
          title={"Подразделение"}
          propsName={"department"}
          value={formDataUser.department}
          onChangeProps={handleParticipantChange}
          propsDefaultValue={"Выберите подразделение"}
          items={localDepartments}
        />
        <button type="submit">Добавить</button>
      </form>
    </>
  );
};

export default CreateUser;
