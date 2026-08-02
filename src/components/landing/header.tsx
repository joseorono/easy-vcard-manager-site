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
import { Button, buttonVariants } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Contact2 className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              Easy vCard Manager
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Features
          </Link>
          <Link href="#how-it-works" className="transition-colors hover:text-foreground/80 text-foreground/60">
            How it Works
          </Link>
          <Link href="#faq" className="transition-colors hover:text-foreground/80 text-foreground/60">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="https://github.com/joseorono/easy-vcard-manager" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="/app" className={buttonVariants()}>Open Editor</Link>
        </div>
      </div>
    </header>
  );
}
