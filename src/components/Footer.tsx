import {
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Scroll to Top Button */}
     <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-14 h-14 rounded-full bg-primary 
                   flex items-center justify-center 
                   shadow-lg hover:shadow-primary/40 transition-all"
      >
        <ArrowUp className="w-6 h-6 text-primary-foreground" />
      </motion.button>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* LEFT - Branding */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              Mallikarjuna Rao
            </h3>
            <p className="text-sm text-background/70 leading-relaxed">
              Full-Stack React Developer building scalable,
              production-ready applications for mobile and web.
            </p>
          </div>

          {/* CENTER - Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#experience" className="hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* RIGHT - Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>

            <div className="flex justify-center md:justify-start gap-4">
              {[
                {
                  icon: Github,
                  link: "https://github.com/Malli4947",
                },
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com",
                },
                {
                  icon: Mail,
                  link: "mailto:mallimalli4947@gmail.com",
                },
                {
                  icon: Phone,
                  link: "tel:+916304434947",
                },
                {
                  icon: MessageCircle,
                  link: "https://wa.me/916304434947",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <item.icon className="w-5 h-5 text-background hover:text-primary-foreground transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-background/20 text-center text-sm text-background/60"
        >
          © {year} Mallikarjuna Rao. All rights reserved.

          <div className="mt-2 flex items-center justify-center gap-1">
            Built with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.span>
            in Hyderabad, India
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;