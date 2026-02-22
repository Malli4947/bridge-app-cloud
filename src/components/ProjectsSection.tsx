import {  Smartphone,
  Globe,
  Apple,
  PlayCircle, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    name: "TechMate",
    description:
      "TechMate is a large-scale service marketplace platform designed to connect businesses, OEMs, service providers, and consumers through a unified digital ecosystem. The platform enables affordable product access, employment generation, and seamless B2C & B2B interactions.",
    role: "Lead Mobile & Backend Developer",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    highlights: [
      "Architected scalable REST APIs for bookings, services & transactions",
      "Integrated secure Razorpay payment workflows with refund handling",
      "Implemented Firebase authentication, push notifications & real-time updates",
      "Optimized backend queries improving response time by 35%",
    ],
    links: {
      website: "https://techmateservices.in/",
      playStore: "https://play.google.com/store/apps/details?id=com.techlink",
      appStore:
        "https://apps.apple.com/in/app/techmate-t-link-solutions/id6753174737",
    },
  },

  {
    name: "RntOut",
    description:
      "RntOut is a multi-category rental marketplace for furniture, vehicles, and real estate with geo-fencing and dynamic pricing. The platform enables users to rent assets with real-time availability tracking.",
    role: "Full-Stack Developer",
    tech: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Google Maps API",
      "Razorpay",
    ],
    highlights: [
      "Built geo-fencing & distance-based pricing engine",
      "Designed multi-transaction payment workflows",
      "Improved booking accuracy by 40%",
      "Integrated real-time availability system",
    ],
    links: {
      website: "https://rntout.com/",
      appStore:
        "https://apps.apple.com/in/app/rntout/id6743694042",
    },
  },

  {
    name: "Gobooze",
    description:
      "Gobooze is an on-demand liquor delivery platform offering 400+ premium beverages with secure checkout, real-time order tracking, and partner delivery management.",
    role: "Mobile Application Developer",
    tech: ["React Native", "Node.js", "Firebase", "Stripe"],
    highlights: [
      "Implemented Stripe payment & refund lifecycle",
      "Built real-time delivery tracking using Firebase",
      "Developed both User & Partner delivery applications",
      "Optimized UI performance across multiple devices",
    ],
    links: {
      website: "https://gobooze.com.au/",
      playStore:
        "https://play.google.com/store/apps/details?id=com.goboozeuserapp",
      appStore:
        "https://apps.apple.com/in/app/gobooze/id6739266630",
    },
  },

  {
    name: "Bodegaa",
    description:
      "Bodegaa is a hyperlocal grocery commerce platform delivering fresh produce, daily essentials, and household products with seamless checkout and partner-based delivery operations.",
    role: "Mobile & Backend Developer",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    highlights: [
      "Developed cart & order lifecycle management APIs",
      "Integrated Razorpay secure checkout flow",
      "Implemented real-time delivery partner tracking",
      "Built separate User & Partner apps",
    ],
    links: {
      website: "https://bodegaa.in/",
      playStore:
        "https://play.google.com/store/apps/details?id=com.bodegaa",
      appStore:
        "https://apps.apple.com/in/app/bodegaa/id6754384209",
    },
  },

  {
    name: "SriRudra",
    description:
      "SriRudra is a spiritual commerce platform providing curated pooja essentials, idols, and devotional products with online ordering and secure payments.",
    role: "Mobile Developer",
    tech: ["React Native", ".NET", "MongoDB", "Firebase", "Razorpay"],
    highlights: [
      "Built calendar-based booking & product modules",
      "Implemented secure authentication & payment modules",
      "Optimized performance for high festival traffic",
    ],
    links: {
      website: "https://srirudra-dev.codefactstech.com/",
      playStore:
        "https://play.google.com/store/apps/details?id=com.sriRudra",
      appStore:
        "https://apps.apple.com/in/app/srirudra/id6736977526",
    },
  },

  {
    name: "First House",
    description:
      "Real estate discovery platform connecting buyers, sellers, and builders with verified property listings and real-time communication features.",
    role: "Mobile Developer",
    tech: ["React Native", "React (TS)", ".NET", "MongoDB", "Firebase"],
    highlights: [
      "Developed verified listing & inquiry modules",
      "Integrated real-time chat & push notifications",
      "Built admin & builder dashboard modules",
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.Firsthouse",
      appStore:
        "https://apps.apple.com/in/app/first-house-app/id6751951958",
    },
  },

  {
    name: "GoChauffeur",
    description:
      "Ride-booking and logistics delivery platform with live driver tracking, trip lifecycle management, and payment processing.",
    role: "Mobile Developer",
    tech: [".NET", "React Native", "SQL", "Firebase", "Razorpay"],
    highlights: [
      "Implemented real-time driver tracking",
      "Integrated Razorpay payment flow",
      "Built admin APIs for ride & partner management",
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.varaahipspl.gochauffeur&pli=1",
    },
  },

  {
    name: "Luxorace",
    description:
      "Fashion e-commerce platform for sarees and traditional wear with seller onboarding, inventory tracking, and payout management.",
    role: "Mobile, Backend & Seller Module Developer",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    highlights: [
      "Developed seller onboarding workflow",
      "Implemented inventory & payout calculation engine",
      "Built admin analytics dashboards",
    ],
    links: {
      website: "https://ethnic-hues.com/",
      playStore:
        "https://play.google.com/store/apps/details?id=com.luxorace",
      appStore:
        "https://apps.apple.com/in/app/luxorace/id6753107382",
    },
  },

  {
    name: "Garuda Gases",
    description:
      "Industrial and medical gases ordering platform with scheduling, quantity management, and real-time delivery updates.",
    role: "Mobile & Backend Developer",
    tech: ["React Native", "Node.js", "Firebase", "Razorpay"],
    highlights: [
      "Designed order scheduling & management APIs",
      "Implemented real-time delivery tracking",
      "Optimized for low-network environments",
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.garudagas",
      appStore:
        "https://apps.apple.com/in/app/garuda-gases/id6753621877",
    },
  },
];

const ProjectsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold">
            Real-World{" "}
            <span className="text-gradient">Production Applications</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            End-to-end engineered mobile and backend systems serving real users,
            optimized for scalability, reliability, and business impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.03 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative bg-card rounded-3xl p-8 shadow-xl border border-border transition-all duration-500 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0"
                animate={{ opacity: hovered === index ? 1 : 0 }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">{project.name}</h3>
                </div>

                <p className="text-primary text-sm font-medium mb-4">
                  {project.role}
                </p>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6 text-sm">
                  {project.highlights.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="w-2 h-2 bg-primary mt-1.5 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-muted text-xs rounded-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">
{project.links.website && (
                    <motion.a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 6 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 flex items-center justify-center rounded-2xl bg-muted border border-border transition-all duration-300 hover:shadow-xl hover:border-primary"
                    >
                      <img
                        src="/icons/chrome.png"
                        alt="Website"
                        className="w-6 h-6 object-contain"
                      />
                    </motion.a>
                  )}

                  {project.links.playStore && (
                    <motion.a
                      href={project.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 flex items-center justify-center rounded-2xl bg-muted border border-border transition-all duration-300 hover:shadow-xl hover:border-green-500"
                    >
                      <img
                        src="/icons/playstore.png"
                        alt="Play Store"
                        className="w-6 h-6 object-contain"
                      />
                    </motion.a>
                  )}


                                   {project.links.appStore && (
                    <motion.a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: -6 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 flex items-center justify-center rounded-2xl bg-muted border border-border transition-all duration-300 hover:shadow-xl hover:border-blue-500"
                    >
                      <img
                        src="/icons/appstore.png"
                        alt="App Store"
                        className="w-6 h-6 object-contain"
                      />
                    </motion.a>
                  )}

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;