import React, { useState } from 'react';
import { 
  Star, Clock, CheckCircle2, ShieldCheck, 
  Award, Briefcase, Zap, Search, 
  UserCheck, GraduationCap, Gavel, Heart,
  Menu, X, Phone, Instagram, Facebook
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- CONFIGURACIÓN DE COLORES Y ESTILOS ---
const GOLD_GRADIENT = "bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37]";
const GOLD_TEXT = "bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37]";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Datos de Valores
  const values = [
    { icon: <Clock />, title: "Puntualidad", desc: "Respeto absoluto por tu tiempo." },
    { icon: <CheckCircle2 />, title: "Organización", desc: "Cada objeto en su lugar perfecto." },
    { icon: <Briefcase />, title: "Sistemáticos", desc: "Procesos probados y refinados." },
    { icon: <Heart />, title: "Cuidadosos", desc: "Tratamos tu hogar como un templo." },
    { icon: <ShieldCheck />, title: "Estructurados", desc: "Seguridad y protocolos claros." },
    { icon: <Zap />, title: "Ágiles", desc: "Eficiencia sin sacrificar calidad." },
    { icon: <Star />, title: "Eficientes", desc: "Resultados brillantes, siempre." },
    { icon: <Search />, title: "Minuciosos", desc: "El detalle que otros ignoran." },
    { icon: <Gavel />, title: "Éticos", desc: "Integridad inquebrantable." },
    { icon: <GraduationCap />, title: "Capacitados", desc: "Formación continua experta." },
    { icon: <UserCheck />, title: "Disciplinados", desc: "Constancia en la excelencia." },
    { icon: <Award />, title: "Honestos", desc: "Transparencia total." },
  ];

  // Datos de Antes/Después
  const transformations = [
    { area: "Dormitorio", before: "/images/dormitorio-antes.jpeg", after: "/images/dormitorio-despues.jpeg" },
    { area: "Sala", before: "/images/sala-antes.jpeg", after: "/images/sala-despues.jpeg" },
    { area: "Baño", before: "/images/baño-antes.jpeg", after: "/images/baño-despues.jpeg" },
    { area: "Cocina", before: "/images/cocina-antes.jpeg", after: "/images/cocina-despues.jpeg" },
  ];

  return (
    <div className="bg-black text-white font-sans min-h-screen selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* LOGO PNG TRANSPARENTE */}
          <div className="w-20 h-20 relative cursor-pointer group">
            {/* Brillo dorado detrás del logo */}
            <div className="absolute inset-0 bg-[#D4AF37] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity rounded-full"></div>
            
            {/* Imagen PNG sin efectos de mezcla raros, solo pura calidad */}
            <img 
              src="/logo.png" 
              alt="LUVIA Logo" 
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-gray-300 items-center">
            <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">Inicio</a>
            <a href="#valores" className="hover:text-[#D4AF37] transition-colors">Valores</a>
            <a href="#transformacion" className="hover:text-[#D4AF37] transition-colors">Resultados</a>
            <button className={`${GOLD_GRADIENT} text-black font-bold px-6 py-2 rounded-full hover:scale-105 transition-transform shadow-[0_4px_14px_rgba(212,175,55,0.4)]`}>
              Reservar
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#D4AF37]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-90"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#D4AF37] tracking-[0.3em] uppercase text-sm md:text-base mb-4 font-semibold">
              Limpieza Residencial Premium
            </h2>
            <h1 className="text-5xl md:text-8xl font-serif font-light mb-6 leading-tight">
              <span className="block text-white">Perfección en</span>
              <span className={GOLD_TEXT}>cada detalle.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
              Pureza y luminosidad ✨
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${GOLD_GRADIENT} text-black px-10 py-4 rounded-full text-lg font-bold tracking-wide shadow-[0_0_30px_rgba(212,175,55,0.5)]`}
            >
              RESERVAR SERVICIO
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* --- VALORES (GRID DE LUJO) --- */}
      <section id="valores" className="py-24 px-6 bg-zinc-950 relative border-t border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className={`text-4xl md:text-5xl font-serif mb-4 ${GOLD_TEXT}`}>Nuestros Valores</h3>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {values.map((val, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 border border-white/5 rounded-xl hover:border-[#D4AF37]/50 transition-all duration-500 hover:bg-white/5 hover:-translate-y-2"
              >
                <div className="text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  {React.cloneElement(val.icon, { size: 32, strokeWidth: 1.5 })}
                </div>
                <h4 className="text-lg font-bold mb-2 text-white font-serif tracking-wide">{val.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRANSFORMACIÓN (ANTES / DESPUÉS) --- */}
      <section id="transformacion" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-serif mb-4 text-white">La Transformación Real</h3>
            <p className="text-gray-400 font-light">Desliza el mouse para revelar la perfección.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {transformations.map((item, index) => (
              <div key={index} className="relative group rounded-2xl overflow-hidden border border-white/10 h-[400px]">
                {/* Imagen del ANTES (Fondo base) */}
                <div className="absolute inset-0">
                  <img src={item.before} alt={`${item.area} Antes`} className="w-full h-full object-cover grayscale opacity-60" />
                  <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded border border-white/20">ANTES</div>
                </div>

                {/* Imagen del DESPUÉS (Se revela con hover) */}
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                  <img src={item.after} alt={`${item.area} Después`} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-black font-bold text-xs px-3 py-1 rounded shadow-lg">DESPUÉS</div>
                </div>
                
                {/* Etiqueta del Área */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black to-transparent pointer-events-none">
                  <h4 className={`text-2xl font-serif ${GOLD_TEXT}`}>{item.area}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIOS --- */}
      <section className="py-20 px-6 bg-zinc-900 border-y border-[#D4AF37]/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6 text-[#D4AF37]">
            {[1,2,3,4,5].map(i => <Star key={i} fill="#D4AF37" size={20} />)}
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-200 mb-8 leading-relaxed">
            "Finalmente un servicio en el que puedo confiar las llaves de mi casa. La atención al detalle de Luvia es simplemente incomparable."
          </blockquote>
          <cite className="not-italic">
            <div className="font-bold text-[#D4AF37] uppercase tracking-wider">Sofia Martínez</div>
            <div className="text-sm text-gray-500">Cliente Residencial</div>
          </cite>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
             {/* Logo en Footer PNG */}
             <div className="w-24 mb-4 opacity-80 hover:opacity-100 transition-opacity">
                <img src="/logo.png" alt="Luvia Logo" className="w-full h-full object-contain" />
             </div>
             <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
               Pureza y luminosidad ✨
             </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="p-3 rounded-full border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 rounded-full border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-3 rounded-full border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
              <Phone size={20} />
            </a>
          </div>
        </div>
        <div className="text-center mt-12 text-gray-700 text-xs">
          © 2026 LUVIA. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default App;