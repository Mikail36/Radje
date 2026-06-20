import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import radjeLogo from "@/assets/radje-logo.asset.json";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: "Radje Football Academy",
      title: "Developing The Next Generation of Footballers",
      subtitle: "A professional youth football academy based in Kano, Nigeria — building world-class players through discipline, technique, and character.",
      cta: "Discover The Academy",
      link: "/about",
      image: "/team-group.jpg",
    },
    {
      id: 2,
      tag: "Train Like a Pro",
      title: "From Grassroots To The Global Stage",
      subtitle: "Age-specific programs from U7 to U19 designed to nurture raw talent into elite, scout-ready footballers.",
      cta: "Our Programs",
      link: "/programs",
      image: "/player-green-dribble.jpg",
    },
    {
      id: 3,
      tag: "World-Class Coaching",
      title: "Led by Certified Coaching Professionals",
      subtitle: "Our staff brings years of CAF and UEFA experience to every training session and matchday.",
      cta: "Meet The Coaches",
      link: "/coaches",
      image: "/player-njalo.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-pillars-dark/95 via-pillars-dark/60 to-pillars-dark/30 z-20"></div>
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          </div>

          <div className="relative z-30 h-full flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl animate-slide-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                <div className="flex items-center gap-4 mb-6">
                  <img src={radjeLogo.url} alt="Radje Football Academy logo" className="h-20 w-20 md:h-24 md:w-24 object-contain bg-white/10 backdrop-blur-sm rounded-lg p-2 shadow-lg" />
                  <p className="bg-pillars-yellow text-pillars-dark px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide">
                    {slide.tag}
                  </p>
                </div>
                <h1 className="text-white mb-4 leading-tight">{slide.title}</h1>
                <p className="text-white/90 text-lg md:text-xl mb-8">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={slide.link} className="pillars-button-primary inline-flex items-center gap-2">
                    {slide.cta}
                    <ChevronRight size={18} />
                  </Link>
                  <Link to="/contact" className="pillars-button bg-white/10 text-white border border-white/30 hover:bg-white/20">
                    Partner With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-pillars-yellow w-10" : "bg-white/40 hover:bg-white/60 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
