import React from 'react';

const StatusSummary = ({ tasks }) => {
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = tasks.length - completedTasks;
  
  return (
    <div className="mt-4 text-sm text-gray-600">
      Total: {tasks.length} tarefas | 
      Concluídas: {completedTasks} | 
      Pendentes: {pendingTasks}
    </div>
  );
};

export default StatusSummary;