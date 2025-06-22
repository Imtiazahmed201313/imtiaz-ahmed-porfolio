
import { useState } from "react";
import { AlertDialog } from "@/components/ui/alert-dialog";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ImageModal from "./ImageModal";
import { projects, type Project } from "@/data/projects";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 px-4 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hand-picked <span className="gradient-text">projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            for you to see.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <AlertDialog key={project.title}>
              <ProjectCard
                project={project}
                index={index}
                onImageClick={setExpandedImage}
                onProjectSelect={setSelectedProject}
              />
              {selectedProject === project && (
                <ProjectModal project={project} />
              )}
            </AlertDialog>
          ))}
        </div>

        <ImageModal 
          imageUrl={expandedImage}
          onClose={() => setExpandedImage(null)}
        />
      </div>
    </section>
  );
};

export default Portfolio;
