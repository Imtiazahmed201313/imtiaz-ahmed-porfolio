
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
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      {/* Project Visual */}
      <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
        <div 
          className="rounded-2xl overflow-hidden h-80 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => onImageClick(project.image)}
        >
          <img 
            src={project.image}
            alt={`${project.title} - ${project.subtitle}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Project Info */}
      <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
        <div>
          <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
          <p className="text-primary text-lg">{project.subtitle}</p>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div>
          <h4 className="font-semibold mb-3">Key Features:</h4>
          <div className="grid grid-cols-2 gap-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <AlertDialogTrigger asChild>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => onProjectSelect(project)}
          >
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </AlertDialogTrigger>
      </div>
    </div>
  );
};

export default ProjectCard;
