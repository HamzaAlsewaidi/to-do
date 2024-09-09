import "./App.css";
import { useState } from "react";

let nextId = 1;
function App() {
  const [taskName, setTaskName] = useState("");
  const [editTask, setEditTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const tasksList = tasks.map((task) => {
    return (
      <div className="justify-between flex bg-indigo-500 mb-2 p-3 px-6 rounded-2xl">
        <div>
          <li key={task.id} className="text-xl text-white list-none">
            {task.name}
          </li>
        </div>
        <div>
          <button
            onClick={() => {
              handleEditClick(task.id);
            }}
            className="text-white mr-4 hover:text-indigo-950 transition-all duration-200"
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDeleteClick(task.id);
            }}
            className="text-white hover:text-indigo-950 transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  function handleTasksList() {
    setTasks([...tasks, { id: nextId, name: taskName }]);
    nextId = nextId + 1;
  }

  function handleDeleteClick(id) {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
  }

  function handleEditClick(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        let newTask = { ...task, name: editTask };
        return newTask;
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <div className="bg-indigo-950 rounded-3xl text-center p-5 sm:p-20 my-[10rem] mx-10 md:mx-[10rem] lg:mx-[20rem]">
        <h1 className="text-3xl sm:text-5xl font-bold text-white">
          To Do <span className="text-indigo-400">List</span>
        </h1>
        <div className="flex my-10">
          <input
            className="p-1 w-[80%] border-2 border-indigo-400 bg-inherit text-white focus:outline-none"
            value={taskName}
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
          ></input>
          <button
            className="w-[20%] bg-indigo-500 text-white text-sm sm:text-xl hover:bg-indigo-700 transition-all duration-200"
            onClick={handleTasksList}
          >
            Add Task
          </button>
        </div>
        <div className="flex my-10">
          <input
            className="p-1 w-[80%] border-2 border-indigo-400 bg-inherit text-white focus:outline-none"
            value={editTask}
            onChange={(e) => {
              setEditTask(e.target.value);
            }}
          ></input>
          <h1 className="w-[20%] bg-indigo-500 text-white text-sm sm:text-xl pt-1">
            Edit Task
          </h1>
        </div>
        {tasksList}
      </div>
    </div>
  );
}

export default App;
