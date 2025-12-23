const About = () => {
  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent font-semibold tracking-wide uppercase mb-4">
            About Me
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Designing with purpose, building with passion.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 5 years of experience in product design, I specialize in creating 
                intuitive user interfaces that solve real problems. My approach combines 
                user research, strategic thinking, and pixel-perfect execution.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've had the privilege of working with startups and established companies alike, 
                helping them transform complex ideas into elegant, user-friendly experiences.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-bold text-xl mb-2">Design Philosophy</h3>
                <p className="text-muted-foreground">
                  Every pixel matters. I believe in creating designs that are not just 
                  beautiful, but also accessible, functional, and delightful to use.
                </p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h3 className="font-bold text-xl mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  Great products are built by great teams. I thrive in collaborative 
                  environments where ideas flow freely and everyone's voice matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
