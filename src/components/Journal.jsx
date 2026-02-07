import React from "react";
import { motion } from "framer-motion";

// Asset Imports
import journalLogo from "../assets/aetherfield-journal.svg"; 
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
      title: <>Sustainability Isn't a Side Project: Making Impact Operational</>,
    },
    {
      img: article3,
      category: "Insights",
      time: "6 min",
      title: <>Inside the Aetherfield Model: How We Turn Data Into Action</>,
    },
  ];

  return (
    <section className="bg-white ml-1 px-6 relative">
      <div className="max-w-[615px] mx-auto relative">
        
        {/* 1. THE TILTED BADGE */}
        <div className="absolute -left-70 top-3 select-none pointer-events-none hidden lg:block z-10">
          <img 
            src={journalLogo} 
            alt="Journal Logo" 
            className="w-[400px] h-[160px] rotate-[-11deg]" 
          />
        </div>

        {/* 2. HEADER */}
        <div className="flex justify-center">
          <h2 className="text-[40px] font-nav font-medium text-black tracking-tight">
            From the journal
          </h2>
        </div>

        {/* 3. ARTICLES LIST */}
        <div className="border-t border-zinc-200 mt-7.5 -ml-1">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              /* CHANGED: x: 8 moves the row to the RIGHT on hover */
              whileHover={{ x: 8 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="group flex flex-row items-start gap-4 py-6 border-b border-zinc-200 cursor-pointer"
            >
              {/* Image Container */}
              <div className="w-[165px] h-[100px] shrink-0">
                <img 
                  src={article.img} 
                  alt="article thumbnail" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1">
                <h3 className="text-[20px] font-nav font-medium text-black leading-5.5 -mt-0.5 group-hover:text-zinc-600 transition-colors mb-0.5 tracking-normal">
                  {article.title}
                </h3>
                
                <div className="flex items-center gap-2 text-zinc-500 font-nav text-[14px] uppercase tracking-wider">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. BUTTON */}
        <div className="flex justify-center mt-6">
           <button className="px-7 py-2.5 bg-black text-white text-sm font-medium rounded-sm flex items-center gap-2 cursor-pointer">
            View all articles
          </button>
        </div>

      </div>
    </section>
  );
};

export default Journal;