import { useEffect } from "react";
import { User } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import garbaAbbas from "@/assets/garba-abbas.jpg.asset.json";

const players = [
  { name: "Garba Abbas", number: 15, position: "Forward", squad: "Elite U17", age: 16, foot: "Right", image: garbaAbbas.url },
  { name: "Abdul Rahman", number: 1, position: "Goalkeeper", squad: "Elite U19", age: 18, foot: "Right" },
  { name: "Ibrahim Sani", number: 2, position: "Right Back", squad: "Elite U19", age: 17, foot: "Right" },
  { name: "Musa Yakubu", number: 4, position: "Centre Back", squad: "Elite U17", age: 16, foot: "Left" },
  { name: "Chinedu Okafor", number: 5, position: "Centre Back", squad: "Elite U19", age: 18, foot: "Right" },
  { name: "Aliyu Bello", number: 3, position: "Left Back", squad: "Development U13", age: 13, foot: "Left" },
  { name: "Tunde Adeyemi", number: 6, position: "Defensive Mid", squad: "Elite U17", age: 16, foot: "Right" },
  { name: "Samuel Ojo", number: 8, position: "Central Mid", squad: "Elite U19", age: 17, foot: "Right" },
  { name: "Yusuf Idris", number: 10, position: "Attacking Mid", squad: "Elite U17", age: 15, foot: "Left" },
  { name: "Emeka Nwosu", number: 7, position: "Right Winger", squad: "Elite U19", age: 18, foot: "Right" },
  { name: "Bashir Garba", number: 11, position: "Left Winger", squad: "Development U13", age: 13, foot: "Right" },
  { name: "Daniel Eze", number: 9, position: "Striker", squad: "Elite U19", age: 18, foot: "Right" },
  { name: "Hassan Bala", number: 19, position: "Striker", squad: "Tiny Stars U9", age: 9, foot: "Right" },
];

type Player = typeof players[number] & { image?: string };


const Players = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-pillars-green/95 to-pillars-green/85 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="pill-badge bg-pillars-yellow text-pillars-dark inline-block mb-6">Our Players</div>
          <h1 className="mb-6">Meet The Squad</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Talented young footballers developing across our age groups — disciplined, dedicated, and ready for the next level.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(players as Player[]).map((p) => (
              <div key={p.name} className="bg-white rounded-lg shadow-md overflow-hidden hover-elevate">
                <div className="h-60 relative bg-white border-b-4 border-pillars-yellow flex items-center justify-center overflow-hidden">
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-white shadow-inner flex items-center justify-center border-4 border-pillars-yellow">
                      <User size={48} className="text-pillars-green" />
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="pill-badge bg-pillars-dark text-pillars-yellow font-bold">#{p.number}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="pill-badge bg-pillars-yellow text-pillars-dark">{p.squad}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                  <div className="text-pillars-green font-medium text-sm mb-3">{p.position}</div>
                  <div className="flex justify-between text-xs text-gray-600 border-t pt-3">
                    <span><strong>Age:</strong> {p.age}</span>
                    <span><strong>Foot:</strong> {p.foot}</span>
                  </div>
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

export default Players;
