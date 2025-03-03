import React from 'react';
import { TaskProvider } from './contexts/TaskContext';
import Home from './pages/Home';
import './styles/App.css';

const App = () => {
  return (
    <TaskProvider>
      <div className="App">
        <Home />
      </div>
    </TaskProvider>
  );
};

export default App;