import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard/TaskCard";

const ActiveSprint = ({ propsLocalTasks, propLocalSprints }) => {
  const [tasksState, setTasksState] = useState([]);
  const [sprints, setSprints] = useState([]);

  const columns = {
    ToDo: {
      title: "ToDo",
      tasks: tasksState.filter((task) => task.status === "ToDo"),
    },
    InProgress: {
      title: "InProgress",
      tasks: tasksState.filter((task) => task.status === "InProgress"),
    },
    Testing: {
      title: "Testing",
      tasks: tasksState.filter((task) => task.status === "Testing"),
    },
    Done: {
      title: "Done",
      tasks: tasksState.filter((task) => task.status === "Done"),
    },
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedTasks = Array.from(tasksState);
    const movedTask = updatedTasks.find(
      (task) => task.taskId === result.draggableId
    );
    movedTask.status = columns[result.destination.droppableId].title;

    setTasksState(updatedTasks);
  };

  useEffect(() => {
    setTasksState(propsLocalTasks);
  }, [propsLocalTasks]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex" }}>
        {Object.keys(columns).map((columnId, index) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided) => (
              <div
                style={{
                  margin: 8,
                  width: 250,
                  border: "1px solid lightgrey",
                  borderRadius: 2,
                }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h3>{columns[columnId].title}</h3>
                {columns[columnId].tasks.map((task, index) => (
                  <Draggable
                    key={task.taskId}
                    draggableId={task.taskId}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          userSelect: "none",
                          padding: 8,
                          margin: "0 0 8px 0",
                          backgroundColor: "white",
                          ...provided.draggableProps.style,
                        }}
                      >
                        <TaskCard task={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default ActiveSprint;
