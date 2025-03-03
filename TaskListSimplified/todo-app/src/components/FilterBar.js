import React from 'react';
import { Filter } from 'lucide-react';

const FilterBar = ({ 
  filter, 
  setFilter, 
  categoryFilter, 
  setCategoryFilter, 
  categories 
}) => {
  return (
    <div className="mb-6 bg-gray-50 p-4 rounded-lg">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center">
          <Filter size={18} className="text-gray-500 mr-2" />
          <span className="text-sm font-medium text-gray-700">Status:</span>
        </div>
        
        <div className="flex space-x-1">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 text-sm rounded-md ${filter === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-700'}`}
          >
            Todas
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-3 py-1 text-sm rounded-md ${filter === 'active' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-700'}`}
          >
            Ativas
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1 text-sm rounded-md ${filter === 'completed' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-700'}`}
          >
            Concluídas
          </button>
        </div>
        
        <div className="flex items-center ml-4">
          <span className="text-sm font-medium text-gray-700 mr-2">Categoria:</span>
          <select
            className="px-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">Todas as categorias</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
            <option value="Sem categoria">Sem categoria</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;