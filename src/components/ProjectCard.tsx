import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  image?: string;
}

export const ProjectCard = ({ title, description, skills, image }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-border">
      <div className="relative overflow-hidden bg-secondary/50 aspect-video">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[var(--gradient-primary)] opacity-10">
            <span className="text-4xl font-bold text-primary">{title[0]}</span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-5 h-5 text-primary" />
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary"
              className="text-xs"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
