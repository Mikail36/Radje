import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import yahayaroma from "@/assets/coaches/YAHYA-ROMA (3).png";
import Babandi from "@/assets/coaches/BABANDI (1).png";

const coaches = [
  {
    name: "Yahaya Roma",
    role: "Club Coach",
    badge: "CAF  liscense",
    image: yahayaroma,
    bio: "Dedicated club coach at Radje Football Academy, committed to player development and team success.",
  },
  {
    name: "Coach Ibrahim Musa",
    role: "Assitant coach",
    badge: "Traino",
    image: Babandi,
    bio: "Over 4 years of coaching experience across youth and professional football. Leads our overall curriculum and Elite Squad.",
  },

];

const Coaches = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-pillars-green/95 to-pillars-green/85 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="pill-badge bg-pillars-yellow text-pillars-dark inline-block mb-6">Our Team</div>
          <h1 className="mb-6">Meet The Coaches</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Certified, experienced, and dedicated to developing the next generation of footballers.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((c) => (
              <div key={c.name} className="bg-white rounded-lg shadow-md overflow-hidden hover-elevate">
                <div className="h-72 relative bg-white border-b-4 border-pillars-yellow flex items-center justify-center overflow-hidden">
                  {c.image ? (
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-28 h-28 rounded-full bg-white shadow-inner flex items-center justify-center text-pillars-green font-extrabold text-3xl border-4 border-pillars-yellow">
                      {c.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="pill-badge bg-pillars-yellow text-pillars-dark">{c.badge}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{c.name}</h3>
                  <div className="text-pillars-green font-medium mb-3">{c.role}</div>
                  <p className="text-gray-600 text-sm">{c.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Coaches;
