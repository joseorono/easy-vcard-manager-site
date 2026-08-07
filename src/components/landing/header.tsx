import Link from "next/link";
import { Contact2 } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/50 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-[0_0_15px_-3px_var(--primary)] group-hover:shadow-[0_0_25px_-3px_var(--primary)]">
              <Contact2 className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
              Easy vCard Manager
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#features" className="transition-colors hover:text-primary text-foreground/70">
            Features
          </Link>
          <Link href="#how-it-works" className="transition-colors hover:text-primary text-foreground/70">
            Workflow
          </Link>
          <Link href="#faq" className="transition-colors hover:text-primary text-foreground/70">
            FAQ
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/joseorono/easy-vcard-manager" 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link 
            href="/app" 
            className={cn(
              buttonVariants({ size: "default" }), 
              "rounded-full px-6 font-semibold shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all"
            )}
          >
            Open Editor
          </Link>
        </div>
      </div>
    </header>
  );
}
