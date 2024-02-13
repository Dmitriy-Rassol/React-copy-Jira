import { useEffect, useState } from "react";
import "./CurrentSprintInfo.scss";
const CurrentSprintInfo = ({ propsSprintsInfo }) => {
  const [infoSprints, setInfoSprints] = useState(propsSprintsInfo);

  useEffect(() => {
    setInfoSprints(propsSprintsInfo);
    console.log(propsSprintsInfo);
  }, [propsSprintsInfo]);

  return (
    <div className="sprint-info">
      <h2>Информация о спринтах</h2>
      {infoSprints.map((sprint, i) => (
        <div key={i} className="sprint-container">
          <h3>{sprint.sprintName}</h3>
          <div className="sprint-container__desc">
            <p>
              <span>Цели:</span> {sprint.sprintGoal}
            </p>
            <p>
              <span>Начало спринта:</span> {sprint.sprintStartDate}
            </p>
            <p>
              <span>Конец Спринта:</span> {sprint.sprintEndDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentSprintInfo;
