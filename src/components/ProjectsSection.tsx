import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Tech Mate",
    description: "Service marketplace app connecting freelancers, businesses, and consumers.",
    role: "Mobile App Developer",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    highlights: [
      "Payment flow via Razorpay",
      "Auth + notifications via Firebase",
      "Optimized with Context API and API caching",
    ],
    color: "primary",
  },
  {
    name: "RntOut",
    description: "Rental marketplace for furniture, vehicles, and real estate.",
    role: "Mobile Developer",
    tech: ["React Native", "Node.js", "MongoDB", "Google Maps", "Razorpay"],
    highlights: [
      "Multi-transaction flows with Razorpay",
      "Geo-fencing & dynamic pricing",
      "Real-time availability with Google Maps",
    ],
    color: "accent",
  },
  {
    name: "Gobooze",
    description: "Beverage delivery app with real-time tracking and inventory management.",
    role: "Full Stack Developer",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
    highlights: [
      "Real-time order tracking",
      "Inventory management system",
      "Push notification alerts",
    ],
    color: "primary",
  },
  {
    name: "Bodegaa",
    description: "E-commerce platform for local stores with seamless checkout experience.",
    role: "Mobile Developer",
    tech: ["React Native", "Express.js", "MongoDB", "Stripe"],
    highlights: [
      "Stripe payment integration",
      "Cart and wishlist features",
      "Order history and tracking",
    ],
    color: "accent",
  },
  {
    name: "SriRudra",
    description: "Religious services booking platform with calendar integration.",
    role: "Full Stack Developer",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
    highlights: [
      "Calendar-based booking system",
      "Priest availability management",
      "Notification reminders",
    ],
    color: "primary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">PORTFOLIO</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Projects I've Shipped
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Production-grade applications live on Play Store and App Store, 
            built from ideation to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20"
            >
              {/* Header */}
              <div className={`p-6 ${
                project.color === "primary" 
                  ? "bg-gradient-to-br from-primary/10 to-primary/5" 
                  : "bg-gradient-to-br from-accent/10 to-accent/5"
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <p className={`text-sm font-medium ${
                  project.color === "primary" ? "text-primary" : "text-accent"
                }`}>
                  {project.role}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        project.color === "primary" ? "bg-primary" : "bg-accent"
                      }`} />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
