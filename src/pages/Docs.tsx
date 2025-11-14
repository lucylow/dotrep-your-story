import { Link } from "react-router-dom";
import { FileText, Github, Wallet, GitBranch, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Docs = () => {
  const sections = [
    {
      title: "Getting Started",
      icon: FileText,
      items: ["Installation", "Quick Start", "Configuration"],
    },
    {
      title: "Guides",
      icon: GitBranch,
      items: ["Wallet Connect", "GitHub Integration", "Merkle Verification"],
    },
    {
      title: "API Reference",
      icon: Shield,
      items: ["API Overview", "Authentication", "Endpoints"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            DotRep
          </Link>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <a href="https://github.com/lucylow/dotrep-your-story" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-foreground">
            DotRep Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Decentralized Reputation, Powered by Polkadot — Learn how to integrate verifiable reputation into your applications
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Placeholder Notice */}
        <div className="mt-12 p-8 rounded-2xl border border-border bg-muted/30 text-center">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-foreground">
            Documentation Coming Soon
          </h3>
          <p className="text-muted-foreground">
            We're working on comprehensive guides, API references, and tutorials. Check back soon! 🚀
          </p>
        </div>
      </section>
    </div>
  );
};

export default Docs;
