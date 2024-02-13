import { useEffect, useState } from "react";
import CreateTask from "./CreateTask/CreateTask";
import CreateSprint from "./CreateSprint/CreateSprint";
import CreateUser from "./CreateUser/CreateUser";
import "./AdminPanel.scss";
const AdminPanel = ({
  propsLocalTasks,
  propsSetLocalTasks,
  propsSetLocalUsers,
  propsLocalUsers,
  propLocalSprints,
  propSetLocalSprints,
}) => {
  const [users, setUsers] = useState([]);
  const [sprints, setSprints] = useState([]);

  useEffect(() => {
    const usersName = propsLocalUsers.map((user) => [user.fullName]);
    setUsers(usersName);

    const sprintsData = propLocalSprints.map((sprint) => {
      return {
        sprintName: sprint.sprintName,
        sprintEndDate: sprint.sprintEndDate,
      };
    });
    setSprints(sprintsData);
    setUsers(usersName);
  }, [propsLocalUsers, propLocalSprints]);

  return (
    <div className="admin-panel">
      <h1>Панель администратора</h1>
      <CreateTask
        propsTasks={propsLocalTasks}
        propsSetTasks={propsSetLocalTasks}
        propsUsers={users}
        propsSprintsData={sprints}
      />

      <CreateSprint
        propSprints={propLocalSprints}
        propSetSprints={propSetLocalSprints}
      />

      <CreateUser
        propsSetUsers={propsSetLocalUsers}
        propsUsers={propsLocalUsers}
      />
    </div>
  );
};

export default AdminPanel;
