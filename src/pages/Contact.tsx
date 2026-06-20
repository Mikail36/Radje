import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Handshake, Trophy, Users } from "lucide-react";

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-pillars-green via-pillars-green/95 to-pillars-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="pill-badge bg-pillars-yellow text-pillars-dark inline-block mb-6">Get in Touch</div>
          <h1 className="mb-6">Contact & Partnerships</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            For sponsorship enquiries, partnership opportunities, scouting and general questions — reach our team directly.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover-elevate">
              <div className="w-16 h-16 bg-pillars-yellow rounded-full flex items-center justify-center text-pillars-dark mx-auto mb-5">
                <Phone size={26} />
              </div>
              <h3 className="font-bold mb-3">Call Us</h3>
              <div className="space-y-1 text-gray-700">
                <a href="tel:08038730000" className="block hover:text-pillars-green font-medium">0803 873 0000</a>
                <a href="tel:+32465834481" className="block hover:text-pillars-green font-medium">+32 465 83 44 81</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover-elevate">
              <div className="w-16 h-16 bg-pillars-green rounded-full flex items-center justify-center text-white mx-auto mb-5">
                <Mail size={26} />
              </div>
              <h3 className="font-bold mb-3">Email Us</h3>
              <a href="mailto:info@radjefootballacademy.com" className="text-gray-700 hover:text-pillars-green font-medium break-all">
                info@radjefootballacademy.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover-elevate">
              <div className="w-16 h-16 bg-pillars-yellow rounded-full flex items-center justify-center text-pillars-dark mx-auto mb-5">
                <MapPin size={26} />
              </div>
              <h3 className="font-bold mb-3">Visit Us</h3>
              <p className="text-gray-700">Radje Academy Training Ground<br/>Kano State, Nigeria</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pillars-dark to-pillars-green text-white rounded-2xl p-8 md:p-14 text-center">
            <Handshake className="mx-auto text-pillars-yellow mb-4" size={56} />
            <h2 className="mb-4 text-white">Partner With Radje Football Academy</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              We welcome sponsors, brands, and partners who share our vision of developing world-class African footballers.
              Together we can shape the future of the game.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              <div className="bg-white/10 rounded-lg p-5">
                <Trophy className="text-pillars-yellow mx-auto mb-3" size={28} />
                <h4 className="text-white text-base font-semibold mb-1">Brand Sponsorship</h4>
                <p className="text-white/70 text-sm">Kit, equipment, and matchday partnerships.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-5">
                <Users className="text-pillars-yellow mx-auto mb-3" size={28} />
                <h4 className="text-white text-base font-semibold mb-1">Player Pathway</h4>
                <p className="text-white/70 text-sm">Scouting collaborations with professional clubs.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-5">
                <Handshake className="text-pillars-yellow mx-auto mb-3" size={28} />
                <h4 className="text-white text-base font-semibold mb-1">Community Programs</h4>
                <p className="text-white/70 text-sm">Grassroots and education initiatives.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:08038730000" className="pillars-button-primary inline-flex items-center justify-center gap-2">
                <Phone size={18} /> 0803 873 0000
              </a>
              <a href="mailto:info@radjefootballacademy.com" className="pillars-button bg-white/10 text-white border border-white/30 hover:bg-white/20 inline-flex items-center justify-center gap-2">
                <Mail size={18} /> Email Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
