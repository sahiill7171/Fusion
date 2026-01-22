import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const integrations = [
  { name: "Figma", description: "Figma is a collaborative interface design tool.", icon: "🎨" },
  { name: "Notion", description: "Notion is an all-in-one workspace for notes and docs.", icon: "📝" },
  { name: "Slack", description: "Slack is a powerful team communication platform.", icon: "💬" },
  { name: "Relume", description: "Relume is a no-code website builder and design system.", icon: "🌐" },
  { name: "Framer", description: "Framer is a professional website prototyping tool.", icon: "⚡" },
  { name: "GitHub", description: "GitHub is the leading platform for code collaboration.", icon: "🐙" },
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Integrations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            Plays well with others
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fusion seamlessly connects with your favorite tools, making it easy to 
            plug into any workflow and collaborate across platforms.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mt-12">
        <div className="flex animate-marquee">
          {[...integrations, ...integrations].map((integration, index) => (
            <IntegrationCard key={index} {...integration} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="relative mt-6">
        <div className="flex animate-marquee-reverse">
          {[...integrations.reverse(), ...integrations].map((integration, index) => (
            <IntegrationCard key={index} {...integration} />
          ))}
        </div>
      </div>
    </section>
  );
};

const IntegrationCard = ({ name, description, icon }: { name: string; description: string; icon: string }) => (
  <div className="glass-card p-6 min-w-[280px] mx-3 hover:border-primary/50 transition-colors">
    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-foreground mb-2">{name}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default Integrations;
