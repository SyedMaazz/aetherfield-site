import React from "react";
import { motion } from "framer-motion";
import principlesBg from "../assets/principles-section-bg-image.webp";

// 1. Import your card images
import clarityImg from "../assets/clarity-drives-action-logo.svg";
import systemsImg from "../assets/sustainability-is-a-systems-problem-logo.svg";
import progressImg from "../assets/progress-over-perfection-logo.svg";

const Principles = () => {
  const cards = [
    {
      image: clarityImg,
      title: "Clarity drives action",
      desc: "We believe better decisions start with better data—measured, visible, and trusted.",
    },
    {
      image: systemsImg,
      title: "Sustainability is a systems problem",
      desc: "We build tools that help teams connect the dots between operations, impact, and accountability.",
    },
    {
      image: progressImg,
      title: "Progress over perfection",
      desc: "We support real-world momentum—helping organizations move from ambition to measurable change.",
    },
  ];

  return (
    <section className="relative pt-29 overflow-hidden bg-white">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={principlesBg}
          alt="Section Background"
          className="w-full h-[693px] object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="md:text-[77px] leading-[1.1] text-black tracking-tight">
            <span className="font-serif font-[500] block">Built for clarity</span>

            <span className="font-nav font-light tracking-[-0.2rem] -mt-1 block">
              Designed for action
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-[32px] p-10 flex flex-col items-start min-h-[400px] border border-black/5"
            >
              {/* 2. CARD IMAGE: Placed at the top left */}
              <div className="mb-8">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <h3 className="text-[22px] font-nav font-medium text-black mb-4 leading-tight">
                {card.title}
              </h3>
              <p className="text-slate-600 font-nav leading-relaxed text-[16px]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
