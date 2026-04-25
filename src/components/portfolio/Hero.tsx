import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/akshaya-portrait.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* decorative grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* glowing blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 mx-auto px-5 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-muted-foreground">Available for opportunities</span>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-sm text-accent flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Hello, I'm
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Thummanapally
                <br />
                <span className="text-gradient-accent">Akshaya</span>
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-base md:text-lg text-muted-foreground font-mono">
                <span className="px-3 py-1 rounded-full bg-secondary/60 text-foreground">Data Engineer</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent" /> Hyderabad, India
                </span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Specializing in <span className="text-foreground font-medium">scalable data pipelines</span>, ETL processes, and cloud-based data solutions on Azure.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-border/50">
              <div>
                <div className="font-display text-3xl font-bold text-gradient-accent">1+</div>
                <div className="text-xs text-muted-foreground font-mono mt-1">Years Exp.</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-gradient-accent">5+</div>
                <div className="text-xs text-muted-foreground font-mono mt-1">Certifications</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-gradient-accent">20%</div>
                <div className="text-xs text-muted-foreground font-mono mt-1">Perf. Boost</div>
              </div>
            </div>
          </div>

          {/* Right portrait */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated blob bg */}
              <div className="absolute inset-0 -m-8 bg-gradient-accent opacity-30 blur-2xl animate-blob" />
              <div className="absolute inset-0 -m-4 bg-accent/20 animate-blob" style={{ animationDelay: "1s" }} />

              {/* Portrait container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden glass-strong shadow-elegant animate-float">
                <img
                  src={portrait}
                  alt="Thummanapally Akshaya - Data Engineer"
                  width={768}
                  height={896}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -left-8 glass-strong rounded-2xl px-4 py-3 shadow-card-elegant animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="font-mono text-xs text-muted-foreground">stack</div>
                <div className="font-display font-bold text-accent">PySpark</div>
              </div>
              <div className="absolute -bottom-4 -right-4 glass-strong rounded-2xl px-4 py-3 shadow-card-elegant animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="font-mono text-xs text-muted-foreground">cloud</div>
                <div className="font-display font-bold text-accent">Azure</div>
              </div>
              <div className="absolute top-1/2 -right-12 glass-strong rounded-2xl px-4 py-3 shadow-card-elegant animate-float hidden md:block" style={{ animationDelay: "2.5s" }}>
                <div className="font-mono text-xs text-muted-foreground">tool</div>
                <div className="font-display font-bold text-accent">Databricks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
