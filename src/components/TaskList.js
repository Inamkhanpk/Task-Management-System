import React from "react";
import TaskItem from "./TaskItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskList = ({ apitasks, setApiTasks }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(apitasks);
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setApiTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {apitasks.map((task, index) => {
              return (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <div className="bg-[#f38e3d] m-[5rem] p-[2rem] rounded-[5rem]">
                        <TaskItem
                          key={task.id}
                          task={task}
                          index={task.id}
                          apitasks={apitasks}
                          setApiTasks ={setApiTasks }
                        />
                      </div>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
