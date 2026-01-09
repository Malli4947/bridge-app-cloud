import { ArrowDown, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion,AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.png";

const roles = [
  
  "Mobile Developer", 
  "Web Developer",
  "Backend Developer",
  "MERN Stack Developer"
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-blob-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-blob-delayed-2" />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-32 left-[15%] w-4 h-4 bg-primary rounded-full"
        animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-48 right-[20%] w-6 h-6 border-2 border-accent rotate-45"
        animate={{ y: [10, -10, 10], rotate: [45, 225, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-[25%] w-3 h-3 bg-accent rounded-full"
        animate={{ y: [5, -15, 5], x: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-48 right-[30%] w-8 h-8 border-2 border-primary rounded-full"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10"
>
  <Sparkles className="h-4 w-4 text-primary" />
  <span className="text-sm font-medium text-black">
    Open to freelance projects and full-time opportunities
  </span>
</motion.div>


              <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight"
>
  Hello, I’m
  <br />
  <span className="text-gradient">
    Mallikarjuna Rao
  </span>
</motion.h1>

<p className="mt-2 text-sm text-muted-foreground">
  Lattupalli Mallikarjuna Rao
</p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-8 sm:h-10"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground">
                  {displayText}
                  <span className="animate-pulse text-primary">|</span>
                </h2>
              </motion.div>
            </motion.div>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="text-muted-foreground text-lg max-w-lg leading-relaxed"
>
I build scalable mobile and web applications backed by robust backend systems,
taking products from initial concept through development and successful
production releases on the Play Store, App Store, and web platforms.

</motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild className="group">
                <a href="#projects">
                  View My Work
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown className="w-5 h-5" />
                  </motion.span>
                </a>
              </Button>
             <Button
                variant="heroOutline"
                size="lg"
                className="group"
                onClick={() => setShowComingSoon(true)}
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Intro
              </Button>

            </motion.div>
<AnimatePresence>
  {showComingSoon && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowComingSoon(false)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="bg-card rounded-2xl p-8 shadow-2xl text-center w-[90%] max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <Play className="w-10 h-10 text-primary mx-auto mb-4" />

        <h3 className="text-2xl font-bold mb-2">
          Intro Coming Soon
        </h3>

        <p className="text-muted-foreground mb-6">
          A short introduction video is on the way. Stay tuned!
        </p>

        <Button
          variant="hero"
          className="w-full"
          onClick={() => setShowComingSoon(false)}
        >
          Got it
        </Button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
            {/* Stats */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="flex items-center gap-6 sm:gap-8 pt-4"
>
  {[
    { value: "2.5+", label: "Years Experience" },
    { value: "6+", label: "Mobile Apps Delivered" },
    { value: "3+", label: "Websites Delivered" }
  ].map((stat, index) => (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
      className="text-center"
    >
      <p className="text-2xl sm:text-3xl font-bold text-foreground">
        {stat.value}
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground">
        {stat.label}
      </p>
    </motion.div>
  ))}
</motion.div>

          </div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Orbiting Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[450px] lg:h-[450px]">
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-glow" />
              </motion.div>
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-accent rounded-full" />
              </motion.div>
            </div>

            {/* Background Rings */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96 rounded-full border-2 border-dashed border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full" />

            {/* Profile Image */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-card shadow-glow-lg gradient-border flex items-center justify-center bg-muted">
  <img
    src="/image.jpeg"
    alt="Mallikarjuna Rao – Full Stack Developer"
    className="w-full h-full object-cover object-center"
  />
</div>




  
{/* 

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -right-4 top-1/4 glass-card rounded-2xl p-4 shadow-card"
              >
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="text-2xl font-bold text-primary">2.5+</p>
                  <p className="text-xs text-muted-foreground">
                    Years
                    <br />
                    Experience
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-4 bottom-1/4 glass-card rounded-2xl p-4 shadow-card"
              >
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <p className="text-2xl font-bold text-accent">6+</p>
                  <p className="text-xs text-muted-foreground">
                    Apps
                    <br />
                    Shipped
                  </p>
                </motion.div>
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
