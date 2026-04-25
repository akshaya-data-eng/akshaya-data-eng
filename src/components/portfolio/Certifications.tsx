import { Award, Loader2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const certs = [
  { title: "Microsoft Azure Data Engineer Associate (DP-203)", issuer: "Microsoft", status: "In Progress" },
  { title: "Microsoft Azure Fundamentals (DP-900)", issuer: "Microsoft", status: "Completed" },
  { title: "Databricks Data Engineering Certification", issuer: "Simplilearn", status: "Completed" },
  { title: "PySpark for Data Engineering", issuer: "Simplilearn", status: "Completed" },
  { title: "SQL for Data Engineering", issuer: "Simplilearn", status: "Completed" },
  { title: "Python Certification", issuer: "HackerRank", status: "Completed" },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-5 max-w-6xl">
        <SectionHeading
          eyebrow="06 — Certifications"
          title={<>Continuous <span className="text-gradient-accent">learning</span></>}
        />

        <div className="grid sm:grid-cols-2 gap-4 mt-16">
          {certs.map((c) => {
            const inProgress = c.status === "In Progress";
            return (
              <div
                key={c.title}
                className="group flex items-start gap-4 p-6 rounded-2xl glass hover:border-accent/40 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${inProgress ? "bg-primary/20" : "bg-gradient-accent"}`}>
                  {inProgress ? (
                    <Loader2 className="w-5 h-5 text-primary-glow animate-spin" />
                  ) : (
                    <Award className="w-5 h-5 text-accent-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-base leading-snug group-hover:text-accent transition-colors">
                    {c.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-muted-foreground font-mono">{c.issuer}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono uppercase tracking-wider ${
                      inProgress ? "bg-primary/20 text-primary-glow" : "bg-accent/15 text-accent"
                    }`}>
                      {c.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
