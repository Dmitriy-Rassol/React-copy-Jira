import CompletedTasksList from "./CompletedTasksList/CompletedTasksList";
import SprintInfo from "./SprintInfo/SprintInfo";
import UserSelection from "./UserSelection/UserSelection";

const Dashboard = () => {
 
  return (
    <div>
      <h1>Главная (Рабочий стол)</h1>
      <UserSelection />
      <SprintInfo />
      <CompletedTasksList />
    </div>
  );
};

export default Dashboard;