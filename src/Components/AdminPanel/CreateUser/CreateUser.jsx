import { useState, useEffect } from "react";

const CreateUser = () => {
  const [formDataUser, setFormDataUser] = useState({
    participants: [],
  });

  useEffect(() => {
    // Генерация уникального идентификатора задачи
    // Логика здесь
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDataUser);
  };

  const handleAddParticipant = (e) => {
    e.preventDefault();
    const newParticipant = {
      fullName: "",
      position: "",
      department: "",
    };
    setFormDataUser({
      ...formDataUser,
      participants: [...formDataUser.participants, newParticipant],
    });
  };

  const handleParticipantChange = (index, e) => {
    const { name, value } = e.target;
    const updatedParticipants = [...formDataUser.participants];
    updatedParticipants[index][name] = value;
    setFormDataUser({ ...formDataUser, participants: updatedParticipants });
  };

  return (
    <>
      <button onClick={(e) => handleAddParticipant(e)}>Add Participant</button>
      {formDataUser.participants.map((participant, index) => (
        <form key={index} className="form">
            <p>Участник</p>
          <input
            type="text"
            name="fullName"
            value={participant.fullName}
            onChange={(e) => handleParticipantChange(index, e)}
            placeholder="Full Name"
          />
          <input
            type="text"
            name="position"
            value={participant.position}
            onChange={(e) => handleParticipantChange(index, e)}
            placeholder="Position"
          />
          <input
            type="text"
            name="department"
            value={participant.department}
            onChange={(e) => handleParticipantChange(index, e)}
            placeholder="Department"
          />

          
        </form>
      ))}<button onClick={e => handleSubmit(e)} type="submit">Добавить</button>
    </>
  );
};

export default CreateUser;
