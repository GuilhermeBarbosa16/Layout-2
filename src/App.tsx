import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ChevronRight, Package, Sparkles, Shield } from 'lucide-react';
import ProductCard from './components/ProductCard';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Verifica a preferência do sistema para o modo escuro
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const products = [
    {
      id: 1,
      name: "Quantum X-1",
      description: "Interface neural de última geração",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      price: "R$ 2.999"
    },
    {
      id: 2,
      name: "HoloLens Pro",
      description: "Óculos de realidade aumentada",
      image: "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?auto=format&fit=crop&w=800&q=80",
      price: "R$ 1.499"
    },
    {
      id: 3,
      name: "NanoTech Watch",
      description: "Rastreador biométrico inteligente",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
      price: "R$ 599"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <ParticlesBackground />
      
      {/* Navegação */}
      <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 dark:bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Sparkles className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Futuretech
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Produtos</button>
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sobre</button>
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contato</button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
              
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Seção Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
            O Futuro é Agora
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Experimente a tecnologia do amanhã hoje, com nossos produtos de ponta que ultrapassam os limites da inovação.
          </p>
          <button className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium">
            Explorar Produtos
            <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Seção de Produtos */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Produtos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Recursos */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <Package className="w-12 h-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Qualidade Premium</h3>
              <p className="text-gray-400">Projetado com precisão e cuidado para desempenho ideal.</p>
            </div>
            <div className="text-center p-6">
              <Shield className="w-12 h-12 mx-auto text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tecnologia Segura</h3>
              <p className="text-gray-400">Recursos avançados de segurança para proteger seus dados.</p>
            </div>
            <div className="text-center p-6">
              <Sparkles className="w-12 h-12 mx-auto text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inovação em Primeiro Lugar</h3>
              <p className="text-gray-400">Liderando o caminho no avanço tecnológico.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
