import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTask({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="mt-4">
      <h2>Crear Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label">Título de la Tarea</label>
          <input 
            type="text" 
            className="form-control" 
            id="taskTitle" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Ingresa el título de la tarea" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">Descripción de la Tarea</label>
          <textarea 
            className="form-control" 
            id="taskDescription" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Ingresa la descripción de la tarea" 
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Agregar Tarea</button>
      </form>
    </div>
  );
}

export default TaskForm;
