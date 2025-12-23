import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-accent font-semibold tracking-wide uppercase mb-4">
                    About Me
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                    Rishi Sagade
                  </h1>
                </div>
                
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    I'm a Product and UI/UX Designer currently pursuing M.Des (Product Design) at IIT Hyderabad. 
                    My passion lies in crafting digital experiences that blend aesthetics with functionality.
                  </p>
                  <p>
                    With a keen eye for detail and a deep understanding of user-centered design principles, 
                    I create products that not only look beautiful but also solve real problems for users.
                  </p>
                  <p>
                    I believe in the power of design to transform ideas into meaningful experiences. 
                    My approach combines research, creativity, and technical skills to deliver solutions 
                    that resonate with users and drive business outcomes.
                  </p>
                </div>

                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 font-semibold"
                  asChild
                >
                  <a href="mailto:hello@rishisagade.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Get in Touch
                  </a>
                </Button>
              </div>
              
              {/* Right Image */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop"
                    alt="Rishi Sagade"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sketches/Personal Works Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-accent font-semibold tracking-wide uppercase mb-4">
                Personal Works
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Sketches & Articles
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article Cards */}
              {[
                {
                  title: "The Future of Design Systems",
                  type: "Article",
                  date: "Dec 2024",
                },
                {
                  title: "Exploring User Research Methods",
                  type: "Article",
                  date: "Nov 2024",
                },
                {
                  title: "Concept Sketches Collection",
                  type: "Sketches",
                  date: "Oct 2024",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group p-6 border border-border rounded-xl bg-card hover:border-accent/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-video rounded-lg bg-secondary mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Preview Coming Soon</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-accent font-medium uppercase tracking-wide">
                      {item.type}
                    </span>
                    <span className="text-xs text-muted-foreground">• {item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors flex items-center gap-2">
                    {item.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
