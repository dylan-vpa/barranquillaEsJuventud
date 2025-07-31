"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { 
  User, 
  Calendar, 
  GraduationCap, 
  Mail, 
  Phone, 
  CheckCircle,
  ArrowLeft,
  Star,
  Award
} from "lucide-react";
import Link from "next/link";

export default function InscripcionPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    email: "",
    telefono: "",
    colegio: "",
    grado: "",
    actividades: [] as string[]
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const actividades = [
    { id: "foro", label: "Viernes 15 de Agosto: Foro-Conversatorio", desc: "Fábrica de Cultura - 1:00 PM - 5:00 PM" },
    { id: "bailaton", label: "Sábado 16 de Agosto: Bailatón Juvenil", desc: "Espacio público - 8:00 AM - 11:00 AM" },
    { id: "mural", label: "Domingo 17 de Agosto: Mural Colectivo", desc: "Punto crítico por intervenir - 8:00 AM - 12:00 PM" }
  ];

  const grados = [
    "6° Grado", "7° Grado", "8° Grado", "9° Grado", 
    "10° Grado", "11° Grado", "Universidad"
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.apellido.trim()) newErrors.apellido = "El apellido es requerido";
    if (!formData.edad) newErrors.edad = "La edad es requerida";
    if (formData.edad && (parseInt(formData.edad) < 12 || parseInt(formData.edad) > 25)) {
      newErrors.edad = "La edad debe estar entre 12 y 25 años";
    }
    if (!formData.email.trim()) newErrors.email = "El email es requerido";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    if (!formData.colegio.trim()) newErrors.colegio = "El colegio es requerido";
    if (!formData.grado) newErrors.grado = "El grado es requerido";
    if (formData.actividades.length === 0) {
      newErrors.actividades = "Debes seleccionar al menos una actividad";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí iría la lógica para enviar los datos
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleActividadChange = (actividadId: string) => {
    setFormData(prev => ({
      ...prev,
      actividades: prev.actividades.includes(actividadId)
        ? prev.actividades.filter(id => id !== actividadId)
        : [...prev.actividades, actividadId]
    }));
    if (errors.actividades) {
      setErrors(prev => ({ ...prev, actividades: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-black-dark flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-black-dark rounded-3xl p-8 md:p-12 max-w-md w-full mx-4 text-center shadow-2xl border border-gray-dark"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-amber to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-black" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¡Inscripción Exitosa!
          </h2>
          <p className="text-gray-400 mb-8">
            Tu inscripción ha sido registrada correctamente. Te enviaremos un email de confirmación con todos los detalles 
            de la Semana de la Juventud 2025.
          </p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-amber to-yellow-500 text-black hover:from-amber/90 hover:to-yellow-500/90 font-semibold rounded-xl">
              Volver al Inicio
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-black-dark py-12 md:py-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=center')"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Inscripción
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Únete a la Semana de la Juventud 2025
            </p>
            <div className="flex items-center justify-center space-x-4 text-amber font-semibold mt-4">
              <Calendar className="w-5 h-5" />
              <span>15, 16 y 17 de Agosto 2025</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-black-dark rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-dark"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Información Personal
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre *
                      </label>
                      <Input
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange("nombre", e.target.value)}
                        className={`rounded-xl bg-black border-gray-dark text-white placeholder-gray-400 ${errors.nombre ? "border-red" : ""}`}
                        placeholder="Tu nombre"
                      />
                      {errors.nombre && (
                        <p className="text-red text-sm mt-1">{errors.nombre}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Apellido *
                      </label>
                      <Input
                        type="text"
                        value={formData.apellido}
                        onChange={(e) => handleInputChange("apellido", e.target.value)}
                        className={`rounded-xl bg-black border-gray-dark text-white placeholder-gray-400 ${errors.apellido ? "border-red" : ""}`}
                        placeholder="Tu apellido"
                      />
                      {errors.apellido && (
                        <p className="text-red text-sm mt-1">{errors.apellido}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Edad *
                      </label>
                      <Input
                        type="number"
                        value={formData.edad}
                        onChange={(e) => handleInputChange("edad", e.target.value)}
                        className={`rounded-xl bg-black border-gray-dark text-white placeholder-gray-400 ${errors.edad ? "border-red" : ""}`}
                        placeholder="Tu edad"
                        min="12"
                        max="25"
                      />
                      {errors.edad && (
                        <p className="text-red text-sm mt-1">{errors.edad}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`rounded-xl bg-black border-gray-dark text-white placeholder-gray-400 ${errors.email ? "border-red" : ""}`}
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="text-red text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Teléfono
                    </label>
                    <Input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange("telefono", e.target.value)}
                      className="rounded-xl bg-black border-gray-dark text-white placeholder-gray-400"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Información Académica
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Colegio/Institución *
                    </label>
                    <Input
                      type="text"
                      value={formData.colegio}
                      onChange={(e) => handleInputChange("colegio", e.target.value)}
                      className={`rounded-xl bg-black border-gray-dark text-white placeholder-gray-400 ${errors.colegio ? "border-red" : ""}`}
                      placeholder="Nombre de tu colegio o institución"
                    />
                    {errors.colegio && (
                      <p className="text-red text-sm mt-1">{errors.colegio}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Grado *
                    </label>
                    <select
                      value={formData.grado}
                      onChange={(e) => handleInputChange("grado", e.target.value)}
                      className={`w-full px-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber bg-black text-white ${
                        errors.grado ? "border-red" : "border-gray-dark"
                      }`}
                    >
                      <option value="">Selecciona tu grado</option>
                      {grados.map((grado) => (
                        <option key={grado} value={grado}>
                          {grado}
                        </option>
                      ))}
                    </select>
                    {errors.grado && (
                      <p className="text-red text-sm mt-1">{errors.grado}</p>
                    )}
                  </div>
                </div>

                {/* Activities Selection */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Actividades de Interés *
                  </h3>
                  
                  <div className="space-y-3">
                    {actividades.map((actividad) => (
                      <label
                        key={actividad.id}
                        className="flex items-center space-x-3 p-4 border border-gray-dark rounded-xl hover:border-amber cursor-pointer transition-colors bg-black"
                      >
                        <input
                          type="checkbox"
                          checked={formData.actividades.includes(actividad.id)}
                          onChange={() => handleActividadChange(actividad.id)}
                          className="w-4 h-4 text-amber border-gray-dark rounded focus:ring-amber bg-black"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-white">
                            {actividad.label}
                          </div>
                          <div className="text-sm text-gray-400">
                            {actividad.desc}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  
                  {errors.actividades && (
                    <p className="text-red text-sm">{errors.actividades}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber to-yellow-500 text-black hover:from-amber/90 hover:to-yellow-500/90 font-semibold text-lg py-4 rounded-xl"
                  >
                    Completar Inscripción
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white space-y-8"
            >
              <div className="bg-black-dark/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-dark">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber to-yellow-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold">¿Por qué participar?</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Foro-Conversatorio Inspiracional</h4>
                      <p className="text-gray-300 text-sm">Conoce historias de vida y aprendizajes de líderes de diferentes sectores</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Bailatón Juvenil</h4>
                      <p className="text-gray-300 text-sm">Bienestar físico y salud comunitaria con 'Baila y Toma Agua'</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Mural Colectivo</h4>
                      <p className="text-gray-300 text-sm">Intervención artística de alto impacto urbano y social</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Integración Juvenil</h4>
                      <p className="text-gray-300 text-sm">Música en vivo, premios, comida y baile con Olímpica Stereo</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black-dark/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-dark">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber to-yellow-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold">Beneficios Incluidos</h3>
                </div>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber rounded-full"></span>
                    <span>Material de trabajo gratuito</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber rounded-full"></span>
                    <span>Almuerzo y refrigerios</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber rounded-full"></span>
                    <span>Certificado de participación</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber rounded-full"></span>
                    <span>Premios para rifas y concursos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber rounded-full"></span>
                    <span>Transporte desde las 5 localidades</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 