import { 
  Smartphone, 
  Server, 
  Database, 
  CreditCard, 
  GitBranch, 
  Layout 
} from "lucide-react";

const skills = [
  {
    category: "Mobile / Frontend",
    icon: Smartphone,
    items: ["React Native", "Styled Components", "Context API", "Redux"],
    color: "primary",
  },
  {
    category: "Backend / APIs",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL (Learning)"],
    color: "accent",
  },
  {
    category: "Databases & Storage",
    icon: Database,
    items: ["MongoDB", "SQL", "Firebase Firestore", "Cloud Storage"],
    color: "primary",
  },
  {
    category: "Payments & Integrations",
    icon: CreditCard,
    items: ["Razorpay", "Stripe", "Google Maps API", "Push Notifications"],
    color: "accent",
  },
  {
    category: "Tools & DevOps",
    icon: GitBranch,
    items: ["Git", "GitHub", "Postman", "VS Code", "App Store Deployment"],
    color: "primary",
  },
  {
    category: "Other Skills",
    icon: Layout,
    items: ["Firebase Auth", "Deep Linking", "Background Tasks", "TypeScript"],
    color: "accent",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">MY SKILLS</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern mobile applications and scalable backend services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                skill.color === "primary" ? "bg-primary/10" : "bg-accent/10"
              } group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`w-7 h-7 ${
                  skill.color === "primary" ? "text-primary" : "text-accent"
                }`} />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-3">
                {skill.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
