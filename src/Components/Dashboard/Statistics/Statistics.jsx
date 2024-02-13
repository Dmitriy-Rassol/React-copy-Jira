import { useEffect, useState, useCallback } from "react";
import SelectComponent from "../../SelectComponent/SelectComponent";
import "./Statistics.scss";

const Statistics = ({ propsTeams, propsUsers, propsTasks }) => {
  const [selectedUser, setSelectedUser] = useState([]);
  const [filterUser, setFilterUser] = useState("");
  const [selectedTeam, setSelectedTeam] = useState([]);
  const [filterTeam, setFilterTeam] = useState("");
  const [tasks, setTasks] = useState(propsTasks);
  const [filterTasks, setFilterTasks] = useState([]);

  useEffect(() => {
    const users = propsUsers.map((user) => ({
      fullName: user.fullName,
      team: user.teamition,
    }));
    setSelectedUser(users);
  }, [propsUsers]);

  useEffect(() => {
    const teams = propsTeams.map((team) => team.teamName);
    setSelectedTeam(teams);
  }, [propsTeams]);

  useEffect(() => {
    setFilterTasks(propsTasks);
  }, [propsTasks]);

  const handleUserFilterChange = (event) => {
    const { value } = event.target;
    setFilterUser(value);
    setFilterTasks(tasks.filter((task) => task.assignee == value));
    if (!value) setFilterTasks(tasks);
    setFilterTeam("");
  };

  const handleTeamFilterChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setFilterTeam(value);
    const filterUsersTeam = selectedUser.filter((user) => user.team == value);
    let filteredTasks = [];

    filterUsersTeam.forEach((team) => {
      const tasksForTeam = tasks.filter(
        (task) => task.assignee == team.fullName
      );
      filteredTasks = filteredTasks.concat(tasksForTeam);
      setFilterTasks(filteredTasks);
    });

    if (!value) setFilterTasks(tasks);
    setFilterUser("");
  };

  const handleResetFilters = () => {
    setFilterUser("");
    setFilterTeam("");
    setFilterTasks(tasks);
  };
  return (
    <div className="statistics-container">
    <h2>Статистика</h2>
    <div className="select-components">
        <SelectComponent
          title={"Пользователи"}
          propsName={"users"}
          value={filterUser}
          onChangeProps={handleUserFilterChange}
          propsDefaultValue={"Выберите пользователя"}
          items={selectedUser}
        />
        <SelectComponent
          title={"Команды"}
          propsName={"user"}
          value={filterTeam}
          onChangeProps={handleTeamFilterChange}
          propsDefaultValue={"Выберите команду"}
          items={selectedTeam}
        />
        <button className="button-reset" onClick={handleResetFilters}>Сбросить</button>
      </div>

      <div>
        {filterTasks.map((task) => (
          <div className="task-item" key={task.taskId}>
            <div>
              <h4 className="task-title">{task.title}</h4>
              <div className="task-info">
                <div>
                  <span>Автор:</span> {task.author}
                </div>
                <div>
                  <span>Исполнитель:</span> {task.assignee}
                </div>
                <div>
                  <span>Описание:</span> {task.description}
                </div>
                {task.additionalComments && (
                  <div>
                    <span>Дополнительные комментарии:</span>{" "}
                    {task.additionalComments}
                  </div>
                )}
                {task.watchers && (
                  <div>
                    <span>Наблюдатель:</span> {task.watchers}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
