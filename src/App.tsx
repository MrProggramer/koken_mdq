import { useState, useEffect } from 'react'
import logoKoken from './assets/logo_koken_1.png'
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { GiCupcake, GiCroissant, GiPartyFlags } from 'react-icons/gi'
import { FaBirthdayCake } from 'react-icons/fa'

// Importar imágenes de productos
import img1 from './assets/0949b276-5fa1-493e-af1d-533773d20b84.jpg'
import img2 from './assets/1399be21-ed8e-4a61-9e0f-e88ef8bde347.jpg'
import img3 from './assets/160e2cbe-833c-43f1-a99b-c71bc4c22b31.jpg'
import img4 from './assets/1be76dcc-5711-4d77-9fe6-67583b5cf690.jpg'
import img5 from './assets/1db12ef6-8683-4b67-8390-5d9193fab02c.jpg'
import img6 from './assets/2ab166a0-72db-43d7-a724-42f116c8ca38.jpg'
import img7 from './assets/2ee8c29d-9a13-4f6a-a915-6c92064978e4.jpg'
import img8 from './assets/3cac8862-3147-4a6f-b1ab-c44f50ab95ca.jpg'
import img9 from './assets/4e622e9a-48f2-40dd-ad61-8683131811e8.jpg'
import img10 from './assets/4e978bb0-e7d1-40cd-b84a-0b58812d17eb.jpg'
import img11 from './assets/60df2871-43c7-493f-a0ce-3c2232ce5e3c.jpg'
import img12 from './assets/636d7573-90bd-4e27-8e15-b67bdf1e64ec.jpg'
import img13 from './assets/6721949c-5b1b-4d68-831b-386565d6cc8c.jpg'
import img14 from './assets/69e6390f-a19b-460a-8c73-94e54a7216c4.jpg'
import img15 from './assets/6ad1f585-c2de-4c06-94e1-18e2abbcedee.jpg'
import img16 from './assets/73f4c73a-612f-4fde-9092-026c6b653bca.jpg'
import img17 from './assets/9cd361fb-5493-4939-bb9c-d682627fd9a1.jpg'
import img18 from './assets/9e07d805-8f00-43ce-9ddf-b7197dab964c.jpg'
import img19 from './assets/a5a3f9dc-c877-48a1-89d7-e4dc7150d62d.jpg'
import img20 from './assets/afe46a6f-2194-4fae-bdeb-9877fa00df74.jpg'
import img21 from './assets/b40c61c4-3e43-4e15-8822-76132fafa406.jpg'
import img22 from './assets/b9bd8aec-9231-41e8-ad01-4aaf4e032ba8.jpg'
import img23 from './assets/c177be19-8cc7-4a21-b456-5776a1cf3091.jpg'
import img24 from './assets/c3a712c3-3d2e-47ff-abfd-ba39edf4d5b4.jpg'
import img25 from './assets/c6d8c85d-559d-45e7-87ef-76a5060ebe62.jpg'
import img26 from './assets/dbe80aac-96ea-4a65-8de1-78fc466f9466.jpg'
import img27 from './assets/de2d4d09-5493-4082-b8f3-0a103ef2e28e.jpg'
import img28 from './assets/e6ea88ce-c146-4c79-91da-629729424fe7.jpg'
import img29 from './assets/ee0eca82-2094-4cb5-9db8-34af4123a420.jpg'
import img30 from './assets/f0a47ac1-124b-49dd-a3c0-8438b6f9a6c8.jpg'
import img31 from './assets/f579f23b-0378-4c0f-9dcb-a0e2c380cbdb.jpg'

const productImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31]

function App() {
  return <LandingPage />
}

