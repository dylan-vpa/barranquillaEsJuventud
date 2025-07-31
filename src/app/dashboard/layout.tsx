"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");

  // Credenciales de ejemplo (en producción usarías una base de datos)
  const validCredentials = {
    username: "admin",
    password: "barranquilla2024"
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === validCredentials.username && 
        credentials.password === validCredentials.password) {
      setIsAuthenticated(true);
      localStorage.setItem("dashboard-auth", "true");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("dashboard-auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("dashboard-auth");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-azul via-blue-700 to-blue-800 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-azul to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-azul mb-2">
              Acceso Administrativo
            </h2>
            <p className="text-gray-600">
              Ingresa tus credenciales para acceder al dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Usuario
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="pl-10 rounded-xl border-gray-200 focus:ring-2 focus:ring-azul focus:border-transparent"
                  placeholder="Ingresa tu usuario"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="pl-10 pr-10 rounded-xl border-gray-200 focus:ring-2 focus:ring-azul focus:border-transparent"
                  placeholder="Ingresa tu contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-gradient-to-r from-ruby/10 to-red-600/10 border border-ruby/20 rounded-xl p-4">
                <p className="text-ruby text-sm">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-azul to-blue-600 text-white hover:from-azul/90 hover:to-blue-600/90 font-semibold text-lg py-3 rounded-xl"
            >
              Iniciar Sesión
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Credenciales de prueba: admin / barranquilla2024
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header con logout */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-azul to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BJ</span>
              </div>
              <span className="font-bold text-xl text-azul">Dashboard Administrativo</span>
            </div>
            
            <Button
              onClick={handleLogout}
              className="bg-gradient-to-r from-ruby to-red-600 text-white hover:from-ruby/90 hover:to-red-600/90 font-semibold"
            >
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
} 