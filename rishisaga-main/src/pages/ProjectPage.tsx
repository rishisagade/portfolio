import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import unityProjectImage from "@/assets/unity-project.png";
const ProjectPage = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Project Header */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <p className="text-accent font-semibold tracking-wide uppercase mb-4">
              UI/UX design
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Unity: An Agentic Browser
            </h1>
            <p className="text-xl text-muted-foreground">
              An agentic browser that supports SaaS workflows
            </p>
          </div>
        </section>

        {/* Project Image */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="rounded-xl overflow-hidden border border-border">
              <img alt="Unity: An Agentic Browser - Project Overview" className="w-full h-auto" src="/lovable-uploads/5728bf70-b425-4a1b-ba7b-64ce3be04359.webp" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>;
};
export default ProjectPage;