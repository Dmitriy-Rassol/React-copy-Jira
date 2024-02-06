import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard/TaskCard";

const ActiveSprint = () => {
  const [tasks, setTasks] = useState([
    {
      id: "task1",
      title: "Задача 1",
      description: "Описание задачи 1",
      assignee: "Пользователь 1",
      status: "ToDo",
    },
    {
      id: "task2",
      title: "Задача 2",
      description: "Описание задачи 2",
      assignee: "Пользователь 2",
      status: "InProgress",
    },
    {
      id: "task3",
      title: "Задача 3",
      description: "Описание задачи 3",
      assignee: "Пользователь 3",
      status: "Testing",
    },
    {
      id: "task4",
      title: "Задача 4",
      description: "Описание задачи 4",
      assignee: "Пользователь 1",
      status: "Done",
    },
  ]);

  const columns = {
    ToDo: {
      title: 'ToDo',
      tasks: tasks.filter(task => task.status === 'ToDo')
    },
    InProgress: {
      title: 'InProgress',
      tasks: tasks.filter(task => task.status === 'InProgress')
    },
    Testing: {
      title: 'Testing',
      tasks: tasks.filter(task => task.status === 'Testing')
    },
    Done: {
      title: 'Done',
      tasks: tasks.filter(task => task.status === 'Done')
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedTasks = Array.from(tasks);
    const movedTask = updatedTasks.find(task => task.id === result.draggableId);
    movedTask.status = columns[result.destination.droppableId].title;

    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex' }}>
        {Object.keys(columns).map((columnId, index) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided) => (
              <div
                style={{ margin: 8, width: 250, border: '1px solid lightgrey', borderRadius: 2 }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h3>{columns[columnId].title}</h3>
                {columns[columnId].tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          userSelect: 'none',
                          padding: 8,
                          margin: '0 0 8px 0',
                          backgroundColor: 'white',
                          ...provided.draggableProps.style
                        }}
                      >
                        <TaskCard task={task}/>
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