import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Database, LayoutDashboard, DownloadCloud, FileCode2, Smartphone, Download, UserRoundPlus } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] -z-10" />
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-sm">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                v1.4 Now with Multi-Contact Library
              </span>
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mb-6 text-balance">
              Your <span className="text-primary">offline-first</span> contact library.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-balance">
              Create, edit, organize, and export vCard (.vcf) files securely in your browser. 
              No accounts, no uploads, no cloud tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/app" className={buttonVariants({ size: "lg", className: "h-12 px-8 text-base font-semibold rounded-full" })}>
                Open Editor <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="https://github.com/joseorono/easy-vcard-manager" className={buttonVariants({ size: "lg", variant: "outline", className: "h-12 px-8 text-base font-semibold rounded-full" })}>
                View on GitHub
              </Link>
            </div>
            
            <div className="mt-16 md:mt-24 w-full max-w-6xl relative mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-xl blur-xl opacity-50"></div>
              <div className="relative rounded-xl border bg-background/50 backdrop-blur-sm p-2 shadow-2xl overflow-hidden ring-1 ring-border/50">
                <Image 
                  src="/captures/desktop.png" 
                  alt="Easy vCard Manager Desktop Interface" 
                  width={1920} 
                  height={1080}
                  className="rounded-lg w-full h-auto object-cover border"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRIVACY STRIP */}
        <section className="border-y bg-muted/30 py-8">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm md:text-base font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              100% Offline
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              No accounts required
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              No cloud tracking
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Open Source (MIT)
            </div>
          </div>
        </section>

        {/* CORE FEATURES */}
        <section id="features" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need, directly on your device</h2>
              <p className="text-lg text-muted-foreground">
                Built for professionals, developers, and privacy advocates who need a robust tool to manage contact files without sacrificing data ownership.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-background/50 border-muted-foreground/20">
                <CardHeader>
                  <Database className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Robust Contacts Library</CardTitle>
                  <CardDescription>
                    Store and manage hundreds of contacts offline using IndexedDB. Effortlessly search, filter, and organize your connections with zero server latency.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-background/50 border-muted-foreground/20">
                <CardHeader>
                  <LayoutDashboard className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Interactive Editor & Live Preview</CardTitle>
                  <CardDescription>
                    An intuitive form-based interface to build out contact details with an instant visual and code-level preview of your vCard.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-background/50 border-muted-foreground/20">
                <CardHeader>
                  <FileCode2 className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Multi-Version Support</CardTitle>
                  <CardDescription>
                    Full compatibility with legacy and modern vCard standards (versions 2.1, 3.0, and 4.0). We never drop your data.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-background/50 border-muted-foreground/20">
                <CardHeader>
                  <DownloadCloud className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Import & Export Flexibility</CardTitle>
                  <CardDescription>
                    Drag & drop .vcf files to load them instantly. Export as single/multi .vcf, downloadable images, or scan-ready QR codes.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-background/50 border-muted-foreground/20">
                <CardHeader>
                  <UserRoundPlus className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Rich Media Support</CardTitle>
                  <CardDescription>
                    Embed PHOTO and LOGO fields directly into the vCard using Base64 data URIs without exceeding local storage limits.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-background/50 border-muted-foreground/20">
                <CardHeader>
                  <Smartphone className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Install Anywhere</CardTitle>
                  <CardDescription>
                    Works offline as an installable Progressive Web App (PWA) on desktop and mobile. Ready to use on an airplane or an air-gapped machine.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-20 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
                  <p className="text-lg text-muted-foreground">Three simple steps to manage your digital contacts.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Import or start fresh</h3>
                      <p className="text-muted-foreground">Drag and drop any .vcf file into the window, paste raw vCard text, or click to start a new blank contact card.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Edit securely</h3>
                      <p className="text-muted-foreground">Fill out the structured form. Your changes are saved locally to your device immediately via IndexedDB. Your data never touches a server.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Export anywhere</h3>
                      <p className="text-muted-foreground">Download the updated .vcf, generate a scan-ready QR code, or save a beautiful contact-card image to share.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex justify-center gap-6 relative">
                <div className="relative z-10 animate-fade-in-up">
                  <Image 
                    src="/captures/mobile 1.png" 
                    alt="Mobile App View" 
                    width={280} 
                    height={580}
                    className="rounded-[2rem] border-8 border-background shadow-2xl object-cover h-[500px]"
                  />
                </div>
                <div className="relative mt-16 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
                  <Image 
                    src="/captures/mobile 2.png" 
                    alt="Mobile Edit View" 
                    width={280} 
                    height={580}
                    className="rounded-[2rem] border-8 border-background shadow-2xl object-cover h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-20 md:py-32">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Everything you need to know about Easy vCard Manager.</p>
            </div>
            
            <Accordion className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium">Where does my data go?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Nowhere. Your contact data stays completely in your browser's local storage using IndexedDB. The application is a client-side architecture with no backend server to send data to. Our codebase is open source and auditable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium">Which vCard version do I need?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  We support vCard 2.1, 3.0, and 4.0. We recommend using <strong>3.0</strong> for maximum compatibility with legacy systems and most address books, and <strong>4.0</strong> for the modern spec that supports all features. The editor writes all three flawlessly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium">Will it work on my phone?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Yes! It is built as a Progressive Web App (PWA). You can install it on your mobile device straight from your browser, and it will work completely offline just like a native app.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-medium">Is it free?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Yes. Easy vCard Manager is 100% free, MIT-licensed open-source software. There are no accounts, no subscriptions, and no advertisements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-medium">What is a VCF file?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  A VCF (Virtual Contact File) or vCard is a standard file format for electronic business cards. They are often attached to e-mail messages or used to import and export contacts from address books on mobile phones, Outlook, and Google Contacts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="border-t py-20 md:py-32 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to take control of your contacts?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Start editing and managing your vCard files instantly. No signup required.
            </p>
            <Link href="/app" className={buttonVariants({ size: "lg", variant: "secondary", className: "h-14 px-10 text-lg font-bold rounded-full text-primary hover:bg-secondary/90" })}>
              Launch App <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
