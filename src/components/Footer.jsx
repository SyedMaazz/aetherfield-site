import React from "react";
import footerMid from "../assets/footer-mid.avif";
import footerEnd from "../assets/footer-end.svg";

const Footer = () => {
  return (
    /* Div A: Main Footer Container */
    <footer className="w-full px-2 md:px-5 py-7 flex flex-col bg-[#fff546]">
      {/* Div B: Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1.5 -translate-y-[10px]">
        {/* Div E: Navigation Links (Left Side) */}
        <div className="flex flex-wrap gap-8 md:gap-5 text-[20px] font-nav font-medium text-[#66640f]">
          <a href="#" className="hover:text-[#726f11] transition-colors">
            Product
          </a>
          <a href="#" className="hover:text-[#726f11] transition-colors">
            Journal
          </a>
          <a href="#" className="hover:text-[#726f11] transition-colors">
            About
          </a>
          <a href="#" className="hover:text-[#726f11] transition-colors">
            Careers
          </a>
          <a href="#" className="hover:text-[#726f11] transition-colors">
            Get Started
          </a>
        </div>

        {/* Div F: Copyright (Right Side) */}
        <div className="text-[20px] font-serif text-[#66640f] mt-6 md:mt-0 tracking-tight">
          © 2025 · All rights reserved
        </div>
      </div>

      {/* Div C: Middle Image Section */}
      <div className="w-full mb-5 color-[#fff546]">
        <img
          src={footerMid}
          alt="Footer Middle Graphic"
          className="w-[130%] h-[280px] object-cover opacity-100 mix-blend-multiply"
        />
      </div>

      {/* Div D: Bottom Image Section */}
      <div className="w-full">
        <img
          src={footerEnd}
          alt="Footer Logo"
          className="w-full h-[245px] -mb-2.5 object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;
