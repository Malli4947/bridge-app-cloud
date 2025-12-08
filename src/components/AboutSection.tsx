import { CheckCircle, Code, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Decorative */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full" />
            
            <div className="relative bg-background rounded-3xl p-8 shadow-card space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">6+ Production Apps</p>
                  <p className="text-sm text-muted-foreground">Shipped to Play Store & App Store</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground">2+ Years Experience</p>
                  <p className="text-sm text-muted-foreground">Building mobile & backend solutions</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Full-Stack Ownership</p>
                  <p className="text-sm text-muted-foreground">From UI to API to deployment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-semibold mb-2">ABOUT ME</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Designing Solutions, Not Just Code
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a mobile app and backend developer based in Hyderabad. Over the past 2 years 
              at Code Facts IT Solutions, I've built and shipped 6+ production-grade cross-platform 
              apps for Android and iOS.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My work involves integrating payment gateways (Razorpay, Stripe), real-time features 
              (Firebase, geolocation), and performance optimizations. I believe in writing clean, 
              modular code and delivering smooth user experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Think of me as the bridge between the app in your hand and the data in the cloud. 
              I design, develop, and deploy full-stack solutions that feel smooth, respond fast, 
              and scale easily.
            </p>

            <div className="pt-4">
              <p className="text-foreground font-semibold">
                On a mission to build software that scales and delights users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
