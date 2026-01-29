import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-linear-to-b from-[#D4E8FF] via-[#EAF4FF] to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-[64px] lg:text-[100px] leading-none font-medium font-serif text-slate-900 tracking-tight">
            Sustainability insights, <br />
            built for business
          </h1>
          
          <p className="mt-8 text-lg lg:text-xl text-slate-700 max-w-2xl leading-relaxed font-sans">
            Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
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
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-t-[40px] border-t border-x border-slate-200 shadow-2xl p-10 min-h-125">
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-slate-900 font-sans">Good morning, Acme Inc</h2>
              <p className="text-slate-500 font-sans">Your daily impact metrics are ready to review.</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;