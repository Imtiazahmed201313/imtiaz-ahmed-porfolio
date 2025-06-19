
import { Code, Database, Zap, Settings } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: "FlutterFlow",
      description: "No-code mobile app building with advanced customization and integrations"
    },
    {
      icon: Database,
      title: "Firebase",
      description: "Authentication, Firestore, Realtime Database, and Cloud Functions"
    },
    {
      icon: Zap,
      title: "Third-Party APIs",
      description: "Integration for extended app functionalities and external services"
    },
    {
      icon: Settings,
      title: "App Architecture",
      description: "Scalable and maintainable mobile application structure design"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized in modern mobile app development with cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <skill.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
