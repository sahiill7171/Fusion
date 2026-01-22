import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Layers className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">Fusion</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Home
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#integrations" className="text-muted-foreground hover:text-foreground transition-colors">
              Integrations
            </a>
            <a href="#faqs" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQs
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="text-foreground hover:bg-secondary border border-transparent transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_hsl(73,100%,50%,0.5),inset_0_0_10px_hsl(73,100%,50%,0.1)]"
            >
              Log In
            </Button>
            <Button 
              variant="outline" 
              className="border-border text-foreground transition-all duration-300 hover:border-primary hover:bg-secondary hover:shadow-[0_0_15px_hsl(73,100%,50%,0.5),inset_0_0_10px_hsl(73,100%,50%,0.1)]"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
