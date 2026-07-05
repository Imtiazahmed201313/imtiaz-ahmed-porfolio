
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get a closer look at who 
                <span className="gradient-text"> I am</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Personal Bio</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a skilled FlutterFlow developer having great experience with Firebase backend solution. 
                  I have developed 10+ mobile apps with the help of FlutterFlow. I hold Level 2 Seller status on Fiverr.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Platforms</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    {
                      name: "FlutterFlow Marketplace",
                      href: "https://marketplace.flutterflow.io/creator/5773120c343a6d20e1f7c242c468ab5bc1f53571",
                    },
                    {
                      name: "Upwork",
                      href: "https://www.upwork.com/freelancers/~01a6b3d335fdd007f4",
                    },
                    {
                      name: "LinkedIn",
                      href: "https://www.linkedin.com/in/imtiaz-ahmed-3392a6275/",
                    },
                    {
                      name: "YouTube",
                      href: "https://www.youtube.com/@imtiazahmedantorr",
                    },
                  ].map((platform, index) => (
                    <a
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ animationDelay: `${index * 0.15}s` }}
                      className="relative px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:text-primary hover:border-primary/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_hsl(var(--primary)/0.35)] animate-fade-in inline-flex items-center gap-2 overflow-hidden group"
                    >
                      <span className="relative z-10">{platform.name}</span>
                      <span className="relative z-10 h-2 w-2 rounded-full bg-primary animate-pulse" />
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats/Info Cards */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
              <p className="text-muted-foreground">Mobile Apps Developed</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-primary mb-2">Level 2</h3>
              <p className="text-muted-foreground">Seller Status on Fiverr</p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
