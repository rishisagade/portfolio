import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "unity-agentic-browser",
    title: "Unity: An Agentic Browser",
    category: "UI/UX design",
    description: "An agentic browser that supports SaaS workflows",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  },
  {
    id: "healthify-app",
    title: "Healthify App",
    category: "Mobile Application",
    description: "A health and wellness tracking app that helps users maintain their fitness goals with personalized insights.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
  },
  {
    id: "ecommerce-redesign",
    title: "E-Commerce Redesign",
    category: "UI/UX Design",
    description: "Complete redesign of an e-commerce platform focusing on conversion optimization and user experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  },
  {
    id: "saas-landing",
    title: "SaaS Landing Page",
    category: "Web Design",
    description: "Modern, conversion-focused landing page design for a B2B SaaS product with compelling visuals.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-wide uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to={project.id === "unity-agentic-browser" ? `/project/${project.id}` : "#"}
              className="group block border border-border rounded-xl overflow-hidden bg-card hover:border-accent/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video relative overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-accent font-medium mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="p-2 rounded-full border border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
