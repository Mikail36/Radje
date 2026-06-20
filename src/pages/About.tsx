import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Target, Eye, Heart, Users, Award, ShieldCheck } from "lucide-react";
import radjeLogo from "@/assets/radje-logo.asset.json";

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const timeline = [
    { year: "Founded", title: "The Vision", description: "Radje Football Academy was founded with one mission — to give young Nigerian players access to world-class football development." },
    { year: "Phase 1", title: "Building the Foundation", description: "Launched grassroots programs for U7–U13, established coaching curriculum, and partnered with local schools." },
    { year: "Phase 2", title: "Elite Pathway", description: "Introduced the Elite Squad (U14–U19) with strength & conditioning, video analysis, and scouting links." },
    { year: "Today", title: "A Growing Family", description: "Hundreds of players developing, dozens of graduates progressing to professional clubs and college programs." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-pillars-green/95 to-pillars-green/85 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <img src={radjeLogo.url} alt="Radje" className="h-24 w-24 mx-auto mb-6 bg-white/10 rounded-full p-2" />
          <div className="pill-badge bg-pillars-yellow text-pillars-dark inline-block mb-6">Our Academy</div>
          <h1 className="mb-6">About Radje Football Academy</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            A youth football academy committed to producing technically gifted, tactically intelligent, and mentally strong players.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="pill-badge bg-pillars-yellow inline-block mb-4">Who We Are</div>
              <h2 className="text-3xl font-bold mb-6">A Home for Future Stars</h2>
              <p className="text-gray-600 mb-4">
                Radje Football Academy was created to fill a clear gap — structured, professional youth football development in Nigeria.
                We believe that with the right coaching, environment, and values, our young players can compete with anyone in the world.
              </p>
              <p className="text-gray-600 mb-6">
                Every player at Radje follows a long-term development plan. We don't just train footballers — we shape young people who
                lead with discipline, integrity, and ambition.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pillars-green mb-1">250+</div>
                  <div className="text-sm text-gray-500">Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pillars-green mb-1">12</div>
                  <div className="text-sm text-gray-500">Coaches</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pillars-green mb-1">30+</div>
                  <div className="text-sm text-gray-500">Graduates</div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 bg-pillars-yellow rounded-lg -z-10"></div>
                <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=900&auto=format&fit=crop" alt="Academy" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-lg hover-elevate">
              <div className="w-14 h-14 bg-pillars-green rounded-full flex items-center justify-center text-white mb-5">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pillars-green">Our Mission</h3>
              <p className="text-gray-600">
                To provide a professional, holistic football development pathway that nurtures elite players and exceptional young people.
              </p>
            </div>
            <div className="glass-card p-8 rounded-lg hover-elevate">
              <div className="w-14 h-14 bg-pillars-yellow rounded-full flex items-center justify-center text-pillars-dark mb-5">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pillars-green">Our Vision</h3>
              <p className="text-gray-600">
                To be West Africa's leading football academy, producing players for top professional clubs and national teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="pill-badge bg-pillars-green text-white inline-block mb-4">Core Values</div>
            <h2 className="mb-6">The Radje Way</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, t: "Integrity", d: "Honesty, fair play, accountability." },
              { icon: Heart, t: "Passion", d: "Love the game and the process." },
              { icon: Users, t: "Teamwork", d: "Win together, learn together." },
              { icon: Award, t: "Excellence", d: "Daily standards, no shortcuts." },
            ].map((v) => (
              <div key={v.t} className="glass-card p-6 rounded-lg text-center hover-elevate">
                <div className="w-14 h-14 mx-auto mb-4 bg-pillars-yellow rounded-full flex items-center justify-center text-pillars-dark">
                  <v.icon size={26} />
                </div>
                <h3 className="text-lg font-bold mb-2">{v.t}</h3>
                <p className="text-gray-600 text-sm">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="pill-badge bg-pillars-yellow inline-block mb-4">Our Journey</div>
            <h2 className="mb-6">How We Grew</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pillars-green/30 z-0"></div>
            {timeline.map((e, i) => (
              <div key={e.year} className={`flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-5/12">
                  <div className="glass-card p-6 rounded-lg hover-elevate">
                    <div className="pill-badge bg-pillars-yellow text-pillars-dark inline-block mb-3">{e.year}</div>
                    <h3 className="text-xl font-bold mb-3">{e.title}</h3>
                    <p className="text-gray-600">{e.description}</p>
                  </div>
                </div>
                <div className="md:w-2/12 flex justify-center">
                  <div className="w-10 h-10 bg-pillars-green rounded-full border-4 border-white flex items-center justify-center text-white font-bold">{i + 1}</div>
                </div>
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
