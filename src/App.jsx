import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import CrearRegistro from "./pages/CrearRegistro";
import client from "./supabase/client";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Guardar la última ruta en localStorage solo si el usuario está autenticado
  useEffect(() => {
    const saveLastVisitedPath = async () => {
      const { data: { session } } = await client.auth.getSession();
      if (session) {
        localStorage.setItem("lastVisitedPath", location.pathname);
      }
    };
    saveLastVisitedPath();
  }, [location]);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await client.auth.getSession();
      if (!session) {
        // Si no hay sesión, redirigir a la página de login
        navigate("/login");
      } else {
        // Si hay sesión, recuperar la última ruta visitada
        const lastVisitedPath = localStorage.getItem("lastVisitedPath");
        
        // Redirigir a la última ruta solo si existe y el usuario está en login
        if (lastVisitedPath && location.pathname === "/login") {
          navigate(lastVisitedPath);
        }
      }
    };
    checkSession();

    const { data: authListener } = client.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      } else if (location.pathname === "/login") {
        // Redirigir a HomePage solo al iniciar sesión desde la página de login
        navigate("/");
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [navigate, location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/crear-registro" element={<CrearRegistro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
