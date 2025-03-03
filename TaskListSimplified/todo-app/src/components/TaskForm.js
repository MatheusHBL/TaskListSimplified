import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TaskForm = ({ onAddTask, categories, onShowCategoryModal }) => {
  const [newTask, setNewTask] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('média');
  const [newTaskCategory, setNewTaskCategory] = useState('');
  const [newTaskDueDate, setNewTaskDueDate] = useState('');

  const handleSubmit = () => {
    if (newTask.trim() === '') return;
    
    onAddTask({
      id: Date.now(),
      text: newTask,
      completed: false,
      priority: newTaskPriority,
      category: newTaskCategory || 'Sem categoria',
      dueDate: newTaskDueDate || null,
      createdAt: new Date().toISOString()
    });
    
    // Resetar o formulário
    setNewTask('');
    setNewTaskPriority('média');
    setNewTaskCategory('');
    setNewTaskDueDate('');
  };

  return (
    <div className="mb-8 bg-gray-50 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Nova Tarefa</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Digite uma nova tarefa..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center transition-colors"
            onClick={handleSubmit}
          >
            <Plus size={18} className="mr-1" /> Adicionar
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prioridade</label>
            <select
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={newTaskPriority}
              onChange={(e) => setNewTaskPriority(e.target.value)}
            >
              <option value="baixa">Baixa</option>
              <option value="média">Média</option>
              <option value="alta">Alta</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
            <div className="flex">
              <select
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={newTaskCategory}
                onChange={(e) => setNewTaskCategory(e.target.value)}
              >
                <option value="">Sem categoria</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <button 
                className="ml-2 bg-gray-200 hover:bg-gray-300 p-2 rounded-md"
                onClick={onShowCategoryModal}
              >
                <Plus size={18} />
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data limite</label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={newTaskDueDate}
              onChange={(e) => setNewTaskDueDate(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;