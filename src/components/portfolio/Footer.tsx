import { Database } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 mt-10">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
              <Database className="w-3.5 h-3.5 text-accent-foreground" />
            </div>
            <span className="font-display font-bold">Akshaya<span className="text-accent">.</span></span>
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Thummanapally Akshaya · Crafted with care
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-accent">●</span> Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
};
