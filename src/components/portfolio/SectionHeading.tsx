import { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, subtitle, align = "left" }: Props) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">{eyebrow}</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
};
