import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:mallimalli4947@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Let’s Build Something <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Got an idea that needs both a mobile app and a backend API? I’d love
            to hear about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href="mailto:mallimalli4947@gmail.com"
                className="flex items-center gap-4 group p-4 bg-background rounded-2xl shadow-soft hover:shadow-card transition-all"
                whileHover={{ x: 10 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground group-hover:text-primary">
                    mallimalli4947@gmail.com
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </motion.a>

              {/* Call */}
              <motion.a
                href="tel:+916304434947"
                className="flex items-center gap-4 group p-4 bg-background rounded-2xl shadow-soft hover:shadow-card transition-all"
                whileHover={{ x: 10 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Call</p>
                  <p className="font-semibold text-foreground group-hover:text-primary">
                    +91 63044 34947
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/916304434947?text=Hi%20Mallikarjuna,%20I%20came%20across%20your%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 bg-background rounded-2xl shadow-soft hover:shadow-card transition-all"
                whileHover={{ x: 10 }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
                  <MessageCircle className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground group-hover:text-accent">
                    Chat on WhatsApp
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent" />
              </motion.a>

              {/* Location */}
              <motion.div
                className="flex items-center gap-4 p-4 bg-background rounded-2xl shadow-soft"
                whileHover={{ x: 10 }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">
                    Hyderabad, India
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
           {/* Social Links */}
<div className="pt-4">
  <p className="text-sm text-muted-foreground mb-4">
    Connect with me
  </p>
  <div className="flex gap-4 flex-wrap">
    {/* GitHub */}
    <motion.a
      href="https://github.com/Malli4947"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center shadow-soft hover:shadow-card transition-all border border-border hover:border-primary group"
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="GitHub"
    >
      <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
    </motion.a>

    {/* LinkedIn */}
    <motion.a
      href="https://www.linkedin.com/in/lattupalli-mallikarjuna-rao-59908a22a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center shadow-soft hover:shadow-card transition-all border border-border hover:border-accent group"
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="LinkedIn"
    >
      <Linkedin className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
    </motion.a>

    {/* WhatsApp */}
    <motion.a
      href="https://wa.me/916304434947"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center shadow-soft hover:shadow-card transition-all border border-border hover:border-green-500 group"
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-foreground group-hover:text-green-500 transition-colors" />
    </motion.a>

    {/* Call */}
    <motion.a
      href="tel:+916304434947"
      className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center shadow-soft hover:shadow-card transition-all border border-border hover:border-primary group"
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Call"
    >
      <Phone className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
    </motion.a>
  </div>
</div>


            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-primary/20"
            >
              <p className="font-medium mb-2">💡 Open to Opportunities</p>
              <p className="text-muted-foreground text-sm">
                Available for freelance projects and full-time roles. Let’s
                build something impactful together.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-background p-8 rounded-3xl shadow-soft"
          >
            {["name", "email"].map((field) => (
              <motion.div key={field} className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === field || formData[field as keyof typeof formData]
                      ? "-top-2.5 text-xs bg-background px-2 text-primary font-medium"
                      : "top-3.5 text-muted-foreground"
                  }`}
                >
                  {field === "name" ? "Your Name" : "Your Email"}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  value={formData[field as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  onFocus={() => setFocusedField(field)}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3.5 border-2 rounded-xl bg-transparent focus:border-primary"
                  required
                />
              </motion.div>
            ))}

            <motion.div className="relative">
              <label className={`absolute left-4 transition-all ${
                focusedField === "message" || formData.message
                  ? "-top-2.5 text-xs bg-background px-2 text-primary font-medium"
                  : "top-3.5 text-muted-foreground"
              }`}>
                Your Message
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3.5 border-2 rounded-xl bg-transparent focus:border-primary resize-none"
                required
              />
            </motion.div>

            <Button variant="hero" size="lg" type="submit" className="w-full">
              <Send className="w-5 h-5" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
