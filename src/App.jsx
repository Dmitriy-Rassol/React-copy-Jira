import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ActiveSprint from "./Components/ActiveSprint/ActiveSprint";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import Navigation from "./Components/Navigation/Navigation";
import { useEffect, useState } from "react";
function App() {
  const [localUsers, setLocalUsers] = useState([
    {
      userId: 3243224269,
      fullName: "Рассоленко Дмитрий Васильевич",
      position: "Frontend",
      department: "Разработки",
    },
    {
      userId: 3243224266,
      fullName: "Ульянова Мария Владимировна",
      position: "Tester",
      department: "Тестирования и документирования",
    },
    {
      userId: 3243224267,
      fullName: "Боровков Егор Вадимович",
      position: "Backend",
      department: "Внедрения и сопровождения",
    },
    {
      userId: 3243224268,
      fullName: "Иванов Иван Иванович",
      position: "Designer",
      department: "Проектирования программного обеспечения",
    },
  ]);

  const [localTasks, setLocalTasks] = useState([
    {
      title: "Задача 1",
      subtitle: "Lorem ipsum dolor",
      author: "Иванов Иван Иванович",
      assignee: "Боровков Егор Вадимович",
      time: 12,
      hoursEnd: 4,
      daysEnd: 1,
      sprint: "Sprint-2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus iusto perspiciatis necessitatibus ullam libero eos odit ipsa corrupti debitis est, aspernatur ipsum fugiat, molestias doloremque quasi, ducimus voluptas vel aliquam maiores nulla incidunt saepe? Fugit sunt aliquid inventore provident?",
      taskId: "TX-5678",
      additionalComments:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus iusto perspiciatis necessitatibus ullam libero eos odit ipsa corrupti debitis est, aspernatur ipsum fugiat, molestias doloremque quasi, ducimus voluptas vel aliquam maiores nulla incidunt saepe? Fugit sunt aliquid inventore provident?",
      watchers: "Рассоленко Дмитрий Васильевич",
      timeToSprintEnd: "2024-03-09",
      status: "Done",
    },
    {
      title: "Задача 2",
      subtitle: "Lorem ipsum dolor",
      author: "Рассоленко Дмитрий Васильевич",
      assignee: "Иванов Иван Иванович",
      time: 12,
      hoursEnd: 4,
      daysEnd: 1,
      sprint: "Sprint-3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus iusto perspiciatis necessitatibus ullam libero eos odit ipsa corrupti debitis est, aspernatur ipsum fugiat, molestias doloremque quasi, ducimus voluptas vel aliquam maiores nulla incidunt saepe? Fugit sunt aliquid inventore provident?",
      taskId: "TX-5438",
      additionalComments:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus iusto perspiciatis necessitatibus ullam libero eos odit ipsa corrupti debitis est, aspernatur ipsum fugiat, molestias doloremque quasi, ducimus voluptas vel aliquam maiores nulla incidunt saepe? Fugit sunt aliquid inventore provident?",
      watchers: "Ульянова Мария Владимировна",
      timeToSprintEnd: "2024-03-07",
      status: "Testing",
    },
    {
      title: "Задача 3",
      subtitle: "Lorem ipsum dolor",
      author: "Рассоленко Дмитрий Васильевич",
      assignee: "Боровков Егор Вадимович",
      time: 12,
      hoursEnd: 4,
      daysEnd: 1,
      sprint: "Sprint-3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus iusto perspiciatis necessitatibus ullam libero eos odit ipsa corrupti debitis est, aspernatur ipsum fugiat, molestias doloremque quasi, ducimus voluptas vel aliquam maiores nulla incidunt saepe? Fugit sunt aliquid inventore provident?",
      taskId: "TX-4478",
      additionalComments:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus iusto perspiciatis necessitatibus ullam libero eos odit ipsa corrupti debitis est, aspernatur ipsum fugiat, molestias doloremque quasi, ducimus voluptas vel aliquam maiores nulla incidunt saepe? Fugit sunt aliquid inventore provident?",
      watchers: "Боровков Егор Вадимович",
      timeToSprintEnd: "2024-03-07",
      status: "InProgress",
    },
    {
      title: "Задача 4",
      subtitle: "Lorem ipsum dolor",
      author: "Ульянова Мария Владимировна",
      assignee: "Боровков Егор Вадимович",
      time: 12,
      hoursEnd: 4,
      daysEnd: 1,
      sprint: "Sprint-1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus iusto perspiciatis necessitatibus ullam libero eos odit ipsa corrupti debitis est, aspernatur ipsum fugiat, molestias doloremque quasi, ducimus voluptas vel aliquam maiores nulla incidunt saepe? Fugit sunt aliquid inventore provident?",
      taskId: "TX-5578",
      additionalComments:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus iusto perspiciatis necessitatibus ullam libero eos odit ipsa corrupti debitis est, aspernatur ipsum fugiat, molestias doloremque quasi, ducimus voluptas vel aliquam maiores nulla incidunt saepe? Fugit sunt aliquid inventore provident?",
      watchers: "Ульянова Мария Владимировна",
      timeToSprintEnd: "2024-02-29",
      status: "ToDo",
    }
  ]);

  const [localSprints, setLocalSprints] = useState([
    {
      sprintId: 1234232112,
      sprintName: "Sprint-1",
      sprintGoal: "Lorem ipsum dolor",
      sprintDuration: "2 недели",
      sprintStartDate: "2024-02-15",
      sprintEndDate: "2024-02-29",
    },
    {
      sprintId: 1234233418,
      sprintName: "Sprint-2",
      sprintGoal: "Lorem ipsum dolor",
      sprintDuration: "3 недели",
      sprintStartDate: "2024-02-17",
      sprintEndDate: "2024-03-09",
    },
    {
      sprintId: 1235552112,
      sprintName: "Sprint-3",
      sprintGoal: "Lorem ipsum dolor",
      sprintDuration: "1 неделя",
      sprintStartDate: "2024-02-29",
      sprintEndDate: "2024-03-07",
    },
  ]);

  useEffect(() => {
    // console.log(localUsers);
    // console.log(localSprints);
     //console.log(localTasks);
  }, [localUsers, localSprints, localTasks]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/active_sprint"
          element={
            <ActiveSprint
              propsLocalTasks={localTasks}
              propLocalSprints={localSprints}
            />
          }
        />
        <Route
          path="/admin_panel"
          element={
            <AdminPanel
              propsLocalTasks={localTasks}
              propsSetLocalTasks={setLocalTasks}
              propLocalSprints={localSprints}
              propSetLocalSprints={setLocalSprints}
              propsLocalUsers={localUsers}
              propsSetLocalUsers={setLocalUsers}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
