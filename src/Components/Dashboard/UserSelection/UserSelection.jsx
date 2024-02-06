import { useState } from "react";

const UserSelection = ({users, teams, onSelectUser, onSelectTeam }) => {
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
    onSelectUser(e.target.value);
  };

  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
    onSelectTeam(e.target.value);
  };

  return (
    <div>
      <h2>Выбор пользователя и команды</h2>
      <select value={selectedUser} onChange={handleUserChange}>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <select value={selectedTeam} onChange={handleTeamChange}>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelection;
