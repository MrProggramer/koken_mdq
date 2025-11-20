import { useState, useEffect } from 'react'
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin, FiMenu, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ShoppingBag, Users, Sparkles, Cake, PartyPopper, Heart, Coffee } from 'lucide-react'

// Importar logo e imagen maestra
import logoKoken from './assets/logo_koken_1.png'
import maestraImg from './assets/maestra.jpg'
import maestra2Img from './assets/grid_background.jpg'

// Importar imágenes de productos
import img1 from './assets/0949b276-5fa1-493e-af1d-533773d20b84.jpg'
import img2 from './assets/1399be21-ed8e-4a61-9e0f-e88ef8bde347.jpg'
import img3 from './assets/160e2cbe-833c-43f1-a99b-c71bc4c22b31.jpg'
import img4 from './assets/1be76dcc-5711-4d77-9fe6-67583b5cf690.jpg'
import img5 from './assets/1db12ef6-8683-4b67-8390-5d9193fab02c.jpg'
import img6 from './assets/maestra.jpg'
import img7 from './assets/2ee8c29d-9a13-4f6a-a915-6c92064978e4.jpg'
import img8 from './assets/3cac8862-3147-4a6f-b1ab-c44f50ab95ca.jpg'
import img9 from './assets/4e622e9a-48f2-40dd-ad61-8683131811e8.jpg'
import img10 from './assets/postres_delantal.jpg'
import img11 from './assets/60df2871-43c7-493f-a0ce-3c2232ce5e3c.jpg'
import img12 from './assets/636d7573-90bd-4e27-8e15-b67bdf1e64ec.jpg'
import img13 from './assets/b9bd8aec-9231-41e8-ad01-4aaf4e032ba8.jpg'
import img14 from './assets/69e6390f-a19b-460a-8c73-94e54a7216c4.jpg'
import img15 from './assets/6ad1f585-c2de-4c06-94e1-18e2abbcedee.jpg'
import img16 from './assets/73f4c73a-612f-4fde-9092-026c6b653bca.jpg'
import img17 from './assets/9cd361fb-5493-4939-bb9c-d682627fd9a1.jpg'
import img18 from './assets/9e07d805-8f00-43ce-9ddf-b7197dab964c.jpg'
import img19 from './assets/a5a3f9dc-c877-48a1-89d7-e4dc7150d62d.jpg'
import img20 from './assets/afe46a6f-2194-4fae-bdeb-9877fa00df74.jpg'
import img21 from './assets/grid_background.jpg'
import img22 from './assets/b9bd8aec-9231-41e8-ad01-4aaf4e032ba8.jpg'
import img23 from './assets/c177be19-8cc7-4a21-b456-5776a1cf3091.jpg'
import img24 from './assets/c3a712c3-3d2e-47ff-abfd-ba39edf4d5b4.jpg'
import img25 from './assets/c6d8c85d-559d-45e7-87ef-76a5060ebe62.jpg'
import img26 from './assets/evento_1.jpg'
import img27 from './assets/evento_2.jpg'
import img28 from './assets/cambiarNombre.jpg'
import img29 from './assets/ee0eca82-2094-4cb5-9db8-34af4123a420.jpg'
import img30 from './assets/f0a47ac1-124b-49dd-a3c0-8438b6f9a6c8.jpg'
import img31 from './assets/f579f23b-0378-4c0f-9dcb-a0e2c380cbdb.jpg'

const productImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31]

function App() {
  return <LandingPage />
}

