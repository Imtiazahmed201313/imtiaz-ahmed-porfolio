import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onImageClick: (image: string) => void;
  onProjectSelect: (project: Project) => void;
}

const ProjectCard = ({ project, index, onImageClick, onProjectSelect }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 0; // 0 = left image, 1 = right image
  const fromLeft = isEven;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible
          ? "opacity-100 translate-x-0"
          : `opacity-0 ${fromLeft ? "-translate-x-32" : "translate-x-32"}`
      }`}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group ${
          isEven ? "" : "md:[&>div:first-child]:order-2"
        }`}
      >
        {/* Image */}
        <div
          className="relative overflow-hidden rounded-xl cursor-pointer aspect-video"
          onClick={() => onImageClick(project.image)}
        >
          <img
            src={project.image}
            alt={`${project.title} - ${project.subtitle}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-primary text-sm md:text-base font-medium">{project.subtitle}</p>
          </div>

          <p className="text-muted-foreground text-sm md:text-base line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 4).map((f) => (
              <span
                key={f}
                className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {f}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground font-medium">
              {project.developmentTime}
            </span>
            <AlertDialogTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                onClick={() => onProjectSelect(project)}
              >
                View Details
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </AlertDialogTrigger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
