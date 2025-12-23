import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 opacity-0 animate-fade-in-up">
          <p className="text-muted-foreground text-lg tracking-wide uppercase">
            Hello! I am
          </p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
            Rishi Sagade
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Currently, M.Des (Product Design) at IIT Hyderabad
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 font-semibold"
              asChild
            >
              <a href="#projects">
                <ArrowDown className="w-4 h-4 mr-2" />
                View Work
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-semibold border-border hover:bg-secondary"
              asChild
            >
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
