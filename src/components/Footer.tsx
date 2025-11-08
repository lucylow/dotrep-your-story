import { Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
              DotRep
            </h3>
            <p className="text-muted-foreground mb-4">
              The modern full-stack TypeScript framework for building production-ready applications.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Examples</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2024 DotRep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
