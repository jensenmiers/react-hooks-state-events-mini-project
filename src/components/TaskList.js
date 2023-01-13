import React from "react";
import Task from './Task';

function TaskList({tasks, currentCategory}) {
  const taskList = tasks.map(task => <Task key={task.text} task={task.text} category={task.category}/>)
  const filteredTasks = taskList.filter(task => {

    if (currentCategory === 'All') { return true
    } else { 
        return task.props.category === currentCategory}
  }
  )
    

  return (
    <div className="tasks">
      {filteredTasks}
      
    </div>
  );
}

export default TaskList;
