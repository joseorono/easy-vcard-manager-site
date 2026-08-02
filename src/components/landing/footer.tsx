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
    <footer className="relative overflow-hidden border-t bg-background pt-16 pb-8">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 lg:gap-12 mb-16">
          
          <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Contact2 className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">Easy vCard Manager</span>
            </Link>
            <p className="text-muted-foreground mt-2 max-w-sm leading-relaxed">
              The privacy-first contact library for professionals. Create, edit, and organize your digital business cards securely on your own device.
            </p>
          </div>

          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-foreground">Product</h4>
              <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Link href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</Link>
              <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
              <Link href="/app" className="text-muted-foreground hover:text-primary transition-colors font-medium">Open Editor &rarr;</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-foreground">Resources</h4>
              <Link href="https://github.com/joseorono/easy-vcard-manager" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">GitHub Repository</Link>
              <Link href="https://github.com/joseorono/easy-vcard-manager/issues" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Report an Issue</Link>
              <span className="text-muted-foreground/50 cursor-not-allowed">Documentation</span>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <Link href="https://github.com/joseorono/easy-vcard-manager/blob/main/LICENSE" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">MIT License</Link>
              <span className="text-muted-foreground/50 cursor-not-allowed">Privacy Policy</span>
              <span className="text-muted-foreground/50 cursor-not-allowed">Terms of Service</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} José Oroño. Open source under the MIT License.
          </p>
          
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/joseorono/easy-vcard-manager" 
              target="_blank" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <span className="sr-only">GitHub</span>
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
