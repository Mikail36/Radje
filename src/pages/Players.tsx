import { useEffect } from "react";
import { User } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import garbaAbbas from "@/assets/Players/GARBA-ABBAS (1).jpeg";
import Khaleepha from "@/assets/Players/KALEEPHA (2).jpeg";
import musanyalo from "@/assets/Players/NYALO (3).jpeg";
import Rabiumuktar from "@/assets/Players/ABBA-MUKTAR (5).jpeg";
const players = [
  { name: "GARBA ABBAS", number: 99, position: "CM", squad: "Elite U19", age: 19, foot: "BOTH", image: garbaAbbas },
  { name: "KHALEEPHA", number: 99, position: "CB", squad: "Elite U19", age: 18, foot: "Right", image: Khaleepha },
  { name: "MUSA NYALO", number: 99, position: "Right Winger", squad: "Elite U17", age: 16, foot: "Both", image: musanyalo },
  { name: "RABIU MUKTAR ABBA", number: 99, position: "Right Winger", squad: "Elite U19", age: 18, foot: "Right", image: Rabiumuktar },
  { name: "ABDULWAHAB RABIU", number: 99, position: "left winger", squad: "Elite U19", age: 19, foot: "Right" , image: "/radje-logo.jpg" },
  { name: "SADIQ MUSA GARBA", number: 99, position: "AM/CM", squad: "Elite U19", age: 18, foot: "Left" , image: "/radje-logo.jpg" },
  { name: "IBRAHIM ISAH GARBA", number: 99, position: "AM", squad: "Elite U17", age: 17, foot: "Right" , image: "/radje-logo.jpg" },
  { name: "FARUK SAID NABO", number: 99, position: "DM", squad: "Elite U17", age: 16, foot: "Right" , image: "/radje-logo.jpg" },
  { name: "MIKAIL FAISAL", number: 99, position: "CM/LW/AMF", squad: "Elite U20", age: 20, foot: "Right" , image: "/radje-logo.jpg" },
  { name: "MUHAMMAD ABDULLAHI ", number: 99, position: "AM", squad: "Elite U19", age: 17, foot: "Right" , image: "/radje-logo.jpg" },
  { name: "AHMAD DANKANE", number:99, position: "Left Winger", squad: "Elite U17", age: 17, foot: "Right" , image: "/radje-logo.jpg"  },
  { name: "NAJIYULLAH ABUBAKAR UMAR", number: 99, position: "CF", squad: "Elite U17", age: 17, foot: "Right" , image: "/radje-logo.jpg" },
  { name: "AHMAD SAID SULAIMAN", number: 99, position: "LW", squad: "Elite U19", age: 19, foot: "Right" , image: "/radje-logo.jpg" },
  { name: "IBRAHIM AHMAD", number: 99, position: "DM", squad: "Elite U19", age: 19, foot: "Right" , image: "/radje-logo.jpg" },
  { name: "USMAN MUKHTAR", number: 99, position: "LW", squad: "Elite U20", age: 20, foot: "Right" , image: "/radje-logo.jpg" },
  { name: "SULAIMAN YAYA", number: 99, position: "RB", squad: "Elite U19", age: 19, foot: "Right" , image: "/radje-logo.jpg" },
  { name: "ABDULRAHMAN BALA", number: 99, position: "GK", squad: "Elite U17", age: 17, foot: "Right" , image: "/radje-logo.jpg" },
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
