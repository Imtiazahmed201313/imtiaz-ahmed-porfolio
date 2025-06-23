
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import {
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  image: string;
  developmentTime: string;
  budget: string;
  video?: string;
  youtubeVideo?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onImageClick: (image: string) => void;
  onProjectSelect: (project: Project) => void;
}

const ProjectCard = ({ project, index, onImageClick, onProjectSelect }: ProjectCardProps) => {
  return (
    <div
      className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2 group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image */}
      <div 
        className="relative h-48 cursor-pointer overflow-hidden"
        onClick={() => onImageClick(project.image)}
      >
        <img 
          src={project.image}
          alt={`${project.title} - ${project.subtitle}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-1 text-foreground">{project.title}</h3>
          <p className="text-primary text-sm font-medium">{project.subtitle}</p>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="text-xs text-muted-foreground">
            <span className="font-medium">{project.developmentTime}</span>
          </div>
          
          <AlertDialogTrigger asChild>
            <Button 
              size="sm"
              variant="outline" 
              className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              onClick={() => onProjectSelect(project)}
            >
              View Details
              <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </AlertDialogTrigger>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
