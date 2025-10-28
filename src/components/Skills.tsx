import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Award, Target, Users, Lightbulb, BarChart3, Code } from "lucide-react";

const skillCategories = [
  {
    icon: Target,
    category: "Product Strategy",
    skills: ["Product Vision", "Roadmapping", "Competitive Analysis", "Go-to-Market Strategy"]
  },
  {
    icon: Users,
    category: "User Experience",
    skills: ["User Research", "Design Thinking", "Wireframing", "Usability Testing"]
  },
  {
    icon: BarChart3,
    category: "Data & Analytics",
    skills: ["SQL", "Product Analytics", "A/B Testing", "KPI Definition"]
  },
  {
    icon: Code,
    category: "Technical Skills",
    skills: ["API Integration", "AI/ML Concepts", "Technical Documentation", "Agile/Scrum"]
  },
  {
    icon: Lightbulb,
    category: "Innovation",
    skills: ["Ideation Workshops", "Rapid Prototyping", "MVP Development", "Market Validation"]
  }
];

const highlights = [
  { icon: Award, text: "Eagle Scout" },
  { icon: Users, text: "BYU Strategy Club Leader" },
  { icon: Lightbulb, text: "Startup Weekend Winner" },
  { icon: Target, text: "Product Certifications" }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            A blend of strategic thinking, technical understanding, and creative problem-solving.
          </p>
          <Button size="lg" variant="hero">
            <Download className="mr-2" />
            Download Full Resume
          </Button>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {skillCategories.map(({ icon: Icon, category, skills }) => (
            <Card key={category} className="border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Recognition & Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map(({ icon: Icon, text }) => (
              <Card key={text} className="border-border">
                <CardContent className="p-4 flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
