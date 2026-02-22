import { Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import resume from "@/assets/Malli_Resume.pdf";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ PERFECT SCROLL FUNCTION (with navbar offset)
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navbarHeight = 80; // adjust if needed
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: sectionTop - navbarHeight,
      behavior: "smooth",
    });

    setIsOpen(false); // close mobile menu
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20">

        {/* Logo */}
        <button
          onClick={() => handleScrollTo("home")}
          className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
        >
          Mallikarjuna Rao
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}

          <a href={resume} download="Mallikarjuna_Rao_Resume.pdf">
            <Button size="sm" variant="hero">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border shadow-lg"
          >
            <div className="flex flex-col p-6 gap-6">

              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}

              <a
                href={resume}
                download="Mallikarjuna_Rao_Resume.pdf"
                className="mt-4"
              >
                <Button size="sm" variant="hero" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;