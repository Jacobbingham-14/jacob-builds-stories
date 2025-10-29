import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Fever Dreams",
    description: "An AI image-generation party game that makes creativity social. I built it to explore how technology can amplify imagination and bring people together.",
    role: "Concept, UX flow, PRD creation, AI model research and integration planning.",
    skills: ["Product Strategy", "UX Design", "AI/ML Integration", "User Engagement"]
  },
  {
    title: "Squak",
    description: "An outdoor apparel company redefining comfort and adventure through sustainable design. As Market Research & Product Intern, I helped shape new product lines, analyze pricing, and optimize Amazon listings.",
    impact: "Sourced 20+ suppliers, refined product copy, and contributed to the brand's online relaunch.",
    skills: ["Market Research", "Product Development", "E-commerce Strategy", "Communication"]
  },
  {
    title: "Side Projects",
    description: "A collection of creative experiments — from a 1-on-1 challenge app to custom automation agents built with n8n. These projects keep me learning, building, and experimenting with how technology can empower people.",
    skills: ["Prototyping", "Automation", "Creativity", "Rapid Experimentation"]
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
            A glimpse into what I've been building — creative experiments and problem-solving adventures that reflect how I think and what drives me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
