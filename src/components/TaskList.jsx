import React, { useContext } from 'react';
import { TaskContext, useTasks } from '../contexts/TaskContext';
import Task from './Task';

const TaskList = () => {
    // const { tasks } = useContext(TaskContext);
    const { tasks, deleteTask, toggleTaskCompletion } = useTasks();

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <Task key={task.id} task={task} onDelete={deleteTask} onToggleComplete={toggleTaskCompletion} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;