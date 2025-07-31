"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Users, 
  ArrowRight, 
  Star,
  MapPin,
  Clock,
  Award,
  Play,
  CheckCircle,
  Mic,
  Music,
  Palette
} from "lucide-react";

export default function Home() {
  const activities = [
    {
      id: 1,
      title: "Viernes 15 de Agosto: Foro-Conversatorio",
      description: "Un espacio de conversación inspiracional con líderes de diferentes sectores, quienes compartirán sus historias de vida, aprendizajes y consejos a las juventudes barranquilleras.",
      icon: Mic,
      date: "15 de Agosto",
      time: "1:00 PM - 5:00 PM",
      location: "Fábrica de Cultura",
      color: "from-blue to-blue-600",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
      details: "Convocatoria especial: dirigida a estudiantes de colegios oficiales a través de la Secretaría Distrital de Educación."
    },
    {
      id: 2,
      title: "Sábado 16 de Agosto: Bailatón Juvenil",
      description: "Jornada de bienestar físico y salud comunitaria en articulación con el programa de Gerencia de Ciudad. Dinámica dirigida por Ana María Aljure gerente de ciudad.",
      icon: Music,
      date: "16 de Agosto",
      time: "8:00 AM - 11:00 AM",
      location: "Espacio público por definir",
      color: "from-emerald to-green-600",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
      details: "Baila y Toma Agua - Convocatoria pública"
    },
    {
      id: 3,
      title: "Domingo 17 de Agosto: Mural Colectivo",
      description: "Actividad final de alto impacto urbano y social. Se pintará un gran mural juvenil para simbolizar el compromiso de las juventudes con la transformación social.",
      icon: Palette,
      date: "17 de Agosto",
      time: "8:00 AM - 12:00 PM",
      location: "Punto crítico por intervenir",
      color: "from-red to-pink-600",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
      details: "Mural colectivo 'Barranquilla es Juventud' - Convocatoria pública"
    }
  ];

  const stats = [
    { number: "3", label: "Días de Actividades" },
    { number: "350+", label: "Jóvenes Participantes" },
    { number: "7", label: "Invitados Especiales" },
    { number: "5", label: "Localidades" }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Foro-Conversatorio Inspiracional",
      description: "Conoce historias de vida y aprendizajes de líderes de diferentes sectores"
    },
    {
      icon: Users,
      title: "Bailatón Juvenil",
      description: "Bienestar físico y salud comunitaria con 'Baila y Toma Agua'"
    },
    {
      icon: Award,
      title: "Mural Colectivo",
      description: "Intervención artística de alto impacto urbano y social"
    },
    {
      icon: Play,
      title: "Integración Juvenil",
      description: "Música en vivo, premios, comida y baile con Olímpica Stereo"
    }
  ];

  const invitedSpeakers = [
    "Katia Nule: Primera dama",
    "Érika Quizena: Empresaria de moda",
    "Sebastián Viera: Ex Futbolista e ícono local",
    "Marcela García: Gestora cultural y exreina del Carnaval",
    "Juan Bernardo López: Consejero Nacional de Juventud",
    "Francesco Grosso: CEO Atlántico es juventud",
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-black via-black-dark to-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=center')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-amber/20 backdrop-blur-sm border border-amber/30 rounded-full px-6 py-3 text-amber font-semibold">
              <Star className="w-5 h-5" />
              <span>Semana de la Juventud 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Barranquilla es{" "}
              <span className="text-amber">Juventud</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Una celebración distrital que exalta el papel protagónico de las juventudes en la construcción 
              de una Barranquilla más inclusiva, creativa y participativa.
            </p>

            <div className="flex items-center justify-center space-x-4 text-amber font-semibold">
              <Calendar className="w-5 h-5" />
              <span>15, 16 y 17 de Agosto 2025</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/inscripcion">
                <Button size="lg" className="bg-gradient-to-r from-amber to-yellow-500 text-black hover:from-amber/90 hover:to-yellow-500/90 font-semibold text-lg px-8 py-4 rounded-xl">
                  ¡Inscríbete Ahora!
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-black-dark hover:text-white font-semibold text-lg px-8 py-4 rounded-xl">
                  Conoce Más
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Por qué participar?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Descubre todas las ventajas de ser parte de la Semana de la Juventud 2025
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-dark"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 md:py-32 bg-black-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Cronograma General
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Tres días llenos de actividades inspiradoras, bienestar físico y expresión artística. 
              Cada día está diseñado para activar y visibilizar a las juventudes como agentes de cambio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-dark hover:border-amber/30 overflow-hidden">
                  {/* Activity Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-black">
                        {activity.date}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${activity.color} flex items-center justify-center mb-4`}>
                      <activity.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      {activity.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {activity.description}
                    </p>

                    <p className="text-amber text-sm mb-6 font-medium">
                      {activity.details}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-sm">
                        <Clock className="w-4 h-4 text-amber" />
                        <span className="text-gray-400">{activity.time}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <MapPin className="w-4 h-4 text-amber" />
                        <span className="text-gray-400">{activity.location}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-amber to-yellow-500 text-black hover:from-amber/90 hover:to-yellow-500/90 font-semibold rounded-xl">
                      Ver Detalles
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Invited Speakers Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Invitados Especiales
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Conoce a los líderes que compartirán sus historias de vida y aprendizajes 
              en el Foro-Conversatorio del viernes 15 de agosto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {invitedSpeakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black-dark rounded-xl p-6 border border-gray-dark hover:border-amber/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue to-blue-600 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">{speaker}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-black to-black-dark relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=center')"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para ser parte del cambio?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Únete a cientos de jóvenes que ya se han inscrito. 
              No te pierdas esta oportunidad única de crecer y conectar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inscripcion">
                <Button size="lg" className="bg-gradient-to-r from-amber to-yellow-500 text-black hover:from-amber/90 hover:to-yellow-500/90 font-semibold text-lg px-8 py-4 rounded-xl">
                  ¡Inscríbete Gratis!
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-black-dark hover:text-white font-semibold text-lg px-8 py-4 rounded-xl">
                  Ver Blog
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
