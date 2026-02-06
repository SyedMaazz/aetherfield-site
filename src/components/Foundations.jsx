import React from "react";
import { motion } from "framer-motion";
import foundationsImg from "../assets/foundations-bg.avif";

const Foundations = () => {
  return (
    <section className="bg-white py-28 overflow-hidden flex justify-center items-center">
      {/* 1. THE MAIN CARD: Added 'relative' and 'left-[]' to control horizontal movement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        /* CHANGE THE VALUE BELOW:
           - Use left-[50px] to move RIGHT
           - Use -left-[50px] to move LEFT
        */
        className="relative w-[980px] h-[320px] bg-[#f6f8fb] backdrop-blur-md rounded-[15px] overflow-hidden flex flex-row items-center pl-5 gap-10"
      >
        {/* 2. THE IMAGE: Fixed 550px x 290px */}
        <div className="w-[500px] h-[280px] shrink-0">
          <div className="w-full h-full rounded-[8px] overflow-hidden">
            <img
              src={foundationsImg}
              alt="Acme Inc Case Study"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3. THE CONTENT AREA: Fixed Width (420px) */}
        <div className="w-[420px] flex flex-col items-start text-left">
          <h2 className="text-[20px] font-nav font-medium text-black leading-tight mb-3.5 -pt-2 tracking-tight">
            Why Acme Inc chose Aetherfield
            <br />
          </h2>

          <p className="text-black font-serif text-[20px] mb-8 -tracking-[0.03rem] leading-[1.2]">
            With fragmented data and growing reporting pressure, Acme turned to
            Aetherfield to streamline their ESG workflows. The result? Faster
            decisions, fewer spreadsheets, and 34% more coverage.
          </p>

          {/* THE BUTTON */}
          <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded-sm flex items-center gap-2 cursor-pointer">
            Read case study
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Foundations;
