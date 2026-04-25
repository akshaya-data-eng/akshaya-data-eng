import { GraduationCap, Briefcase, Database, Zap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  {
    icon: Briefcase,
    title: "Data Engineering",
    desc: "Building scalable pipelines, ETL processes, and data warehouses.",
  },
  {
    icon: Database,
    title: "Distributed Systems",
    desc: "Working with PySpark and Databricks at scale.",
  },
  {
    icon: Zap,
    title: "Performance Focus",
    desc: "Optimizing data quality and pipeline performance.",
  },
];

const education = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    school: "Teegala Krishna Reddy Engineering College",
    year: "2019 – 2023",
  },
  {
    degree: "Intermediate (MPC)",
    school: "Sri Chaitanya Junior College",
    year: "2017 – 2019",
  },
  {
    degree: "SSC",
    school: "IIT Chukka Ramaiah High School",
    year: "2016 – 2017",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-5 max-w-6xl">
        <SectionHeading
          eyebrow="01 — About"
          title={<>Crafting reliable data <span className="text-gradient-accent">infrastructure</span></>}
          subtitle="A passionate data engineer who turns raw, messy data into clean, actionable pipelines that drive decisions."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Bio + highlights */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Data Engineer with <span className="text-foreground font-semibold">1+ year of experience</span> building and optimizing data pipelines, warehouses, and lakes using <span className="text-accent font-medium">SQL, Python, and PySpark</span>. My focus is on data transformation, validation, and performance — with hands-on exposure to Microsoft Azure and modern visualization tools.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div key={h.title} className="glass rounded-2xl p-5 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                    <h.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-1">{h.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold">Education</h3>
            </div>

            <div className="space-y-5">
              {education.map((e, i) => (
                <div key={e.degree} className="relative pl-6 pb-5 last:pb-0 border-l border-border/60 last:border-l-transparent">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-accent shadow-glow-accent" />
                  <p className="font-mono text-xs text-accent mb-1">{e.year}</p>
                  <h4 className="font-display font-semibold text-base">{e.degree}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{e.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
