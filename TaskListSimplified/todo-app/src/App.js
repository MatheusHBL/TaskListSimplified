import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import CategoryModal from './components/CategoryModal';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  // Estado utilizando o hook customizado para persistência local
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [categories, setCategories] = useLocalStorage('categories', ['Pessoal', 'Trabalho', 'Estudos']);
  
  // Estado para filtros e modal
  const [filter, setFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  
  // Funções para gerenciar tarefas
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const editTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
  };
  
  // Funções para gerenciar categorias
  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };
  
  const deleteCategory = (categoryToDelete) => {
    setCategories(categories.filter(cat => cat !== categoryToDelete));
    // Atualizar tarefas que tinham esta categoria
    setTasks(tasks.map(task => 
      task.category === categoryToDelete ? { ...task, category: 'Sem categoria' } : task
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Lista de Tarefas</h1>
      
      <TaskForm 
        onAddTask={addTask} 
        categories={categories}
        onShowCategoryModal={() => setShowCategoryModal(true)}
      />
      
      <FilterBar 
        filter={filter}
        setFilter={setFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        categories={categories}
      />
      
      <TaskList 
        tasks={tasks} 
        filter={filter}
        categoryFilter={categoryFilter}
        onToggleComplete={toggleComplete}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
      
      <CategoryModal 
        showModal={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        categories={categories}
        onAddCategory={addCategory}
        onDeleteCategory={deleteCategory}
      />
    </div>
  );
};

export default App;