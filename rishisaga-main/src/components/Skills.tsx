const skillCategories = [
  {
    title: "Design",
    skills: ["UI Design", "UX Research", "Prototyping", "Design Systems", "Interaction Design", "Visual Design"],
  },
  {
    title: "Tools",
    skills: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle", "After Effects"],
  },
  {
    title: "Development",
    skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Git", "Responsive Design"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Leadership", "Problem Solving", "Collaboration", "Time Management", "Adaptability"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-wide uppercase mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Skills & Tools
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="font-bold text-lg border-b border-border pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm border border-border rounded-lg bg-card hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
