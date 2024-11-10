import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import client from "../supabase/client";

const NavBar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // Estado para el modal de cierre de sesión
  const [showDropdown, setShowDropdown] = useState(false); // Estado para el menú desplegable
  const dropdownRef = useRef(null); // Ref para detectar clics fuera del menú

  const handleSignOut = () => {
    client.auth.signOut();
    navigate("/login");
  };

  // Cierra el menú desplegable si el usuario hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-customblue text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img
          src="https://www.unipamplona.edu.co/unipamplona/portalIG/home_1/recursos/corporativo/25082009/escudo.jpg"
          alt="Logo"
          className="h-8 w-8 rounded-full"
        />
        <span className="font-semibold">UNIVERSIDAD DE PAMPLONA</span>
      </div>

      {/* Menú en pantalla grande */}
      <div className="hidden md:flex items-center space-x-4">
        <button onClick={() => navigate("/")} className="hover:bg-customRed px-3 py-2 rounded">
          INICIO
        </button>
        <button onClick={() => navigate("/crear-registro")} className="hover:bg-customRed px-3 py-2 rounded">
          REGISTRAR
        </button>
        <button onClick={() => navigate("/exportar")} className="hover:bg-customRed px-3 py-2 rounded">
          EXPORTAR
        </button>
        <button onClick={() => setShowModal(true)} className="hover:bg-customRed px-3 py-2 rounded">
          CERRAR SESIÓN
        </button> 
      </div>

      {/* Menú desplegable en pantalla pequeña */}
      <div className="md:hidden relative" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="hover:bg-gray-700 p-2 rounded-full focus:outline-none"
        >
          <FiMenu size={24} />
        </button>

        {/* Opciones del menú desplegable */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg z-50">
            <button onClick={() => { setShowDropdown(false); navigate("/"); }} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
              INICIO
            </button>
            <button onClick={() => { setShowDropdown(false); navigate("/crear-registro"); }} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
              REGISTRAR
            </button>
            <button onClick={() => { setShowDropdown(false); navigate("/exportar"); }} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
              EXPORTAR
            </button>
            <button onClick={() => { setShowDropdown(false); setShowModal(true); }} className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-red-600">
              CERRAR SESIÓN
            </button>
          </div>
        )}
      </div>

      {/* Modal de confirmación para cerrar sesión */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4 text-black">
              ¿Estás seguro que deseas cerrar sesión?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Sí, cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
