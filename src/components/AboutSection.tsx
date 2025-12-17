import { CheckCircle, Code, Zap, Rocket, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: CheckCircle,
    title: "6+ Production Apps",
    description: "Shipped to Play Store & App Store",
    color: "primary",
  },
  {
    icon: Code,
    title: "2+ Years Experience",
    description: "Building mobile & backend solutions",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Full-Stack Ownership",
    description: "From UI to API to deployment",
    color: "primary",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-32 h-32 border-2 border-dashed border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-dashed border-accent/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative bg-background rounded-3xl p-8 shadow-card space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      item.color === "primary"
                        ? "bg-primary/10 group-hover:bg-primary group-hover:shadow-glow"
                        : "bg-accent/10 group-hover:bg-accent"
                    }`}
                  >
                    <item.icon
                      className={`w-7 h-7 transition-colors duration-300 ${
                        item.color === "primary"
                          ? "text-primary group-hover:text-primary-foreground"
                          : "text-accent group-hover:text-accent-foreground"
                      }`}
                    />
                  </motion.div>
                  <div>
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Additional Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {[
                  { icon: Rocket, value: "Fast", label: "Delivery" },
                  { icon: Users, value: "Agile", label: "Teams" },
                  { icon: Target, value: "100%", label: "Focus" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-5 h-5 mx-auto text-primary mb-1" />
                    <p className="font-bold text-foreground text-sm">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
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
                className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4"
              >
                ABOUT ME
              </motion.span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Designing Solutions,{" "}
                <span className="text-gradient">Not Just Code</span>
              </h2>
            </div>

           <p className="text-muted-foreground text-lg leading-relaxed">
  I’m a Software Engineer based in Hyderabad, specializing in building
  end-to-end digital products across mobile, web, and backend systems.
  Over the last 2+ years at Code Facts IT Solutions, I’ve designed,
  developed, and shipped 6+ production-grade applications used in
  real-world environments on Android, iOS, and the web.
</p>


           <p className="text-muted-foreground leading-relaxed">
  My work spans across mobile app development with React Native,
  backend API development using Node.js and .NET, and supporting web
  modules for admin and business workflows. I routinely integrate
  secure payment gateways like Razorpay and Stripe, implement
  real-time systems with Firebase and geolocation services, and focus
  heavily on performance, reliability, and scalability.
</p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20"
            >
            <p className="text-foreground font-medium italic">
  "I see engineering as the bridge between intuitive user experiences
  and reliable backend systems. My goal is to build products that feel
  smooth on the surface, stay solid behind the scenes, and scale
  effortlessly as they grow."
</p>

            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-foreground font-semibold flex items-center gap-2"
            >
              <span className="w-8 h-0.5 bg-primary" />
              On a mission to build software that scales and delights users.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
