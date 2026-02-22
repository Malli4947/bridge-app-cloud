import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  {
    icon: Briefcase,
    title: "Software Engineer",
    subtitle: "Code Facts IT Solutions Pvt. Ltd., Hyderabad, India",
    date: "Jan 2023 – Present",
    points: [
      "Engineered and deployed 8+ production-grade mobile applications using React Native, live on Play Store & App Store",
      "Designed and developed scalable RESTful APIs using Node.js & Express with secure JWT-based authentication",
      "Integrated Razorpay and Stripe payment gateways including refunds, settlements, and webhook validation",
      "Implemented Firebase Authentication, Firestore, Push Notifications (FCM), and real-time tracking features",
      "Improved backend performance by 40% through query optimization, caching strategies, and efficient schema design",
      "Led end-to-end feature development from UI implementation to backend deployment",
      "Collaborated with UI/UX, QA, and backend teams in Agile sprint cycles ensuring production stability",
      "Managed Play Store & App Store build generation, release processes, and production debugging",
    ],
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Engineering – Electronics & Communication",
    subtitle:
      "Hindusthan Institute of Technology,Coimbatore, Tamil Nadu, India",
    date: "2019 – 2023",
    points: [
      "Graduated with CGPA 8.7/10",
      "Published research paper in IJERT (IoT-based Automation System)",
      "Built strong foundation in system design, networking & software engineering",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            EXPERIENCE
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Building scalable mobile and backend systems with real-world impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-16">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-card p-10 rounded-3xl shadow-xl border border-border hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="flex items-center gap-6 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>

                <div>
                  <h3 className="font-bold text-xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-primary font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Calendar className="w-4 h-4" />
                {item.date}
              </div>

              {/* Points */}
              <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                {item.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3"
                  >
                    <span className="w-2 h-2 bg-primary mt-2 rounded-full flex-shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;