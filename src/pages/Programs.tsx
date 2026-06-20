import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Clock, Users, MapPin, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";

const programs = [
  {
    name: "Tiny Stars",
    age: "U7 – U9",
    color: "bg-pillars-yellow text-pillars-dark",
    image: "https://images.unsplash.com/photo-1529669350-13e8a06e6f33?q=80&w=900&auto=format&fit=crop",
    schedule: "Sat & Sun • 9:00 – 10:30",
    focus: [
      "Fundamental movement skills",
      "Ball familiarity & coordination",
      "Fun-first, confidence building",
      "Small-sided games (3v3 / 4v4)",
    ],
  },
  {
    name: "Development Squad",
    age: "U10 – U13",
    color: "bg-pillars-green text-white",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=900&auto=format&fit=crop",
    schedule: "Tue, Thu & Sat • 16:00 – 18:00",
    focus: [
      "Technical foundations: passing, receiving, dribbling",
      "Game intelligence & decision-making",
      "Position-specific introduction",
      "Inter-academy friendly fixtures",
    ],
  },
  {
    name: "Elite Squad",
    age: "U14 – U19",
    color: "bg-pillars-dark text-white",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=900&auto=format&fit=crop",
    schedule: "Mon – Fri • 16:00 – 19:00",
    focus: [
      "Tactical periodization & match preparation",
      "Strength & conditioning programs",
      "Video analysis & individual feedback",
      "Scouting pathway to pro clubs",
    ],
  },
  {
    name: "Goalkeeper Program",
    age: "U10 – U19",
    color: "bg-pillars-yellow text-pillars-dark",
    image: "https://images.unsplash.com/photo-1610752440918-96fd103d5b20?q=80&w=900&auto=format&fit=crop",
    schedule: "Wed & Sat • 15:00 – 16:30",
    focus: [
      "Shot-stopping & positioning",
      "Distribution & playing out from the back",
      "Crosses & 1v1 situations",
      "Goalkeeper-specific S&C",
    ],
  },
];

const Programs = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-pillars-green/95 to-pillars-green/85 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="pill-badge bg-pillars-yellow text-pillars-dark inline-block mb-6">Training Programs</div>
          <h1 className="mb-6">Player Development Pathway</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Age-specific programs designed to take a player from their first touch all the way to elite-level football.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 space-y-10">
          {programs.map((p, i) => (
            <div key={p.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="overflow-hidden rounded-lg shadow-lg h-72 lg:h-96">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className={`pill-badge inline-block mb-4 ${p.color}`}>{p.age}</span>
                <h2 className="mb-4">{p.name}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2"><Clock size={16} className="text-pillars-green" /> {p.schedule}</div>
                  <div className="flex items-center gap-2"><MapPin size={16} className="text-pillars-green" /> Radje Training Ground</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.focus.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="text-pillars-green flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="pillars-button-primary inline-flex items-center gap-2">
                  Enquire About This Program <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="pill-badge bg-pillars-yellow inline-block mb-4">What's Included</div>
            <h2 className="mb-6">Every Program Includes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, t: "Certified Coaches", d: "Licensed, experienced, and passionate about development." },
              { icon: Calendar, t: "Year-Round Sessions", d: "Consistent training calendar with school-term flexibility." },
              { icon: Clock, t: "Individual Tracking", d: "Each player gets termly progress reports and feedback." },
            ].map((b) => (
              <div key={b.t} className="glass-card p-6 rounded-lg text-center hover-elevate">
                <div className="w-14 h-14 mx-auto mb-4 bg-pillars-green rounded-full flex items-center justify-center text-white">
                  <b.icon size={26} />
                </div>
                <h3 className="text-lg font-bold mb-2">{b.t}</h3>
                <p className="text-gray-600 text-sm">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
