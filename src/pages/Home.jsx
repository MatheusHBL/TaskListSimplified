import React from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

const Home = () => {
    return (
        <div>
            <h1>Task List</h1>
            <AddTask />
            <TaskList />
        </div>
    );
};

export default Home;