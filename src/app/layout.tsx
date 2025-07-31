import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";;
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Users, BookOpen} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barranquilla es Juventud 2025",
  description: "Sitio oficial de la Semana de la Juventud 2025 de Barranquilla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} font-poppins bg-black text-white`}>
        <div className="min-h-screen bg-black">
          {/* Header */}
          <header className="sticky top-0 z-50 w-full bg-black-dark/95 backdrop-blur-sm border-b border-gray-dark">
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">BJ</span>
                    </div>
                    <span className="font-bold text-xl text-white hidden sm:block">Barranquilla es Juventud</span>
                  </Link>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                  <Link href="/" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                    Inicio
                  </Link>
                  <Link href="/blog" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                    Blog
                  </Link>
                  <Link href="/inscripcion" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                    Inscripción
                  </Link>
                </nav>

                <div className="flex items-center space-x-4">
                  <Link href="/inscripcion">
                    <Button className="bg-gradient-to-r from-amber to-yellow-500 text-black hover:from-amber/90 hover:to-yellow-500/90 font-semibold">
                      ¡Inscríbete!
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-dark bg-black-dark">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">BJ</span>
                    </div>
                    <span className="font-bold text-lg text-white">Barranquilla es Juventud 2025</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Una celebración distrital que exalta el papel protagónico de las juventudes en la construcción 
                    de una Barranquilla más inclusiva, creativa y participativa.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-white">Actividades</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-amber" />
                      <span className="text-gray-400">15 Ago: Foro-Conversatorio</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-amber" />
                      <span className="text-gray-400">16 Ago: Bailatón Juvenil</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-amber" />
                      <span className="text-gray-400">17 Ago: Mural Colectivo</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-white">Enlaces</h3>
                  <div className="space-y-2 text-sm">
                    <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                      Blog
                    </Link>
                    <Link href="/inscripcion" className="block text-gray-400 hover:text-white transition-colors">
                      Inscripción
                    </Link>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-white">Contacto</h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>Alcaldía de Barranquilla</p>
                    <p>juventud@barranquilla.gov.co</p>
                    <p>+57 5 379 3333</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-dark mt-8 pt-8 text-center">
                <p className="text-sm text-gray-500">
                  © 2025 Barranquilla es Juventud. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}