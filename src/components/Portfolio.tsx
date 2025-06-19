
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "U Turn",
      subtitle: "Car Selling & Bidding App",
      description: "U Turn is a platform for selling and auctioning cars. Includes filters, chat, favorites, location-based search, and more.",
      features: ["Car Bidding System", "Location Search", "Real-time Chat", "Advanced Filters"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Afro Tango",
      subtitle: "Business Community App",
      description: "A social-network-style app for listing businesses, creating events, joining communities, and real-time messaging.",
      features: ["Business Listings", "Event Management", "Community Features", "Real-time Messaging"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Meetap",
      subtitle: "Biker Meetup App",
      description: "For motorcycle enthusiasts to create, manage, and join biking tours and squads. Includes search, filters, chatting, and notification features.",
      features: ["Tour Management", "Squad Creation", "Live Chat", "Push Notifications"],
      color: "from-blue-500 to-purple-500",
      image: "https://i.postimg.cc/FHPtW0tT/Screenshot-2025-06-19-164144.png"
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
                {project.image ? (
                  <div className="rounded-2xl overflow-hidden">
                    <img 
                      src={project.image}
                      alt={`${project.title} - ${project.subtitle}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ) : (
                  <div className={`bg-gradient-to-br ${project.color} p-8 rounded-2xl`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">{project.title}</div>
                        <div className="text-white/80">{project.subtitle}</div>
                      </div>
                    </div>
                  </div>
                )}
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

                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
