import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Zap, Shield, Cpu, Globe, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="space-y-24 py-12">
      {/* Hero Section */}
      <section className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest animate-bounce">
          <Rocket className="w-3.5 h-3.5" />
          The future of AI is here
        </div>
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-tight">
          Unified API for the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient font-black">
            World&apos;s Best Models
          </span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          One interface. Every model. Zero friction. Access Claude 3, GPT-4o, Llama 3, and more through a single, premium API gateway.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <Link href="/dashboard">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold shadow-[0_0_20px_rgba(201,168,78,0.4)]">
              Get Started for Free <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold">
            View Documentation
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Ultra-Low Latency",
            description: "Distributed edge network ensures your requests reach LLMs with minimal delay.",
            icon: Zap,
            color: "text-blue-400"
          },
          {
            title: "Enterprise Grade",
            description: "SOC-2 compliant security and advanced encryption for every token sent.",
            icon: Shield,
            color: "text-green-400"
          },
          {
            title: "Model Intelligence",
            description: "Smart routing automatically selects the best model for your specific task.",
            icon: Cpu,
            color: "text-primary"
          }
        ].map((feature, i) => (
          <Card key={i} className="group hover:bg-white/5 transition-all duration-300">
            <CardHeader>
              <div className={cn("w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", feature.color)}>
                <feature.icon className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Stats Section */}
      <section className="rounded-3xl border border-white/5 bg-gradient-to-b from-secondary/50 to-background p-12 text-center space-y-12 premium-glow">
        <h2 className="text-3xl font-bold">Trusted by 10,000+ Developers Worldwide</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Requests / Day", value: "50M+" },
            { label: "Active Models", value: "150+" },
            { label: "Average Latency", value: "85ms" },
            { label: "Uptime", value: "99.99%" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-4xl font-black text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
