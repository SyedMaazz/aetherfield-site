import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="bg-white py-32 px-6 flex justify-center items-center border-t border-zinc-100">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* HEADING: Using your font-nav for the bold, clean look */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[40px] md:text-[56px] font-nav font-medium text-black leading-[1.1] tracking-tighter mb-10"
        >
          Ready to turn your data <br /> into climate action?
        </motion.h2>

        {/* BUTTON: Using font-nav to match the navigation/action style */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="px-10 py-4 bg-black text-white font-nav text-[15px] font-medium rounded-full hover:bg-zinc-800 transition-all duration-300 transform hover:scale-[1.02]">
            Get started for free
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CallToAction;