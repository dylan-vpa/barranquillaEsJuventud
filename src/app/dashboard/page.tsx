"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { 
  Users, 
  Calendar, 
  GraduationCap, 
  Download,
  Search,
  BarChart3,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColegio, setSelectedColegio] = useState("todos");
  const [selectedEdad, setSelectedEdad] = useState("todos");

  // Mock data - en un proyecto real esto vendría de una base de datos
  const inscritos = [
    {
      id: 1,
      nombre: "María González",
      edad: 18,
      email: "maria@email.com",
      colegio: "Colegio San José",
      grado: "11° Grado",
      actividades: ["liderazgo", "emprendimiento"],
      fecha: "2024-10-01",
      estado: "confirmado"
    },
    {
      id: 2,
      nombre: "Carlos Rodríguez",
      edad: 20,
      email: "carlos@email.com",
      colegio: "Instituto Técnico",
      grado: "Universidad",
      actividades: ["tecnologia"],
      fecha: "2024-10-02",
      estado: "pendiente"
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      edad: 16,
      email: "ana@email.com",
      colegio: "Colegio San José",
      grado: "10° Grado",
      actividades: ["liderazgo", "tecnologia"],
      fecha: "2024-10-03",
      estado: "confirmado"
    },
    {
      id: 4,
      nombre: "Luis Pérez",
      edad: 22,
      email: "luis@email.com",
      colegio: "Universidad del Norte",
      grado: "Universidad",
      actividades: ["emprendimiento"],
      fecha: "2024-10-04",
      estado: "confirmado"
    },
    {
      id: 5,
      nombre: "Sofia Herrera",
      edad: 17,
      email: "sofia@email.com",
      colegio: "Colegio San José",
      grado: "11° Grado",
      actividades: ["liderazgo", "emprendimiento", "tecnologia"],
      fecha: "2024-10-05",
      estado: "pendiente"
    }
  ];

  const colegios = ["todos", "Colegio San José", "Instituto Técnico", "Universidad del Norte"];
  const rangosEdad = ["todos", "12-15", "16-18", "19-22", "23-25"];

  const stats = [
    { 
      title: "Total Inscritos", 
      value: inscritos.length, 
      icon: Users, 
      color: "from-azul to-blue-600",
      bgColor: "bg-gradient-to-br from-azul/10 to-blue-600/10",
      textColor: "text-azul"
    },
    { 
      title: "Confirmados", 
      value: inscritos.filter(i => i.estado === "confirmado").length, 
      icon: Calendar, 
      color: "from-verde to-green-600",
      bgColor: "bg-gradient-to-br from-verde/10 to-green-600/10",
      textColor: "text-verde"
    },
    { 
      title: "Pendientes", 
      value: inscritos.filter(i => i.estado === "pendiente").length, 
      icon: GraduationCap, 
      color: "from-ruby to-red-600",
      bgColor: "bg-gradient-to-br from-ruby/10 to-red-600/10",
      textColor: "text-ruby"
    },
    { 
      title: "Promedio Edad", 
      value: Math.round(inscritos.reduce((acc, curr) => acc + curr.edad, 0) / inscritos.length), 
      icon: BarChart3, 
      color: "from-gold to-yellow-500",
      bgColor: "bg-gradient-to-br from-gold/10 to-yellow-500/10",
      textColor: "text-gold"
    }
  ];

  const filteredInscritos = inscritos.filter(inscrito => {
    const matchesSearch = inscrito.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inscrito.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesColegio = selectedColegio === "todos" || inscrito.colegio === selectedColegio;
    const matchesEdad = selectedEdad === "todos" || 
                       (selectedEdad === "12-15" && inscrito.edad >= 12 && inscrito.edad <= 15) ||
                       (selectedEdad === "16-18" && inscrito.edad >= 16 && inscrito.edad <= 18) ||
                       (selectedEdad === "19-22" && inscrito.edad >= 19 && inscrito.edad <= 22) ||
                       (selectedEdad === "23-25" && inscrito.edad >= 23 && inscrito.edad <= 25);
    
    return matchesSearch && matchesColegio && matchesEdad;
  });

  const getEstadoColor = (estado: string) => {
    return estado === "confirmado" 
      ? "bg-verde text-white" 
      : "bg-gold text-azul";
  };

  const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "ID,Nombre,Edad,Email,Colegio,Grado,Actividades,Fecha,Estado\n" +
      filteredInscritos.map(i => 
        `${i.id},"${i.nombre}",${i.edad},"${i.email}","${i.colegio}","${i.grado}","${i.actividades.join(', ')}","${i.fecha}","${i.estado}"`
      ).join("\n");
    
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "inscritos_barranquilla_juventud.csv");
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-azul to-blue-700 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Dashboard Administrativo
            </h1>
            <p className="text-xl text-white/90">
              Gestiona las inscripciones de la Semana de la Juventud 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-azul">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Table */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Filters */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Buscar por nombre o email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <select
                    value={selectedColegio}
                    onChange={(e) => setSelectedColegio(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:outline-none"
                  >
                    {colegios.map(colegio => (
                      <option key={colegio} value={colegio}>
                        {colegio === "todos" ? "Todos los colegios" : colegio}
                      </option>
                    ))}
                  </select>
                  
                  <select
                    value={selectedEdad}
                    onChange={(e) => setSelectedEdad(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul focus:outline-none"
                  >
                    {rangosEdad.map(rango => (
                      <option key={rango} value={rango}>
                        {rango === "todos" ? "Todas las edades" : rango}
                      </option>
                    ))}
                  </select>
                  
                  <Button onClick={exportData} className="bg-gold text-azul hover:bg-gold/90">
                    <Download className="w-4 h-4 mr-2" />
                    Exportar
                  </Button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Participante
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Edad
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Colegio
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actividades
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredInscritos.map((inscrito) => (
                    <tr key={inscrito.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {inscrito.nombre}
                          </div>
                          <div className="text-sm text-gray-500">
                            {inscrito.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {inscrito.edad} años
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{inscrito.colegio}</div>
                        <div className="text-sm text-gray-500">{inscrito.grado}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-wrap gap-1">
                          {inscrito.actividades.map((actividad, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-azul text-white"
                            >
                              {actividad === "liderazgo" ? "Liderazgo" :
                               actividad === "emprendimiento" ? "Emprendimiento" :
                               actividad === "tecnologia" ? "Tecnología" : actividad}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getEstadoColor(inscrito.estado)}`}>
                          {inscrito.estado === "confirmado" ? "Confirmado" : "Pendiente"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-azul hover:text-blue-600">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-verde hover:text-green-600">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-ruby hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* No Results */}
            {filteredInscritos.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Users className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No se encontraron inscritos
                </h3>
                <p className="text-gray-500">
                  Intenta ajustar tus filtros de búsqueda.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
} 