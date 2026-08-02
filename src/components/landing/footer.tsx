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

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 bg-muted/40">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Contact2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Easy vCard Manager</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Built by José Oroño. Open source under the MIT License.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="https://github.com/joseorono/easy-vcard-manager" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="sr-only">GitHub</span>
            <GithubIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
