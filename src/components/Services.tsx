
import { Smartphone, MessageCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Custom Mobile App Development",
      description: "I create mobile apps powered by Firebase and third-party APIs, tailored to client needs."
    },
    {
      icon: MessageCircle,
      title: "App Consultation",
      description: "Help clients plan and structure their mobile apps efficiently with FlutterFlow."
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="gradient-text">I Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mobile app development and consultation services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-6">
                <service.icon className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
