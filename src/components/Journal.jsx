import React from "react";
import { motion } from "framer-motion";

// Asset Imports
import journalLogo from "../assets/aetherfield-journal.svg"; // The tilted badge
import article1 from "../assets/article-1.avif";
import article2 from "../assets/article-2.avif";
import article3 from "../assets/article-3.avif";

const Journal = () => {
  const articles = [
    {
      img: article1,
      category: "Insights",
      time: "4 min",
      title: "How to Build a Climate-Ready Data Stack",
    },
    {
      img: article2,
      category: "Strategy",
      time: "7 min",
      title: "Sustainability Isn't a Side Project: Making Impact Operational",
    },
    {
      img: article3,
      category: "Insights",
      time: "6 min",
      title: "Inside the Aetherfield Model: How We Turn Data Into Action",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        
        {/* 1. THE TILTED BADGE (Top Left) */}
        <div className="absolute -left-48 -top-16 select-none pointer-events-none hidden lg:block">
          <img 
            src={journalLogo} 
            alt="Journal Logo" 
            className="w-[280px] h-auto rotate-[-12deg]" 
          />
        </div>

        {/* 2. HEADER */}
        <div className="flex justify-start mb-4">
          <h2 className="text-[52px] font-serif font-medium text-black">
            From the journal
          </h2>
        </div>

        {/* 3. ARTICLES LIST */}
        <div className="border-t border-zinc-100 mt-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-row items-center gap-10 py-12 border-b border-zinc-100 cursor-pointer"
            >
              {/* Image Container */}
              <div className="w-[300px] h-[180px] shrink-0 rounded-2xl overflow-hidden bg-zinc-100">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 text-zinc-400 font-nav text-[14px] uppercase tracking-wider mb-3">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.time}</span>
                </div>
                <h3 className="text-[26px] font-nav font-medium text-black leading-tight group-hover:text-zinc-600 transition-colors">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. BUTTON */}
        <div className="flex justify-center mt-16">
          <button className="px-10 py-3.5 bg-black text-white rounded-full font-nav text-[14px] font-medium transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 shadow-lg">
            View all articles
          </button>
        </div>

      </div>
    </section>
  );
};

export default Journal;