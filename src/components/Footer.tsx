import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import radjeLogo from "@/assets/radje-logo.asset.json";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pillars-dark text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img src={radjeLogo.url} alt="Radje Football Academy" className="h-16 w-16 object-contain bg-white/10 rounded-md p-1.5" />
              <div className="flex flex-col items-start">
                <span className="text-white font-extrabold text-2xl tracking-tight">RADJE</span>
                <span className="text-pillars-yellow text-xs font-semibold tracking-[0.2em]">FOOTBALL ACADEMY</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              A professional youth football academy in Kano, Nigeria — developing the next generation of African football talent
              through world-class coaching, modern training, and character-driven education.
            </p>
           <div className="flex space-x-3">

  <a
    href="https://www.facebook.com/share/194mbJko4R/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pillars-yellow hover:text-pillars-dark transition-colors duration-300"
  >
    <Facebook size={18} />
  </a>

 

  <a
    href="https://www.instagram.com/radjefootballacademy?igsh=c3o2dHdhMjM1c3Ny"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pillars-yellow hover:text-pillars-dark transition-colors duration-300"
  >
    <Instagram size={18} />
  </a>

  <a
    href="https://www.tiktok.com/@radje.football.aca?_r=1&_t=ZS-97fjreLVRIq"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pillars-yellow hover:text-pillars-dark transition-colors duration-300"
  >
    <FaTiktok size={18} />
  </a>

</div>
</div>
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Explore
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-pillars-yellow"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/programs", label: "Training Programs" },
                { to: "/coaches", label: "Our Coaches" },
                { to: "/gallery", label: "Gallery" },
                { to: "/news", label: "News" },
                { to: "/contact", label: "Partner With Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-gray-400 hover:text-pillars-yellow transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-pillars-yellow"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-pillars-yellow mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Radje Academy Training Ground, Kano State, Nigeria</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-pillars-yellow mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-400 space-y-1">
                  <div>0803 873 0000</div>
                  <div>+32 465 83 44 81</div>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-pillars-yellow mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">footballradje@gmail.com</span>
              </li>
            </ul>
          </div>
          

          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Sponsorship & Partnerships
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-pillars-yellow"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Support African youth football development. Partner with Radje Football Academy and shape the future of the game.
            </p>
            <Link to="/contact" className="pillars-button-primary inline-block">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </div>
      

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-gray-400 text-sm">
              © {currentYear} Radje Football Academy. All rights reserved.
            </div>
            <div className="flex space-x-4 text-gray-400 text-sm">
              <Link to="/about" className="hover:text-pillars-yellow transition-colors">About</Link>
              <Link to="/programs" className="hover:text-pillars-yellow transition-colors">Programs</Link>
              <Link to="/contact" className="hover:text-pillars-yellow transition-colors">Contact</Link>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-500 text-xs">
            Designed by Dual Intelligence ICT Services Kano<br />
                      Modified by Mikail Faisal
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
