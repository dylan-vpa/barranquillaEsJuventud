"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function AdminPage() {
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
      // Redirigir al dashboard
      window.location.href = "/dashboard";
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-azul via-blue-700 to-blue-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-azul to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-azul mb-2">
            Acceso Administrativo
          </h2>
          <p className="text-gray-600">
            Panel de gestión para la Semana de la Juventud
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Usuario
            </label>
            <Input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              className="rounded-xl border-gray-200 focus:ring-2 focus:ring-azul focus:border-transparent"
              placeholder="Ingresa tu usuario"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="pr-10 rounded-xl border-gray-200 focus:ring-2 focus:ring-azul focus:border-transparent"
                placeholder="Ingresa tu contraseña"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "Ocultar" : "Mostrar"}
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
            Acceder al Dashboard
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Credenciales de prueba: admin / barranquilla2024
          </p>
          <Link href="/" className="text-azul hover:text-blue-600 text-sm font-medium">
            ← Volver al sitio principal
          </Link>
        </div>
      </motion.div>
    </div>
  );
} 