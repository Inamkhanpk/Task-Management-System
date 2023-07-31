import React, { useState, useEffect } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";

import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const mockUserId = 1;
    axios
      .get(`http://localhost:5000/users/${mockUserId}`)
      .then((response) => {
        const userData = response.data;
        setUser(userData);
        axios
          .get(`http://localhost:5000/tasks?groupId=${userData.groupId}`)
          .then((response) => {
            setTasks(response.data);
          })
          .catch((error) => {
            console.error("Error fetching tasks:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="md:container sm:container  mx-auto">
      <Navbar />
      <TaskForm user={user} setApiTasks={setTasks} />
      <TaskList apitasks={tasks} setApiTasks={setTasks} />
    </div>
  );
}

export default App;
