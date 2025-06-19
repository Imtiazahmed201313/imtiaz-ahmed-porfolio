
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
                <h3 className="text-xl font-semibold mb-2 text-primary">Educational Background</h3>
                <p className="text-muted-foreground">
                  Currently learning at ostad.app
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Platforms</h3>
                <div className="flex flex-wrap gap-3">
                  {["Fiverr", "Upwork", "LinkedIn"].map((platform) => (
                    <span
                      key={platform}
                      className="px-4 py-2 bg-card border border-border rounded-lg text-sm"
                    >
                      {platform}
                    </span>
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
