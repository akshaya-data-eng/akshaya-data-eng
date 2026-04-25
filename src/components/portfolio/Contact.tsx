import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";

const EMAILJS_SERVICE_ID = "service_3416y7c";
const EMAILJS_TEMPLATE_ID = "template_g7pz8aw";
const EMAILJS_PUBLIC_KEY = "heUCDWZZJNvSRcKA3";

const contacts = [
  { icon: Mail, label: "Email", value: "akshayathummanapally630@gmail.com", href: "mailto:akshayathummanapally630@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 6309797400", href: "tel:+916309797400" },
  { icon: Linkedin, label: "LinkedIn", value: "akshaya-thummanapally", href: "https://linkedin.com/in/akshaya-thummanapally-9079b9301" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      toast.success("Message sent! Akshaya will get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send message. Please try again or email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-5 max-w-6xl">
        <SectionHeading
          eyebrow="07 — Contact"
          title={<>Let's build something <span className="text-gradient-accent">data-driven</span></>}
          subtitle="Have a project, a role, or just want to chat about data engineering? Drop a message."
        />

        <div className="grid lg:grid-cols-5 gap-6 mt-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 glass rounded-2xl hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <c.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{c.label}</p>
                  <p className="font-medium truncate text-sm md:text-base group-hover:text-accent transition-colors">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-3 glass-strong rounded-3xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Name</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="bg-secondary/40 border-border/60 h-12 rounded-xl"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="bg-secondary/40 border-border/60 h-12 rounded-xl"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Message</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                className="bg-secondary/40 border-border/60 rounded-xl resize-none"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : <>Send Message <Send className="ml-1" /></>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
