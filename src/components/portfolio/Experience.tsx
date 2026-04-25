import { Briefcase, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const points = [
  "Processed large-scale structured & unstructured datasets",
  "Performed data cleaning, transformation, and validation",
  "Worked extensively in distributed environments (PySpark/Databricks) and worked with Azure-based data platforms (Databricks, ADLS Gen2) to support data processing and analytics workflows",
  "Performed data ingestion, transformation, and aggregation as part of ETL pipelines ensuring data accuracy and consistency",
  "Collaborated with cross-functional teams across geographies",
  "Ensured data governance and quality standards across pipelines",
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-5 max-w-6xl">
        <SectionHeading
          eyebrow="03 — Experience"
          title={<>Where I've made an <span className="text-gradient-accent">impact</span></>}
        />

        <div className="mt-16 relative">
          {/* timeline rail */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0" />

          <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
            {/* date side */}
            <div className="md:text-right md:pr-12 order-2 md:order-1 hidden md:block">
              <div className="sticky top-32">
                <p className="font-mono text-sm text-accent mb-2">Jul 2024 — Jan 2026</p>
                <p className="font-display text-2xl font-bold">Wipro India Pvt Ltd</p>
                <p className="text-sm text-muted-foreground">Senior Associate</p>
              </div>
            </div>

            {/* timeline dot */}
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-accent shadow-glow-accent ring-4 ring-background" />

            {/* card side */}
            <div className="pl-8 md:pl-12 order-1 md:order-2">
              <div className="glass-strong rounded-3xl p-8 hover:shadow-glow-accent transition-shadow duration-500">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">Senior Associate</h3>
                    <p className="text-accent font-medium">Wipro India Pvt Ltd</p>
                    <p className="md:hidden text-sm text-muted-foreground font-mono mt-1">Jul 2024 — Jan 2026</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
