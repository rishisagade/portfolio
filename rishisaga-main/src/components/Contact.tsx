import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-semibold tracking-wide uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Let's work together
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to 
            discussing new opportunities and creative ideas.
          </p>
          
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-6 text-lg font-semibold"
            asChild
          >
            <a href="mailto:hello@rishisagade.com">
              <Mail className="w-5 h-5 mr-3" />
              hello@rishisagade.com
            </a>
          </Button>
          
          <div className="flex items-center justify-center gap-4 mt-10">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