function LandingPage() {
  const [heroVariant, setHeroVariant] = useState(3)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-neutralLight overflow-x-hidden relative">
      {/* Header Variant 4: Minimalista transparente */}
      {heroVariant === 4 && (
        <header className={`fixed top-0 left-0 right-0 z-40 h-24 shadow-lg transition-all duration-300 ${
          isScrolled 
            ? 'bg-white backdrop-blur-2xl border-b border-primary/20' 
            : 'bg-white/10 backdrop-blur-xl border-b border-white/20'
        }`}>
          <div className="mx-auto px-8 w-full h-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 backdrop-blur-md rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-primary/10 border-primary/30' 
                    : 'bg-white/20 border-white/30'
                }`}>
                  <img src={logoKoken} alt="Koken" className="h-10 w-10" />
                </div>
                <div>
                  <h1 className={`text-2xl font-black font-brand tracking-tight transition-colors duration-300 ${
                    isScrolled ? 'text-primary' : 'text-white'
                  }`}>KOKEN</h1>
                  <p className={`text-xs tracking-widest transition-colors duration-300 ${
                    isScrolled ? 'text-primary/80' : 'text-white/80'
                  }`}>MAR DEL PLATA</p>
                </div>
              </div>
              
              <nav className="hidden md:flex items-center gap-12">
                <a href="#productos" className={`transition-all duration-300 font-bold text-sm tracking-widest ${
                  isScrolled 
                    ? 'text-primary/90 hover:text-primary drop-shadow-sm' 
                    : 'text-white/90 hover:text-white'
                }`}>PRODUCTOS</a>
                <a href="#nosotros" className={`transition-all duration-300 font-bold text-sm tracking-widest ${
                  isScrolled 
                    ? 'text-primary/90 hover:text-primary drop-shadow-sm' 
                    : 'text-white/90 hover:text-white'
                }`}>NOSOTROS</a>
                <a href="#servicios" className={`transition-all duration-300 font-bold text-sm tracking-widest ${
                  isScrolled 
                    ? 'text-primary/90 hover:text-primary drop-shadow-sm' 
                    : 'text-white/90 hover:text-white'
                }`}>SERVICIOS</a>
                <a href="#contacto" className={`transition-all duration-300 font-bold text-sm tracking-widest ${
                  isScrolled 
                    ? 'text-primary/90 hover:text-primary drop-shadow-sm' 
                    : 'text-white/90 hover:text-white'
                }`}>CONTACTO</a>
              </nav>

              <div className="flex items-center gap-3">
                {[3, 4, 7].map((num) => (
                  <button
                    key={num}
                    onClick={() => setHeroVariant(num)}
                    className={`w-10 h-10 flex items-center justify-center font-black text-sm transition-all rounded-full ${
                      heroVariant === num
                        ? isScrolled 
                          ? 'bg-primary text-white scale-110' 
                          : 'bg-white text-primary scale-110'
                        : isScrolled
                          ? 'bg-primary/20 text-primary hover:bg-primary/30'
                          : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Header Variant 7: Elegante con logo grande */}
      {heroVariant === 7 && (
        <header className="fixed top-0 left-0 right-0 z-40 bg-transparent h-24">
          <div className="mx-auto px-8 w-full h-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full border-2 border-white/40 flex items-center justify-center shadow-xl">
                    <GiCroissant className="text-2xl text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-black text-white font-cooper">KOKEN</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-px w-8 bg-white/40"></div>
                    <p className="text-xs text-white/70 font-bold tracking-[0.2em]">ARTESANAL</p>
                    <div className="h-px w-8 bg-white/40"></div>
                  </div>
                </div>
              </div>
              
              <nav className="hidden md:flex items-center gap-10">
                <a href="#productos" className="text-white/80 hover:text-white transition-colors font-semibold flex items-center gap-2">
                  <span className="text-sm">Productos</span>
                </a>
                <a href="#nosotros" className="text-white/80 hover:text-white transition-colors font-semibold flex items-center gap-2">
                  <span className="text-sm">Nosotros</span>
                </a>
                <a href="#servicios" className="text-white/80 hover:text-white transition-colors font-semibold flex items-center gap-2">
                  <span className="text-sm">Servicios</span>
                </a>
                <a href="#contacto" className="text-white/80 hover:text-white transition-colors font-semibold flex items-center gap-2">
                  <span className="text-sm">Contacto</span>
                </a>
              </nav>

              <div className="flex items-center gap-3">
                {[3, 4, 7].map((num) => (
                  <button
                    key={num}
                    onClick={() => setHeroVariant(num)}
                    className={`w-10 h-10 flex items-center justify-center font-black text-sm transition-all border-2 ${
                      heroVariant === num
                        ? 'bg-white text-primary border-white scale-110'
                        : 'bg-transparent text-white border-white/30 hover:border-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Header Default (Variantes 3) */}
      {heroVariant !== 4 && heroVariant !== 7 && (
        <header className="bg-primary fixed top-0 left-0 right-0 z-40 border-b border-primary h-20 shadow-md">
          <div className="mx-auto px-4 w-full h-full">
            <div className="flex items-center justify-between h-full gap-4">
              <div className="flex items-center space-x-3 flex-shrink min-w-0">
                <img src={logoKoken} alt="Koken" className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0" />
                <h1 className="text-2xl md:text-3xl font-extrabold text-neutralLight font-brand">Koken</h1>
              </div>
              
              <nav className="hidden md:flex items-center gap-8">
                <a href="#productos" className="text-neutralLight hover:text-pink-50 transition-colors font-semibold">Productos</a>
                <a href="#nosotros" className="text-neutralLight hover:text-pink-50 transition-colors font-semibold">Nosotros</a>
                <a href="#servicios" className="text-neutralLight hover:text-pink-50 transition-colors font-semibold">Servicios</a>
                <a href="#contacto" className="text-neutralLight hover:text-pink-50 transition-colors font-semibold">Contacto</a>
              </nav>

              <div className="flex items-center gap-2 flex-wrap max-w-[400px] md:max-w-none">
                {[3, 4, 7].map((num) => (
                  <button
                    key={num}
                    onClick={() => setHeroVariant(num)}
                    className={`w-9 h-9 flex items-center justify-center font-bold text-sm transition-all ${
                      heroVariant === num
                        ? 'bg-neutralLight text-primary scale-110'
                        : 'bg-primary/30 text-neutralLight hover:bg-primary/50'
                    }`}
                    title={`Hero versión ${num}`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Hero Variants */}
      {heroVariant === 3 && <HeroVariant3 />}
      {heroVariant === 4 && <HeroVariant4 />}
      {heroVariant === 7 && <HeroVariant7 />}

      {/* Sección Productos */}
      <section id="productos" className="relative py-20 px-4 bg-gradient-to-b from-neutralLight to-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-secondary tracking-widest mb-4 uppercase">
              Galería
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 font-cooper">
              Nuestros Productos
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
            <p className="text-lg text-neutralDark mt-6 max-w-2xl mx-auto">
              Cada creación es una obra de arte única, hecha con ingredientes premium y mucho amor
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {productImages.slice(0, 12).map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={img}
                  alt={`Producto ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-bold text-sm">Ver Detalles</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Nosotros */}
      <section id="nosotros" className="relative py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block text-sm font-bold text-secondary tracking-widest uppercase">
                Nuestra Historia
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-primary font-cooper">
                Pastelería Artesanal desde 2010
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
              <p className="text-lg text-neutralDark leading-relaxed">
                En Koken, cada pastel, cada croissant y cada cupcake cuenta una historia. Desde nuestra 
                fundación en Mar del Plata, nos hemos dedicado a crear experiencias dulces inolvidables 
                combinando técnicas tradicionales con ingredientes de la más alta calidad.
              </p>
              <p className="text-lg text-neutralDark leading-relaxed">
                Nuestro equipo de pasteleros apasionados trabaja cada día para ofrecerte productos 
                frescos, artesanales y con el toque especial que nos caracteriza. Porque creemos que 
                la repostería no es solo un trabajo, es nuestro arte.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">15+</div>
                  <div className="text-sm text-neutralDark font-semibold">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">5000+</div>
                  <div className="text-sm text-neutralDark font-semibold">Clientes Felices</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">⭐ 5.0</div>
                  <div className="text-sm text-neutralDark font-semibold">Valoración</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {productImages.slice(12, 16).map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-xl aspect-square shadow-xl"
                >
                  <img
                    src={img}
                    alt={`Nosotros ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="relative py-20 px-4 bg-gradient-to-b from-white to-neutralLight">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-secondary tracking-widest mb-4 uppercase">
              Servicios
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 font-cooper">
              Para Cada Ocasión Especial
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaBirthdayCake />, title: 'Tortas de Cumpleaños', desc: 'Diseños personalizados para celebrar tu día especial' },
              { icon: <GiPartyFlags />, title: 'Eventos Corporativos', desc: 'Coordinamos catering para tus reuniones y eventos' },
              { icon: <GiCupcake />, title: 'Bodas', desc: 'Tortas nupciales elegantes y sofisticadas' },
              { icon: <GiCroissant />, title: 'Desayunos', desc: 'Desayunos y meriendas premium para compartir' }
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 border border-neutralLight/60 hover:border-primary transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-xl text-center"
              >
                <div className="relative mb-6 flex justify-center">
                  <div className="text-5xl text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-black text-primary mb-3 font-brand">
                  {service.title}
                </h3>
                <p className="text-neutralDark leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="relative py-20 px-4 bg-primary">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 font-cooper">
                  Ven a Visitar our Pastelería
                </h2>
                <div className="h-1 w-24 bg-white/30 rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <FiMapPin className="text-3xl text-pink-50" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Ubicación</h3>
                    <p className="text-pink-50">Mar del Plata, Buenos Aires, Argentina</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <FiPhone className="text-3xl text-pink-50" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Teléfono</h3>
                    <p className="text-pink-50">+54 223 XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <FiMail className="text-3xl text-pink-50" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-pink-50">hola@koken.com.ar</p>
                  </div>
                </div>
                
                <div className="flex gap-6 pt-6">
                  <a href="#" className="text-pink-50 hover:text-white transition-colors text-3xl">
                    <FiInstagram />
                  </a>
                  <a href="#" className="text-pink-50 hover:text-white transition-colors text-3xl">
                    <FiFacebook />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {productImages.slice(16, 20).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-xl aspect-square shadow-2xl"
                  >
                    <img
                      src={img}
                      alt={`Contacto ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutralDark py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-3">
              <img src={logoKoken} alt="Koken" className="h-12 w-12" />
              <h3 className="text-2xl font-black text-neutralLight font-brand">Koken</h3>
            </div>
            <div className="flex justify-center space-x-8 text-3xl text-neutralLight">
              <a href="#" className="hover:text-secondary cursor-pointer transition-colors"><FiInstagram /></a>
              <a href="#" className="hover:text-secondary cursor-pointer transition-colors"><FiFacebook /></a>
          </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-neutralLight text-sm">© 2024 Koken. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Hero Variant 3: Split layout con imagen destacada
function HeroVariant3() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 w-full h-[calc(100vh-80px)] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <span className="text-white text-sm font-bold tracking-widest">DESDE 2010</span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight font-cooper">
                  Pastelería<br/>Artesanal
                </h1>
                <div className="h-1 w-32 bg-white/60"></div>
              </div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl">
                Transformamos ingredientes premium en experiencias dulces inolvidables
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#productos" className="group bg-white text-primary hover:bg-neutralLight px-8 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
                  <GiCupcake className="text-2xl" />
                  <span>Explorar</span>
                </a>
                <a href="#servicios" className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 flex items-center justify-center gap-3">
                  <FaBirthdayCake className="text-2xl" />
                  <span>Servicios</span>
                </a>
        </div>
        </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src={productImages[0]} alt="Producto destacado" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/30">
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">15+</div>
                  <div className="text-sm text-pink-50 font-bold uppercase tracking-widest">Años</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Hero Variant 4: Diagonal split con mosaico de imágenes
function HeroVariant4() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 100px)`
        }}></div>
      </div>
      
      <div className="relative z-10 w-full h-[calc(100vh-96px)] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto h-full flex items-center">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-lg px-6 py-3 rounded-full">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  <span className="text-white text-sm font-bold tracking-widest">ARTESANAL</span>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight font-cooper">
                  DELICIAS<br/>CASERAS
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-lg">
                  Sabores auténticos que despiertan emociones y crean recuerdos inolvidables
                </p>
                <div className="flex gap-4 pt-6">
                  <a href="#productos" className="bg-white text-primary hover:bg-neutralLight px-10 py-4 rounded-full font-black text-lg transition-all hover:scale-105 shadow-2xl">
                    Explorar
                  </a>
                  <a href="#contacto" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 rounded-full font-black text-lg transition-all">
                    Contacto
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {productImages.slice(0, 4).map((img, idx) => (
                  <div key={idx} className="relative group">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30">
                      <img src={img} alt={`Producto ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700" />
                    </div>
                    {idx === 0 && (
                      <div className="absolute top-4 right-4 bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-black">
                        NUEVO
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Hero Variant 7: Layout asimétrico con carousel lateral
function HeroVariant7() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 100px)`
        }}></div>
      </div>
      
      <div className="relative z-10 w-full h-[calc(100vh-96px)] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto h-full flex items-center">
          <div className="w-full">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-12 lg:col-span-6 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <GiCroissant className="text-5xl text-white/80" />
                    <div className="flex-1 h-px bg-white/20"></div>
                  </div>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none font-cooper">
                    ARTESANÍA<br/>DULCE
                  </h1>
                  <p className="text-2xl md:text-3xl text-white/80 font-light pl-16">
                    Koken Mar del Plata
                  </p>
                </div>
                
                <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg pl-16">
                  Cada creación es el resultado de años de experiencia y una pasión innegable por la repostería auténtica
                </p>
                
                <div className="pl-16 pt-4">
                  <a href="#productos" className="inline-flex items-center gap-3 bg-white text-primary hover:bg-neutralLight px-8 py-4 rounded-full font-black transition-all hover:scale-105 shadow-2xl">
                    <span>Ver Obras</span>
                    <span className="text-2xl">→</span>
                  </a>
                </div>
              </div>
              
              <div className="col-span-12 lg:col-span-6">
                <div className="relative">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30">
                    <img src={productImages[5]} alt="Imagen principal" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="text-center border-r border-white/20 pr-4">
                        <div className="text-3xl font-black text-white">15+</div>
                        <div className="text-xs text-white/70 font-bold uppercase">Años</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-white">5000+</div>
                        <div className="text-xs text-white/70 font-bold uppercase">Clientes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente base de fondo animado
const AnimatedBackground = () => (
  <>
    <div className="absolute inset-0 bg-primary"></div>
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 60px),
                       repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 60px)`
    }}></div>
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.68]">
      <img src={logoKoken} alt="" className="w-[150%] md:w-[130%] lg:w-[110%] max-w-none h-auto filter brightness-150 contrast-150 drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]" />
    </div>
  </>
)

export default App
