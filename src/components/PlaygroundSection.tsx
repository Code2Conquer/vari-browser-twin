
import { Button } from "@/components/ui/button";
import { ArrowRight, Grid3X3 } from "lucide-react";

const CopilotCard = ({
  name,
  color
}: {
  name: string;
  color: string;
}) => {
  return <div className={`glass-card p-5 border-${color}/30 hover:border-${color}/70 transition-all hover:shadow-${color} group`}>
      <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${color}/30 to-${color}/60 mx-auto mb-4 flex items-center justify-center`}>
        <div className={`w-8 h-8 rounded-full bg-${color} animate-pulse-glow`}></div>
      </div>
      <h3 className="text-lg font-bold text-center mb-2">{name}</h3>
      <div className={`h-1 w-12 bg-${color} mx-auto rounded group-hover:w-24 transition-all duration-300`}></div>
    </div>;
};

const PlaygroundSection = () => {
  return <section className="bg-gradient-to-b from-graphite to-obsidian py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">From Copilot to Expert</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">Train your copilot to act like you—or better. They'll handle workflows, collaborate and even negotiate.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <CopilotCard name="Personal Copilot" color="neon" />
          <CopilotCard name="Sales Copilot" color="electric" />
          <CopilotCard name="Supply Chain Copilot" color="neon" />
          <CopilotCard name="More Copilots (50+)" color="electric" />
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-neon text-neon hover:bg-neon/20 group">
            Explore the Playground 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>;
};

export default PlaygroundSection;
