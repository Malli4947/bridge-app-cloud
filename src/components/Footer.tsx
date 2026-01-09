import { Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-foreground py-8">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-glow"
        whileHover={{ y: -6, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="h-5 w-5 text-primary-foreground" />
      </motion.button>

      <div className="container mx-auto px-4 pt-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-background/80"
          >
            © {new Date().getFullYear()} Mallikarjuna Rao. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-sm text-background/80"
          >
            Crafted with
            <motion.span
              aria-hidden
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-flex"
            >
              <Heart className="h-4 w-4 fill-primary text-primary" />
            </motion.span>
            in Hyderabad
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
