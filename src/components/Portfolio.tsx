
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const projects = [
    {
      title: "U Turn",
      subtitle: "Car Selling & Bidding App",
      description: "U Turn is a platform for selling and auctioning cars. Includes filters, chat, favorites, location-based search, and more.",
      features: ["Car Bidding System", "Location Search", "Real-time Chat", "Advanced Filters"],
      color: "from-red-500 to-orange-500",
      image: "https://i.postimg.cc/0yjN0hFt/Navy-Blue-Modern-Business-Facebook-Cover-5.png",
      developmentTime: "3-4 months",
      budget: "$15,000 - $20,000",
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    },
    {
      title: "Afro Tango",
      subtitle: "Business Community App",
      description: "A social-network-style app for listing businesses, creating events, joining communities, and real-time messaging.",
      features: ["Business Listings", "Event Management", "Community Features", "Real-time Messaging"],
      color: "from-green-500 to-teal-500",
      image: "https://i.postimg.cc/ZKc9c8Rq/Navy-Blue-Modern-Business-Facebook-Cover-6.png",
      developmentTime: "4-5 months",
      budget: "$18,000 - $25,000",
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    },
    {
      title: "Meetap",
      subtitle: "Biker Meetup App",
      description: "For motorcycle enthusiasts to create, manage, and join biking tours and squads. Includes search, filters, chatting, and notification features.",
      features: ["Tour Management", "Squad Creation", "Live Chat", "Push Notifications"],
      color: "from-blue-500 to-purple-500",
      image: "https://i.postimg.cc/FHPtW0tT/Screenshot-2025-06-19-164144.png",
      developmentTime: "2-3 months",
      budget: "$12,000 - $18,000",
      youtubeVideo: "https://www.youtube.com/embed/Pa39sE3Ps2M"
    },
    {
      title: "Stations World",
      subtitle: "Join a wide range of Groups and Events",
      description: "Stations World is a dynamic social app that lets users create and join groups, host events, and chat live with others. With real-time notifications, subscription options, and powerful tools to manage group and event members, Stations World makes building strong social connections easy and organized.",
      features: ["Create and Join Groups", "Host Events", "Live Chat", "Subscription", "Push Notifications", "Social Integrations"],
      color: "from-purple-500 to-pink-500",
      image: "https://i.postimg.cc/R0XzFTvj/Navy-Blue-Modern-Business-Facebook-Cover-8.png",
      developmentTime: "4-5 months",
      budget: "$20,000 - $28,000",
      video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    }
  ];

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
            <div
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Visual */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div 
                  className="rounded-2xl overflow-hidden h-80 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setExpandedImage(project.image)}
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

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
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
                </AlertDialog>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Image Modal */}
        {expandedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setExpandedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={() => setExpandedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img 
                src={expandedImage}
                alt="Expanded portfolio image"
                className="w-full h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
