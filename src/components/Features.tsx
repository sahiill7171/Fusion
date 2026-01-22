import { motion } from "framer-motion";
import { Sparkles, Users, MousePointer, Keyboard, Library, Code, Workflow, RefreshCw, LayoutGrid, Search, Ruler } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">
            Where power meets simplicity
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Feature Card - Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1 glass-card p-8"
          >
            <div className="flex -space-x-3 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-muted to-secondary border-2 border-card flex items-center justify-center"
                >
                  <Users className="w-5 h-5 text-muted-foreground" />
                </div>
              ))}
            </div>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Real-time Collaboration
            </h3>
            <p className="text-muted-foreground">
              Work together seamlessly with conflict-free team editing
            </p>
          </motion.div>

          {/* Feature Card - Prototyping */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-2 mb-6 text-primary text-2xl font-bold">
              <MousePointer className="w-8 h-8" />
              <span>We've achieved</span>
            </div>
            <div className="text-4xl font-bold text-foreground mb-4">
              <span className="text-primary">incredible</span> growth
            </div>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Interactive Prototyping
            </h3>
            <p className="text-muted-foreground">
              Engage your clients with prototypes that react to user actions
            </p>
          </motion.div>

          {/* Feature Card - Keyboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex gap-2 mb-6">
              <kbd className="keyboard-key px-3 py-2 rounded-lg bg-muted text-foreground text-sm font-mono border border-border transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_hsl(73,100%,50%,0.5),inset_0_0_10px_hsl(73,100%,50%,0.1)]">
                shift
              </kbd>
              <kbd className="keyboard-key px-3 py-2 rounded-lg bg-muted text-foreground text-sm font-mono border border-border transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_hsl(73,100%,50%,0.5),inset_0_0_10px_hsl(73,100%,50%,0.1)]">
                alt
              </kbd>
              <kbd className="keyboard-key px-3 py-2 rounded-lg bg-muted text-foreground text-sm font-mono border border-border transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_hsl(73,100%,50%,0.5),inset_0_0_10px_hsl(73,100%,50%,0.1)]">
                C
              </kbd>
            </div>
            <h3 className="text-xl font-medium text-foreground mb-2">
              Keyboard Quick Actions
            </h3>
            <p className="text-muted-foreground">
              Powerful commands to help you create designs more quickly
            </p>
          </motion.div>
        </div>

        {/* Feature Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {featureTags.map((tag, index) => (
            <div 
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border hover:bg-muted transition-colors cursor-pointer"
            >
              <tag.icon className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">{tag.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const featureTags = [
  { icon: Library, label: "Asset Library" },
  { icon: Code, label: "Code Preview" },
  { icon: Workflow, label: "Flow Mode" },
  { icon: RefreshCw, label: "Smart Sync" },
  { icon: LayoutGrid, label: "Auto Layout" },
  { icon: Search, label: "Fast Search" },
  { icon: Ruler, label: "Smart Guides" },
];

export default Features;
