
import {
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
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

interface ProjectModalProps {
  project: Project;
}

const ProjectModal = ({ project }: ProjectModalProps) => {
  return (
    <AlertDialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <AlertDialogHeader>
        <AlertDialogTitle className="text-2xl font-bold">
          {project.title}
        </AlertDialogTitle>
        <AlertDialogDescription className="text-lg text-primary">
          {project.subtitle}
        </AlertDialogDescription>
      </AlertDialogHeader>
      
      <div className="space-y-6">
        {/* Project Video */}
        <div className="rounded-lg overflow-hidden">
          {project.youtubeVideo ? (
            <div style={{position:'relative', paddingBottom:'56.25%', height:0, overflow:'hidden'}}>
              <iframe 
                src={`${project.youtubeVideo}?autoplay=1`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
              />
            </div>
          ) : (
            <video 
              controls 
              autoPlay
              className="w-full h-48 object-cover"
              poster={project.image}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Key Features</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Development Time</h4>
            <p className="text-sm text-muted-foreground">{project.developmentTime}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Budget Range</h4>
            <p className="text-sm text-muted-foreground">{project.budget}</p>
          </div>
        </div>
      </div>

      <AlertDialogFooter>
        <AlertDialogAction>Close</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default ProjectModal;
