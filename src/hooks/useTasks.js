import { useState, useEffect } from 'react';

const useTasks = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks(prevTasks => [...prevTasks, task]);
    };

    const editTask = (updatedTask) => {
        setTasks(prevTasks => 
            prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
        );
    };

    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    const toggleCompletion = (id) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return {
        tasks,
        addTask,
        editTask,
        deleteTask,
        toggleCompletion,
    };
};

export default useTasks;