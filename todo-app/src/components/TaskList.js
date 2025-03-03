import React from 'react';
import TaskItem from './TaskItem';
import StatusSummary from './StatusSummary';

const TaskList = ({ 
  tasks, 
  filter, 
  categoryFilter,
  onToggleComplete, 
  onDeleteTask, 
  onEditTask 
}) => {
  // Filtrar tarefas conforme os critérios de filtro
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active' && task.completed) return false;
    if (filter === 'completed' && !task.completed) return false;
    if (categoryFilter !== 'all' && task.category !== categoryFilter) return false;
    return true;
  });

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Suas Tarefas</h2>
      
      {filteredTasks.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Nenhuma tarefa encontrada
        </div>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggleComplete={onToggleComplete}
              onDelete={onDeleteTask}
              onEdit={onEditTask}
            />
          ))}
        </ul>
      )}
      
      <StatusSummary tasks={tasks} />
    </div>
  );
};

export default TaskList;