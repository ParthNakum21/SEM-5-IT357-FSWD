import React from 'react';

function TaskList(){
    const task1 = "Task 1: hard-coded variable 1";
    const task2 = "Task 2: hard-coded variable 1";

    const tasksArray = ["Task3: Array 1","Task4: Array 2","Task5: Array 3","Task6: Array 4"]; //array of task

    return(
        <div className='task-list'>
            <br/>
            <h1>Task List</h1>

            {/* conditionally rendered task */}
            {task1 && <p>{task1}</p>}
            {task2 && <p>{task2}</p>}

            {/* reder task from array */}
            {tasksArray.map((task,index)=>(
                <p key={index}>{task}</p>
            ))}
            <br/>
        </div>
    );
}

export default TaskList;