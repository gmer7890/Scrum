import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Set up project structure', completed: false },
    { id: 2, name: 'Implement SCRUM methodology', completed: false },
  ]);

  const addTask = (taskName) => {
    setTasks([...tasks, { id: tasks.length + 1, name: taskName, completed: false }]);
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>SCRUM Task Management</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onComplete={completeTask} />
    </div>
  );
};

export default App;