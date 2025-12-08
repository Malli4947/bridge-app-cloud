import { ArrowDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-40 left-1/4 w-4 h-4 bg-primary rounded-full animate-float" />
      <div className="absolute bottom-40 right-1/4 w-6 h-6 bg-accent rounded-full animate-float-delayed" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-semibold tracking-wide">
                👋 Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                Lattupalli
                <br />
                <span className="text-gradient">Mallikarjuna Rao</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground">
                React Native & Node.js Full-Stack Developer
              </h2>
            </div>

            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              I build scalable cross-platform mobile apps connected to robust APIs — 
              shipping products from idea to Play Store & App Store.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowDown className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg">
                <Play className="w-5 h-5" />
                Watch Intro
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">2+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">6+</p>
                <p className="text-sm text-muted-foreground">Apps Shipped</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">App Reliability</p>
              </div>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96 bg-primary/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 lg:w-80 lg:h-80 bg-primary/30 rounded-full" />
            
            {/* Profile Image */}
            <div className="relative z-10">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-card shadow-card">
                <img
                  src={profilePhoto}
                  alt="Mallikarjuna Rao - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -right-4 top-1/4 bg-card shadow-card rounded-2xl p-4 animate-float">
                <p className="text-2xl font-bold text-primary">2+</p>
                <p className="text-xs text-muted-foreground">Years<br />Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
