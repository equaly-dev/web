import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#0b0f19] text-white font-sans flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">

            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center max-w-lg">
                <Link to="/" className="mb-8 hover:opacity-80 transition-opacity">
                    <img src="/images/equaly-logo.png" alt="EQUALY Logo" className="w-20 h-20 object-contain mx-auto" />
                </Link>

                <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-indigo-500 mb-4 tracking-tighter">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Página no encontrada
                </h2>

                <p className="text-gray-400 text-lg mb-10">
                    Lo sentimos, no hemos podido encontrar la página que estás buscando. Puede que haya sido movida, eliminada, o que la dirección sea incorrecta.
                </p>

                <Link
                    to="/"
                    className="flex items-center gap-2 bg-teal-400 hover:bg-teal-300 text-gray-900 px-8 py-3.5 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-teal-400/20"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                    Regresar al Inicio
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
