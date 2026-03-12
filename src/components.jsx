import React from 'react';
import { Link } from 'react-router-dom';
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon';
import ChartPieIcon from '@heroicons/react/24/outline/ChartPieIcon';
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon';
import GlobeAmericasIcon from '@heroicons/react/24/outline/GlobeAmericasIcon';
import FireIcon from '@heroicons/react/24/outline/FireIcon';
import BanknotesIcon from '@heroicons/react/24/outline/BanknotesIcon';
import BookOpenIcon from '@heroicons/react/24/outline/BookOpenIcon';
import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon';
import PhoneIcon from '@heroicons/react/24/outline/PhoneIcon';
import ChatBubbleLeftEllipsisIcon from '@heroicons/react/24/outline/ChatBubbleLeftEllipsisIcon';
import GlobeAltIcon from '@heroicons/react/24/outline/GlobeAltIcon';
import AcademicCapIcon from '@heroicons/react/24/outline/AcademicCapIcon';
import CheckCircleIcon from '@heroicons/react/24/outline/CheckCircleIcon';

import PlayIcon from '@heroicons/react/24/solid/PlayIcon';

export function Assets() {
    const categories = [
        { icon: <CurrencyDollarIcon className="w-8 h-8 text-black" />, name: "Forex", desc: "50+ pares", bg: "bg-emerald-400" },
        { icon: <ChartPieIcon className="w-8 h-8 text-white" />, name: "Acciones", desc: "Amazon, Netflix...", bg: "bg-blue-500" },
        { icon: <BanknotesIcon className="w-8 h-8 text-black" />, name: "Cripto", desc: "BTC, ETH, más", bg: "bg-orange-400" },
        { icon: <TableCellsIcon className="w-8 h-8 text-white" />, name: "Índices", desc: "S&P 500, DAX...", bg: "bg-purple-400" },
        { icon: <FireIcon className="w-8 h-8 text-white" />, name: "Materias", desc: "Oro, Petróleo...", bg: "bg-yellow-500" },
        { icon: <GlobeAmericasIcon className="w-8 h-8 text-white" />, name: "ETFs", desc: "Fondos cotizados", bg: "bg-pink-400" },
    ];

    return (
        <section id="activos" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-16">
            <div className="text-center mb-12">
                <span className="bg-purple-500/10 text-purple-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
                    Diversificación Total
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Activos Disponibles
                </h2>
                <p className="text-gray-400 text-lg">
                    Opera con más de 150 CFDs en los mercados más importantes del mundo
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {categories.map((cat, idx) => (
                    <div key={idx} className="bg-[#1e293b]/30 border border-gray-800/50 rounded-2xl flex flex-col items-center justify-center p-6 hover:bg-[#1e293b]/60 transition-colors">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${cat.bg}`}>
                            {cat.icon}
                        </div>
                        <h4 className="text-white font-bold mb-1">{cat.name}</h4>
                        <span className="text-gray-500 text-xs">{cat.desc}</span>
                    </div>
                ))}
            </div>

            <div className="bg-[#1e293b]/20 border border-gray-800/50 rounded-xl p-4 flex items-center overflow-x-auto gap-4 hide-scrollbar">
                <span className="text-gray-500 text-sm min-w-max mr-2">Populares:</span>
                {[
                    { pair: "EUR/USD", val: "+0.12%" },
                    { pair: "BTC/USD", val: "+4.28%" },
                    { pair: "AMZN", val: "-0.85%", down: true },
                    { pair: "XAU/USD", val: "+1.32%" },
                    { pair: "S&P 500", val: "+0.67%" },
                    { pair: "NFLX", val: "+2.14%" },
                ].map((t, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#1e293b]/50 px-3 py-1.5 rounded-lg min-w-max">
                        <span className="text-white text-sm font-medium">{t.pair}</span>
                        <span className={`text-xs ${t.down ? 'text-red-400' : 'text-emerald-400'}`}>{t.val}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function SupportAndEducation() {
    return (
        <section id="educacion" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <div>
                <span className="bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
                    Aprende y Crece
                </span>
                <h2 className="text-4xl font-bold text-white mb-6">Soporte y Educación</h2>
                <p className="text-gray-400 text-lg mb-10">
                    No importa tu nivel de experiencia, te acompañamos en cada paso con recursos educativos y un equipo dedicado.
                </p>

                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="bg-[#1e293b] p-3 rounded-xl h-fit">
                            <BookOpenIcon className="w-6 h-6 text-teal-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">E-Books y Guías</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Material de capacitación completo para operadores principiantes y avanzados.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-[#1e293b] p-3 rounded-xl h-fit">
                            <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">Soporte por Email</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Respuestas detalladas a todas tus consultas en menos de 24 horas.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-[#1e293b] p-3 rounded-xl h-fit">
                            <PhoneIcon className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">Soporte Telefónico</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Línea directa con expertos disponibles en horario extendido.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-[#1e293b] p-3 rounded-xl h-fit">
                            <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">WhatsApp</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Chat instantáneo para resolver dudas de forma rápida y cómoda.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#1e293b]/40 border border-gray-800/50 rounded-2xl p-6 text-center">
                        <div className="inline-block text-2xl mb-2">📚</div>
                        <h3 className="text-3xl font-bold text-white mb-1">25+</h3>
                        <p className="text-gray-500 text-sm">E-Books</p>
                    </div>
                    <div className="bg-[#1e293b]/40 border border-gray-800/50 rounded-2xl p-6 text-center">
                        <div className="inline-block text-2xl mb-2">🎓</div>
                        <h3 className="text-3xl font-bold text-white mb-1">100+</h3>
                        <p className="text-gray-500 text-sm">Video Tutoriales</p>
                    </div>
                    <div className="bg-[#1e293b]/40 border border-gray-800/50 rounded-2xl p-6 text-center">
                        <div className="inline-block text-2xl mb-2">💬</div>
                        <h3 className="text-3xl font-bold text-white mb-1">24/5</h3>
                        <p className="text-gray-500 text-sm">Soporte en Vivo</p>
                    </div>
                    <div className="bg-[#1e293b]/40 border border-gray-800/50 rounded-2xl p-6 text-center">
                        <div className="inline-block text-2xl mb-2">🌍</div>
                        <h3 className="text-3xl font-bold text-white mb-1">10+</h3>
                        <p className="text-gray-500 text-sm">Idiomas</p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-2xl p-8 mt-4">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-teal-400 p-2 rounded-lg"><PlayIcon className="w-5 h-5 text-gray-900" /></div>
                        <h4 className="text-white font-bold text-lg">Curso Gratuito</h4>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 max-w-sm">
                        Aprende los fundamentos del trading con nuestro curso introductorio de 5 módulos.
                    </p>
                    <button className="w-full bg-teal-400 hover:bg-teal-300 text-gray-900 font-bold py-3 rounded-xl transition-colors">
                        Comenzar Ahora
                    </button>
                </div>
            </div>
        </section>
    );
}

export function MobileApp() {
    return (
        <section id="app-movil" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex justify-center relative">
                <div className="w-[300px] h-[600px] bg-[#0b0f19] border-8 border-gray-800 rounded-[3rem] p-4 shadow-2xl relative">
                    <div className="w-32 h-6 bg-gray-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl"></div>

                    <div className="h-full w-full bg-[#1e293b]/50 rounded-[2rem] p-4 flex flex-col pt-8">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                                <div className="bg-indigo-500/20 p-1.5 rounded-lg"><ChartPieIcon className="w-4 h-4 text-indigo-400" /></div>
                                <span className="text-white font-bold">Xcite</span>
                            </div>
                            <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-gray-400 text-xs">A</span>
                            </div>
                        </div>

                        <div className="bg-[#1e293b] rounded-2xl p-4 mb-4">
                            <p className="text-gray-500 text-xs mb-1">Balance Total</p>
                            <h3 className="text-2xl font-bold text-white mb-1">$24,563.00</h3>
                            <span className="text-teal-400 text-xs">+$1,234.50 hoy</span>
                        </div>

                        <div className="bg-[#1e293b] rounded-2xl p-4 mb-4 relative h-32">
                            <div className="flex justify-between mb-4">
                                <span className="text-white text-xs font-bold">BTC/USD</span>
                                <span className="text-teal-400 text-xs">+4.2%</span>
                            </div>
                            <svg viewBox="0 0 100 30" className="w-full h-12">
                                <path d="M0 25 Q 20 15, 40 20 T 80 10 T 100 5" fill="none" stroke="#2dd4bf" strokeWidth="2" />
                            </svg>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-6">
                            <div className="bg-[#1e293b] rounded-xl p-3 flex flex-col items-center justify-center gap-2">
                                <CurrencyDollarIcon className="w-5 h-5 text-gray-400" />
                                <span className="text-[10px] text-gray-400">Forex</span>
                            </div>
                            <div className="bg-[#1e293b] rounded-xl p-3 flex flex-col items-center justify-center gap-2">
                                <ChartPieIcon className="w-5 h-5 text-red-400" />
                                <span className="text-[10px] text-gray-400">Acciones</span>
                            </div>
                            <div className="bg-[#1e293b] rounded-xl p-3 flex flex-col items-center justify-center gap-2">
                                <BanknotesIcon className="w-5 h-5 text-gray-400" />
                                <span className="text-[10px] text-gray-400">Cripto</span>
                            </div>
                        </div>

                        <button className="bg-teal-400 text-gray-900 font-bold py-3 rounded-xl mt-auto w-full">
                            Operar Ahora
                        </button>
                    </div>

                    <div className="absolute top-32 -left-6 bg-[#1e293b] border border-gray-700 rounded-xl p-3 flex items-center gap-2 shadow-xl">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        <span className="text-white text-xs font-medium">Orden ejecutada</span>
                    </div>
                    <div className="absolute bottom-40 -right-6 bg-[#1e293b] border border-gray-700 rounded-xl p-3 flex items-center gap-2 shadow-xl">
                        <span className="text-lg">🔔</span>
                        <span className="text-white text-xs font-medium">EUR/USD +0.5%</span>
                    </div>
                </div>
            </div>

            <div>
                <span className="bg-teal-500/10 text-teal-400 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
                    Siempre Conectado
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">App Móvil Xcite</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Opera desde cualquier lugar con nuestra aplicación móvil optimizada. Recibe alertas en tiempo real y nunca pierdas una oportunidad de mercado.
                </p>

                <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-teal-400" />
                        <span className="text-gray-300">Operaciones en tiempo real</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-teal-400" />
                        <span className="text-gray-300">Alertas push personalizadas</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-teal-400" />
                        <span className="text-gray-300">Gráficos avanzados móviles</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-teal-400" />
                        <span className="text-gray-300">Autenticación biométrica</span>
                    </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#1e293b] hover:bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-3 transition w-full sm:w-auto">
                        <span className="text-2xl">🍎</span>
                        <div className="text-left">
                            <div className="text-[10px] text-gray-400 leading-none">Descargar en</div>
                            <div className="font-bold text-sm leading-tight">App Store</div>
                        </div>
                    </button>
                    <button className="bg-[#1e293b] hover:bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-3 transition w-full sm:w-auto">
                        <span className="text-2xl">▶️</span>
                        <div className="text-left">
                            <div className="text-[10px] text-gray-400 leading-none">Disponible en</div>
                            <div className="font-bold text-sm leading-tight">Google Play</div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}

export function CTA() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-20 mb-10">
            <div className="bg-gradient-to-t from-[#0f172a] to-[#1e293b] border border-gray-800/80 rounded-[2.5rem] p-6 md:p-12 text-center shadow-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Comienza a invertir hoy</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                    Únete a más de 500,000 inversores que confían en Equaly para hacer crecer su patrimonio.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link to="/register" className="bg-teal-400 hover:bg-teal-300 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-colors text-lg">
                        Crear Cuenta Gratis
                    </Link>
                    <button className="bg-transparent border border-gray-700 hover:bg-gray-800 text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-lg">
                        Cuenta Demo
                    </button>
                </div>
                <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm max-w-3xl mx-auto">
                    <span className="text-yellow-500">⚠️</span>
                    <p>
                        Los CFDs son instrumentos complejos y tienen un alto riesgo de perder dinero rápidamente debido al apalancamiento.
                    </p>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-gray-800 bg-[#0b0f19] pt-12 md:pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
                <div className="col-span-1 sm:col-span-2 md:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                        <img src="/images/equaly-logo.png" alt="EQUALY Logo" className="w-8 h-8 object-contain" />
                        <span className="text-white text-xl font-bold uppercase tracking-wide">EQUALY</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-6 max-w-xs">
                        Plataforma líder en negociación de CFDs, proporcionando acceso a mercados globales con tecnología avanzada.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Plataforma</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Forex</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Acciones</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Criptomonedas</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Materias Primas</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Herramientas</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Autochartist</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Calendario Económico</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Calculadora de Trading</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Webinars</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Compañía</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Sobre Nosotros</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Contacto</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Centro de Ayuda</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition-colors">Términos y Condiciones</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 text-sm text-gray-500">
                <p className="text-center md:text-left">© 2026 Equaly Trading. Todos los derechos reservados.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
}
