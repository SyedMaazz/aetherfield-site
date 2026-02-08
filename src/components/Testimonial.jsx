import React from "react";
import { motion } from "framer-motion";
import elliotImg from "../assets/elliot-williams.avif";

const Testimonial = () => {
  return (
    <section className="bg-white py-30.5 flex justify-center items-center overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center">
        
        {/* LEFT COLUMN: Image Area */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-start"
        >
          {/* You can now adjust these dimensions and -ml freely */}
          <div className="relative w-[45.8rem] h-[846px] -ml-[6.3rem] shrink-0">
            <img 
              src={elliotImg} 
              alt="Elliot Williams" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Text Area */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col items-start px-10"
        >
          {/* Double Inverted Comma */}
          <span className="text-[70px] font-serif leading-none text-zinc-200 -mb-8 -ml-2 select-none">
            “
          </span>

          {/* Heading */}
          <h2 className="text-[32px] md:text-[40px] font-nav font-medium text-black leading-tight mb-8 tracking-tight">
            We finally moved past spreadsheets and guesswork. Now we have real data to guide real decisions.
          </h2>

          {/* Subtext Area */}
          <div className="flex flex-col gap-1">
            <p className="text-black font-nav font-bold text-[18px]">
              Elliot Williams
            </p>
            <p className="text-zinc-600 font-serif text-[16px]">
              Head of Sustainability, Flux Materials
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonial;