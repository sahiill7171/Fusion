import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, User, Settings, HelpCircle, LogOut, Pencil, Plus, ImageIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Floating UI Cards */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute left-[5%] top-[25%] hidden lg:block animate-float"
      >
        <FloatingProfileCard />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-[5%] top-[20%] hidden lg:block animate-float-delayed"
      >
        <FloatingAddProfileCard />
      </motion.div>

      {/* Cursor Tags */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute left-[35%] top-[45%] hidden lg:block"
      >
        <CursorTag name="Andrea" color="lime" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute right-[35%] top-[20%] hidden lg:block"
      >
        <CursorTag name="Bryan" color="red" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">$7.5M seed round raised</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-medium text-center leading-tight mb-6"
        >
          Impactful design,
          <br />
          <span className="text-muted-foreground">created effortlessly</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-10"
        >
          Design tools shouldn't slow you down. Fusion combines powerful features 
          with an intuitive interface that keeps you in your creative flow.
        </motion.p>

        {/* Email Signup */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="flex items-center gap-2 p-2 rounded-full bg-secondary border border-border max-w-md w-full">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6">
              Sign Up
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FloatingProfileCard = () => (
  <div className="glass-card p-4 w-72 shadow-2xl">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
        <User className="w-5 h-5 text-muted-foreground" />
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">Tammy Park</p>
        <p className="text-xs text-muted-foreground">@tamp</p>
      </div>
    </div>
    
    <Button className="w-full mb-4 bg-primary text-primary-foreground hover:bg-primary/90">
      <Plus className="w-4 h-4 mr-2" />
      Add profile
    </Button>
    
    <div className="space-y-1">
      <MenuItem icon={<Pencil className="w-4 h-4" />} label="Edit profiles" />
      <MenuItem icon={<Settings className="w-4 h-4" />} label="App settings" />
      <MenuItem icon={<User className="w-4 h-4" />} label="Account" />
      <MenuItem icon={<HelpCircle className="w-4 h-4" />} label="Help" />
      <MenuItem icon={<LogOut className="w-4 h-4" />} label="Log out" />
    </div>
    
    <div className="mt-3 text-[10px] text-primary text-center">310 × 439</div>
  </div>
);

const MenuItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
    <span className="text-muted-foreground">{icon}</span>
    <span className="text-sm text-muted-foreground">{label}</span>
  </div>
);

const FloatingAddProfileCard = () => (
  <div className="glass-card p-5 w-80 shadow-2xl border-primary/30">
    <h3 className="text-lg font-medium text-foreground mb-4">Add profile</h3>
    
    <div className="flex gap-2 mb-4">
      <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center">
        <ImageIcon className="w-6 h-6 text-muted-foreground" />
      </div>
      <Button variant="outline" className="flex-1 border-border text-muted-foreground">
        <ImageIcon className="w-4 h-4 mr-2" />
        Upload image
      </Button>
    </div>
    
    <Input 
      placeholder="Profile name" 
      className="mb-4 bg-muted border-border text-foreground placeholder:text-muted-foreground"
    />
    
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-5 rounded-full bg-muted" />
      <span className="text-sm text-muted-foreground">Kid's profile</span>
    </div>
    
    <p className="text-xs text-muted-foreground mb-4">
      A profile with curated content and features, and a simplified user interface.
    </p>
    
    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
      Save
    </Button>
    
    <div className="mt-3 text-[10px] text-primary text-center">432 × 564</div>
  </div>
);

const CursorTag = ({ name, color }: { name: string; color: "lime" | "red" }) => (
  <div className="flex items-center gap-1 animate-pulse-glow">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transform -rotate-12">
      <path 
        d="M1 1L6 14L8 8L14 6L1 1Z" 
        fill={color === "lime" ? "hsl(73, 100%, 50%)" : "#ef4444"} 
        stroke={color === "lime" ? "hsl(73, 100%, 50%)" : "#ef4444"}
        strokeWidth="1.5"
      />
    </svg>
    <span 
      className={`text-xs px-2 py-1 rounded-full ${
        color === "lime" ? "bg-primary text-primary-foreground" : "bg-red-500 text-white"
      }`}
    >
      {name}
    </span>
  </div>
);

export default Hero;
