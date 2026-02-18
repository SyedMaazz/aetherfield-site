import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/logo.svg";
// 1. Import Hugeicons
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "#" },
    { name: "Journal", href: "#" },
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-transparent backdrop-blur-md py-4"
          : "bg-transparent py-4"
      }`}
    >
      <div className="w-full px-2">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="mt-1 ml-3">
            <a href="/">
              <img
                src={logoImg}
                alt="Aetherfield"
                className="h-5 w-30 object-contain block" 
              />
            </a>
          </div>

          {/* Right Side Group */}
          <div className="hidden md:flex items-start gap-5 mt-0.5 mr-4">
            <div className="flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-nav text-[16px] font-medium text-black hover:text-slate-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="font-nav text-[16px] font-medium text-black flex items-center gap-0.5 "
            >
              Get started
              {/* 2. Use the Hugeicon component here */}
              <HugeiconsIcon 
                icon={ArrowRight02Icon} 
                size={18} 
                color="currentColor" 
                strokeWidth={2}
                className="mt-0.5"
              />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden pr-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="md:hidden bg-white px-6 py-6 flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-900"
              >
                {link.name}
              </a>
            ))}
           <a href="#" className="font-nav text-sm font-medium text-slate-900 flex items-center gap-1">
              Get started
              <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;