import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Fever Dreams",
    description: "AI-powered dream interpretation app that helps users understand their subconscious through personalized insights and pattern recognition.",
    skills: ["Product Strategy", "AI/ML", "UX Design", "User Research"]
  },
  {
    title: "Adminify",
    description: "Streamlined administrative platform reducing operational overhead for small teams through intelligent automation and workflow optimization.",
    skills: ["Product Management", "SaaS", "Analytics", "Automation"]
  },
  {
    title: "Squak",
    description: "Social communication platform fostering authentic connections through voice-first interactions and community-driven features.",
    skills: ["Community Building", "Mobile UX", "Growth Strategy", "A/B Testing"]
  },
  {
    title: "Recall AI",
    description: "Memory enhancement tool leveraging spaced repetition and AI to help users retain and retrieve important information efficiently.",
    skills: ["AI Integration", "Learning Science", "Data Analysis", "MVP Development"]
  },
  {
    title: "Focus Challenge",
    description: "Gamified productivity app that helps users build sustainable focus habits through behavioral psychology and social accountability.",
    skills: ["Behavioral Design", "Gamification", "User Engagement", "Product Analytics"]
  },
  {
    title: "Innovation Lab Projects",
    description: "Cross-functional initiatives exploring emerging technologies and validating new product opportunities through rapid experimentation.",
    skills: ["Innovation Strategy", "Prototyping", "Market Research", "Stakeholder Management"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to launch — exploring how I approach product challenges, validate ideas, and deliver value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
