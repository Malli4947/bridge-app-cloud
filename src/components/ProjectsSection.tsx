import { ExternalLink, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    name: "Tech Mate",
    description:
      "Service marketplace app connecting freelancers, businesses, and consumers.",
    role: "Mobile App Developer",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    highlights: [
      "Payment flow via Razorpay",
      "Auth + notifications via Firebase",
      "Optimized with Context API and API caching",
    ],
    color: "primary",
    platform: "mobile",
  },
  {
    name: "RntOut",
    description:
      "Rental marketplace for furniture, vehicles, and real estate.",
    role: "Mobile Developer",
    tech: ["React Native", "Node.js", "MongoDB", "Google Maps", "Razorpay"],
    highlights: [
      "Multi-transaction flows with Razorpay",
      "Geo-fencing & dynamic pricing",
      "Real-time availability with Google Maps",
    ],
    color: "accent",
    platform: "mobile",
  },
  {
    name: "Gobooze",
    description:
      "Beverage delivery app with real-time tracking and inventory management.",
    role: "Full Stack Developer",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
    highlights: [
      "Real-time order tracking",
      "Inventory management system",
      "Push notification alerts",
    ],
    color: "primary",
    platform: "mobile",
  },
  {
    name: "Bodegaa",
    description:
      "E-commerce platform for local stores with seamless checkout experience.",
    role: "Mobile Developer",
    tech: ["React Native", "Express.js", "MongoDB", "Stripe"],
    highlights: [
      "Stripe payment integration",
      "Cart and wishlist features",
      "Order history and tracking",
    ],
    color: "accent",
    platform: "mobile",
  },
  {
    name: "SriRudra",
    description:
      "Religious services booking platform with calendar integration.",
    role: "Full Stack Developer",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
    highlights: [
      "Calendar-based booking system",
      "Priest availability management",
      "Notification reminders",
    ],
    color: "primary",
    platform: "mobile",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Projects I've <span className="text-gradient">Shipped</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Production-grade applications live on Play Store and App Store,
            built from ideation to deployment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-background rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500"
            >
              {/* Animated Border */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  project.color === "primary"
                    ? "shadow-[inset_0_0_0_2px_hsl(var(--primary)/0.3)]"
                    : "shadow-[inset_0_0_0_2px_hsl(var(--accent)/0.3)]"
                }`}
              />

              {/* Header */}
              <div
                className={`relative p-6 ${
                  project.color === "primary"
                    ? "bg-gradient-to-br from-primary/15 via-primary/10 to-transparent"
                    : "bg-gradient-to-br from-accent/15 via-accent/10 to-transparent"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {project.platform === "mobile" ? (
                        <Smartphone
                          className={`w-4 h-4 ${
                            project.color === "primary"
                              ? "text-primary"
                              : "text-accent"
                          }`}
                        />
                      ) : (
                        <Globe
                          className={`w-4 h-4 ${
                            project.color === "primary"
                              ? "text-primary"
                              : "text-accent"
                          }`}
                        />
                      )}
                      <h3 className="text-xl font-bold text-foreground">
                        {project.name}
                      </h3>
                    </div>
                    <p
                      className={`text-sm font-medium ${
                        project.color === "primary"
                          ? "text-primary"
                          : "text-accent"
                      }`}
                    >
                      {project.role}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button variant="ghost" size="icon" className="rounded-xl">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>

                {/* Decorative Element */}
                <motion.div
                  className={`absolute bottom-0 right-0 w-24 h-24 rounded-full -mb-12 -mr-12 ${
                    project.color === "primary"
                      ? "bg-primary/10"
                      : "bg-accent/10"
                  }`}
                  animate={{
                    scale: hoveredIndex === index ? 1.5 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 relative">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={highlight}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + hIndex * 0.1 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                          project.color === "primary"
                            ? "bg-primary"
                            : "bg-accent"
                        }`}
                      />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
