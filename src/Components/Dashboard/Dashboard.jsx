import { useState } from "react";
import CompletedTasksList from "./CompletedTasksList/CompletedTasksList";
import SprintInfo from "./SprintInfo/SprintInfo";
import UserSelection from "./UserSelection/UserSelection";
const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState([
    { id: 1, name: "Пользователь 1" },
    { id: 2, name: "Пользователь 2" },
    { id: 3, name: "Пользователь 3" },
    { id: 4, name: "Пользователь 4" },
    { id: 5, name: "Пользователь 5" },
    { id: 6, name: "Пользователь 6" },
    { id: 7, name: "Пользователь 7" },
    { id: 8, name: "Пользователь 8" },
    { id: 9, name: "Пользователь 9" },
    { id: 10, name: "Пользователь 10" },
    { id: 11, name: "Пользователь 11" },
    { id: 12, name: "Пользователь 12" },
  ]);
  const [selectedTeam, setSelectedTeam] = useState([
    { id: 1, name: "Команда 1" },
    { id: 2, name: "Команда 2" },
    { id: 3, name: "Команда 3" },
  ]);


  const currentSprint = {
    id: 1,
    productTab: {
      title: "Product",
      description: "Описание продукта...",
    },
    backlogTab: {
      title: "Backlog",
      items: [
        { id: 1, title: "Задача 1" },
        { id: 2, title: "Задача 2" },
        { id: 3, title: "Задача 3" },
      ],
    },
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleSelectTeam = (team) => {
    setSelectedTeam(team);
  };
  return (
    <div>
      <h1>Главная (Рабочий стол)</h1>
      <CompletedTasksList />
      <SprintInfo sprint={currentSprint}/>
      <UserSelection
        users={selectedUser}
        teams={selectedTeam}
        onSelectUser={handleSelectUser}
        onSelectTeam={handleSelectTeam}
      />
    </div>
  );
};

export default Dashboard;
