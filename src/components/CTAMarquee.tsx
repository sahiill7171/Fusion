import { Sparkles } from "lucide-react";

const CTAMarquee = () => {
  const items = Array(10).fill("Try it for free");
  
  return (
    <section className="py-8 bg-primary overflow-hidden">
      <div className="flex animate-marquee">
        {[...items, ...items].map((text, index) => (
          <div key={index} className="flex items-center min-w-fit px-8">
            <Sparkles className="w-5 h-5 text-primary-foreground mr-3" />
            <span className="text-lg font-medium text-primary-foreground whitespace-nowrap">
              {text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTAMarquee;