function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBadge, setShowBadge] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setShowBadge(window.innerHeight >= 697)
    }
    
    // Check initial size
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-cream-50 overflow-x-hidden relative">
      {/* Header Premium con Glassmorphism */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-elegant border-b border-gold-200/30' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center h-12 md:h-14 transition-all duration-700 ${
            isScrolled ? 'justify-between' : 'justify-between'
          }`}>
            {/* Logo - Aparece solo al hacer scroll */}
            <div className={`flex items-center group cursor-pointer transition-all duration-700 ${
              isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none absolute left-4 sm:left-6 lg:left-8'
            }`}>
              <h1 className="font-cooper font-black tracking-tight text-primary text-2xl md:text-3xl lg:text-4xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(220,60,70,0.6)] group-hover:text-shadow-lg" style={{ 
                textShadow: 'none',
                transition: 'all 0.5s ease'
              }}>
                <span className="inline-block group-hover:animate-pulse">KOKEN</span>
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center transition-all duration-700 ${
              isScrolled ? 'gap-20' : 'flex-1 justify-center gap-32'
            }`}>
              {['Productos', 'Nosotros', 'Servicios'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative font-cormorant text-2xl font-medium transition-all duration-300 group ${
                    isScrolled 
                      ? 'text-charcoal-700 hover:text-gold-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-gold-500' : 'bg-white'
                  }`}></span>
                </a>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className={`hidden lg:flex items-center transition-all duration-700`}>
              <a
                href="#contacto"
                className={`group relative overflow-hidden px-4 py-1 rounded-full font-cormorant font-medium text-xl tracking-wide transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-white shadow-md hover:shadow-lg'
                    : 'bg-white text-primary border border-white shadow-[0_2px_8px_rgba(255,255,255,0.25)] hover:shadow-[0_4px_12px_rgba(255,255,255,0.35)]'
                }`}
                style={{
                  boxShadow: isScrolled 
                    ? '0 2px 10px rgba(251, 191, 36, 0.25)' 
                    : '0 2px 8px rgba(255, 255, 255, 0.25)'
                }}
              >
                <span className="relative z-10">Contactanos</span>
                <svg 
                  className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-1.5 rounded-lg transition-all duration-700 ${
                isScrolled 
                  ? 'text-charcoal-800 hover:bg-gold-100' 
                  : 'text-white hover:bg-white/10'
              } ${!isScrolled ? 'absolute right-4 sm:right-6' : ''}`}
            >
              {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Premium Version */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="relative bg-white/95 backdrop-blur-2xl border-t border-primary/20 shadow-2xl overflow-hidden">
            {/* Gradientes de fondo superpuestos */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-transparent to-gold-100/30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-cream-50/80 via-white/50 to-secondary/10 pointer-events-none"></div>
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary/8 to-transparent pointer-events-none"></div>
            
            {/* Efectos de luz sutiles */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-gold-200/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
            
            {/* Contenido del menú */}
            <div className="relative z-10">
            <div className="px-6 pt-6 pb-4 space-y-2 flex flex-col items-center">
              {/* Menu Items con iconos */}
              {[
                { name: 'Productos', icon: <ShoppingBag size={24} strokeWidth={2} /> },
                { name: 'Nosotros', icon: <Users size={24} strokeWidth={2} /> },
                { name: 'Servicios', icon: <Sparkles size={24} strokeWidth={2} /> }
              ].map((item, idx) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group w-full max-w-xs flex items-center justify-center gap-4 px-6 py-3.5 rounded-2xl font-cormorant text-xl font-semibold text-charcoal-700 hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-gold-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    animation: isMobileMenuOpen ? `slideInRight 0.3s ease-out ${idx * 0.1}s both` : 'none'
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/20 via-gold-100 to-gold-200 group-hover:from-white group-hover:to-white flex items-center justify-center text-primary group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <span className="font-bold">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Divider elegante */}
            <div className="px-6 py-3">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            </div>

            {/* CTA Button Premium */}
            <div className="px-6 py-4">
              <a
                href="https://wa.me/5492235242957"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative overflow-hidden flex items-center justify-center gap-3 text-white px-8 py-4 rounded-2xl font-cormorant font-bold text-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  animation: isMobileMenuOpen ? 'slideInRight 0.3s ease-out 0.3s both' : 'none',
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
                }}
              >
                <FaWhatsapp className="text-3xl relative z-10" />
                <span className="relative z-10">Contáctanos</span>
                <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)'
                  }}
                ></div>
              </a>
            </div>

            {/* Información rápida */}
            <div className="px-6 pt-3 pb-8">
              <div className="bg-gradient-to-br from-secondary/10 via-gold-50 to-cream-100 rounded-2xl p-4 border border-primary/20"
                style={{
                  animation: isMobileMenuOpen ? 'slideInRight 0.3s ease-out 0.4s both' : 'none'
                }}
              >
                <p className="text-xs text-primary font-cormorant font-semibold mb-3 uppercase tracking-wider">Visitanos</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-charcoal-700">
                    <FiMapPin className="text-primary flex-shrink-0" />
                    <span className="text-sm font-cormorant">Bernardo de Irigoyen 3694, MDQ</span>
                  </div>
                  <div className="flex items-center gap-3 text-charcoal-700">
                    <FiPhone className="text-primary flex-shrink-0" />
                    <span className="text-sm font-cormorant">0223 524-2957</span>
                  </div>
                </div>
                
                {/* Redes sociales */}
                <div className="flex gap-2 mt-4 pt-3 border-t border-primary/20">
                  {[
                    { icon: <FiInstagram />, label: 'Instagram', link: 'https://www.instagram.com/koken.mdq/' },
                    { icon: <FiFacebook />, label: 'Facebook', link: 'https://www.facebook.com/koken.mdq/' }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gradient-to-r hover:from-primary hover:to-gold-400 text-charcoal-700 hover:text-white px-3 py-2 rounded-xl transition-all duration-300 hover:scale-105 border border-primary/20 hover:border-primary"
                    >
                      {social.icon}
                      <span className="text-xs font-cormorant font-semibold">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Armonioso y Equilibrado */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Fondo para Desktop - Imagen única */}
        <div className="hidden lg:block absolute inset-0">
          <img 
            src={maestraImg} 
            alt="Fondo Koken" 
            className="w-full h-full object-cover scale-110"
          />
          {/* Overlay degradado más sutil y elegante */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/60 via-charcoal-900/40 to-primary/30"></div>
          {/* Vignette efecto para enfocar el centro */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(0,0,0,0.4) 100%)'
          }}></div>
        </div>

        {/* Fondo para Mobile - Grid de 4 imágenes */}
        <div className="lg:hidden absolute inset-0">
          <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-1">
            <div className="relative overflow-hidden">
              <img src={productImages[2]} alt="Koken Postres" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden">
              <img src={productImages[26]} alt="Koken Eventos" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden">
              <img src={productImages[15]} alt="Koken Productos" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden">
              <img src={productImages[9]} alt="Koken Delantal" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Overlay más oscuro para mobile para mejor legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/70 via-charcoal-900/60 to-charcoal-900/70"></div>
        </div>

        {/* Efectos de luz mejorados */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-8 lg:py-0">
          <div className="max-w-7xl mx-auto w-full">
            {/* Grid simple y equilibrado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-48 items-center justify-items-center">
              
              {/* 🎨 IZQUIERDA - Logo Limpio y Elegante */}
              <div className="flex flex-col items-center justify-center opacity-0 animate-fade-in-up order-1 w-full" style={{ animationDelay: '0.2s' }}>
                
                {/* Logo con efecto glow y resplandor */}
                <div className="relative group w-3/4 mx-auto">
                  {/* Resplandor de fondo animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-gold-400/30 to-secondary/30 rounded-full blur-3xl animate-pulse group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-300/20 to-primary/20 rounded-full blur-2xl animate-breathe"></div>
                  
                  {/* Logo con filtros y efectos */}
                  <div className="relative flex justify-center">
                    <img 
                      src={logoKoken} 
                      alt="Koken Pastelería" 
                      className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-60 lg:h-60 object-contain animate-floatSoft drop-shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:drop-shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all duration-700 hover:scale-105 filter brightness-110"
                      style={{
                        filter: 'drop-shadow(0 0 30px rgba(251, 191, 36, 0.3)) drop-shadow(0 0 15px rgba(236, 72, 153, 0.4))'
                      }}
                    />
                  </div>
                </div>
                
                {/* Badge equilibrado - semi-transparente */}
                {showBadge && (
                  <div className="mt-6 lg:mt-24 bg-white/55 backdrop-blur-xl border-2 border-gold-400/70 rounded-2xl px-6 py-3 lg:px-8 lg:py-4 transition-all duration-500 hover:scale-105 hover:bg-white/65">
                    <div className="flex items-center gap-4 lg:gap-6">
                      <div className="text-center border-r-2 border-gold-400/60 pr-4 lg:pr-6">
                        <div className="text-2xl lg:text-3xl font-black text-charcoal-900 font-cinzel">100%</div>
                        <div className="text-xs lg:text-sm text-charcoal-800 font-cormorant font-bold uppercase tracking-wider">Artesanal</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-primary to-gold-600 bg-clip-text text-transparent font-cinzel">PREMIUM</div>
                        <div className="text-xs lg:text-sm text-charcoal-800 font-cormorant font-bold uppercase tracking-wider">Calidad</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 📸 DERECHA - Imagen Limpia y Balanceada */}
              <div className="flex justify-center items-center opacity-0 animate-fade-in-up order-2 lg:order-2 w-full" style={{ animationDelay: '0.4s' }}>
                <div className="relative group w-3/4 max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                  
                  {/* Imagen simple con marco elegante */}
                  <div className="relative aspect-[3/4] rounded-[30px] lg:rounded-[50px] overflow-hidden border border-white/30 group-hover:border-white/40 transition-all duration-700" style={{
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), 0 0 40px rgba(236, 72, 153, 0.1)'
                  }}>
                    <img 
                      src={maestra2Img} 
                      alt="Koken Pastelería" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay suave para profundidad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent"></div>
                    
                    {/* Marco interior minimalista */}
                    <div className="absolute inset-4 lg:inset-8 border border-white/10 rounded-[20px] lg:rounded-[40px] pointer-events-none"></div>
                  </div>

                  {/* Solo una decoración elegante en esquina */}
                  <div className="hidden lg:block absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-primary/20 rounded-tr-[30px] group-hover:border-primary/30 transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator minimalista */}
        <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-500">
            <svg 
              className="w-5 h-5 text-white animate-bounce" 
              style={{ animationDuration: '2.5s' }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Resto de las secciones continúan igual por ahora... */}
      {/* Sección Productos */}
      <section id="productos" className="relative py-24 px-4 bg-gradient-to-b from-cream-50 to-white overflow-hidden">
        {/* Efectos de fondo decorativos */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Encabezado de sección premium mejorado */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-charcoal-900 mb-6 font-cinzel leading-tight">
              Nuestras <span className="text-primary">Creaciones</span>
            </h2>
            
            <div className="flex justify-center mb-8">
              <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-gold-400 to-secondary rounded-full shadow-lg" style={{
                boxShadow: '0 4px 12px rgba(220, 60, 70, 0.3)'
              }}></div>
            </div>
            
            <p className="text-xl md:text-2xl text-charcoal-600 max-w-3xl mx-auto font-cormorant leading-relaxed">
              Cada creación es una <span className="font-bold text-primary">obra de arte única</span>, elaborada con ingredientes premium 
              y el toque especial que nos distingue
            </p>
          </div>

          {/* Grid de productos con efectos premium mejorados */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {productImages.slice(0, 12).map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer bg-white"
                style={{
                  animationDelay: `${idx * 0.05}s`
                }}
              >
                {/* Imagen con efecto de zoom */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={img}
                    alt={`Producto ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000 ease-out"
                  />
                  {/* Efecto de brillo al pasar */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/10 to-transparent group-hover:translate-x-full transform -translate-x-full" 
                    style={{ transition: 'transform 1s ease-out, opacity 0.7s' }}
                  ></div>
                </div>
                
                {/* Overlay premium con glassmorphism mejorado */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-white font-playfair font-bold text-lg mb-1">Delicia Premium</p>
                        <p className="text-gold-300 font-cormorant text-sm flex items-center gap-1">
                          Ver detalles 
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </p>
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-gold-400 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 shadow-lg group-hover:rotate-12 transition-transform duration-500">
                        <Sparkles className="text-white" size={24} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Borde dorado animado en hover */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-gold-400/60 rounded-3xl transition-all duration-500"></div>
                
                {/* Efecto de esquinas decorativas */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/0 group-hover:border-white/50 rounded-tl-2xl transition-all duration-500"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/0 group-hover:border-white/50 rounded-br-2xl transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* CTA Visitanos */}
          <div className="text-center mt-20">
            <a 
              href="#contacto"
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-primary via-secondary to-gold-400 text-white px-12 py-5 rounded-full font-playfair font-bold text-xl transition-all hover:scale-110 shadow-2xl hover:shadow-gold overflow-hidden"
            >
              {/* Efecto de brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <FiMapPin className="relative z-10" size={24} strokeWidth={2.5} />
              <span className="relative z-10">Visitanos</span>
              <svg className="relative z-10 w-6 h-6 transition-transform group-hover:translate-x-2 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              
              {/* Fondo alternativo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Sección Nosotros - Premium */}
      <section id="nosotros" className="relative py-24 px-4 bg-white overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream-100 to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contenido */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400"></div>
                  <span className="text-sm font-playfair text-gold-600 tracking-[0.3em] uppercase">
                    Nuestra Historia
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-charcoal-900 mb-6 font-cinzel leading-tight">
                  Pastelería Artesanal <br />
                  <span className="text-primary">desde 2010</span>
                </h2>
                
                <div className="h-1 w-32 bg-gradient-to-r from-primary via-gold-400 to-secondary rounded-full mb-8"></div>
              </div>

              <div className="space-y-6 font-cormorant text-lg text-charcoal-600 leading-relaxed">
                <p className="text-xl">
                  En <span className="font-bold text-charcoal-900">Koken</span>, cada pastel, cada croissant y cada cupcake cuenta una historia. 
                  Desde nuestra fundación en Mar del Plata, nos hemos dedicado a crear experiencias 
                  dulces inolvidables combinando técnicas tradicionales con ingredientes de la más alta calidad.
                </p>
                
                <p>
                  Nuestro equipo de pasteleros apasionados trabaja cada día para ofrecerte productos 
                  frescos, artesanales y con el toque especial que nos caracteriza. Porque creemos que 
                  la repostería no es solo un trabajo, <span className="font-bold text-primary italic">es nuestro arte</span>.
                </p>
              </div>

              {/* Stats premium */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '15+', label: 'Años de Experiencia', icon: '🏆' },
                  { number: '5000+', label: 'Clientes Felices', icon: '💝' },
                  { number: '⭐ 5.0', label: 'Valoración', icon: '' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center group cursor-pointer">
                    <div className="bg-gradient-to-br from-cream-100 to-cream-200 rounded-2xl p-6 border border-gold-200/50 transition-all duration-300 group-hover:shadow-gold group-hover:scale-105">
                      {stat.icon && <div className="text-3xl mb-3">{stat.icon}</div>}
                      <div className="text-3xl md:text-4xl font-black text-primary mb-2 font-cinzel">{stat.number}</div>
                      <div className="text-sm text-charcoal-600 font-cormorant font-semibold">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Galería de imágenes */}
            <div className="grid grid-cols-2 gap-4">
              {productImages.slice(12, 16).map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl aspect-square shadow-elegant group cursor-pointer"
                  style={{
                    animationDelay: `${idx * 0.1}s`
                  }}
                >
                  <img
                    src={img}
                    alt={`Nosotros ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Borde dorado */}
                  <div className="absolute inset-0 border-2 border-gold-400/0 group-hover:border-gold-400/70 rounded-2xl transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios - Ultra Premium */}
      <section id="servicios" className="relative py-24 px-4 bg-gradient-to-b from-white to-cream-100">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400"></div>
              <span className="text-sm font-playfair text-gold-600 tracking-[0.3em] uppercase">
                Servicios
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-charcoal-900 mb-6 font-cinzel">
              Para Cada <span className="text-primary">Ocasión Especial</span>
            </h2>
            
            <div className="flex justify-center mb-8">
              <div className="h-1 w-32 bg-gradient-to-r from-primary via-gold-400 to-secondary rounded-full"></div>
            </div>
          </div>

          {/* Grid de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Cake size={32} strokeWidth={2} />, 
                title: 'Cumpleaños', 
                desc: 'Diseños personalizados para celebrar tu día más especial',
                color: 'from-pink-400 to-pink-600'
              },
              { 
                icon: <PartyPopper size={32} strokeWidth={2} />, 
                title: 'Eventos Corporativos', 
                desc: 'Catering premium para impresionar en reuniones',
                color: 'from-blue-400 to-blue-600'
              },
              { 
                icon: <Heart size={32} strokeWidth={2} />, 
                title: 'Bodas', 
                desc: 'Tortas nupciales elegantes que roban suspiros',
                color: 'from-purple-400 to-purple-600'
              },
              { 
                icon: <Coffee size={32} strokeWidth={2} />, 
                title: 'Desayunos', 
                desc: 'Experiencias matutinas premium para compartir',
                color: 'from-amber-400 to-amber-600'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 border border-cream-300/50 hover:border-gold-400 transition-all duration-500 hover:scale-[1.03] shadow-soft hover:shadow-gold text-center cursor-pointer overflow-hidden"
                style={{
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                {/* Efecto shimmer de fondo */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-cream-100"></div>
                </div>

                {/* Contenido */}
                <div className="relative z-10">
                  {/* Ícono con gradiente */}
                  <div className="relative mb-6 flex justify-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-black text-charcoal-900 mb-4 font-playfair group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Línea decorativa */}
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4"></div>

                  {/* Descripción */}
                  <p className="text-charcoal-600 leading-relaxed font-cormorant text-lg">
                    {service.desc}
                  </p>

                  {/* Botón ver más */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-gold-600 font-playfair font-semibold text-sm flex items-center justify-center gap-2">
                      Conocer más <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Contacto Premium */}
      <section id="contacto" className="relative py-24 px-4 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Encabezado centrado */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-cinzel leading-tight">
              Visítanos en Nuestra
              <br />
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Pastelería
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mb-8 mx-auto"></div>
            <p className="text-xl text-white/70 font-cormorant leading-relaxed max-w-2xl mx-auto">
              Estamos aquí para endulzar tus momentos más especiales
            </p>
          </div>

          {/* Información de contacto en grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <FiMapPin />, title: 'Ubicación', content: 'Bernardo de Irigoyen 3694, Mar del Plata', link: 'https://www.google.com/maps/place/Bernardo+de+Irigoyen+3694,+B7600+Mar+del+Plata,+Provincia+de+Buenos+Aires', order: 'order-3 md:order-1' },
              { icon: <FiPhone />, title: 'WhatsApp', content: '0223 524-2957', link: 'https://wa.me/5492235242957', order: 'order-1 md:order-2' },
              { icon: <FiMail />, title: 'Email', content: 'hola@koken.com.ar', link: 'mailto:hola@koken.com.ar', order: 'order-2 md:order-3' }
            ].map((item, idx) => (
              <a 
                key={idx} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex flex-col items-center text-center gap-4 p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 group ${item.order}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-3xl shadow-gold group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 font-playfair text-gold-300">{item.title}</h3>
                  <p className="text-white/80 font-cormorant text-lg group-hover:text-white transition-colors">{item.content}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Mapa de Google Maps - Full Width */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-400/30 hover:border-gold-400/60 transition-all duration-500 mb-12">
            <div className="relative w-full h-[450px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.7471589688987!2d-57.54845!3d-38.00561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc3f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sBernardo%20de%20Irigoyen%203694%2C%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Koken en Mar del Plata"
                className="w-full h-full"
              ></iframe>
              
              {/* Botón flotante para abrir en Google Maps */}
              <a
                href="https://www.google.com/maps/place/Bernardo+de+Irigoyen+3694,+B7600+Mar+del+Plata,+Provincia+de+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 bg-gradient-to-r from-primary to-gold-400 text-white px-6 py-3 rounded-full font-cormorant font-bold text-base shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2 z-10"
              >
                <FiMapPin size={20} />
                <span>Abrir en Google Maps</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Redes sociales centradas */}
          <div className="text-center">
            <p className="text-sm text-white/60 mb-6 font-cormorant tracking-wider uppercase">Síguenos en Redes</p>
            <div className="flex gap-4 justify-center">
              {[
                { icon: <FiInstagram />, link: 'https://www.instagram.com/koken.mdq/', name: 'Instagram' },
                { icon: <FiFacebook />, link: 'https://www.facebook.com/koken.mdq/', name: 'Facebook' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-2xl hover:bg-gradient-to-br hover:from-gold-400 hover:to-gold-600 hover:border-gold-400 transition-all duration-300 hover:scale-110 hover:shadow-gold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="bg-charcoal-950 py-16 px-4 border-t border-gold-400/10">
        <div className="max-w-7xl mx-auto">
          {/* Contenido principal del footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo y descripción */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-gold">
                  <Cake size={28} strokeWidth={2} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white font-cinzel">KOKEN</h3>
                  <p className="text-xs text-gold-400 font-playfair tracking-[0.2em]">ARTESANAL</p>
                </div>
              </div>
              <p className="text-white/60 font-cormorant leading-relaxed">
                Endulzando vidas desde 2010 con pasión, dedicación y los mejores ingredientes.
              </p>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="text-white font-playfair font-bold text-lg mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {['Productos', 'Nosotros', 'Servicios', 'Contacto'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-white/60 hover:text-gold-400 transition-colors font-cormorant text-lg flex items-center gap-2 group"
                    >
                      <span className="text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Horarios */}
            <div>
              <h4 className="text-white font-playfair font-bold text-lg mb-6">Horarios</h4>
              <ul className="space-y-3 text-white/60 font-cormorant text-lg">
                <li className="flex justify-between">
                  <span>Lun - Vie</span>
                  <span className="text-gold-400">9:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados</span>
                  <span className="text-gold-400">10:00 - 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingos</span>
                  <span className="text-gold-400">10:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent mb-8"></div>

          {/* Copyright y redes */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm font-cormorant">
              © 2025 Koken. Todos los derechos reservados. Hecho con ❤️ en Mar del Plata.
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-sm font-cormorant">Síguenos:</span>
              <div className="flex gap-3">
                {[
                  { icon: <FiInstagram />, link: 'https://www.instagram.com/koken.mdq/', name: 'Instagram' },
                  { icon: <FiFacebook />, link: 'https://www.facebook.com/koken.mdq/', name: 'Facebook' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-gold-400 hover:to-gold-600 border border-white/10 hover:border-gold-400 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 hover:scale-110 text-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
