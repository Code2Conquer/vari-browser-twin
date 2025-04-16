
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
      
      {/* Floating animation elements */}
      <div className="absolute -right-20 top-1/4 w-72 h-72 bg-electric/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute -left-20 top-2/4 w-96 h-96 bg-neon/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white">
          Your Browser, Now <span className="text-neon">Autonomous</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-3xl mb-10 text-gray-300">
          Varias AI is the proactive copilot that automates tasks, surfaces hidden opportunities, 
          and evolves into AI agents that work for you.
        </p>
        
        <div className="w-72 h-72 mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-electric to-neon opacity-20 rounded-full animate-pulse-glow"></div>
          <div className="absolute inset-4 bg-graphite rounded-full overflow-hidden flex items-center justify-center">
            <div className="w-4/5 h-4/5 border border-neon/30 rounded-xl bg-obsidian/80 flex flex-col shadow-neon animate-float" style={{ animationDuration: "4s" }}>
              <div className="h-6 bg-graphite/50 flex items-center px-3">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-grow p-3 text-left text-xs">
                <div className="h-3 w-3/4 bg-neon/20 rounded mb-2"></div>
                <div className="h-3 w-1/2 bg-neon/20 rounded mb-2"></div>
                <div className="h-3 w-2/3 bg-neon/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        <Button className="bg-electric hover:bg-electric/80 text-white font-bold py-6 px-8 rounded-md text-lg group">
          Try Free for Chrome
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
