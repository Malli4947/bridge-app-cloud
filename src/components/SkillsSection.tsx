import {
  Smartphone,
  Server,
  Database,
  CreditCard,
  GitBranch,
  Layout,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Mobile & Frontend Development",
    icon: Smartphone,
    items: [
      "React Native",
      "React.js",
      "TypeScript (TS / TSX)",
      "Styled Components",
      "Context API",
      "Redux",
      "Responsive UI Design",
    ],
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    category: "Backend Development & APIs",
    icon: Server,
    items: [
      
      ".Net",
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "API Documentation (Swagger)",
    ],
    color: "accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    category: "Databases & Data Management",
    icon: Database,
    items: [
      "MongoDB",
      "Firebase Firestore",
      "Data Modeling",
    ],
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    category: "Payments & Third-Party Integrations",
    icon: CreditCard,
    items: [
      "Razorpay (Payments, Refunds, Settlements)",
      "Stripe Payment Gateway",
      "Google Maps API (Geo-fencing, Tracking)",
      "Push Notifications (FCM)",
    ],
    color: "accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    category: "Tools, Version Control & Deployment",
    icon: GitBranch,
    items: [
      "Git & GitHub",
      "Postman & ThunderClient (API Testing)",
      "VS Code",
      "Play Store Deployment",
      "App Store Deployment",
    ],
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  // {
  //   category: "Mobile App Capabilities",
  //   icon: Layout,
  //   items: [
  //     "Firebase Authentication",
  //     "Deep Linking",
  //     "Background Tasks",
  //     "Real-time Data Sync",
  //     "Performance Optimization",
  //   ],
  //   color: "accent",
  //   gradient: "from-accent/20 to-accent/5",
  // },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            MY SKILLS
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern mobile applications and
            scalable backend services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-card rounded-3xl p-6 shadow-soft hover:shadow-card transition-all duration-500 border border-transparent hover:border-${skill.color}/30 overflow-hidden`}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${
                    skill.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                  } group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <skill.icon
                    className={`w-8 h-8 ${
                      skill.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {skill.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-xl hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div
                className={`absolute -bottom-10 -right-10 w-24 h-24 rounded-full ${
                  skill.color === "primary" ? "bg-primary/5" : "bg-accent/5"
                } group-hover:scale-150 transition-transform duration-500`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
