import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";

const newsData = [
  {
    id: 1,
    title: "Radje Academy Opens Registration for New Season",
    excerpt: "Our trials for the new season are now open. All age groups from U7 to U19 are welcome to register.",
    date: "2026-06-01",
    imageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=900&auto=format&fit=crop",
    category: "Trials",
  },
  {
    id: 2,
    title: "Three Elite Squad Players Sign Pro Contracts",
    excerpt: "Three of our U19 graduates have signed professional contracts with Nigerian Premier League clubs.",
    date: "2026-05-20",
    imageUrl: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=900&auto=format&fit=crop",
    category: "Pathway",
  },
  {
    id: 3,
    title: "New Goalkeeper Program Launches This Term",
    excerpt: "Led by Coach Samuel Okorie, our dedicated goalkeeper program now runs Wednesdays and Saturdays.",
    date: "2026-05-10",
    imageUrl: "https://images.unsplash.com/photo-1610752440918-96fd103d5b20?q=80&w=900&auto=format&fit=crop",
    category: "Programs",
  },
  {
    id: 4,
    title: "Tiny Stars Festival Brings the Smiles",
    excerpt: "Our U7–U9 Tiny Stars hosted a fun-first football festival with friendly matches and skills challenges.",
    date: "2026-04-22",
    imageUrl: "https://images.unsplash.com/photo-1529669350-13e8a06e6f33?q=80&w=900&auto=format&fit=crop",
    category: "Community",
  },
  {
    id: 5,
    title: "Academy Partners with Local Schools",
    excerpt: "New partnership ensures players keep their academics strong while training at an elite level.",
    date: "2026-04-08",
    imageUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=900&auto=format&fit=crop",
    category: "Education",
  },
  {
    id: 6,
    title: "Coaching Staff Earn New Licenses",
    excerpt: "Two of our coaches successfully completed their CAF B License courses this quarter.",
    date: "2026-03-15",
    imageUrl: "https://images.unsplash.com/photo-1553867745-6e038d085e86?q=80&w=900&auto=format&fit=crop",
    category: "Staff",
  },
];

const NewsPage = () => {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(newsData.map((n) => n.category)))];
  const filtered = filter === "All" ? newsData : newsData.filter((n) => n.category === filter);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-pillars-green/95 to-pillars-green/85 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="pill-badge bg-pillars-yellow text-pillars-dark inline-block mb-6">Academy News</div>
          <h1 className="mb-6">Latest News</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Updates from training, matches, partnerships, and our growing academy community.
          </p>
        </div>
      </section>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === c ? "bg-pillars-green text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
