import { Brain, Shield, UserCog } from "lucide-react";
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const FeatureCard = ({
  icon,
  title,
  description
}: FeatureCardProps) => {
  return <div className="feature-card hover:scale-105">
      <div className="flex items-center justify-center w-14 h-14 mb-6 bg-obsidian rounded-lg text-neon">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>;
};
const FeaturesSection = () => {
  return <section className="bg-obsidian py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Why It's Not Just Another Extension</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Varias AI is fundamentally different - it's an evolving digital twin that works for you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard icon={<Brain size={32} />} title="Auto-Detect & Act" description="Flags RFPs, compares prices, drafts emails—before you ask. Works with your favorite tools like GitHub, Slack, and Salesforce." />
          
          <FeatureCard icon={<UserCog size={32} />} title="Your Digital Twin" description="Agents learn from your habits to book, negotiate, and optimize your workflows, becoming more autonomous over time." />
          
          <FeatureCard icon={<Shield size={32} />} title="Privacy by Default" description="Processes data locally. Opt out of sites with one click. Your data never leaves your browser without permission." />
        </div>
      </div>
    </section>;
};
export default FeaturesSection;