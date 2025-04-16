
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  delay?: string;
}

const Testimonial = ({ quote, author, position, delay = "0s" }: TestimonialProps) => {
  return (
    <div className="glass-card border-electric/30 p-6 hover:shadow-electric transition-all" style={{ animationDelay: delay }}>
      <Quote className="text-electric mb-4" size={28} />
      <p className="text-gray-300 mb-6 text-lg italic">"{quote}"</p>
      <div>
        <p className="font-bold text-white">{author}</p>
        <p className="text-gray-400 text-sm">{position}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-graphite py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Trusted by Pioneers
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          See what early adopters are saying about Varias AI
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            quote="Varias AI caught an RFP I missed—saved us $200K. It's like a sixth sense."
            author="Sarah Chen"
            position="Procurement Lead"
          />
          
          <Testimonial 
            quote="I stopped tab-hopping for price comparisons. The future is here."
            author="Raj Patel"
            position="Tech Influencer"
            delay="0.2s"
          />
          
          <Testimonial 
            quote="Our dev team's PR review time dropped 50%. Magic."
            author="Diego Fernandez"
            position="Engineering Manager"
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
