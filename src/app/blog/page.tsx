"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight,
  Tag,
  Eye
} from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "todos", label: "Todos", count: 12 },
    { id: "liderazgo", label: "Liderazgo", count: 4 },
    { id: "emprendimiento", label: "Emprendimiento", count: 3 },
    { id: "tecnologia", label: "Tecnología", count: 3 },
    { id: "juventud", label: "Juventud", count: 2 }
  ];

  const articles = [
    {
      id: 1,
      title: "Cómo desarrollar habilidades de liderazgo en la juventud",
      excerpt: "Descubre las mejores estrategias para potenciar el liderazgo juvenil y crear agentes de cambio en tu comunidad.",
      author: "María González",
      date: "10 de Octubre, 2024",
      category: "liderazgo",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
      readTime: "5 min",
      views: "1.2k"
    },
    {
      id: 2,
      title: "Emprendimiento juvenil: De la idea al negocio",
      excerpt: "Guía completa para jóvenes emprendedores que quieren convertir sus ideas en negocios exitosos.",
      author: "Carlos Rodríguez",
      date: "8 de Octubre, 2024",
      category: "emprendimiento",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
      readTime: "8 min",
      views: "856"
    },
    {
      id: 3,
      title: "Tecnología e innovación: El futuro de Barranquilla",
      excerpt: "Explora cómo la tecnología está transformando nuestra ciudad y las oportunidades para jóvenes innovadores.",
      author: "Ana Martínez",
      date: "6 de Octubre, 2024",
      category: "tecnologia",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
      readTime: "6 min",
      views: "1.5k"
    },
    {
      id: 4,
      title: "Historias de éxito: Jóvenes que están cambiando Barranquilla",
      excerpt: "Conoce las historias inspiradoras de jóvenes barranquilleros que están haciendo la diferencia.",
      author: "Luis Pérez",
      date: "4 de Octubre, 2024",
      category: "juventud",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
      readTime: "7 min",
      views: "2.1k"
    },
    {
      id: 5,
      title: "Networking efectivo para jóvenes profesionales",
      excerpt: "Aprende técnicas probadas para construir una red profesional sólida desde temprana edad.",
      author: "Sofia Herrera",
      date: "2 de Octubre, 2024",
      category: "liderazgo",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
      readTime: "4 min",
      views: "943"
    },
    {
      id: 6,
      title: "Finanzas personales para jóvenes: Guía básica",
      excerpt: "Todo lo que necesitas saber para manejar tu dinero de manera inteligente desde joven.",
      author: "Diego Morales",
      date: "30 de Septiembre, 2024",
      category: "emprendimiento",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
      readTime: "9 min",
      views: "1.8k"
    },
    {
      id: 7,
      title: "Programación para principiantes: Por dónde empezar",
      excerpt: "Una guía paso a paso para jóvenes que quieren aprender a programar desde cero.",
      author: "Camila Vargas",
      date: "28 de Septiembre, 2024",
      category: "tecnologia",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop&crop=center",
      readTime: "10 min",
      views: "2.3k"
    },
    {
      id: 8,
      title: "Voluntariado juvenil: Impacto social real",
      excerpt: "Descubre cómo el voluntariado puede transformar tu vida y la de tu comunidad.",
      author: "Juan Silva",
      date: "26 de Septiembre, 2024",
      category: "juventud",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
      readTime: "6 min",
      views: "1.1k"
    },
    {
      id: 9,
      title: "Comunicación efectiva: Habilidades para el futuro",
      excerpt: "Desarrolla tus habilidades de comunicación para destacar en cualquier campo profesional.",
      author: "Valentina Ruiz",
      date: "24 de Septiembre, 2024",
      category: "liderazgo",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
      readTime: "5 min",
      views: "1.4k"
    },
    {
      id: 10,
      title: "Marketing digital para jóvenes emprendedores",
      excerpt: "Estrategias de marketing digital que funcionan para negocios jóvenes y startups.",
      author: "Roberto Castro",
      date: "22 de Septiembre, 2024",
      category: "emprendimiento",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      readTime: "7 min",
      views: "1.6k"
    },
    {
      id: 11,
      title: "Inteligencia artificial: Oportunidades para jóvenes",
      excerpt: "Explora las oportunidades que la IA ofrece para la nueva generación de profesionales.",
      author: "Laura Jiménez",
      date: "20 de Septiembre, 2024",
      category: "tecnologia",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
      readTime: "8 min",
      views: "1.9k"
    },
    {
      id: 12,
      title: "Mentoría juvenil: Construyendo el futuro",
      excerpt: "Cómo encontrar y aprovechar las oportunidades de mentoría para acelerar tu crecimiento.",
      author: "Andrés Moreno",
      date: "18 de Septiembre, 2024",
      category: "liderazgo",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
      readTime: "6 min",
      views: "1.3k"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "todos" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "liderazgo": return "bg-blue text-white";
      case "emprendimiento": return "bg-emerald text-white";
      case "tecnologia": return "bg-red text-white";
      case "juventud": return "bg-amber text-black";
      default: return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-black-dark py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Blog de Juventud
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Descubre artículos inspiradores, consejos prácticos y las últimas tendencias 
              para jóvenes líderes de Barranquilla.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border-0 bg-black-dark text-white placeholder-gray-400 focus:ring-2 focus:ring-amber focus:outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-200 text-sm md:text-base ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-amber to-yellow-500 text-black shadow-lg"
                      : "bg-black-dark text-gray-300 hover:bg-gray-800 border border-gray-dark"
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs md:text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black-dark rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-dark"
              >
                {/* Article Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {categories.find(c => c.id === article.category)?.label}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-white text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{article.views}</span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-4 md:p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span className="text-xs md:text-sm">{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs md:text-sm">{article.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-amber transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Tag className="w-4 h-4" />
                        <span className="text-xs md:text-sm">{article.readTime}</span>
                      </span>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-amber to-yellow-500 text-black hover:from-amber/90 hover:to-yellow-500/90 font-semibold text-sm md:text-base rounded-xl">
                      Leer más
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                No se encontraron artículos
              </h3>
              <p className="text-gray-500">
                Intenta ajustar tus filtros o términos de búsqueda.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
} 