import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskForm from '../src/components/TaskFrom';
import TaskTable from './components/TaskTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <Router>
      <div className="container">
        {/* Header con navegación */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">PIERO TECH</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Formulario de Tareas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tasks">Tabla de Tareas</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Definir las rutas */}
        <Routes>
          <Route path="/" element={<TaskForm addTask={addTask} />} />
          <Route path="/tasks" element={<TaskTable tasks={tasks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
