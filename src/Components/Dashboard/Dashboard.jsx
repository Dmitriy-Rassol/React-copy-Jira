import { useState } from "react";
import Statistics from "./Statistics/Statistics";
import CurrentSprintInfo from "./CurrentSprintInfo/CurrentSprintInfo";
import CompletedTasks from "./CompletedTasks/CompletedTasks";
import "./Dashboard.scss";
const Dashboard = ({
  propLocalSprints,
  propsLocalTasks,
  propsTeams,
  propsLocalUsers,
}) => {
  const [selectedTab, setSelectedTab] = useState("statistics");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="dashboard">
      <h1>Главная (Рабочий стол)</h1>
      <div className="tab-buttons-container">
        <button
          className="tab-button"
          onClick={() => handleTabChange("statistics")}
        >
          Статистика
        </button>
        <button
          className="tab-button"
          onClick={() => handleTabChange("sprintInfo")}
        >
          Информация о спринтах
        </button>
        <button
          className="tab-button"
          onClick={() => handleTabChange("completedTasks")}
        >
          Выполненные задачи
        </button>
      </div>

      {selectedTab === "statistics" && (
        <Statistics
          propsTeams={propsTeams}
          propsUsers={propsLocalUsers}
          propsTasks={propsLocalTasks}
        />
      )}
      {selectedTab === "sprintInfo" && (
        <CurrentSprintInfo propsSprintsInfo={propLocalSprints} />
      )}
      {selectedTab === "completedTasks" && (
        <CompletedTasks propsTasks={propsLocalTasks} />
      )}
    </div>
  );
};

export default Dashboard;
