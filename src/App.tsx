import { useState, useEffect } from 'react'
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin, FiMenu, FiX } from 'react-icons/fi'
import { GiCupcake, GiCroissant, GiPartyFlags } from 'react-icons/gi'
import { FaBirthdayCake } from 'react-icons/fa'

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
          <div className={`flex items-center h-10 md:h-12 transition-all duration-700 ${
            isScrolled ? 'justify-between' : 'justify-between'
          }`}>
            {/* Logo - Aparece solo al hacer scroll */}
            <div className={`flex items-center group cursor-pointer transition-all duration-700 ${
              isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none absolute left-4 sm:left-6 lg:left-8'
            }`}>
              <h1 className="font-cooper font-black tracking-tight text-primary text-xl md:text-2xl lg:text-3xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(220,60,70,0.6)] group-hover:text-shadow-lg" style={{ 
                textShadow: 'none',
                transition: 'all 0.5s ease'
              }}>
                <span className="inline-block group-hover:animate-pulse">KOKEN</span>
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center transition-all duration-700 ${
              isScrolled ? 'gap-10' : 'flex-1 justify-center gap-16'
            }`}>
              {['Productos', 'Nosotros', 'Servicios', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative font-cormorant text-lg font-medium transition-all duration-300 group ${
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
            <div className={`hidden lg:block transition-all duration-700`}>
              <a
                href="#contacto"
                className={`relative overflow-hidden px-5 py-2 rounded-full font-cormorant font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-gold ${
                  isScrolled
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-white'
                    : 'bg-white text-primary border-2 border-white'
                }`}
              >
                <span className="relative z-10">Contactanos</span>
                <div className="absolute inset-0 bg-shimmer opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-1 rounded-lg transition-all duration-700 ${
                isScrolled 
                  ? 'text-charcoal-800 hover:bg-gold-100' 
                  : 'text-white hover:bg-white/10'
              } ${!isScrolled ? 'absolute right-4 sm:right-6' : ''}`}
            >
              {isMobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-gold-200/30 px-6 py-6 space-y-4">
            {['Productos', 'Nosotros', 'Servicios', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-cormorant text-lg font-medium text-charcoal-700 hover:text-gold-600 transition-colors py-2"
              >
                {item}
              </a>
            ))}
             <a
               href="#contacto"
               onClick={() => setIsMobileMenuOpen(false)}
               className="block text-center bg-gradient-to-r from-gold-400 to-gold-600 text-white px-6 py-3 rounded-full font-cormorant font-semibold mt-4"
             >
               Contactanos
             </a>
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
        
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
          <div className="max-w-7xl mx-auto w-full">
            {/* Grid simple y equilibrado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-48 items-center">
              
              {/* 🎨 IZQUIERDA - Logo Limpio y Elegante */}
              <div className="flex flex-col items-center justify-center opacity-0 animate-fade-in-up order-1" style={{ animationDelay: '0.2s' }}>
                
                {/* Logo con efecto glow y resplandor */}
                <div className="relative group">
                  {/* Resplandor de fondo animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-gold-400/30 to-secondary/30 rounded-full blur-3xl animate-pulse group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-300/20 to-primary/20 rounded-full blur-2xl animate-breathe"></div>
                  
                  {/* Logo con filtros y efectos */}
                  <div className="relative">
                    <img 
                      src={logoKoken} 
                      alt="Koken Pastelería" 
                      className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 object-contain animate-floatSoft drop-shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:drop-shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all duration-700 hover:scale-105 filter brightness-110"
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
              <div className="flex justify-center items-center opacity-0 animate-fade-in-up order-2 lg:order-2" style={{ animationDelay: '0.4s' }}>
                <div className="relative group max-w-xs sm:max-w-sm lg:max-w-lg w-full">
                  
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
      <section id="productos" className="relative py-24 px-4 bg-gradient-to-b from-cream-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado de sección premium */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-charcoal-900 mb-6 font-cinzel">
              Nuestras <span className="text-primary">Creaciones</span>
            </h2>
            
            <div className="flex justify-center mb-8">
              <div className="h-1 w-32 bg-gradient-to-r from-primary via-gold-400 to-secondary rounded-full"></div>
            </div>
            
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto font-cormorant leading-relaxed">
              Cada creación es una obra de arte única, elaborada con ingredientes premium 
              y el toque especial que nos distingue
            </p>
          </div>

          {/* Grid de productos con efectos premium */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {productImages.slice(0, 12).map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-soft hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                style={{
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                {/* Imagen */}
                <img
                  src={img}
                  alt={`Producto ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay premium con glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-playfair font-bold text-lg mb-1">Delicia Premium</p>
                        <p className="text-gold-300 font-cormorant text-sm">Ver detalles →</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gold-400/20 backdrop-blur-sm flex items-center justify-center border border-gold-400/30">
                        <span className="text-gold-300 text-xl">+</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Borde dorado en hover */}
                <div className="absolute inset-0 border-2 border-gold-400/0 group-hover:border-gold-400/50 rounded-2xl transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* CTA Ver más */}
          <div className="text-center mt-16">
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full font-playfair font-bold text-lg transition-all hover:scale-105 shadow-elegant hover:shadow-gold overflow-hidden">
              <span className="relative z-10">Ver Toda la Colección</span>
              <span className="relative z-10 text-2xl transition-transform group-hover:translate-x-1">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Sección Testimonios Premium */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-white via-cream-50 to-white overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-100/30 to-cream-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Encabezado */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400"></div>
              <span className="text-sm font-playfair text-gold-600 tracking-[0.3em] uppercase">
                Testimonios
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-charcoal-900 mb-6 font-cinzel">
              Lo Que Dicen <span className="text-primary">Nuestros Clientes</span>
            </h2>
            
            <div className="flex justify-center mb-8">
              <div className="h-1 w-32 bg-gradient-to-r from-primary via-gold-400 to-secondary rounded-full"></div>
            </div>
          </div>

          {/* Grid de testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'María González',
                role: 'Novia 2024',
                text: 'La torta de nuestra boda fue absolutamente espectacular. Cada detalle estuvo perfecto y el sabor fue inolvidable. ¡Todos nuestros invitados quedaron maravillados!',
                rating: 5,
                image: productImages[20]
              },
              {
                name: 'Carlos Méndez',
                role: 'Empresario',
                text: 'Contratamos a Koken para un evento corporativo y superaron todas nuestras expectativas. Profesionalismo, calidad y un servicio excepcional.',
                rating: 5,
                image: productImages[21]
              },
              {
                name: 'Laura Fernández',
                role: 'Cliente Regular',
                text: 'Desde que probé sus croissants, me convertí en cliente habitual. La calidad de los ingredientes y el amor que le ponen a cada producto se nota en cada bocado.',
                rating: 5,
                image: productImages[22]
              }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 border border-cream-300/50 hover:border-gold-400 transition-all duration-500 hover:scale-[1.02] shadow-soft hover:shadow-gold cursor-pointer"
                style={{
                  animationDelay: `${idx * 0.2}s`
                }}
              >
                {/* Quote icon de fondo */}
                <div className="absolute top-6 right-6 text-6xl text-gold-200/30 font-serif">"</div>

                {/* Contenido */}
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-gold-400 text-xl">★</span>
                    ))}
                  </div>

                  {/* Texto del testimonio */}
                  <p className="text-charcoal-600 font-cormorant text-lg leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Autor */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gold-200/30">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold-400/30 group-hover:ring-gold-400 transition-all duration-300">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-playfair font-bold text-charcoal-900">{testimonial.name}</h4>
                      <p className="text-sm text-gold-600 font-cormorant">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Decoración dorada en hover */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold-400/0 group-hover:border-gold-400 rounded-tl-3xl transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-400/0 group-hover:border-gold-400 rounded-br-3xl transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Stats adicionales */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '98%', label: 'Clientes Satisfechos' },
              { number: '2500+', label: 'Pedidos Completados' },
              { number: '250+', label: 'Eventos Realizados' },
              { number: '4.9★', label: 'Calificación Promedio' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-gold-500 bg-clip-text text-transparent mb-2 font-cinzel">
                  {stat.number}
                </div>
                <div className="text-sm text-charcoal-600 font-cormorant uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
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
                icon: <FaBirthdayCake />, 
                title: 'Cumpleaños', 
                desc: 'Diseños personalizados para celebrar tu día más especial',
                color: 'from-pink-400 to-pink-600'
              },
              { 
                icon: <GiPartyFlags />, 
                title: 'Eventos Corporativos', 
                desc: 'Catering premium para impresionar en reuniones',
                color: 'from-blue-400 to-blue-600'
              },
              { 
                icon: <GiCupcake />, 
                title: 'Bodas', 
                desc: 'Tortas nupciales elegantes que roban suspiros',
                color: 'from-purple-400 to-purple-600'
              },
              { 
                icon: <GiCroissant />, 
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Información de contacto */}
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 font-cinzel leading-tight">
                  Visítanos en Nuestra
                  <br />
                  <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                    Pastelería
                  </span>
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mb-8"></div>
                <p className="text-xl text-white/70 font-cormorant leading-relaxed">
                  Estamos aquí para endulzar tus momentos más especiales
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: <FiMapPin />, title: 'Ubicación', content: 'Mar del Plata, Buenos Aires, Argentina' },
                  { icon: <FiPhone />, title: 'Teléfono', content: '+54 223 XXX XXXX' },
                  { icon: <FiMail />, title: 'Email', content: 'hola@koken.com.ar' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6 group cursor-pointer">
                    <div className="mt-1">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-2xl shadow-gold group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 font-playfair text-gold-300">{item.title}</h3>
                      <p className="text-white/80 font-cormorant text-lg">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Redes sociales */}
              <div className="pt-6">
                <p className="text-sm text-white/60 mb-4 font-cormorant tracking-wider uppercase">Síguenos</p>
                <div className="flex gap-4">
                  {[
                    { icon: <FiInstagram />, link: '#' },
                    { icon: <FiFacebook />, link: '#' }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-2xl hover:bg-gradient-to-br hover:from-gold-400 hover:to-gold-600 hover:border-gold-400 transition-all duration-300 hover:scale-110 hover:shadow-gold"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Galería de imágenes de contacto */}
            <div className="grid grid-cols-2 gap-4">
              {productImages.slice(16, 20).map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl aspect-square shadow-2xl group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Contacto ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 border-2 border-gold-400/0 group-hover:border-gold-400/70 rounded-2xl transition-all duration-500"></div>
                </div>
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
                  <GiCroissant className="text-2xl text-white" />
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
              © 2024 Koken. Todos los derechos reservados. Hecho con ❤️ en Mar del Plata.
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-sm font-cormorant">Síguenos:</span>
              <div className="flex gap-3">
                {[<FiInstagram />, <FiFacebook />].map((icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-gold-400 hover:to-gold-600 border border-white/10 hover:border-gold-400 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 hover:scale-110 text-lg"
                  >
                    {icon}
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
