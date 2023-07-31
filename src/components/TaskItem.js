import React from "react";
import { FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";
import SweetAlert from "./../common/sweetAlert";

import axios from "axios";

const TaskItem = ({ task, apitasks, setApiTasks }) => {
  const handleMarkComplete = (taskId) => {
    const updatedTasks = apitasks.map((tas) =>
      tas.id === taskId ? { ...tas, completed: !tas.completed } : tas
    );

    setApiTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    axios
      .delete(`http://localhost:5000/tasks/${taskId}`)
      .then(() => {
        setApiTasks(apitasks.filter((tas) => tas.id !== taskId));
        SweetAlert("Task Deleted", "Task has been Deleted", "error");
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  return (
    <div className="" data-aos="zoom-out">
      <div className="text-[5rem] mx-auto w-[40rem] text-ellipsis overflow-hidden whitespace-nowrap">
        <b>Title:</b>
        {task.title}
      </div>
      <div className=" text-[5rem] mx-auto w-[60rem]  text-ellipsis overflow-hidden whitespace-nowrap">
        <b>Description:</b>
        {task.description}
      </div>

      <div className="flex justify-around">
        <div className="grid-container">
          <button
            className="bg-[#d63384] rounded-[2rem] text-[5rem] p-[1rem]"
            onClick={() => handleMarkComplete(task.id)}
          >
            {task.completed ? "Completed" : "Incomplete"}
          </button>
        </div>
        <div className="grid-container flex align-cemter">
          <button onClick={() => handleDeleteTask(task.id)}>
            <IconContext.Provider
              value={{ style: { fontSize: "4rem", color: "rgb(0, 123, 255)" } }}
            >
              <div>
                <FaTrash />
              </div>
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
