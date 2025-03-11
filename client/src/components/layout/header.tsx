import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <span className="text-white text-2xl font-bold"></span>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-green-400 transition-colors text-2xl">
              About
            </a>
            <a href="#work" className="text-white hover:text-green-400 transition-colors text-2xl">
              Work
            </a>
            <a href="#contact" className="text-white hover:text-green-400 transition-colors text-2xl">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}