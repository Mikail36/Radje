import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Users, Target, Heart, ShieldCheck, Sparkles, CheckCircle2, Quote } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import radjeLogo from "@/assets/radje-logo.asset.json";
import founderImage from "@/assets/founder-arouna.jpg.asset.json";

const programs = [
  {
    title: "Tiny Stars (U7 – U9)",
    description: "Fun-first introduction to football. Coordination, ball familiarity, and confidence.",
    image: "/radje-logo.jpg",
  },
  {
    title: "Development Squad (U10 – U13)",
    description: "Core technical foundations, passing patterns, decision-making and small-sided games.",
    image: "/player-green-dribble.jpg",
  },
  {
    title: "Elite Squad (U14 – U19)",
    description: "Tactical periodization, strength & conditioning, video analysis, and scouting pathways.",
    image: "/player-mukabb.jpg",
  },
];

const values = [
  { icon: Target, title: "Discipline", text: "Daily standards on and off the pitch." },
  { icon: Heart, title: "Passion", text: "Love the game, respect the work." },
  { icon: ShieldCheck, title: "Integrity", text: "Fair play, honesty, and accountability." },
  { icon: Sparkles, title: "Excellence", text: "Pursue mastery in every session." },
];

const Index = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />

      {/* About preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-slide-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className="pill-badge bg-pillars-yellow inline-block mb-4">About The Academy</div>
              <h2 className="mb-6">Developing Players. Building Character.</h2>
              <p className="text-gray-600 mb-4">
                Radje Football Academy is a youth development academy committed to producing technically gifted, tactically intelligent,
                and mentally strong footballers. We combine modern coaching methods with the values of discipline, teamwork, and respect.
              </p>
              <p className="text-gray-600 mb-6">
                From our youngest Tiny Stars to our Elite Squad scouted by professional clubs, every player follows a structured
                long-term development plan tailored to their age and stage.
              </p>
              <ul className="space-y-3 mb-8">
                {["UEFA & CAF-licensed head coaches","Age-specific training curriculum","Education and life-skills support","Pathways to professional clubs"].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="text-pillars-green flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="pillars-button-primary inline-flex items-center gap-2">
                Our Story
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <div className="relative">
                <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 bg-pillars-yellow rounded-lg -z-10"></div>
                <img
                  src="/team-group.jpg"
                  alt="Academy training"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -left-6 top-6 bg-white p-3 rounded-lg shadow-xl hidden md:block">
                  <img src={radjeLogo.url} alt="Radje logo" className="h-20 w-20 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <div className="relative">
                <div className="absolute -left-4 -bottom-4 w-2/3 h-2/3 bg-pillars-yellow rounded-lg -z-10"></div>
                <div className="rounded-lg overflow-hidden shadow-xl bg-white">
                  <img
                    src={founderImage.url}
                    alt="Arouna Amadou Siradji - Club Founder"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-slide-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <div className="pill-badge bg-pillars-green text-white inline-block mb-4">Club Founder</div>
              <h2 className="mb-6">Arouna Amadou Siradji</h2>
              <div className="relative bg-white p-6 rounded-lg shadow-md border-l-4 border-pillars-yellow mb-6">
                <Quote className="text-pillars-yellow mb-3" size={28} />
                <p className="text-gray-700 text-lg italic leading-relaxed">
                  "I started Radje Football Academy with a simple dream — to give every young talent in Kano and beyond the opportunity to develop their skills, build character, and reach their full potential. Football is more than a game; it is a pathway to discipline, education, and a brighter future. Together, we are building the next generation of champions."
                </p>
              </div>
              <Link to="/about" className="pillars-button-primary inline-flex items-center gap-2">
                About The Academy
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="pill-badge bg-pillars-green text-white inline-block mb-4">Programs</div>
            <h2 className="mb-6">Training Programs By Age Group</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every age group follows a clear, age-appropriate development pathway designed by our technical directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {programs.map((p, i) => (
              <div key={p.title} className="bg-white rounded-lg overflow-hidden shadow-md hover-elevate opacity-0 animate-scale-in" style={{animationDelay: `${0.1 + i * 0.1}s`, animationFillMode: 'forwards'}}>
                <div className="h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-600 mb-4">{p.description}</p>
                  <Link to="/programs" className="text-pillars-green font-medium hover:underline inline-flex items-center">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/programs" className="pillars-button-outline inline-flex items-center gap-2">
              View All Programs <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="pill-badge bg-pillars-yellow inline-block mb-4">Our Values</div>
            <h2 className="mb-6">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="glass-card p-6 rounded-lg text-center hover-elevate opacity-0 animate-slide-in" style={{animationDelay: `${0.1 + i * 0.1}s`, animationFillMode: 'forwards'}}>
                <div className="w-14 h-14 mx-auto mb-4 bg-pillars-green rounded-full flex items-center justify-center text-white">
                  <v.icon size={26} />
                </div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-pillars-green text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: "250+", l: "Active Players" },
              { n: "12", l: "Certified Coaches" },
              { n: "5", l: "Age Groups" },
              { n: "30+", l: "Graduates Scouted" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-4xl md:text-5xl font-bold text-pillars-yellow mb-2">{s.n}</div>
                <div className="text-white/80 text-sm md:text-base">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl p-8 md:p-14 text-center bg-gradient-to-br from-pillars-dark to-pillars-green text-white shadow-xl">
            <Trophy className="mx-auto text-pillars-yellow mb-4" size={52} />
            <h2 className="mb-4 text-white">Partner With Radje Football Academy</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Sponsors, brands, and partners — join us in developing the next generation of African football talent.
              Together we shape the future of the game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="pillars-button-primary inline-flex items-center gap-2">
                Become a Sponsor <ArrowRight size={18} />
              </Link>
              <a href="tel:08038730000" className="pillars-button bg-white/10 text-white border border-white/30 hover:bg-white/20">
                Call: 0803 873 0000
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
