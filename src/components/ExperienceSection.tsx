import { Briefcase, GraduationCap, FileText } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">EXPERIENCE</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            My Professional Journey
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Work Experience */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Mobile App Developer
                  </h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-lg">
                    Apr 2024 – Present
                  </span>
                </div>
                
                <p className="text-primary font-medium mb-4">
                  Code Facts IT Solutions Pvt Ltd, Hyderabad
                </p>

                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Developed and shipped 4+ full-scale cross-platform mobile apps on Play Store & App Store using React Native & Node.js
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Integrated Razorpay, Firebase (Auth, Firestore, Cloud Messaging), Google Maps API for payments, real-time notifications, and geolocation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Designed RESTful APIs for product listings, job postings, order management; optimized MongoDB queries for performance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Collaborated in Agile sprints with designers and backend team; ensured 100% app reliability through rigorous testing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-accent" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    B.E. in Electronics and Communication Engineering
                  </h3>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-lg">
                    2019 – 2023
                  </span>
                </div>
                
                <p className="text-accent font-medium mb-2">
                  Hindusthan Institute of Technology / Anna University
                </p>
                
                <p className="text-muted-foreground">
                  CGPA: <span className="font-semibold text-foreground">8.75/10</span>
                </p>
              </div>
            </div>
          </div>

          {/* Publication */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Research Publication
                  </h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-lg">
                    Apr 2023
                  </span>
                </div>
                
                <p className="text-primary font-medium mb-2">
                  International Journal of Engineering Research & Technology (IJERT)
                </p>
                
                <p className="text-muted-foreground italic">
                  "Design and Implementation of IoT-based Floor Cleaning Robot for Healthy Environment"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
