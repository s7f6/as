import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Scissors } from 'lucide-react';
import Contact from './Contact';

const ASBarberWebsite = () => {
const [currentReview, setCurrentReview] = useState(0);
const [currentImage, setCurrentImage] = useState(0);
const [colorPhase, setColorPhase] = useState(0);
const [lettersVisible, setLettersVisible] = useState([true, true, true]);
const [letterPositions, setLetterPositions] = useState([0, 0, 0]);

// Sample reviews data
const reviews = [
{
name: "Mikko Virtanen",
rating: 5,
comment: "Erinomainen palvelu ja ammattitaitoinen henkilökunta. Suosittelen lämpimästi!",
date: "2 viikkoa sitten"
},
{
name: "Jari Korhonen",
rating: 5,
comment: "Paras parturi Seinäjoella! Aina täydellinen tulos ja mukava tunnelma.",
date: "1 kuukausi sitten"
},
{
name: "Antti Laakso",
rating: 5,
comment: "Modernit tilat ja huippuluokan palvelu. En vaihda enää toiseen!",
date: "3 viikkoa sitten"
}
];

// Gallery data with icons instead of images
const galleryImages = [
{
alt: "Sisätilat",
description: "Modernit ja viihtyisät tilat",
icon: "interior"
},
{
alt: "Fade-leikkaus",
description: "Tyylikäs fade-leikkaus parran kanssa - moderni klassikko",
icon: "fade"
},
{
alt: "Texturoitu tyyli",
description: "Rohkea ja texturoitu look - täydellinen nuorille miehille",
icon: "texture"
},
{
alt: "Klassinen leikkaus",
description: "Ajaton sivuparru look - elegantti ja siisti",
icon: "classic"
},
{
alt: "Leikkaustuolit",
description: "Tyylikkäät leikkaustuolit - ammattitaitoinen palvelu",
icon: "chair"
},
{
alt: "Hiustenhoitotuotteet",
description: "Laadukkaat hiustenhoitotuotteet",
icon: "products"
}
];

const services = [
{ name: "Hiusten leikkaus", price: "20€", description: "Klassinen miesten hiustenleikkaus" },
{ name: "Lasten leikkaus alle 12v", price: "18€", description: "Hiustenleikkaus lapsille alle 12 vuotta" },
{ name: "Eläkeläiset leikkaus", price: "18€", description: "Hiustenleikkaus eläkeläisille" },
{ name: "Parran muotoilu", price: "15€", description: "Parran trimmaus ja muotoilu" },
{ name: "Hiukset ja parta", price: "30€", description: "Täydellinen paketti - hiukset + parta" },
{ name: "Korvat ja nenä karvat", price: "5€", description: "Korvien ja nenän karvojen poisto" }
];

// Function to get icon based on type
const getGalleryIcon = (iconType) => {
switch(iconType) {
case 'fade':
return <Scissors className="h-20 w-20 text-yellow-400" />;
case 'texture':
return <div className="text-6xl">✂️</div>;
case 'classic':
return <div className="text-6xl">👨‍🦲</div>;
case 'interior':
return <div className="text-6xl">🏪</div>;
case 'chair':
return <div className="text-6xl">💺</div>;
case 'products':
return <div className="text-6xl">🧴</div>;
default:
return <Scissors className="h-20 w-20 text-yellow-400" />;
}
};

// Auto-rotate reviews
useEffect(() => {
const interval = setInterval(() => {
setCurrentReview((prev) => (prev + 1) % reviews.length);
}, 5000);
return () => clearInterval(interval);
}, [reviews.length]);

// Animated logo with colors and letter separation
useEffect(() => {
const colorInterval = setInterval(() => {
setColorPhase(prev => (prev + 1) % 6);
}, 800);

// Letters separation animation
const lettersInterval = setInterval(() => {
  // Phase 1: Make all letters visible and reset positions
  setLettersVisible([true, true, true]);
  setLetterPositions([0, 0, 0]);
  
  setTimeout(() => {
    // Phase 2: Start separating letters
    setLetterPositions([-100, 0, 100]);
  }, 1000);
  
  setTimeout(() => {
    // Phase 3: Move letters further and start fading
    setLetterPositions([-200, 0, 200]);
    setLettersVisible([false, true, false]);
  }, 1500);
  
  setTimeout(() => {
    // Phase 4: Hide middle letter and move it
    setLetterPositions([-300, -50, 300]);
    setLettersVisible([false, false, false]);
  }, 2000);
  
  setTimeout(() => {
    // Phase 5: Bring letters back
    setLetterPositions([-50, 0, 50]);
    setLettersVisible([true, true, true]);
  }, 2500);
  
}, 4000);

return () => {
  clearInterval(colorInterval);
  clearInterval(lettersInterval);
};
}, []);

// Dynamic color classes for the logo
const getLogoColors = () => {
const colorSets = [
'from-yellow-400 via-yellow-300 to-amber-200',
'from-red-400 via-pink-300 to-purple-200',
'from-blue-400 via-cyan-300 to-teal-200',
'from-green-400 via-emerald-300 to-lime-200',
'from-purple-400 via-violet-300 to-indigo-200',
'from-orange-400 via-yellow-300 to-red-200'
];
return colorSets[colorPhase];
};

const nextReview = () => {
setCurrentReview((prev) => (prev + 1) % reviews.length);
};

const prevReview = () => {
setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
};

const nextImage = () => {
setCurrentImage((prev) => (prev + 1) % galleryImages.length);
};

const prevImage = () => {
setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
};

return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
{/* Navigation */}
<nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-700">
<div className="container mx-auto px-6 py-4">
<div className="flex justify-between items-center">
<div className="flex items-center space-x-2">
<Scissors className="h-8 w-8 text-yellow-400" style={{animation: 'float 3s ease-in-out infinite'}} />
<div className="flex">
{['A', '&', 'S'].map((letter, index) => (
<span
key={letter}
className={`text-2xl font-bold transition-all duration-1000 inline-block ${ lettersVisible[index]  ? `text-transparent bg-gradient-to-r ${getLogoColors()} bg-clip-text`  : 'text-yellow-400/30' }`}
style={{
transform: `translateX(${letterPositions[index] * 0.1}px) scale(${lettersVisible[index] ? 1 : 0.8})`,
transition: 'all 0.8s ease-in-out'
}}
>
{letter}
</span>
))}
</div>
</div>
<div className="hidden md:flex space-x-8">
<a href="#etusivu" className="hover:text-yellow-400 transition-colors">Etusivu</a>
<a href="#palvelut" className="hover:text-yellow-400 transition-colors">Palvelut</a>
<a href="#galleria" className="hover:text-yellow-400 transition-colors">Galleria</a>
<a href="#arvostelut" className="hover:text-yellow-400 transition-colors">Arvostelut</a>
<a href="#yhteystiedot" className="hover:text-yellow-400 transition-colors">Yhteystiedot</a>
</div>
</div>
</div>
</nav>

  {/* Hero Section */}
  <section id="etusivu" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
    
    <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
      {/* Animated Logo with Separating Letters */}
      <div className="mb-8 relative h-32">
        <div className="flex justify-center items-center relative">
          {/* Letter A */}
          <span 
            className={`text-8xl md:text-9xl font-bold bg-gradient-to-r ${getLogoColors()} bg-clip-text text-transparent transition-all duration-1000 transform inline-block`}
            style={{
              transform: `translateX(${letterPositions[0]}px) scale(${lettersVisible[0] ? 1 : 0.5}) rotate(${letterPositions[0] * 0.5}deg)`,
              opacity: lettersVisible[0] ? 1 : 0,
              textShadow: lettersVisible[0] 
                ? '0 0 30px rgba(245, 158, 11, 0.5), 0 0 60px rgba(245, 158, 11, 0.3)' 
                : 'none',
              transition: 'all 1s ease-in-out'
            }}
          >
            A
          </span>
          
          {/* Ampersand & */}
          <span 
            className={`text-8xl md:text-9xl font-bold bg-gradient-to-r ${getLogoColors()} bg-clip-text text-transparent transition-all duration-1000 transform inline-block`}
            style={{
              transform: `translateX(${letterPositions[1]}px) translateY(${Math.abs(letterPositions[1]) * 0.3}px) scale(${lettersVisible[1] ? 1 : 0.3}) rotate(${letterPositions[1] * 0.8}deg)`,
              opacity: lettersVisible[1] ? 1 : 0,
              textShadow: lettersVisible[1] 
                ? '0 0 30px rgba(245, 158, 11, 0.5), 0 0 60px rgba(245, 158, 11, 0.3)' 
                : 'none',
              transition: 'all 1s ease-in-out'
            }}
          >
            &
          </span>
          
          {/* Letter S */}
          <span 
            className={`text-8xl md:text-9xl font-bold bg-gradient-to-r ${getLogoColors()} bg-clip-text text-transparent transition-all duration-1000 transform inline-block`}
            style={{
              transform: `translateX(${letterPositions[2]}px) scale(${lettersVisible[2] ? 1 : 0.5}) rotate(${letterPositions[2] * -0.5}deg)`,
              opacity: lettersVisible[2] ? 1 : 0,
              textShadow: lettersVisible[2] 
                ? '0 0 30px rgba(245, 158, 11, 0.5), 0 0 60px rgba(245, 158, 11, 0.3)' 
                : 'none',
              transition: 'all 1s ease-in-out'
            }}
          >
            S
          </span>
        </div>
        
        {/* Floating particles around logo */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${getLogoColors()} rounded-full`}
              style={{
                left: `${10 + i * 7}%`,
                top: `${20 + (i % 4) * 20}%`,
                animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                opacity: lettersVisible.some(v => v) ? 0.6 + (i % 3) * 0.2 : 0.1,
                transform: `scale(${0.5 + (i % 3) * 0.5}) translateY(${Math.sin(i) * 10}px)`,
                transition: 'all 0.5s ease-in-out'
              }}
            />
          ))}
        </div>
        
        {/* Energy waves */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={`wave-${i}`}
              className="absolute inset-0 border-2 border-yellow-400/20 rounded-full"
              style={{
                animation: `ping 3s ease-in-out infinite`,
                animationDelay: `${i * 0.7}s`,
                opacity: lettersVisible.some(v => v) ? 0.3 : 0,
                transform: `scale(${1 + i * 0.2})`
              }}
            />
          ))}
        </div>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-light mb-6">
        Barbershop Seinäjoki
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Modernin miehen tyylikkäin valinta
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a 
          href="#palvelut" 
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Tutustu Palveluihin
        </a>
        <a 
          href="#yhteystiedot" 
          className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
        >
          Ota Yhteyttä
        </a>
      </div>
    </div>
  </section>

  {/* Services Section */}
  <section id="palvelut" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-bold text-center mb-16 text-yellow-400">Hinnasto</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-yellow-500/50 group"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                {service.name}
              </h3>
              <span className="text-2xl font-bold text-white bg-yellow-500/20 px-3 py-1 rounded-full">
                {service.price}
              </span>
            </div>
            <p className="text-gray-300 group-hover:text-white transition-colors">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Gallery Section */}
  <section id="galleria" className="py-20 bg-black">
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-bold text-center mb-16 text-yellow-400">Galleria</h2>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-lg shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-400/30">
          {/* Icon-based display instead of images */}
          <div className="w-full h-96 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <div className="mb-6 transform transition-all duration-500 hover:scale-110">
              {getGalleryIcon(galleryImages[currentImage].icon)}
            </div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2 text-center px-4">
              A&S {galleryImages[currentImage].alt}
            </h3>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
            <p className="text-white text-lg font-medium text-center">
              {galleryImages[currentImage].description}
            </p>
          </div>
        </div>
        
        {/* Gallery Navigation */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Gallery Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Reviews Section */}
  <section id="arvostelut" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-bold text-center mb-16 text-yellow-400">Asiakkaiden Arvostelut</h2>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <span className="text-gray-400">{reviews[currentReview].date}</span>
          </div>
          
          <p className="text-xl text-gray-300 mb-6 italic">
            "{reviews[currentReview].comment}"
          </p>
          
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl mr-4">
              {reviews[currentReview].name.charAt(0)}
            </div>
            <span className="text-lg font-semibold">{reviews[currentReview].name}</span>
          </div>
        </div>
        
        {/* Review Navigation */}
        <button 
          onClick={prevReview}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-400 text-black p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextReview}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-400 text-black p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Review Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>

{/* Contact Section */}
<Contact />

  {/* Footer */}
  <footer className="bg-gray-900 py-8 border-t border-gray-700">
    <div className="container mx-auto px-6 text-center">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Scissors className="h-6 w-6 text-yellow-400" style={{animation: 'float 3s ease-in-out infinite'}} />
        <div className="flex items-center">
          {['A', '&', 'S'].map((letter, index) => (
            <span 
              key={`footer-${letter}`}
              className={`text-xl font-bold transition-all duration-1000 inline-block ${
                lettersVisible[index] 
                  ? `text-transparent bg-gradient-to-r ${getLogoColors()} bg-clip-text` 
                  : 'text-yellow-400/50'
              }`}
              style={{
                transform: `scale(${lettersVisible[index] ? 1 : 0.9})`,
                transition: 'all 0.8s ease-in-out'
              }}
            >
              {letter}
            </span>
          ))}
          <span className="text-xl font-bold text-yellow-400 ml-1">Barbershop</span>
        </div>
      </div>
      <p className="text-gray-400">© 2025 A&S Barbershop - Kauppakatu 18 LH 1, 60100 Seinäjoki. Kaikki oikeudet pidätetään.</p>
    </div>
  </footer>

  {/* Custom Styles */}
  <style jsx>{`
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes glow-pulse {
      0%, 100% {
        text-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
      }
      50% {
        text-shadow: 0 0 40px rgba(245, 158, 11, 0.8), 0 0 60px rgba(245, 158, 11, 0.6);
      }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-10px) rotate(5deg); }
      50% { transform: translateY(-20px) rotate(0deg); }
      75% { transform: translateY(-10px) rotate(-5deg); }
    }
    
    html {
      scroll-behavior: smooth;
    }
  `}</style>
</div>
);
};

export default ASBarberWebsite;
