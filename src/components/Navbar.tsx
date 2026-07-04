import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import radjeLogo from "@/assets/radje-logo.asset.json";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Coaches", path: "/coaches" },
    { name: "Players", path: "/players" },
    { name: "Gallery", path: "/gallery" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
    { name: "Apply Now!", path: "/register" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-pillars-dark/80 lg:bg-pillars-dark/30 backdrop-blur-md py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="Radje Football Academy">
            <img
              src={radjeLogo.url}
              alt="Radje Football Academy"
              className={`h-14 w-14 md:h-16 md:w-16 object-contain rounded-md transition-all ${
                isScrolled ? "bg-pillars-dark/5" : "bg-white/10 backdrop-blur-sm p-1"
              }`}
            />
            <div className="flex flex-col items-start leading-tight">
              <span className={`font-extrabold text-lg md:text-2xl tracking-tight ${(isScrolled || isMenuOpen) ? "text-pillars-green" : "text-pillars-yellow"}`} style={{ textShadow: (isScrolled || isMenuOpen) ? "none" : "0 2px 6px rgba(0,0,0,0.5)" }}>
                RADJE
              </span>
              <span className={`text-[10px] md:text-xs font-bold tracking-[0.2em] ${(isScrolled || isMenuOpen) ? "text-pillars-yellow bg-pillars-green/10 px-1.5 py-0.5 rounded" : "text-white"}`} style={{ textShadow: (isScrolled || isMenuOpen) ? "none" : "0 1px 4px rgba(0,0,0,0.6)" }}>
                FOOTBALL ACADEMY
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link text-sm font-semibold ${
                  isActive(link.path)
                    ? (isScrolled ? "text-pillars-green after:w-full" : "text-pillars-yellow after:w-full")
                    : (isScrolled ? "text-pillars-dark hover:text-pillars-green" : "text-white hover:text-pillars-yellow drop-shadow")
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isMenuOpen || isScrolled
                ? "bg-pillars-green text-white"
                : "bg-pillars-yellow text-pillars-dark shadow-md"
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-pillars-yellow">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-bold px-4 py-3 rounded-md transition-colors ${
                  isActive(link.path)
                    ? "bg-pillars-green text-pillars-yellow"
                    : "bg-pillars-yellow text-pillars-dark hover:bg-pillars-green hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-pillars-yellow/40 text-pillars-dark text-sm space-y-1 font-medium">
              <a href="tel:08038730000" className="block hover:text-pillars-green">📞 0803 873 0000</a>
              <a href="tel:+32465834481" className="block hover:text-pillars-green">📞 +32 465 83 44 81</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
