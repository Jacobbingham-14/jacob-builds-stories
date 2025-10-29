import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Compass, Users, TrendingUp, Zap } from "lucide-react";

const skillCategories = [
  {
    icon: Compass,
    category: "Strategy & Vision",
    description: "Turning ideas into clarity. I've written PRDs, built roadmaps, and translated ambiguous goals into clear priorities — connecting user needs with business outcomes."
  },
  {
    icon: Users,
    category: "Customer Insight & Discovery",
    description: "Grounded in empathy and data. I've run surveys, synthesized results, and tested prototypes to uncover what people really need and validate before building."
  },
  {
    icon: TrendingUp,
    category: "Market & Growth Thinking",
    description: "Obsessed with signals over noise. I analyze markets, spot whitespace, and use insights to shape positioning, pricing, and go-to-market direction."
  },
  {
    icon: Zap,
    category: "Execution & Collaboration",
    description: "From concept to launch. I love working with cross-functional teammates to iterate fast, balance user feedback with constraints, and deliver real impact — not just outputs."
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
