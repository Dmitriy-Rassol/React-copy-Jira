import { useEffect, useState, useRef } from "react";
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
  const [isCreateSprintOpen, setCreateSprintOpen] = useState(false);
  const [isCreateUserOpen, setCreateUserOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    if (isCreateSprintOpen || isCreateUserOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isCreateSprintOpen, isCreateUserOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setCreateSprintOpen(false);
      setCreateUserOpen(false);
    }
  };

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

    <div className="admin-panel__modal-btns">
      <button onClick={() => setCreateSprintOpen(true)}>Создать спринт</button>
      <button onClick={() => setCreateUserOpen(true)}>Создать пользователя</button>
    </div>

    {isCreateSprintOpen && (
      <div className="modal" >
        <div className="modal-container" ref={modalRef}>
        <CreateSprint 
          propSprints={propLocalSprints}
          propSetSprints={propSetLocalSprints}
        />
        <button className="modal-btn" onClick={() => setCreateSprintOpen(false)}>✖</button>
        </div>
      </div>
    )}

    {isCreateUserOpen && (
      <div className="modal">
         <div className="modal-container" ref={modalRef}>
        <CreateUser
          propsSetUsers={propsSetLocalUsers}
          propsUsers={propsLocalUsers}
          propsModalActive={setCreateUserOpen}
        />
        <button className="modal-btn" onClick={() => setCreateUserOpen(false)}>✖</button>
      </div>
      </div>
    )}

    <CreateTask
      propsTasks={propsLocalTasks}
      propsSetTasks={propsSetLocalTasks}
      propsUsers={users}
      propsSprintsData={sprints}
    />
  </div>
  );
};

export default AdminPanel;
