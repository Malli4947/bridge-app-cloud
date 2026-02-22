import {
  CheckCircle,
  Code,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: CheckCircle,
    title: "8+ Production Applications",
    description: "Published on Play Store & App Store",
  },
  {
    icon: Code,
    title: "3+ Years Experience",
    description: "Full-Stack React Development",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Optimized, scalable & production-ready systems",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateX: 4 }}
                className="p-6 bg-card rounded-3xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              ABOUT ME
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
              Full-Stack React Developer Building{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Scalable Digital Products
              </span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I’m a Full-Stack React Developer with 3+ years of experience 
              building high-performance mobile and web applications using 
              React Native and React.js (TypeScript). I specialize in designing 
              modern React architectures with reusable component systems, 
              scalable state management, and performance-optimized UI rendering.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My expertise includes advanced React patterns (Hooks, Context API, 
              Redux), performance tuning through memoization and lazy loading, 
              and building secure RESTful APIs using Node.js and Express. 
              I’ve integrated complex payment workflows with Razorpay and Stripe, 
              implemented real-time features using Firebase Authentication, 
              Firestore, and Cloud Messaging, and delivered production-grade 
              applications with smooth CI/CD release pipelines.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I have successfully delivered 8+ production mobile applications 
              published on the Google Play Store and Apple App Store, along with 
              multiple live web platforms and admin dashboards. I focus on clean 
              code, scalable architecture, maintainability, and building 
              products that provide seamless user experiences while remaining 
              robust behind the scenes.
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl border border-primary/20"
            >
              <p className="italic text-foreground font-medium">
                “I don’t just build applications — I engineer reliable, 
                scalable systems that solve real-world problems and 
                deliver measurable impact.”
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;