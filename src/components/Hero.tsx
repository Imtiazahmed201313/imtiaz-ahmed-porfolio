
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hey, I'm <span className="gradient-text">Imtiaz</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              FlutterFlow Developer | Firebase Expert | Custom Mobile App Specialist
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-lg">
            Stick around to see some of my work, where I build beautiful and functional 
            mobile applications using FlutterFlow and Firebase.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
              onClick={() => scrollToSection("#contact")}
            >
              Hire Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("#portfolio")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-blue-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                  IA
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
