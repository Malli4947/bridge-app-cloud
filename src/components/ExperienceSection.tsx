import { Briefcase, GraduationCap, FileText, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const timelineItems = [
  {
  type: "work",
  icon: Briefcase,
  title: "Software Engineer (Mobile, Web & Backend)",
  subtitle: "Code Facts IT Solutions Pvt. Ltd., Hyderabad",
  date: "2023 – Present",
  color: "primary",
  points: [
    "Designed, developed, and deployed 6+ production-grade applications across mobile (Android & iOS) and web platforms, now live on the Play Store, App Store, and production web environments",
    "Owned end-to-end feature development across mobile apps (React Native), web applications (React.js), and backend services (Node.js, Express)",
    "Implemented responsive web interfaces and reusable UI components while ensuring cross-platform consistency between mobile and web",
    "Designed and maintained scalable backend APIs, including business logic implementation, database schema design using MongoDB, and deployment workflows",
    "Integrated payment gateways (Razorpay and Stripe), Firebase Authentication, Firestore, Cloud Messaging, deep linking, and real-time GPS tracking across mobile and web applications",
    "Developed secure, well-documented RESTful APIs following clean architecture principles, with Swagger-based API documentation",
    "Improved overall system performance by up to 40% through backend query optimization, caching strategies, and efficient API response handling",
    "Collaborated closely with UI/UX designers, QA engineers, and product managers in Agile sprints to deliver stable, scalable, and high-quality releases",
    "Actively participated in code reviews, improved application reliability, and ensured smooth release cycles across mobile, web, and backend systems",
    "Mentored junior developers, shared best practices, and enforced consistent coding standards across frontend and backend teams"
  ]
},


  {
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Engineering in Electronics and Communication Engineering",
    subtitle: "Hindusthan Institute of Technology, Anna University",
    date: "2019 – 2023",
    color: "accent",
    extra: "CGPA: 8.75 / 10"
  },

  {
    type: "publication",
    icon: FileText,
    title: "Research Publication",
    subtitle: "International Journal of Engineering Research & Technology (IJERT)",
    date: "Apr 2023",
    color: "primary",
    extra:
      "“Design and Implementation of an IoT-Based Floor Cleaning Robot for a Healthy Environment”"
  }
];


const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            EXPERIENCE
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            My Professional <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          {timelineItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <motion.div
                className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-10`}
                whileHover={{ scale: 1.2 }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-card ${
                    item.color === "primary"
                      ? "bg-gradient-to-br from-primary to-primary/80"
                      : "bg-gradient-to-br from-accent to-accent/80"
                  }`}
                >
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </motion.div>

              {/* Content Card */}
              <div
                className={`flex-1 ml-24 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-16 md:text-left" : "md:pl-16"
                }`}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-border"
                >
                  {/* Date Badge */}
                  <motion.div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
                      item.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>

                  <p
                    className={`font-medium mb-4 ${
                      item.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  >
                    {item.subtitle}
                  </p>

                  {item.points && (
                    <ul
                      className={`space-y-3 text-muted-foreground text-sm ${
                        index % 2 === 0 ? "md:text-left" : ""
                      }`}
                    >
                      {item.points.map((point, pIndex) => (
                        <motion.li
                          key={pIndex}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + pIndex * 0.1 }}
                          className={`flex items-start gap-2 ${
                            index % 2 === 0 ? "md:flex-row" : ""
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                              item.color === "primary"
                                ? "bg-primary"
                                : "bg-accent"
                            }`}
                          />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {item.extra && (
                    <p
                      className={`text-muted-foreground ${
                        item.type === "publication" ? "italic" : "font-semibold"
                      }`}
                    >
                      {item.extra}
                    </p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
