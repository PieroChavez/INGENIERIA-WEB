import React from 'react';

function TaskTable({ tasks }) {
  return (
    <div className="mt-4">
      <h2>Lista de Tareas</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
