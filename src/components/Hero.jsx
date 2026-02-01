import React from "react";
import { motion } from "framer-motion";
// 1. Import your image asset here
import floatingDashboard from "../assets/floating-dashboard.png";

const Hero = () => {
  return (
    /* We use flex-col and justify-start to ensure content stays at the top but respects the spacer */
    <section className="relative flex flex-col justify-start min-h-screen bg-linear-to-b from-[#aad4fd] via-[#faf2e0] to-white">
      {/* 1. THE SPACER: This is a physical block that sits behind your navbar */}
      <div
        className="h-16 md:h-24 w-full flex-shrink-0"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-6 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mt-10" // Added a small extra margin here
        >
          {/* 2. THE FONT: Applying font-serif to your headline */}
          <h1 className="font-serif text-[64px] lg:text-[80px] leading-[1.1] font-600 text-slate-900 tracking-[-0.04em]">
            Sustainability insights,
            <br />
            <span className="block text-[32px] lg:text-[77px] font-nav font-[500] tracking-[-0.04em] -mt-2">
              built for business
            </span>
          </h1>

          <p className="mt-5 text-lg lg:text-xl text-slate-700 max-w-3xl leading-relaxed font-nav mx-auto">
            Track impact, reduce emissions, and accelerate progress—with clarity
            and confidence.
          </p>

          <div className="mt-6.5 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded-sm flex items-center gap-2">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              Request a demo
            </button>

            <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded-sm flex items-center gap-2">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              Explore the platform
            </button>
          </div>
        </motion.div>

        {/* Floating Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          /* 1. Decreased size from max-w-5xl to max-w-3xl */
          className="mt-15 max-w-[1000px] mx-auto px-4 relative z-10"
        >
          {/* 2. Added 'border-2 border-black' and kept overflow-hidden */}
          <div className="bg-white rounded-t-[40px] rounded-b-[40px] border-t-2 border-x-2 border-b-2 border-black overflow-hidden">
            <img
              src={floatingDashboard}
              alt="Aetherfield Dashboard Preview"
              className="w-full h-auto block"
            />
          </div>
        </motion.div>
        {/* The Black Separator Line */}
      </div>
    </section>
  );
};

export default Hero;
