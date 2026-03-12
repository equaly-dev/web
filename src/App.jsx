import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon';
import ArrowRightIcon from '@heroicons/react/24/outline/ArrowRightIcon';
import PlayIcon from '@heroicons/react/24/outline/PlayIcon';
import LightBulbIcon from '@heroicons/react/24/outline/LightBulbIcon';
import PresentationChartLineIcon from '@heroicons/react/24/outline/PresentationChartLineIcon';
import ShieldCheckIcon from '@heroicons/react/24/outline/ShieldCheckIcon';
import BoltIcon from '@heroicons/react/24/outline/BoltIcon';
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon';
import BellAlertIcon from '@heroicons/react/24/outline/BellAlertIcon';
import ArrowUpIcon from '@heroicons/react/24/outline/ArrowUpIcon';

import ChartBarSolidIcon from '@heroicons/react/24/solid/ChartBarIcon';
import PlaySolidIcon from '@heroicons/react/24/solid/PlayIcon';

import { Assets, SupportAndEducation, MobileApp, CTA, Footer } from './components';

import NotFound from './NotFound';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex items-center justify-between py-6 px-4 md:px-8 max-w-7xl mx-auto w-full sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md">
      <Link to="/" className="flex items-center gap-3">
        <img src="/images/equaly-logo.png" alt="EQUALY Logo" className="w-10 h-10 object-contain" />
        <span className="text-white text-2xl font-bold uppercase tracking-wide">EQUALY</span>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium text-sm">
        {isHome ? (
          <>
            <a href="#herramientas" onClick={(e) => scrollTo(e, 'herramientas')} className="hover:text-white transition-colors">Herramientas</a>
            <a href="#activos" onClick={(e) => scrollTo(e, 'activos')} className="hover:text-white transition-colors">Activos</a>
            <a href="#educacion" onClick={(e) => scrollTo(e, 'educacion')} className="hover:text-white transition-colors">Educación</a>
            <a href="#app-movil" onClick={(e) => scrollTo(e, 'app-movil')} className="hover:text-white transition-colors">App Móvil</a>
          </>
        ) : (
          <Link to="/" className="hover:text-white transition-colors">Volver al Inicio</Link>
        )}
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <a href="https://dashboard.equaly.co/login" className="hidden sm:block text-gray-300 hover:text-white text-sm font-medium transition-colors">
          Iniciar Sesión
        </a>
        <a href="https://dashboard.equaly.co/register" className="bg-teal-400 hover:bg-teal-300 text-gray-900 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300">
          Crear Cuenta
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="flex flex-col items-start gap-6 md:gap-8">
        <div className="flex items-center gap-2 bg-[#1e293b]/50 border border-gray-700/50 rounded-full px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-gray-300 text-sm">Plataforma CFD líder en 2026</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Tu futuro financiero <br />
          <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">comienza aquí</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
          Plataforma de inversión inteligente con CFDs sobre Forex, Acciones, Criptomonedas, Materias Primas y más.
          Herramientas avanzadas para decisiones informadas.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-teal-400 hover:bg-teal-300 text-gray-900 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-300">
            Comenzar a Invertir <ArrowRightIcon className="w-5 h-5" />
          </button>
          <button className="border border-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-300">
            <PlayIcon className="w-5 h-5 text-teal-400" /> Ver Demo
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full mt-4 pt-8 border-t border-gray-800/50">
          <div>
            <h3 className="text-teal-400 text-3xl font-bold">500K+</h3>
            <p className="text-gray-500 text-sm mt-1">Usuarios Activos</p>
          </div>
          <div>
            <h3 className="text-teal-400 text-3xl font-bold">$2.5B</h3>
            <p className="text-gray-500 text-sm mt-1">Volumen Diario</p>
          </div>
          <div>
            <h3 className="text-teal-400 text-3xl font-bold">150+</h3>
            <p className="text-gray-500 text-sm mt-1">Activos CFD</p>
          </div>
        </div>
      </div>

      {/* Mockup Chart Area */}
      <div className="bg-[#1e293b]/40 border border-gray-800 rounded-3xl p-6 relative">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center font-bold text-white text-sm">
              BTC
            </div>
            <div>
              <h4 className="text-white font-semibold flex items-center gap-2">
                Bitcoin / USD
              </h4>
              <span className="text-gray-500 text-sm">Criptomoneda</span>
            </div>
          </div>
          <div className="text-right">
            <h3 className="text-white text-2xl font-bold">$67,842.50</h3>
            <span className="text-teal-400 text-sm flex items-center gap-1 justify-end">
              <ArrowUpIcon className="w-4 h-4" /> +4.28%
            </span>
          </div>
        </div>

        {/* Graph Mockup */}
        <div className="h-48 w-full relative mb-8">
          <svg viewBox="0 0 100 40" className="w-full h-full preserve-aspect-ratio-none">
            <path
              d="M0 35 Q 20 20, 40 25 T 80 15 T 100 5 L 100 40 L 0 40 Z"
              fill="url(#gradient)"
              className="opacity-20"
            />
            <path
              d="M0 35 Q 20 20, 40 25 T 80 15 T 100 5"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="1"
            />
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-1 right-0 w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_10px_2px_rgba(45,212,191,0.5)]"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/20 py-3 rounded-xl font-semibold transition-colors duration-300">
            Comprar
          </button>
          <button className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 py-3 rounded-xl font-semibold transition-colors duration-300">
            Vender
          </button>
        </div>
      </div>
    </section>
  );
}

