import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const frames = [
  { src: "/GROUP-PIC (11).jpeg", label: "Team Lineup", caption: "Radje Football Academy Squad" },
  { src: "/GROUP-PIC (12).jpeg", label: "Pre game drills", caption: "session warm ups" },
  { src: "/GROUP-PIC (19).jpeg", label: "Player Portrait", caption: "Show-Case" },
  { src: "/GROUP-PIC (17).jpeg", label: "Training Ready", caption: "Academy Ground" },
  { src: "/player-khaleepha-1.jpg", label: "Khaleepha #11", caption: "On the Ball" },
  { src: "/KALEEPHA (10).jpeg", label: "Khaleepha #11", caption: "Running the Pitch" },
  { src: "/player-green-banner.jpg", label: "Away Strip", caption: "Radje Football Academy" },
  { src: "/player-green-dribble.jpg", label: "Dribble Drill", caption: "Training Session" },
  { src: "/player-njalo.jpg", label: "M. Njalo #7", caption: "Shooting Practice" },
  { src: "/ABBA-MUKTAR (7).jpeg", label: "A. Mukabb #5", caption: "Strike on Goal" },
  { src: "/garba-abbas.jpg", label: "Garba Abbas", caption: "Elite U17 Forward" },
];

const Gallery = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-pillars-green/95 to-pillars-green/85 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="pill-badge bg-pillars-yellow text-pillars-dark inline-block mb-6">Gallery</div>
          <h1 className="mb-6">Life at the Academy</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Glimpses of training, matchdays, and the moments that shape our players.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {frames.map((f, i) => (
              <div key={i} className="rounded-lg shadow-md overflow-hidden bg-white border border-gray-200 hover-elevate">
                <div className="h-72 overflow-hidden border-b-4 border-pillars-yellow bg-white">
                  <img src={f.src} alt={f.label} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="px-4 py-3">
                  <div className="text-pillars-green font-semibold">{f.label}</div>
                  <div className="text-sm text-gray-600">{f.caption}</div>
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

export default Gallery;
