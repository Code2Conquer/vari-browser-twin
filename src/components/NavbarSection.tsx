
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

const NavbarSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

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

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-obsidian/90 backdrop-blur-md shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-white">
            Varias<span className="text-neon">AI</span>
          </Link>
          <Button className="bg-electric hover:bg-electric/80 text-white">Try Free</Button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-neon transition-colors">Features</a>
          <a href="#demo" className="text-gray-300 hover:text-neon transition-colors">Demo</a>
          <a href="#use-cases" className="text-gray-300 hover:text-neon transition-colors">Use Cases</a>
          
          {isAuthenticated ? (
            <Link to="/dashboard" className="text-gray-300 hover:text-neon transition-colors">Dashboard</Link>
          ) : null}
          
          <Button 
            onClick={handleLogin}
            className="bg-neon/90 hover:bg-neon text-obsidian font-medium"
          >
            Login
          </Button>
        </nav>

        <div className="flex items-center space-x-4 md:hidden">
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost"
            onClick={handleLogin}
            className="text-neon hover:text-neon/80 hover:bg-transparent"
          >
            Login
          </Button>
          <button 
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
            
            {isAuthenticated ? (
              <Link 
                to="/dashboard" 
                className="text-gray-300 hover:text-neon transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            ) : null}
            
            <Button 
              className="bg-electric hover:bg-electric/80 text-white w-full"
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/login");
              }}
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarSection;
