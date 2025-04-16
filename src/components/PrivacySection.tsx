
import { Lock } from "lucide-react";

const PrivacySection = () => {
  return (
    <section className="bg-obsidian py-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              No Cloud, No Compromise
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Your data never leaves your browser. Disable on any site. GDPR-ready.
              We believe privacy is a fundamental right, not a feature.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-neon/20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-neon font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-300">Local processing keeps your data on your device</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-neon/20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-neon font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-300">One-click disable on sensitive sites like banking</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-neon/20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-neon font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-300">Export or delete your data anytime with one click</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 bg-neon/5 rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-12 bg-graphite rounded-full flex items-center justify-center">
                <Lock className="w-24 h-24 text-neon" />
              </div>
              
              <div className="absolute -right-4 top-1/4 w-48 h-12 glass-card border-neon/30 flex items-center justify-center text-neon text-sm animate-float">
                Process Locally
              </div>
              
              <div className="absolute -left-4 bottom-1/4 w-48 h-12 glass-card border-neon/30 flex items-center justify-center text-neon text-sm animate-float" style={{ animationDelay: "1s" }}>
                GDPR Compliant
              </div>
              
              <div className="absolute top-0 left-1/4 w-48 h-12 glass-card border-electric/30 flex items-center justify-center text-electric text-sm animate-float" style={{ animationDelay: "2s" }}>
                Opt-Out Controls
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
