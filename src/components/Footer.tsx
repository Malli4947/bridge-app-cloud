import { Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-foreground relative">
      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow"
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5 text-primary-foreground" />
      </motion.button>

      <div className="container mx-auto px-4 pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-background/80 text-sm"
          >
            © 2024 Mallikarjuna Rao. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-background/80 text-sm flex items-center gap-1"
          >
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.span>{" "}
            in Hyderabad
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
