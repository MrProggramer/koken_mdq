import { useState, useEffect } from 'react'
import { FiInstagram, FiFacebook, FiMenu, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { HiMail } from 'react-icons/hi'
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

function ServiciosSection() {
  const [selectedService, setSelectedService] = useState(0)

  const services = [
    {
      icon: <Cake size={40} strokeWidth={2} />,
      title: 'Cumpleaños',
      shortDesc: 'Celebraciones únicas',
      fullDesc: 'Convertimos cada cumpleaños en una experiencia inolvidable. Diseñamos tortas personalizadas con técnicas artesanales y los mejores ingredientes. Desde tortas temáticas para niños hasta elegantes creaciones para adultos, cada detalle está pensado para sorprender. Ofrecemos asesoramiento personalizado, degustación de sabores y diseños únicos que reflejan la personalidad del festejado.',
      color: 'from-pink-400 to-pink-600',
      features: ['Diseños personalizados', 'Sabores a medida', 'Decoración temática', 'Asesoramiento incluido'],
      images: [
        { src: productImages[2], size: 'large', rotation: -8, position: { top: '5%', left: '5%' }, zIndex: 25 },
        { src: productImages[14], size: 'medium', rotation: 12, position: { top: '8%', right: '8%' }, zIndex: 30 },
        { src: productImages[23], size: 'small', rotation: -15, position: { bottom: '35%', left: '15%' }, zIndex: 20 },
        { src: productImages[7], size: 'medium', rotation: 6, position: { bottom: '8%', left: '25%' }, zIndex: 28 },
        { src: productImages[11], size: 'large', rotation: -5, position: { bottom: '5%', right: '5%' }, zIndex: 22 }
      ]
    },
    {
      icon: <PartyPopper size={40} strokeWidth={2} />,
      title: 'Eventos Corporativos',
      shortDesc: 'Catering profesional',
      fullDesc: 'Impresiona a tus clientes y colaboradores con nuestro catering premium. Ofrecemos desde desayunos ejecutivos hasta coffee breaks y mesas dulces corporativas. Cada producto es elaborado con estándares de calidad profesional, presentación impecable y sabores que dejan huella. Nos adaptamos a tu presupuesto y necesidades específicas del evento.',
      color: 'from-blue-400 to-blue-600',
      features: ['Presentación premium', 'Variedad de productos', 'Servicio puntual', 'Presupuestos flexibles'],
      images: [
        { src: productImages[26], size: 'large', rotation: 7, position: { top: '10%', left: '10%' }, zIndex: 30 },
        { src: productImages[12], size: 'medium', rotation: -10, position: { top: '5%', right: '5%' }, zIndex: 25 },
        { src: productImages[19], size: 'medium', rotation: 15, position: { bottom: '30%', left: '8%' }, zIndex: 20 },
        { src: productImages[27], size: 'small', rotation: -12, position: { bottom: '12%', left: '35%' }, zIndex: 28 },
        { src: productImages[9], size: 'large', rotation: 4, position: { bottom: '8%', right: '8%' }, zIndex: 26 }
      ]
    },
    {
      icon: <Heart size={40} strokeWidth={2} />,
      title: 'Bodas',
      shortDesc: 'Día soñado',
      fullDesc: 'Tu boda merece una torta tan especial como ese día. Creamos tortas nupciales que son verdaderas obras de arte, combinando diseño elegante, sabores exquisitos y técnicas de alta repostería. Trabajamos contigo desde el concepto hasta el día de tu boda, asegurando que cada detalle sea perfecto. Ofrecemos sesiones de degustación y diseños exclusivos.',
      color: 'from-purple-400 to-purple-600',
      features: ['Diseño exclusivo', 'Degustación privada', 'Múltiples pisos', 'Decoración con flores'],
      images: [
        { src: productImages[13], size: 'large', rotation: -6, position: { top: '8%', left: '8%' }, zIndex: 28 },
        { src: productImages[24], size: 'medium', rotation: 10, position: { top: '12%', right: '12%' }, zIndex: 30 },
        { src: productImages[15], size: 'medium', rotation: -14, position: { bottom: '32%', left: '12%' }, zIndex: 22 },
        { src: productImages[3], size: 'small', rotation: 8, position: { bottom: '10%', left: '28%' }, zIndex: 26 },
        { src: productImages[6], size: 'large', rotation: -3, position: { bottom: '6%', right: '6%' }, zIndex: 24 }
      ]
    },
    {
      icon: <Coffee size={40} strokeWidth={2} />,
      title: 'Desayunos',
      shortDesc: 'Mañanas especiales',
      fullDesc: 'Sorprende con un desayuno premium a domicilio. Nuestras cajas incluyen productos recién horneados: croissants artesanales, medialunas de manteca, muffins, panes especiales y más. Perfectos para regalar o disfrutar en familia. Cada desayuno viene presentado en packaging especial con detalles decorativos. Ideal para cumpleaños, aniversarios o simplemente alegrar el día.',
      color: 'from-amber-400 to-amber-600',
      features: ['Productos frescos', 'Delivery incluido', 'Packaging especial', 'Opciones veganas'],
      images: [
        { src: productImages[8], size: 'large', rotation: 9, position: { top: '6%', left: '6%' }, zIndex: 26 },
        { src: productImages[18], size: 'medium', rotation: -11, position: { top: '10%', right: '10%' }, zIndex: 28 },
        { src: productImages[25], size: 'small', rotation: 13, position: { bottom: '36%', left: '10%' }, zIndex: 24 },
        { src: productImages[4], size: 'medium', rotation: -7, position: { bottom: '8%', left: '22%' }, zIndex: 30 },
        { src: productImages[16], size: 'large', rotation: 5, position: { bottom: '10%', right: '10%' }, zIndex: 20 }
      ]
    }
  ]

  const getSizeClasses = (size: string) => {
    switch(size) {
      case 'large': return 'w-32 h-40 md:w-48 md:h-56 lg:w-52 lg:h-60'
      case 'medium': return 'w-28 h-36 md:w-40 md:h-48 lg:w-44 lg:h-52'
      case 'small': return 'w-24 h-32 md:w-32 md:h-40 lg:w-36 lg:h-44'
      default: return 'w-28 h-36'
    }
  }

  return (
    <section id="servicios" className="relative min-h-screen flex items-center px-4 py-12 md:py-8 bg-gradient-to-b from-white to-cream-100">
      <div className="max-w-6xl mx-auto w-full">
        {/* Encabezado */}
        <div className="text-center mb-8 md:mb-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-charcoal-900 mb-3 font-cinzel">
            Para Cada <span className="text-primary">Ocasión Especial</span>
          </h2>
          
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src={logoKoken} 
              alt="Koken Logo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Botones de selección */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-3 mb-8 md:mb-6">
          {services.map((service, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedService(idx)}
              className={`group relative px-3 py-2.5 md:px-4 md:py-3 rounded-xl transition-all duration-500 ${
                selectedService === idx
                  ? 'bg-gradient-to-br from-white to-cream-50 shadow-xl scale-105 border-2 border-gold-400'
                  : 'bg-white hover:bg-cream-50 shadow-md hover:shadow-lg border-2 border-cream-200 hover:border-gold-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white transition-transform duration-500 ${
                  selectedService === idx ? 'scale-110 rotate-6' : 'group-hover:scale-105'
                }`}>
                  {service.icon}
                </div>
                <div className="text-left">
                  <div className={`font-playfair font-bold text-sm md:text-base transition-colors ${
                    selectedService === idx ? 'text-primary' : 'text-charcoal-900 group-hover:text-primary'
                  }`}>
                    {service.title}
                  </div>
                  <div className="text-[10px] md:text-xs text-charcoal-600 font-cormorant">
                    {service.shortDesc}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Contenido detallado */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gold-200">
          {/* Fondo decorativo */}
          <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-white to-gold-50/30 opacity-60"></div>
          
          <div className="relative z-10 p-4 md:p-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
              {/* Izquierda - Icono y título */}
              <div className="text-center md:text-left">
                <div className="inline-flex mb-2 md:mb-3">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${services[selectedService].color} flex items-center justify-center text-white shadow-xl animate-fade-in-up`}>
                    {services[selectedService].icon}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-charcoal-900 mb-2 font-cinzel animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  {services[selectedService].title}
                </h3>
                
                <div className="h-1 w-12 md:w-16 bg-gradient-to-r from-primary to-gold-400 rounded-full mb-2 md:mb-3 mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
                
                <p className="text-xs md:text-base text-charcoal-700 leading-relaxed font-cormorant mb-3 md:mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  {services[selectedService].fullDesc}
                </p>

                {/* Features */}
                <div className="space-y-1 md:space-y-1.5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  {services[selectedService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 md:gap-2 text-charcoal-700">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="font-cormorant text-[11px] md:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Derecha - Collage artístico ultra creativo */}
              <div className="relative h-[280px] md:h-[420px] lg:h-[450px]" key={selectedService}>
                {/* Background decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-cream-50/30 via-transparent to-gold-50/20 rounded-3xl"></div>
                
                {services[selectedService].images.map((image, idx) => (
                  <div 
                    key={idx}
                    className={`absolute ${getSizeClasses(image.size)} group`}
                    style={{
                      ...image.position,
                      zIndex: image.zIndex,
                      animation: 'dropAndRotate 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                      animationDelay: `${idx * 0.12}s`,
                      transform: `rotate(${image.rotation}deg)`
                    }}
                  >
                    {/* Sombra realista extra */}
                    <div className="absolute inset-0 bg-charcoal-900/20 blur-xl translate-y-4 rounded-3xl"></div>
                    
                    {/* Marco Polaroid */}
                    <div 
                      className="relative h-full bg-white p-1.5 pb-6 md:p-2 md:pb-8 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-110 hover:rotate-0 cursor-pointer group-hover:z-50"
                      style={{
                        boxShadow: '0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)'
                      }}
                    >
                      {/* Cinta adhesiva decorativa superior */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 md:w-14 h-4 md:h-5 bg-amber-100/70 border border-amber-200/50 rotate-2 shadow-sm opacity-80 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: 'repeating-linear-gradient(90deg, rgba(254,243,199,0.9) 0px, rgba(254,243,199,0.9) 2px, rgba(253,230,138,0.7) 2px, rgba(253,230,138,0.7) 4px)'
                        }}
                      ></div>
                      
                      {/* Imagen */}
                      <div className="relative w-full h-full overflow-hidden rounded-lg bg-cream-100">
                        <img
                          src={image.src}
                          alt={`${services[selectedService].title} ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Overlay con gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-charcoal-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Brillo fotográfico */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                        </div>
                        
                        {/* Vignette effect */}
                        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]"></div>
                      </div>
                      
                      {/* Texto manuscrito simulado */}
                      <div className="absolute bottom-0.5 md:bottom-1 left-0 right-0 text-center">
                        <p className="text-[9px] md:text-[10px] text-charcoal-500 font-cormorant italic opacity-60">
                          {['Delicioso', 'Premium', 'Artesanal', 'Único', 'Especial'][idx]}
                        </p>
                      </div>
                      
                      {/* Pin decorativo */}
                      <div className="absolute -top-2 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="relative">
                          <div className="w-4 h-4 rounded-full bg-primary shadow-lg"></div>
                          <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping"></div>
                        </div>
                      </div>
                      
                      {/* Borde dorado en hover */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/60 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                ))}
                
                {/* Efectos de iluminación ambiental */}
                <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-gold-300/5 to-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/5 to-gold-300/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-4 md:mt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="https://wa.me/5492235242957"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-gold-400 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full font-playfair font-bold text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Consultar por {services[selectedService].title}</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
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
                    <IoLocationSharp className="text-primary flex-shrink-0" size={18} />
                    <span className="text-sm font-cormorant">Bernardo de Irigoyen 3694, MDQ</span>
                  </div>
                  <div className="flex items-center gap-3 text-charcoal-700">
                    <FaWhatsapp className="text-primary flex-shrink-0" size={18} />
                    <span className="text-sm font-cormorant">0223 524-2957</span>
                  </div>
                </div>
                
                {/* Redes sociales */}
                <div className="flex gap-2 mt-4 pt-3 border-t border-primary/20">
                  {[
                    { icon: <FiInstagram size={24} />, label: 'Instagram', link: 'https://www.instagram.com/koken.mdq/' },
                    { icon: <FiFacebook size={24} />, label: 'Facebook', link: 'https://www.facebook.com/koken.mdq/' }
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

      {/* Sección Productos */}
      <section id="productos" className="relative py-24 px-4 bg-gradient-to-b from-cream-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado de sección premium mejorado */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-charcoal-900 mb-6 font-cinzel leading-tight">
              Nuestras <span className="text-primary">Creaciones</span>
            </h2>
            
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
              
              <IoLocationSharp className="relative z-10" size={26} />
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
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Contenido */}
            <div className="space-y-8 max-w-4xl">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-charcoal-900 mb-6 font-cinzel leading-tight">
                  Pastelería Artesanal <br />
                  <span className="text-primary">desde 2010</span>
                </h2>
                
                <div className="h-1 w-32 bg-gradient-to-r from-primary via-gold-400 to-secondary rounded-full mb-8 mx-auto"></div>
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

              {/* Stats premium mejorados - horizontal con animación dinámica */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 max-w-5xl mx-auto">
                {[
                  { number: '15+', label: 'Años de Experiencia', icon: '🏆', delay: '0s' },
                  { number: '5000+', label: 'Clientes Felices', icon: '💝', delay: '0.15s' },
                  { number: '5.0', label: 'Valoración', icon: '⭐', delay: '0.3s' }
                ].map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="group opacity-0"
                    style={{ 
                      animation: `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${stat.delay} forwards`,
                    }}
                  >
                    <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-cream-200/80 shadow-lg hover:shadow-2xl hover:border-gold-400 transition-all duration-300 hover:scale-110 hover:rotate-2 overflow-hidden h-full cursor-pointer">
                      {/* Fondo sutil animado */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-transparent to-gold-50/30 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Pulso de fondo continuo */}
                      <div className="absolute inset-0 bg-gold-100/20 rounded-full blur-xl scale-0 group-hover:scale-150 group-hover:animate-pulse transition-transform duration-500"></div>
                      
                      {/* Brillo explosivo en hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-300/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </div>
                      
                      {/* Contenido */}
                      <div className="relative flex flex-col items-center gap-2 sm:gap-2.5 text-center">
                        <div 
                          className="text-2xl sm:text-3xl transition-all duration-500"
                          style={{
                            animation: 'none',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.animation = 'bounce 0.6s ease-in-out';
                          }}
                          onAnimationEnd={(e) => {
                            e.currentTarget.style.animation = 'none';
                          }}
                        >
                          {stat.icon}
                        </div>
                        <div className="text-3xl sm:text-4xl font-black text-primary font-cinzel leading-none group-hover:scale-125 transition-all duration-300">
                          {stat.number}
                        </div>
                        <div className="text-xs sm:text-sm text-charcoal-600 font-cormorant font-semibold leading-tight group-hover:text-charcoal-900 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                      
                      {/* Decoración de esquinas animadas */}
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-400/0 group-hover:border-gold-400 rounded-tr-lg transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-400/0 group-hover:border-gold-400 rounded-bl-lg transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
                      
                      {/* Partículas decorativas */}
                      <div className="absolute top-0 left-1/2 w-2 h-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500"></div>
                      <div className="absolute bottom-0 left-1/4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-700"></div>
                      <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-600"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Galería collage premium con estilo polaroid mejorado */}
            <div className="mt-20 max-w-7xl mx-auto px-4">
              <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-6 sm:gap-6 md:gap-8 lg:gap-10">
                {[
                  { img: productImages[12], rotation: '-rotate-6', delay: '0s', size: 'w-64 sm:w-56 md:w-64', initialRotation: '-rotate-[25deg]' },
                  { img: productImages[13], rotation: 'rotate-3', delay: '0.15s', size: 'w-56 sm:w-52 md:w-60', initialRotation: 'rotate-[20deg]' },
                  { img: productImages[14], rotation: '-rotate-2', delay: '0.3s', size: 'w-60 sm:w-56 md:w-64', initialRotation: '-rotate-[30deg]' },
                  { img: productImages[15], rotation: 'rotate-4', delay: '0.45s', size: 'w-52 sm:w-52 md:w-60', initialRotation: 'rotate-[15deg]' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`group ${item.size}`}
                    style={{ 
                      opacity: 0,
                      animation: `dropAndRotate 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${item.delay} forwards`,
                      transformOrigin: 'center top'
                    }}
                  >
                    <div className={`relative ${item.rotation} hover:rotate-0 hover:scale-[1.15] sm:hover:scale-[1.06] hover:z-50 transition-all duration-700 ease-out cursor-pointer`}
                      style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      {/* Fondo polaroid con sombra realista */}
                      <div className="relative bg-white p-3 sm:p-3 pb-12 sm:pb-12 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] group-hover:shadow-[0_30px_80px_rgba(220,60,70,0.4)] sm:group-hover:shadow-[0_20px_50px_rgba(220,60,70,0.25)] transition-all duration-700 group-hover:-translate-y-4 sm:group-hover:-translate-y-2"
                        style={{
                          transform: 'translateZ(0)',
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        {/* Cinta adhesiva decorativa animada */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-amber-50/60 backdrop-blur-sm rotate-2 shadow-md border border-amber-100 group-hover:rotate-0 group-hover:shadow-lg transition-all duration-500" 
                          style={{
                            background: 'repeating-linear-gradient(90deg, rgba(255,251,235,0.8) 0px, rgba(255,251,235,0.8) 2px, transparent 2px, transparent 4px)'
                          }}
                        ></div>
                        
                        {/* Imagen con efectos mejorados */}
                        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 group-hover:ring-4 group-hover:ring-gold-400/50 sm:group-hover:ring-2 sm:group-hover:ring-gold-400/30 transition-all duration-500">
                          <img
                            src={item.img}
                            alt={`Galería ${idx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 sm:group-hover:scale-105 transition-transform duration-1000 ease-out"
                          />
                          
                          {/* Overlay con texto en hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4 sm:pb-3">
                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                              <div className="flex items-center gap-1.5 sm:gap-1 text-white">
                                <Sparkles size={18} className="text-gold-400 animate-pulse sm:hidden" />
                                <span className="font-cormorant text-base sm:text-sm md:text-base font-semibold">Pasión y Calidad</span>
                                <Sparkles size={18} className="text-gold-400 animate-pulse sm:hidden" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Brillo fotográfico múltiple - reducido en desktop */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 sm:via-white/15 to-white/0 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-60 transition-opacity duration-700"></div>
                          <div className="absolute inset-0 bg-gradient-to-tr from-gold-200/0 via-gold-200/20 sm:via-gold-200/10 to-gold-200/0 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-50 transition-opacity duration-500 delay-100"></div>
                          
                          {/* Efecto de escaneo de luz - reducido en desktop */}
                          <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 sm:via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
                          </div>
                        </div>
                        
                        {/* Texto manuscrito simulado con animación */}
                        <div className="absolute bottom-2 sm:bottom-2 left-0 right-0 text-center px-1">
                          <p className="font-cormorant text-charcoal-600 text-sm sm:text-xs md:text-sm italic opacity-60 group-hover:opacity-100 group-hover:text-primary sm:group-hover:text-charcoal-800 transition-all duration-500 group-hover:scale-105 sm:group-hover:scale-100 leading-tight">
                            {['Nuestras creaciones', 'Hecho con amor', 'Sabor artesanal', 'Tradición y calidad'][idx]}
                          </p>
                        </div>
                        
                        {/* Efecto de pin/chincheta mejorado */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-70 transition-all duration-500 group-hover:scale-110">
                          <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-primary shadow-lg animate-pulse sm:animate-none"></div>
                            <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary animate-ping sm:hidden"></div>
                          </div>
                        </div>
                        
                        {/* Decoración de corazón flotante - solo mobile */}
                        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-0 transition-all duration-500 group-hover:-translate-y-2">
                          <Heart size={24} className="text-primary fill-primary animate-bounce" style={{ animationDuration: '2s' }} />
                        </div>
                      </div>
                      
                      {/* Resplandor al hover mejorado - reducido en desktop */}
                      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold-400/30 via-primary/20 to-gold-400/30 sm:from-gold-400/15 sm:via-primary/10 sm:to-gold-400/15 blur-2xl scale-0 group-hover:scale-150 sm:group-hover:scale-110 transition-transform duration-700 rounded-full"></div>
                      
                      {/* Partículas flotantes en hover - solo mobile */}
                      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-0 transition-opacity duration-500">
                        <div className="absolute top-0 left-1/4 w-2 h-2 bg-gold-400 rounded-full animate-ping" style={{ animationDuration: '1.5s' }}></div>
                        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gold-500 rounded-full animate-ping" style={{ animationDuration: '1.8s' }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios - Interactiva */}
      <ServiciosSection />

      {/* Sección Contacto Premium */}
      <section id="contacto" className="relative py-16 px-4 bg-gradient-to-b from-cream-100 via-white to-cream-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado centrado */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-cinzel leading-tight text-charcoal-900">
              Visítanos en nuestro <span className="text-primary">local</span>
            </h2>
          </div>

          {/* Información de contacto en grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <IoLocationSharp size={32} />, title: 'Ubicación', content: 'Bernardo de Irigoyen 3694, Mar del Plata', link: 'https://www.google.com/maps/place/Bernardo+de+Irigoyen+3694,+B7600+Mar+del+Plata,+Provincia+de+Buenos+Aires', order: 'order-3 md:order-1', color: 'from-gold-400 to-gold-500' },
              { icon: <FaWhatsapp size={32} />, title: 'WhatsApp', content: '0223 524-2957', link: 'https://wa.me/5492235242957', order: 'order-1 md:order-2', color: 'from-green-500 to-green-600' },
              { icon: <HiMail size={32} />, title: 'Email', content: 'hola@koken.com.ar', link: 'mailto:hola@koken.com.ar', order: 'order-2 md:order-3', color: 'from-blue-500 to-blue-600' }
            ].map((item, idx) => (
              <a 
                key={idx} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white backdrop-blur-sm border-2 border-cream-200 hover:border-gold-400 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group ${item.order}`}
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl md:text-3xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-1 font-playfair text-charcoal-900">{item.title}</h3>
                  <p className="text-charcoal-600 font-cormorant text-sm md:text-base group-hover:text-primary transition-colors">{item.content}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Mapa de Google Maps */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white hover:border-gold-300 transition-all duration-500 mb-10">
            <div className="relative w-full h-[300px] md:h-[350px]">
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
                className="absolute bottom-4 right-4 bg-gradient-to-r from-primary to-gold-400 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full font-cormorant font-bold text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 z-10"
              >
                <IoLocationSharp size={20} />
                <span className="hidden sm:inline">Abrir en Google Maps</span>
                <span className="sm:hidden">Ver mapa</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Redes sociales centradas */}
          <div className="text-center">
            <p className="text-sm text-charcoal-600 mb-5 font-cormorant tracking-wider uppercase">Síguenos en Redes</p>
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
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white border-2 border-cream-200 hover:border-gold-400 flex items-center justify-center text-4xl text-charcoal-700 hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-gold-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-6"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="bg-gradient-to-b from-charcoal-900 via-charcoal-800 to-charcoal-900 py-12 px-4 border-t-2 border-gold-400/30">
        <div className="max-w-6xl mx-auto">
          {/* Contenido principal del footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo y descripción */}
            <div className="flex flex-col items-center text-center space-y-4">
              <img 
                src={logoKoken} 
                alt="Koken Logo" 
                className="w-24 h-24 object-contain"
              />
              <p className="text-white/80 font-cormorant leading-relaxed text-sm">
                Endulzando vidas desde 2010 con pasión, dedicación y los mejores ingredientes.
              </p>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="text-white font-playfair font-bold text-base mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {['Productos', 'Nosotros', 'Servicios', 'Contacto'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-white/70 hover:text-gold-400 transition-colors font-cormorant text-sm flex items-center gap-2 group"
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
              <h4 className="text-white font-playfair font-bold text-base mb-4">Horarios</h4>
              <ul className="space-y-2 text-white/70 font-cormorant text-sm">
                <li className="flex justify-between">
                  <span>Lun - Vie</span>
                  <span className="text-gold-400 font-semibold">9:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados</span>
                  <span className="text-gold-400 font-semibold">10:00 - 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingos</span>
                  <span className="text-gold-400 font-semibold">10:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent mb-6"></div>

          {/* Copyright y redes */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-xs md:text-sm font-cormorant">
              © 2025 Koken. Todos los derechos reservados. Hecho con ❤️ en Mar del Plata.
            </p>
            
            <div className="flex items-center gap-3">
              <span className="text-white/60 text-xs md:text-sm font-cormorant">Síguenos:</span>
              <div className="flex gap-2">
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
                    className="w-14 h-14 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-gold-400 hover:to-gold-600 border-2 border-white/20 hover:border-gold-400 flex items-center justify-center text-xl text-white hover:text-white transition-all duration-300 hover:scale-110"
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
