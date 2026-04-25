import { Cloud, ShieldCheck, BarChart3, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    icon: Cloud,
    title: "Azure Data Lake ETL Pipeline",
    tag: "Azure · PySpark · Databricks",
    desc: "Built scalable ETL pipelines using SQL, Python, and PySpark. Architected a data lake using Azure Databricks and ADLS Gen2 with end-to-end validation.",
    metrics: [
      { label: "Performance ↑", value: "20%" },
      { label: "Stack", value: "ADLS Gen2" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Content Moderation Analytics",
    tag: "Classification · Quality",
    desc: "Processed massive datasets and applied classification + transformation logic to ensure consistency, accuracy, and quality across moderation workflows.",
    metrics: [
      { label: "Datasets", value: "Large-scale" },
      { label: "Focus", value: "Quality" },
    ],
  },
  {
    icon: BarChart3,
    title: "Student Performance Analysis",
    tag: "SQL · Python · Insights",
    desc: "Performed end-to-end data cleaning, transformation, and aggregation to surface analytical insights on student performance patterns.",
    metrics: [
      { label: "Type", value: "Analytics" },
      { label: "Output", value: "Insights" },
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-5 max-w-6xl">
        <SectionHeading
          eyebrow="04 — Projects"
          title={<>Selected <span className="text-gradient-accent">work</span></>}
          subtitle="A glimpse into the data systems I've built and shipped."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative glass-strong rounded-3xl p-7 overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-glow-accent"
            >
              {/* hover gradient */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

              {/* number */}
              <div className="absolute top-5 right-5 font-mono text-xs text-muted-foreground/60">
                0{i + 1}
              </div>

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 shadow-glow-accent group-hover:scale-110 transition-transform duration-500">
                  <p.icon className="w-6 h-6 text-accent-foreground" />
                </div>

                <p className="font-mono text-xs text-accent mb-2">{p.tag}</p>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {p.desc}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display font-bold text-gradient-accent">{m.value}</div>
                      <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent ml-auto transition-all duration-300 group-hover:rotate-45" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
