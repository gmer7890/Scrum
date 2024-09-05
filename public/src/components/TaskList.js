import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onComplete }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onComplete={onComplete} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;