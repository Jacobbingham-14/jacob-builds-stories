import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Target, Users, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    icon: Target,
    category: "Strategy & Insight",
    description: "Turning ideas into clear, actionable plans — grounded in curiosity, experimentation, and understanding what people truly need."
  },
  {
    icon: Users,
    category: "Design & Experience",
    description: "Crafting intuitive, delightful experiences that feel simple, purposeful, and focused on real human goals."
  },
  {
    icon: BarChart3,
    category: "Data & Systems",
    description: "Finding the story in the numbers — using data to guide direction and automation to bring ideas to life."
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            A blend of strategic thinking, technical understanding, and creative problem-solving.
          </p>
          <Button size="lg" variant="hero" asChild>
            <a href="/Jacob-Bingham-Resume.pdf" download>
              <Download className="mr-2" />
              Download Full Resume
            </a>
          </Button>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map(({ icon: Icon, category, description }) => (
            <Card key={category} className="border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
