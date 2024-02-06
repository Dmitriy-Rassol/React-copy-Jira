const SprintInfo = ({ sprint }) => {
  return (
    <div>
      <h2>Информация о текущем спринте</h2>
      <h3>{sprint.productTab.title}</h3>
      <p>{sprint.productTab.description}</p>
      
      <h3>{sprint.backlogTab.title}</h3>
      <ul>
        {sprint.backlogTab.items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
  
  export default SprintInfo;