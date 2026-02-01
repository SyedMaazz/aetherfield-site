import React from "react";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    /* We use flex-col and justify-start to ensure content stays at the top but respects the spacer */

    <section className="relative flex flex-col justify-start min-h-screen bg-linear-to-b from-[#aad4fd] via-[#f6f1e2] to-white">
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
          className="mt-15 max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-t-[40px] border-t border-x border-slate-200 shadow-2xl p-10 min-h-125">
            <div className="text-left">
              {/* Updated to use your custom nav font for consistency */}

              <h2 className="text-2xl font-semibold text-slate-900 font-nav tracking-tight">
                Good morning, Acme Inc
              </h2>

              <p className="text-slate-500 font-nav">
                Your daily impact metrics are ready to review.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
