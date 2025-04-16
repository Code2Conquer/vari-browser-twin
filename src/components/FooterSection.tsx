
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-obsidian pt-16 pb-8">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your browsing experience?</h2>
          <Button className="bg-electric hover:bg-electric/80 text-white font-bold py-3 px-6 rounded-md text-lg group">
            Try Free for Chrome
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-xl font-bold text-white">The Browser, Reimagined.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">Blog</a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">Careers</a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">Docs</a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">Contact</a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm text-center mt-8">
            © {new Date().getFullYear()} Varias AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
