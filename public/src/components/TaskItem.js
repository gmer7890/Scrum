import React from 'react';

const TaskItem = ({ task, onComplete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onComplete(task.id)}
      />
      {task.name}
    </li>
  );
};

export default TaskItem;