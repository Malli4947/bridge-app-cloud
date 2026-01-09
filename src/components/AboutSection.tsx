import {
  CheckCircle,
  Code,
  Zap,
  Rocket,
  Users,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: CheckCircle,
    title: "6+ Production Mobile Applications",
    description: "Successfully launched on Play Store and App Store",
    color: "primary",
  },
  {
    icon: Code,
    title: "3+ Production Websites",
    description: "Live business platforms and admin dashboards",
    color: "accent",
  },
  {
    icon: Zap,
    title: "2.5+ Years of Experience",
    description: "Mobile, web, and backend engineering",
    color: "primary",
  },
  {
    icon: Target,
    title: "End-to-End Ownership",
    description: "UI development, backend APIs, and deployments",
    color: "accent",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-card py-24">
      {/* Background accents */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative rings */}
            <motion.div
              className="absolute -top-10 -left-10 h-32 w-32 rounded-full border-2 border-dashed border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border-2 border-dashed border-accent/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative space-y-6 rounded-3xl bg-background p-8 shadow-card">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group flex cursor-pointer items-center gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                      item.color === "primary"
                        ? "bg-primary/10 group-hover:bg-primary group-hover:shadow-glow"
                        : "bg-accent/10 group-hover:bg-accent"
                    }`}
                  >
                    <item.icon
                      className={`h-7 w-7 transition-colors duration-300 ${
                        item.color === "primary"
                          ? "text-primary group-hover:text-primary-foreground"
                          : "text-accent group-hover:text-accent-foreground"
                      }`}
                    />
                  </motion.div>

                  <div>
                    <p className="font-bold text-foreground transition-colors group-hover:text-primary">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                {[
                  { icon: Rocket, value: "Fast", label: "Delivery" },
                  { icon: Users, value: "Agile", label: "Collaboration" },
                  { icon: Target, value: "High", label: "Ownership" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="mx-auto mb-1 h-5 w-5 text-primary" />
                    <p className="text-sm font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: About content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary"
              >
                ABOUT ME
              </motion.span>

              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                Designing Solutions,{" "}
                <span className="text-gradient">Not Just Code</span>
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I’m a Software Engineer based in Hyderabad, specializing in
              building end-to-end digital products across mobile, web, and
              backend systems. Over the past 2.5+ years at Code Facts IT
              Solutions, I have designed, developed, and delivered multiple
              production-grade applications used in real-world environments.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              My expertise includes mobile app development with React Native
              and Flutter, backend API development using Node.js and .NET, and
              building web modules for admin and business workflows. I regularly
              integrate secure payment gateways such as Razorpay and Stripe,
              implement real-time features using Firebase and geolocation
              services, and focus strongly on performance, reliability, and
              scalability.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 p-6"
            >
              <p className="font-medium italic text-foreground">
                “I view engineering as the bridge between intuitive user
                experiences and reliable backend systems. My goal is to build
                products that feel seamless to users, remain robust behind the
                scenes, and scale confidently as they grow.”
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 font-semibold text-foreground"
            >
              <span className="h-0.5 w-8 bg-primary" />
              Driven to build scalable, high-impact software solutions.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
