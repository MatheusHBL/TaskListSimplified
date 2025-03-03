import React, { useContext, useState, useEffect } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const EditTask = ({ taskId, onClose }) => {
  const { tasks, editTask } = useContext(TaskContext);
  const [task, setTask] = useState<Task | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    const currentTask = tasks.find(t => t.id === taskId);
    if (currentTask) {
      setTask(currentTask);
      setTitle(currentTask.title);
      setDescription(currentTask.description);
      setDeadline(currentTask.deadline);
      setPriority(currentTask.priority);
    }
  }, [taskId, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      editTask({ ...task, title, description, deadline, priority });
      onClose();
    }
  };

  if (!task) return null;

  return (
    <div className="edit-task-modal">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditTask;