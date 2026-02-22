import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: any = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 🚀 prevents page scroll to top

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setErrors({});
    setSuccess(true);

    // Reset form after success
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 blur-3xl rounded-full" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            CONTACT
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4">
            Let’s Work Together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have an idea or opportunity? I’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "mrao.developer@gmail.com",
                link: "mailto:mrao.developer@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 6304434947",
                link: "tel:+916304434947",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-6 bg-card rounded-3xl shadow-lg border border-border hover:border-primary transition-all duration-300 group"
              >
                <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="font-semibold group-hover:text-primary">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <motion.a
                href="https://github.com/Malli4947"
                target="_blank"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 bg-card rounded-2xl border border-border hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/mallikarjuna-rao-lattupalli"
                target="_blank"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 bg-card rounded-2xl border border-border hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://wa.me/916304434947"
                target="_blank"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 bg-card rounded-2xl border border-border hover:border-green-500 hover:bg-green-500/10 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-card p-8 rounded-3xl shadow-xl border border-border"
          >
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-border bg-background focus:border-primary outline-none transition-all"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-border bg-background focus:border-primary outline-none transition-all"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-border bg-background focus:border-primary outline-none transition-all"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit" variant="hero" className="w-full">
              <Send className="w-5 h-5" />
              Send Message
            </Button>

            {success && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 text-center mt-4 font-medium"
              >
                ✅ Thank you! We will get back to you shortly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;