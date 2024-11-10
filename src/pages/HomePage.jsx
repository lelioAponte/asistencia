import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar'; // Importa el componente NavBar

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Barra de navegación */}
      <NavBar /> {/* Usamos el componente NavBar */}
      {/* Contenido principal del dashboard */}
      <div className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">SISTEMA DE ASISTENCIA</h1>
          <button
            onClick={() => navigate("/crear-asistencia")} // Cambia la ruta según tu necesidad
            className="px-4 py-2 bg-customblue text-white rounded-lg shadow hover:bg-customRed transition duration-200 transform hover:scale-105"
          >
            nuevo registro
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow-md">ASISTENCIA 1</div>
          <div className="bg-white p-6 rounded shadow-md">ASISTENCIA 2</div>
          <div className="bg-white p-6 rounded shadow-md">ASISTENCIA 3</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
