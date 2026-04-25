import { Workflow, Database, Sparkles, ShieldCheck, Cloud, LineChart } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Workflow, title: "Data Pipeline Development", desc: "End-to-end pipelines that move and transform data reliably at scale." },
  { icon: Database, title: "ETL Process Design", desc: "Robust ETL workflows tailored to your sources, targets, and SLAs." },
  { icon: Sparkles, title: "Data Cleaning & Transformation", desc: "Turning raw, messy data into clean, analysis-ready datasets." },
  { icon: ShieldCheck, title: "Data Validation & QA", desc: "Quality checks, governance, and validation built into every pipeline." },
  { icon: Cloud, title: "Azure Data Engineering", desc: "Solutions on Databricks, ADF, and ADLS Gen2 with cloud-native best practices." },
  { icon: LineChart, title: "Analysis & Reporting Support", desc: "Helping teams unlock insights via Power BI and Tableau dashboards." },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-5 max-w-6xl">
        <SectionHeading
          eyebrow="05 — Services"
          title={<>How I can <span className="text-gradient-accent">help you</span></>}
          subtitle="Engineering services that turn data into a competitive advantage."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative p-7 rounded-3xl glass hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <s.icon className="w-7 h-7 text-accent mb-5" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
