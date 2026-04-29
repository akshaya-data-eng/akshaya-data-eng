import { Code2, Cloud, Database, GitBranch, BarChart3, Workflow, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "SQL"],
  },
  {
    icon: Database,
    title: "Big Data",
    items: ["PySpark", "Apache Spark"],
  },
  {
    icon: Workflow,
    title: "Data Engineering",
    items: ["ETL Pipelines", "Data Warehousing", "Data Lakes"],
  },
  {
    icon: Cloud,
    title: "Cloud — Microsoft Azure",
    items: ["Databricks", "Azure Data Factory", "ADLS Gen2"],
  },
  {
    icon: ShieldCheck,
    title: "Concepts",
    items: ["Data Validation", "Data Quality", "Performance Optimization"],
  },
  {
    icon: GitBranch,
    title: "Tools",
    items: ["Git", "CI/CD", "MS Excel"],
  },
  {
    icon: BarChart3,
    title: "Visualization",
    items: ["Tableau", "Power BI"],
  },
  {
    icon: Code2,
    title: "Frontend",
    items: ["HTML", "CSS"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="container mx-auto px-5 max-w-6xl relative">
        <SectionHeading
          eyebrow="02 — Skills"
          title={<>The <span className="text-gradient-accent">stack</span> I work with</>}
          subtitle="A toolkit refined through real-world data engineering projects."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {groups.map((g, idx) => (
            <div
              key={g.title}
              className="group relative glass rounded-3xl p-6 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-accent"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <g.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="font-display font-bold text-base">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-mono rounded-full bg-secondary/80 border border-border/50 text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {i}
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
