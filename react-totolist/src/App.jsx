import React, { useState } from "react";
import "./App.css";
import TaskItem from "./component/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes

    const keyName=event.target.name;
    const value=event.target.name == 'completed' ? event.target.checked :event.target.value

    console.log(event)

    setFormState({
      ...formState,
       [keyName]: value,
    })
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    const newTaskArray=[...tasks,formState]
    setTasks(newTaskArray)
  }

  return (
    <>
      <div className="add-task-card">
      
        <h2>ToDo- List</h2>
        <form onSubmit={handleSubmit}>
        <div>
          <input name="task" type="text" placeholder="Add Task" value={formState.task} onChange={handleChange} className="input"/>
        </div>
        <div>
          <label>

            Completed:{""}
            <input name="completed" 
            type="checkbox" 
            value={formState.completed} 
            onChange={handleChange}
            className="input"/>
            
          </label>
          </div>
        <div>
          <select name="taskAssignedTo" value={formState.taskAssignedTo} onChange={handleChange} className="input">
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          </div>
          <button type="submit" className="input">Add Task</button>
        </form>
      </div>
      <hr />

      <div className="output">
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} setTasks={setTasks} />
      ))}
      </div>
    </>
  );
}

export default App;