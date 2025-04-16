
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserProfileSection from "./UserProfileSection";

const NavbarSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-obsidian/90 backdrop-blur-md shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold text-white">
            Varias<span className="text-neon">AI</span>
          </span>
          <Button className="bg-electric hover:bg-electric/80 text-white">Try Free</Button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-neon transition-colors">Features</a>
          <a href="#demo" className="text-gray-300 hover:text-neon transition-colors">Demo</a>
          <a href="#use-cases" className="text-gray-300 hover:text-neon transition-colors">Use Cases</a>
          <a href="#playground" className="text-gray-300 hover:text-neon transition-colors">Playground</a>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <UserProfileSection />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-obsidian/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-neon transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="text-gray-300 hover:text-neon transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <a 
              href="#use-cases" 
              className="text-gray-300 hover:text-neon transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </a>
            <a 
              href="#playground" 
              className="text-gray-300 hover:text-neon transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Playground
            </a>
            <Button className="bg-electric hover:bg-electric/80 text-white w-full">
              Try Free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarSection;
