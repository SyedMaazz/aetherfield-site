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
          className="w-full md:w-1/2 flex flex-col items-start px-10 mt-4"
        >
          {/* Double Inverted Comma */}
          <span className="text-[65px] font-serif leading-none text-[#dbe0ec] ml-18 select-none">
            “
          </span>

          {/* Heading */}
          <h2 className="text-[32px] md:text-[40px] font-nav font-medium text-black leading-[1.0] mt-2 mb-8 ml-18 tracking-tight w-[600px]">
            We finally moved past <br />
            spreadsheets and guesswork. <br />
            Now we have real data to guide <br />
            real decisions.
          </h2>

          {/* Subtext Area */}
          <div className="flex flex-col gap-1">
            <p className="text-black font-nav font-medium text-[19px] ml-18 mt-5">
              Elliot Williams
            </p>
            <p className="text-zinc-600 font-serif text-[21px] ml-18 -mt-1 tracking-tighter">
              Head of Sustainability, Flux Materials
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonial;