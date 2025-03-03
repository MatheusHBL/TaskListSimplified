import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

const CategoryModal = ({ 
  showModal, 
  onClose, 
  categories, 
  onAddCategory, 
  onDeleteCategory 
}) => {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() === '' || categories.includes(newCategory)) return;
    onAddCategory(newCategory);
    setNewCategory('');
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">Gerenciar Categorias</h3>
        
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nova categoria..."
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
            onClick={handleAddCategory}
          >
            Adicionar
          </button>
        </div>
        
        <div className="max-h-60 overflow-y-auto">
          <ul className="space-y-2">
            {categories.map(category => (
              <li key={category} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span>{category}</span>
                <button
                  onClick={() => onDeleteCategory(category)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;