function Tools() {
  const tools = [
    {
      icon: <LightBulbIcon className="w-8 h-8 text-teal-400" />,
      title: "Autochartist",
      desc: "Análisis técnico inteligente que escanea tendencias y datos históricos para identificar oportunidades de mercado.",
      bgColor: "bg-teal-400/10"
    },
    {
      icon: <PresentationChartLineIcon className="w-8 h-8 text-purple-400" />,
      title: "Gráficos Inteligentes",
      desc: "Seguimiento de datos vitales de acciones y divisas con visualizaciones interactivas para decisiones informadas.",
      bgColor: "bg-purple-400/10"
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-blue-400" />,
      title: "Gestión de Riesgos",
      desc: "Stop Loss y Take Profit preconfigurables para cerrar posiciones automáticamente y proteger tu capital.",
      bgColor: "bg-blue-400/10"
    },
    {
      icon: <BoltIcon className="w-8 h-8 text-orange-400" />,
      title: "Apalancamiento",
      desc: "Multiplica tu capacidad de inversión en posiciones iniciales con opciones flexibles de apalancamiento.",
      bgColor: "bg-orange-400/10"
    },
    {
      icon: <CalendarDaysIcon className="w-8 h-8 text-emerald-400" />,
      title: "Calendario Económico",
      desc: "Eventos económicos globales integrados que pueden afectar las tendencias del mercado en tiempo real.",
      bgColor: "bg-emerald-400/10"
    },
    {
      icon: <BellAlertIcon className="w-8 h-8 text-pink-400" />,
      title: "Alertas Personalizadas",
      desc: "Notificaciones push y por correo sobre cambios de precio en activos de interés vía app Xcite.",
      bgColor: "bg-pink-400/10"
    }
  ];

  return (
    <section id="herramientas" className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="bg-teal-500/10 text-teal-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
          Tecnología Avanzada
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Herramientas de Análisis y Negociación
        </h2>
        <p className="text-gray-400 text-lg">
          Potencia tus decisiones con análisis de datos avanzado y técnico de vanguardia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, idx) => (
          <div key={idx} className="bg-[#1e293b]/30 border border-gray-800/50 rounded-2xl p-8 hover:bg-[#1e293b]/50 transition-colors duration-300">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${tool.bgColor}`}>
              {tool.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tools />
      <Assets />
      <SupportAndEducation />
      <MobileApp />
      <CTA />
      <Footer />
    </>
  );
}

function RedirectToDashboard({ path }) {
  const location = useLocation();
  React.useEffect(() => {
    // If testing locally, map to localhost:5173, else dashboard.equaly.co
    const isLocal = window.location.hostname === 'localhost';
    const destination = isLocal ? `http://localhost:5173${path}` : `https://dashboard.equaly.co${path}`;
    window.location.href = destination + location.search;
  }, [location, path]);

  return <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center text-teal-400">Redirigiendo...</div>;
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#0b0f19] text-white font-sans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RedirectToDashboard path="/register" />} />
        <Route path="/login" element={<RedirectToDashboard path="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
