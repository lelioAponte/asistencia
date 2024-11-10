import React, { useState } from "react";
import client from "../supabase/client";

export const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await client.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      setIsModalOpen(true); // Muestra el modal de éxito
    } catch (error) {
      console.error("Error al registrarse:", error);
      setErrorMessages(error.message);
      setIsErrorModalOpen(true); // Muestra el modal de error
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await client.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-customblue">
      {/* Modal de Registro Exitoso */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-4 text-green-600">
              ¡Registro Exitoso!
            </h2>
            <p className="text-center text-gray-700 mb-6">
              Tu cuenta ha sido creada exitosamente.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal de Error */}
      {isErrorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-4 text-red-600">
              Error
            </h2>
            <p className="text-center text-gray-700 mb-6">{errorMessages}</p>
            <button
              onClick={closeErrorModal}
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-500"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Columna izquierda - Imagen */}
      <div className="hidden lg:flex w-1/2 items-center justify-center">
        <img
          src="https://www.unipamplona.edu.co/unipamplona/portalIG/home_1/recursos/anuncios_2021/noviembre/16112021/foto_1_acreditacion.jpg"
          alt="Brand Logo"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Columna derecha - Formulario */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://www.unipamplona.edu.co/unipamplona/portalIG/home_1/recursos/corporativo/26072024/unipamplona_64_.png"
            className="mx-auto h-30 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.49 10.49 0 0 1 12 19.5 10.5 10.5 0 0 1 4.06 12M21 21l-3.87-3.87M9.88 9.88A3.5 3.5 0 0 0 12 15.5a3.5 3.5 0 0 0 2.12-5.62" />
                      <path d="M1 1l22 22" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12S5 4.5 12 4.5s11 7.5 11 7.5-4 7.5-11 7.5S1 12 1 12z" />
                      <circle cx="12" cy="12" r="3.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-customblue px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-customRed px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={handleSignIn}
              >
                Sign in
              </button>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-md border border-gray-300 px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <img
                  src="https://banner2.cleanpng.com/20190731/uqk/kisspng-google-icon-1713874997698.webp"
                  alt="Google Logo"
                  className="h-5 w-5 mr-2"
                />
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
