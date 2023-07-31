import React, { useState, useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";
import SweetAlert from "./../common/sweetAlert";
import useAOS from "../customHook/customAOS";
import axios from "axios";
const TaskForm = ({ user, setApiTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useAOS();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      title,
      description,
      completed: false,
      groupId: user.groupId,
    };
    axios
      .post("http://localhost:5000/tasks", newTask)
      .then((response) => {
        if (title.trim() !== "" && description.trim() !== "") {
          setApiTasks((prevTasks) => [...prevTasks, response.data]);
          setTitle("");
          setDescription("");
          SweetAlert("Task Added", "Task has been Added", "success");
        } else {
          SweetAlert("Empty Field", "There is empty field", "error");
        }
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  return (
    <div>
      <form>
        <div
          className="mr-[1rem] mb-[1rem] text-center"
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className=" w-2/4 text-center border-b-4 border-indigo-500 rounded mt-[2rem] text-[4rem] shadow-2xl"
          />
        </div>
        <div
          className="mr-[1rem] mb-[1rem] text-center"
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className=" w-2/4  text-center border-b-4 border-indigo-500  rounded mt-[2rem] text-[4rem] shadow-2xl"
          />
        </div>

        <div
          className="grid-container mt-[5rem] flex justify-center "
          data-aos="zoom-in"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <button
            type="submit"
            className="  bg-[#d63384] rounded text-black text-b flex justify-center items-center p-[1rem]"
            onClick={handleSubmit}
          >
            <div className="text-[4rem] text-white mr-[2rem] ">Add task</div>
            <IconContext.Provider
              value={{ style: { fontSize: "4rem", color: "#f38e3d" } }}
            >
              <div>
                <FaPlus />
              </div>
            </IconContext.Provider>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
