import { ExternalLink, Smartphone,Apple,PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    name: "Techmate",
    description:
      "A full-scale service marketplace platform connecting freelancers, businesses, and consumers, built from ideation to production deployment.",
    role: "Mobile & Backend Developer",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    highlights: [
      "REST APIs for services, bookings, and payments",
      "Firebase authentication & push notifications",
      "Optimized performance using Context API & caching",
    ],
    color: "primary",
    platform: "mobile",
   links: {
      website: "https://techmateservices.in/",
      playStore: "https://play.google.com/store/apps/details?id=com.techlink",
      appStore: "https://apps.apple.com/in/app/techmate-t-link-solutions/id6753174737",
    },

  },
  {
    name: "RntOut",
    description:
      "Multi-category rental marketplace for furniture, vehicles, and real estate with real-time availability and dynamic pricing.",
    role: "Mobile Developer",
    tech: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Razorpay",
      "Google Maps API",
    ],
    highlights: [
      "Multi-transaction Razorpay payment flows",
      "Geo-fencing & distance-based pricing",
      "Improved booking accuracy by ~40%",
    ],
    color: "accent",
    platform: "mobile",
    // link: "https://rntout.com",
    links: {
      website: "https://rntout.com/",
      playStore: "https://play.google.com/store",
      appStore: "https://apps.apple.com/in/app/rntout/id6743694042",
    },

  },
  {
    name: "Gobooze",
    description:
      "On-demand liquor ordering and delivery platform with real-time tracking and secure online payments.",
    role: "Mobile Developer",
    tech: ["React Native", "Node.js", "Firebase", "Stripe"],
    highlights: [
      "Stripe payment & refund workflows",
      "Real-time order tracking using Firebase",
      "Optimized UI across multiple devices",
    ],
    color: "primary",
    platform: "mobile",
    links: {
      website: "https://gobooze.com.au/",
      playStore: "https://play.google.com/store/apps/details?id=com.goboozeuserapp",
      appStore: "https://apps.apple.com/in/app/gobooze/id6739266630",
    },

  },
  
  {
    name: "Bodegaa",
    description:
      "Hyperlocal grocery and essentials ordering platform with seamless checkout and live delivery updates.",
    role: "Mobile & Backend Developer",
    tech: ["React Native", "Node.js", "Firebase", "Razorpay"],
    highlights: [
      "Cart, checkout & order lifecycle APIs",
      "Razorpay payment integration",
      "Real-time push notifications",
    ],
    color: "accent",
    platform: "mobile",
    links: {
      website: "https://bodegaa.in/",
      playStore: "https://play.google.com/store/apps/details?id=com.bodegaa",
      appStore: "https://apps.apple.com/in/app/bodegaa/id6754384209",
    },

  },
  {
    name: "SriRudra",
    description:
      "Spiritual services booking platform enabling event scheduling, service management, and secure online payments.",
    role: "Mobile Developer",
    tech: ["React Native", ".NET", "MongoDB", "Firebase", "Razorpay"],
    highlights: [
      "Calendar-based booking workflows",
      "Secure payment & authentication modules",
      "Optimized performance for high-traffic events",
    ],
    color: "primary",
    platform: "mobile",
    // link: "https://srirudra.com",
    links: {
      website: "https://srirudra-dev.codefactstech.com/",
      playStore: "https://play.google.com/store/apps/details?id=com.sriRudra",
      appStore: "https://apps.apple.com/in/app/srirudra/id6736977526",
    },

  },
  {
    name: "First House",
    description:
      "Real estate platform for listing properties, client interaction, and real-time chat.",
    role: "Mobile Developer",
    tech: ["React (TypeScript)", ".NET", "MongoDB", "Firebase", "Swagger"],
    highlights: [
      "Property listing & inquiry modules",
      "Real-time chat & notifications",
      "Web/admin modules for listing management",
    ],
    color: "accent",
    platform: "mobile",
    // link: "",
    links: {
      website: "",
      playStore: "https://play.google.com/store/apps/details?id=com.Firsthouse",
      appStore: "https://apps.apple.com/in/app/first-house-app/id6751951958",
    },

  },
  {
    name: "GoChauffeur",
    description:
      "Ride booking and delivery platform with real-time driver tracking and trip management.",
    role: "Mobile Developer",
    tech: [".NET", "React Native", "SQL", "Firebase", "Razorpay", "Swagger"],
    highlights: [
      "Live driver tracking & trip lifecycle management",
      "Razorpay payment integration",
      "Admin APIs for partner & ride monitoring",
    ],
    color: "primary",
    platform: "mobile",
    // link: "",
    links: {
      website: "",
      playStore: "https://play.google.com/store/apps/details?id=com.varaahipspl.gochauffeur&pli=1",
      appStore: "",
    },

  },
  {
    name: "Luxorace",
    description:
      "Fashion commerce platform for sarees and traditional wear with seller onboarding and inventory management.",
    role: "Mobile Developer",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    highlights: [
      "Seller onboarding & product catalog management",
      "Inventory tracking & seller payout calculations",
      "Admin panels for approvals & sales analytics",
    ],
    color: "accent",
    platform: "mobile",
    links: {
      website: "https://ethnic-hues.com/",
      playStore: "https://play.google.com/store/apps/details?id=com.luxorace",
      appStore: "https://apps.apple.com/in/app/luxorace/id6753107382",
    },

  },
{
    name: "Garuda Gases",
    description:
      "Industrial and medical gases ordering and delivery platform with real-time tracking.",
    role: "Mobile & Backend Developer",
    tech: ["React Native", "Node.js", "Firebase", "Razorpay"],
    highlights: [
      "Order scheduling & quantity management APIs",
      "Real-time delivery tracking",
      "Optimized for low-network environments",
    ],
    color: "primary",
    platform: "mobile",
    links: {
      website: "",
      playStore: "https://play.google.com/store/apps/details?id=com.garudagas",
      appStore: "https://apps.apple.com/in/app/garuda-gases/id6753621877",
    },

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
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
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
            Projects I’ve <span className="text-gradient">Shipped</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Production-ready applications live on Play Store, App Store, and Web —
            built end-to-end from concept to deployment.
          </p>
        </motion.div>

        {/* Cards */}
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
              {/* Border */}
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
                      <Smartphone
                        className={`w-4 h-4 ${
                          project.color === "primary"
                            ? "text-primary"
                            : "text-accent"
                        }`}
                      />
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
  className="flex gap-1"
>
  {/* Play Store */}
  {project.links?.playStore && (
    <Button asChild variant="ghost" size="icon">
      <a
        href={project.links.playStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View on Play Store"
      >
        <img
          src="/icons/playstore.png"
          alt="Play Store"
          className="w-6 h-6 object-contain"
        />
      </a>
    </Button>
  )}

  {/* App Store */}
  {project.links?.appStore && (
    <Button asChild variant="ghost" size="icon">
      <a
        href={project.links.appStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View on App Store"
      >
        <img
          src="/icons/appstore.png"
          alt="App Store"
          className="w-6 h-6 object-contain"
        />
      </a>
    </Button>
  )}

  {/* Website */}
  {project.links?.website && (
    <Button asChild variant="ghost" size="icon">
      <a
        href={project.links.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Website"
      >
        <img
          src="/icons/chrome.png"
          alt="Website"
          className="w-6 h-6 object-contain"
        />
      </a>
    </Button>
  )}
</motion.div>


                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 relative">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                          project.color === "primary"
                            ? "bg-primary"
                            : "bg-accent"
                        }`}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
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
