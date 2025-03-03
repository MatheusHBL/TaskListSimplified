import React, { useState } from 'react';
import { Calendar, X, Edit, Check, Trash2 } from 'lucide-react';

const TaskItem = ({ task, onToggleComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const priorityColors = {
    'alta': 'bg-red-100 text-red-800',
    'média': 'bg-yellow-100 text-yellow-800',
    'baixa': 'bg-green-100 text-green-800'
  };

  const isDueSoon = (dueDate) => {
    if (!dueDate) return false;
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 2 && diffDays >= 0;
  };
  
  const isOverdue = (dueDate) => {
    if (!dueDate) return false;
    const due = new Date(dueDate);
    const today = new Date();
    return due < today;
  };

  const handleSaveEdit = () => {
    onEdit(task.id, editText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  const startEditing = () => {
    setEditText(task.text);
    setIsEditing(true);
  };

  return (
    <li className={`p-4 rounded-lg border ${task.completed ? 'bg-gray-100' : 'bg-white'}`}>
      {isEditing ? (
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button 
            onClick={handleSaveEdit}
            className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            <Check size={18} />
          </button>
          <button 
            onClick={handleCancelEdit}
            className="p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
              className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <div className="flex-1">
              <div className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.text}
              </div>
              <div className="mt-1 flex flex-wrap gap-2 text-sm">
                <span className={`px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}>
                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                </span>
                
                <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                  {task.category}
                </span>
                
                {task.dueDate && (
                  <span className={`px-2 py-0.5 rounded-full flex items-center ${
                    isOverdue(task.dueDate) ? 'bg-red-100 text-red-800' : 
                    isDueSoon(task.dueDate) ? 'bg-orange-100 text-orange-800' : 
                    'bg-blue-100 text-blue-800'
                  }`}>
                    <Calendar size={14} className="mr-1" />
                    {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex space-x-1">
            <button 
              onClick={startEditing}
              className="p-1 text-gray-500 hover:text-blue-500 rounded"
            >
              <Edit size={18} />
            </button>
            <button 
              onClick={() => onDelete(task.id)}
              className="p-1 text-gray-500 hover:text-red-500 rounded"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;