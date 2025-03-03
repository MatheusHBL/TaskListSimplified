import React, { useState, useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const AddTask = () => {
    const { addTask } = useContext(TaskContext);
    const [taskName, setTaskName] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName) {
            addTask({ name: taskName, category, priority, deadline });
            setTaskName('');
            setCategory('');
            setPriority('');
            setDeadline('');
        }
    };

    return (
        // <form onSubmit={handleSubmit}>
        //     <input
        //         type="text"
        //         placeholder="Task Name"
        //         value={taskName}
        //         onChange={(e) => setTaskName(e.target.value)}
        //         required
        //     />
        //     <input
        //         type="text"
        //         placeholder="Category"
        //         value={category}
        //         onChange={(e) => setCategory(e.target.value)}
        //     />
        //     <input
        //         type="text"
        //         placeholder="Priority"
        //         value={priority}
        //         onChange={(e) => setPriority(e.target.value)}
        //     />
        //     <input
        //         type="date"
        //         value={deadline}
        //         onChange={(e) => setDeadline(e.target.value)}
        //     />
        //     <button type="submit">Add Task</button>
        // </form>
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-col md:flex-row gap-2 mb-2">
                    <input
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder="Nova tarefa..."
                        className="flex-grow p-2 border rounded"
                    />
                    <button
                        onClick={addTask}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Adicionar
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                    <div>
                        <label className="block text-sm font-medium mb-1">Prioridade</label>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="high">Alta</option>
                            <option value="medium">Média</option>
                            <option value="low">Baixa</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Categoria</label>
                        <div className="flex gap-2">
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Sem categoria</option>
                                <option value="pessoal">Pessoal</option>
                                <option value="trabalho">Trabalho</option>
                                <option value="estudo">Estudo</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Data limite</label>
                        <input
                            type="date"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;