import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="bg-[#f6f8fb] py-[7.3rem] px-6 flex justify-center overflow-hidden -mt-1">
      <div className="max-w-7xl w-full flex flex-col items-center text-center -translate-y-[7px]">
        
        {/* HEADING */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-[40px] font-nav font-medium text-black tracking-[-1.2px] mb-13 whitespace-nowrap"
        >
          Ready to operationalize your sustainability goals?
        </motion.h2>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="-mt-7 px-6 py-3 bg-black text-white text-sm font-medium rounded-sm flex items-center gap-2 cursor-pointer hover:bg-zinc-800 transition-all duration-300">
            <span className="w-1 h-1 bg-white rounded-full"></span>
            Request a demo
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CallToAction;