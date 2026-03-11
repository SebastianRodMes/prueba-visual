import React, { useState, useEffect } from 'react';

export const KalovaLandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll to create a dynamic glassmorphic header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-caveat text-brand-dark overflow-hidden relative selection:bg-brand-magenta selection:text-white">

            {/* Abstracción de manchas orgánicas ultra fluidas (Animación Personalizada) */}
            <div className="fixed -top-32 -left-32 w-[500px] h-[500px] bg-brand-teal mix-blend-multiply opacity-30 animate-blob blur-3xl pointer-events-none z-0"></div>
            <div className="fixed top-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-magenta mix-blend-multiply opacity-20 animate-blob blur-3xl pointer-events-none z-0" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
            <div className="fixed -bottom-40 left-[20%] w-[700px] h-[700px] bg-brand-yellow mix-blend-multiply opacity-30 animate-blob blur-3xl pointer-events-none z-0" style={{ animationDelay: '4s', animationDuration: '15s' }}></div>

            {/* Encabezado Dinámico Glassmórfico */}
            <header className={`fixed top-0 w-full flex justify-between items-center px-8 md:px-16 py-6 font-bold text-2xl z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl shadow-lg py-4' : 'bg-transparent py-6'}`}>
                <div className="text-4xl font-black tracking-tighter cursor-pointer hover:scale-105 transition-transform duration-300">
                    <span className="text-brand-magenta">Kalo</span><span className="text-brand-teal">va</span>
                </div>

                <div className="hidden md:flex gap-12 items-center">
                    <a href="#murales" className="relative group overflow-hidden cursor-pointer tracking-wider text-brand-dark">
                        MURALES
                        <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-brand-magenta to-brand-teal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    </a>
                    <a href="#productos" className="relative group overflow-hidden cursor-pointer tracking-wider text-brand-dark">
                        PRODUCTOS
                        <span className="absolute left-0 bottom-0 w-full h-[3px] bg-brand-yellow transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out delay-75"></span>
                    </a>
                    <button
                        onClick={() => setIsDialogOpen(true)}
                        className="ml-4 px-6 py-2 rounded-full border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,151,167,0.3)] hover:shadow-[0_0_25px_rgba(0,151,167,0.6)]"
                    >
                        COTIZAR
                    </button>
                </div>

                {/* Mobile Menu Button con micro-interacción */}
                <button
                    className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center gap-2 items-center group"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`block w-8 h-1 bg-brand-dark rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-3 bg-brand-magenta' : 'group-hover:w-10 group-hover:bg-brand-teal'}`}></span>
                    <span className={`block w-8 h-1 bg-brand-dark rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'group-hover:bg-brand-teal'}`}></span>
                    <span className={`block w-8 h-1 bg-brand-dark rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-3 bg-brand-magenta' : 'group-hover:w-6 group-hover:bg-brand-teal'}`}></span>
                </button>
            </header>

            {/* Mobile Menu Dropdown Pantalla Completa */}
            <div className={`fixed inset-0 bg-white/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <a href="#murales" onClick={() => setIsMenuOpen(false)} className="text-5xl font-black py-4 hover:text-brand-magenta hover:scale-110 transition-all duration-300">MURALES</a>
                <a href="#productos" onClick={() => setIsMenuOpen(false)} className="text-5xl font-black py-4 hover:text-brand-teal hover:scale-110 transition-all duration-300">PRODUCTOS</a>
                <button onClick={() => { setIsDialogOpen(true); setIsMenuOpen(false); }} className="mt-8 px-10 py-4 rounded-full bg-brand-yellow text-brand-dark text-4xl font-bold shadow-xl hover:bg-brand-magenta hover:text-white transition-all duration-300">
                    COTIZAR AHORA
                </button>
            </div>

            {/* Sección Hero Revolucionaria */}
            <section className="flex flex-col justify-center items-center py-40 px-8 relative min-h-screen z-10 text-center">
                <div className="relative z-10 perspective-1000">
                    {/* Texto con gradiente animado y sombras 3D */}
                    <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter bg-gradient-to-r from-brand-magenta via-brand-teal to-brand-magenta bg-[length:200%_auto] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] text-transparent bg-clip-text filter drop-shadow-[0_10px_10px_rgba(224,30,133,0.3)] transform transition hover:scale-105 duration-700">
                        MURALES
                        <br /><span className="text-6xl md:text-8xl">Y DISEÑO</span>
                    </h1>

                    {/* Tarjeta de información Glassmorphic flotante */}
                    <div className="mt-16 mx-auto max-w-lg group hover:-translate-y-4 transition-transform duration-500">
                        <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-brand-yellow via-white/50 to-brand-teal">
                            <div className="bg-white/40 backdrop-blur-2xl px-8 py-6 rounded-[22px] shadow-2xl border border-white/60 flex flex-col items-center gap-4">
                                <p className="font-black text-brand-dark text-4xl tracking-wide group-hover:text-brand-magenta transition-colors">by KALOVA</p>
                                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-brand-teal to-transparent"></div>
                                <a
                                    href="https://instagram.com/muralesydiseno_by_kalova"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-2xl font-sans font-bold text-gray-700 flex items-center gap-2 hover:text-brand-teal transition-all duration-300 group/link"
                                >
                                    <svg className="w-6 h-6 transform group-hover/link:rotate-12 group-hover/link:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                                    @muralesydiseno_by_kalova
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                    <span className="text-xl uppercase tracking-[0.3em] font-sans font-bold">Explorar</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
            </section>

            {/* Bento Grid: El "Revolucionario" Portafolio (Nuevo) */}
            <section id="murales" className="py-24 px-4 md:px-12 max-w-7xl mx-auto relative z-10 w-full">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-br from-brand-dark to-brand-teal text-transparent bg-clip-text drop-shadow-sm">
                        NUESTRO<br />TRABAJO
                    </h2>
                    <span className="text-3xl text-brand-magenta font-bold hidden md:block">Descubre la magia ✨</span>
                </div>

                {/* Layout Interactivo Bento */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[700px]">

                    {/* Card 1: Principal y más grande */}
                    <div className="group relative col-span-1 md:col-span-2 row-span-1 md:row-span-2 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] bg-brand-teal flex flex-col justify-end p-10 cursor-crosshair">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-50 group-hover:scale-110 transition-transform duration-[2s] ease-out"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        <div className="relative z-10 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                            <span className="px-4 py-1 text-sm font-bold bg-white/20 backdrop-blur-md rounded-full text-white border border-white/20 inline-block mb-4 font-sans">MURAL INTERIOR</span>
                            <h3 className="text-5xl md:text-6xl font-black text-white leading-none">Explosión<br /><span className="text-brand-yellow">Floral</span></h3>
                            <p className="text-white/80 text-xl md:text-2xl mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 font-sans font-light max-w-sm">
                                Diseño fluido adaptado a espacios corporativos que buscan inspirar creatividad.
                            </p>
                        </div>
                        {/* Esquina flotante que aparece */}
                        <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transform rotate-45 group-hover:rotate-0 transition-all duration-700 bg-white/10 backdrop-blur-md">
                            <span className="text-white text-2xl font-sans">↗</span>
                        </div>
                    </div>

                    {/* Card 2: Glassmorphism Puro */}
                    <div className="group relative col-span-1 md:col-span-2 row-span-1 rounded-[2rem] overflow-hidden p-8 border border-white/40 bg-white/40 backdrop-blur-3xl shadow-lg hover:shadow-brand-magenta/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-center">
                        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-brand-magenta/40 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                        <div className="absolute -top-16 -left-16 w-32 h-32 bg-brand-yellow/30 rounded-full blur-2xl group-hover:translate-x-10 group-hover:translate-y-10 transition-transform duration-1000"></div>

                        <div className="relative z-10 flex items-start justify-between">
                            <div>
                                <span className="px-3 py-1 text-xs font-bold bg-white/60 backdrop-blur-sm rounded-full text-brand-magenta inline-block mb-3 font-sans shadow-sm">ILUSTRACIÓN DIGITAL</span>
                                <h3 className="text-4xl md:text-5xl font-bold text-brand-dark drop-shadow-sm">Trazos Libres</h3>
                                <p className="text-gray-600 font-sans mt-2 text-lg">Digitalización de conceptos para marcas modernas.</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Contraste Oscuro */}
                    <div className="group relative col-span-1 md:col-span-1 row-span-1 rounded-[2rem] overflow-hidden p-8 bg-brand-dark text-white hover:bg-black transition-colors duration-500 cursor-pointer flex flex-col justify-between">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--color-brand-teal)_0%,_transparent_70%)]"></div>
                        <div className="relative z-10 flex justify-end">
                            <span className="text-brand-teal font-sans text-xl border border-brand-teal/30 rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">01</span>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-1">Rotulación</h3>
                            <p className="font-sans text-gray-400 text-sm">Pizarras y Vidrieras.</p>
                        </div>
                    </div>

                    {/* Card 4: Vibrante Neón */}
                    <div className="group relative col-span-1 md:col-span-1 row-span-1 rounded-[2rem] overflow-hidden p-8 bg-brand-yellow hover:scale-105 transition-transform duration-500 cursor-pointer shadow-lg hover:shadow-brand-yellow/50 flex flex-col justify-center items-center text-center">

                        <div className="relative z-10">
                            <svg className="w-16 h-16 mx-auto text-brand-dark mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                            <h3 className="text-3xl font-black text-brand-dark">Pintura Custom</h3>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-magenta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>

                </div>
            </section>

            {/* Sección Cotización - Estilo Tarjeta Flotante */}
            <section className="py-24 px-4 relative z-10 flex justify-center">
                <div className="relative max-w-5xl w-full bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100">

                    {/* Elemento decorativo 3D */}
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-yellow rounded-full shadow-[inset_10px_-10px_20px_rgba(255,255,255,0.5),_10px_10px_20px_rgba(0,0,0,0.1)] transform rotate-12 flex items-center justify-center">
                        <span className="text-brand-dark font-black text-4xl rotate-[-12deg]">!</span>
                    </div>

                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-wide mb-6">
                            INICIA TU <span className="text-brand-magenta">PROYECTO</span>
                        </h2>
                        <p className="text-2xl md:text-3xl font-sans font-light text-gray-500 max-w-2xl mx-auto">
                            Transformamos espacios aburridos en obras de arte inmersivas. Completa la info y hagamos magia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans relative z-10">
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-shadow">
                            <h4 className="text-xl font-bold text-brand-teal mb-6 uppercase tracking-wider flex items-center gap-2">
                                <span className="w-8 h-px bg-brand-teal"></span> Checklist Inicial
                            </h4>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start gap-4"><span className="text-brand-yellow text-xl">✨</span> <span>Ubicación exacta (Cantón/Distrito)</span></li>
                                <li className="flex items-start gap-4"><span className="text-brand-yellow text-xl">✨</span> <span>Dimensiones precisas de la pared</span></li>
                                <li className="flex items-start gap-4"><span className="text-brand-yellow text-xl">✨</span> <span>Textura actual y material del muro</span></li>
                                <li className="flex items-start gap-4"><span className="text-brand-yellow text-xl">✨</span> <span>Fotos, videos o referencias de estilo</span></li>
                            </ul>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-8">
                            <button
                                className="w-full relative group overflow-hidden bg-brand-magenta text-white font-bold font-sans text-xl py-5 px-8 rounded-2xl shadow-[0_10px_20px_rgba(224,30,133,0.3)] hover:shadow-[0_15px_30px_rgba(224,30,133,0.5)] transition-all transform hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 slant-10"></div>
                                CONTACTAR POR WHATSAPP
                            </button>

                            <div className="flex items-center gap-4 w-full">
                                <div className="h-px bg-gray-200 flex-1"></div>
                                <span className="text-gray-400 font-sans text-sm font-medium">OPCIÓN DIGITAL</span>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>

                            <button
                                onClick={() => setIsDialogOpen(true)}
                                className="w-full bg-white border-2 border-brand-teal text-brand-teal font-bold font-sans text-lg py-4 px-8 rounded-2xl hover:bg-brand-teal hover:text-white transition-all shadow-sm"
                            >
                                Llenar Formulario Automático
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Glassmórfico de Vanguardia */}
            {isDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 touch-none">
                    {/* Fondo super borroso */}
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl transition-opacity animate-[fadeIn_0.3s_ease-out]"></div>

                    <div className="bg-white/90 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.2)] w-full max-w-2xl overflow-hidden transform transition-all relative z-10 border border-white">

                        {/* Cabecera abstracta del Modal */}
                        <div className="relative px-10 py-8 overflow-hidden bg-brand-dark">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-magenta rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-teal rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

                            <div className="relative z-10 flex justify-between items-start">
                                <div>
                                    <h3 className="text-5xl font-black text-white leading-none">Tu Visión.<br /><span className="text-brand-yellow">Nuestro Lienzo.</span></h3>
                                    <p className="text-gray-300 font-sans mt-2">Detalla tu idea a continuación.</p>
                                </div>
                                <button
                                    onClick={() => setIsDialogOpen(false)}
                                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl font-sans font-light transition-colors"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>

                        <div className="p-10 space-y-6 font-sans">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-gray-600 font-bold mb-2 text-sm uppercase tracking-wider">Tu Nombre</label>
                                    <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all shadow-inner" placeholder="Ej. Camila Quirós" />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-gray-600 font-bold mb-2 text-sm uppercase tracking-wider">Ubicación</label>
                                    <select className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all shadow-inner appearance-none cursor-pointer">
                                        <option value="">Selecciona Provincia</option>
                                        <option value="san-jose">San José</option>
                                        <option value="alajuela">Alajuela</option>
                                        <option value="cartago">Cartago</option>
                                        <option value="heredia">Heredia</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-600 font-bold mb-2 text-sm uppercase tracking-wider">La Idea (Concepto y Dimensiones)</label>
                                <textarea rows="4" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all shadow-inner resize-none" placeholder="Describe la textura del muro, medidas aprox, y qué colores imaginas..."></textarea>
                            </div>
                        </div>

                        <div className="px-10 py-6 bg-gray-50/50 flex justify-end gap-4">
                            <button
                                onClick={() => setIsDialogOpen(false)}
                                className="px-8 py-3 rounded-xl text-gray-500 font-bold hover:text-gray-800 font-sans transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                className="px-8 py-3 rounded-xl bg-brand-dark text-white font-bold font-sans hover:bg-black hover:shadow-lg hover:-translate-y-1 transition-all"
                            >
                                Enviar Solicitud
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};
