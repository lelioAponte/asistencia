import React from "react";

const FomrRegitro = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sección del formulario */}
      <div className="w-full md:w-1/2 p-6 md:p-12 bg-white shadow-md flex items-center justify-center">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Registro de Estudiantes
          </h2>

          {/* Formulario */}
          <form className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-600 mb-1">Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-600 mb-1">Apellido</label>
              <input
                type="text"
                placeholder="Apellido"
                className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold text-gray-600 mb-1">Programa</label>
              <input
                type="text"
                placeholder="Programa"
                className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-600 mb-1">Cédula</label>
              <input
                type="text"
                placeholder="Cédula"
                className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold text-gray-600 mb-1">Firma (URL)</label>
              <input
                type="text"
                placeholder="URL de la firma"
                className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold text-gray-600 mb-1">Huella Digital (Archivo)</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
              >
                Registrar Estudiante
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Sección de la imagen de fondo */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://files.alerta.rcnradio.com/alerta_santander/public/2021-09/unipamplona_0.jpg?Fdr5qG5wGvK.wBIl.W6VhwsM4ZhC6g_I')",
        }}
      ></div>
    </div> 
  );
};

export default FomrRegitro;
