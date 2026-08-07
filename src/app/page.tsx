import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Database, LayoutDashboard, DownloadCloud, FileCode2, Smartphone, UserRoundPlus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Header />
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-32">
          {/* Animated Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-float opacity-70 -z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] mix-blend-screen animate-float opacity-70 -z-10" style={{ animationDelay: "3s" }} />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10" />
          
          <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
            <Badge variant="outline" className="mb-8 rounded-full px-4 py-1.5 text-sm border-primary/30 bg-primary/5 backdrop-blur-md text-primary font-medium animate-fade-in-up">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                v1.4 Now with Multi-Contact Library
              </span>
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl mb-8 text-balance animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70" style={{ animationDelay: "100ms" }}>
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 drop-shadow-sm">offline-first</span> contact library.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 text-balance animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Create, edit, organize, and export vCard (.vcf) files securely in your browser. 
              No accounts, no uploads, no cloud tracking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <Link href="/app" className={buttonVariants({ size: "lg", className: "h-14 px-8 text-lg font-semibold rounded-full shadow-[0_0_40px_-10px_var(--primary)] hover:shadow-[0_0_60px_-10px_var(--primary)] transition-all duration-300" })}>
                Open Editor <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="https://github.com/joseorono/easy-vcard-manager" className={buttonVariants({ size: "lg", variant: "outline", className: "h-14 px-8 text-lg font-semibold rounded-full border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50" })}>
                View on GitHub
              </Link>
            </div>
            
            <div className="mt-20 md:mt-28 w-full max-w-6xl relative mx-auto animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-blue-500/50 to-purple-500/50 rounded-2xl blur-2xl opacity-60 animate-glow"></div>
              <div className="relative rounded-xl border border-white/10 bg-background/40 backdrop-blur-2xl p-2 shadow-2xl overflow-hidden ring-1 ring-white/5">
                <Image 
                  src="/captures/desktop.png" 
                  alt="Easy vCard Manager Desktop Interface" 
                  width={1920} 
                  height={1080}
                  className="rounded-lg w-full h-auto object-cover border border-white/5"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRIVACY STRIP */}
        <section className="border-y border-white/5 bg-background/50 backdrop-blur-xl py-10 relative z-10 shadow-lg">
          <div id="feature-badges" className="container mx-auto px-4 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm md:text-base font-semibold text-muted-foreground/80">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10"><ShieldCheck className="h-5 w-5 text-primary" /></div>
              100% Offline Architecture
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10"><ShieldCheck className="h-5 w-5 text-primary" /></div>
              No Accounts Required
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10"><ShieldCheck className="h-5 w-5 text-primary" /></div>
              No Cloud Tracking
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10"><ShieldCheck className="h-5 w-5 text-primary" /></div>
              Open Source (MIT)
            </div>
          </div>
        </section>

        {/* CORE FEATURES */}
        <section id="features" className="py-24 md:py-36 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
          <div id="features-section" className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/10">Features</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Everything you need,<br/>directly on your device</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Built for professionals, developers, and privacy advocates who need a robust tool to manage contact files without sacrificing data ownership.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { icon: Database, title: "Robust Contacts Library", desc: "Store and manage hundreds of contacts offline using IndexedDB. Effortlessly search, filter, and organize your connections with zero server latency." },
                { icon: LayoutDashboard, title: "Interactive Editor & Preview", desc: "An intuitive form-based interface to build out contact details with an instant visual and code-level preview of your vCard." },
                { icon: FileCode2, title: "Multi-Version Support", desc: "Full compatibility with legacy and modern vCard standards (versions 2.1, 3.0, and 4.0). We never drop your data." },
                { icon: DownloadCloud, title: "Import & Export Flexibility", desc: "Drag & drop .vcf files to load them instantly. Export as single/multi .vcf, downloadable images, or scan-ready QR codes." },
                { icon: UserRoundPlus, title: "Rich Media Support", desc: "Embed PHOTO and LOGO fields directly into the vCard using Base64 data URIs without exceeding local storage limits." },
                { icon: Smartphone, title: "Install Anywhere", desc: "Works offline as an installable Progressive Web App (PWA) on desktop and mobile. Ready to use on an airplane or an air-gapped machine." }
              ].map((feature, i) => (
                <Card key={i} className="group bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 hover:bg-card/80 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="relative z-10 p-8">
                    <div className="mb-6 w-fit p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl mb-3">{feature.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground/80 leading-relaxed">
                      {feature.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24 md:py-36 relative overflow-hidden border-y border-white/5 bg-black/20">
          <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
          <div id="how-it-works-section" className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="flex-1 space-y-10">
                <div>
                  <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/10">Workflow</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">How it works</h2>
                  <p className="text-xl text-muted-foreground">Three simple steps to manage your digital contacts.</p>
                </div>
                
                <div className="space-y-10 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
                  {[
                    { step: "1", title: "Import or start fresh", desc: "Drag and drop any .vcf file into the window, paste raw vCard text, or click to start a new blank contact card." },
                    { step: "2", title: "Edit securely", desc: "Fill out the structured form. Your changes are saved locally to your device immediately via IndexedDB. Your data never touches a server." },
                    { step: "3", title: "Export anywhere", desc: "Download the updated .vcf, generate a scan-ready QR code, or save a beautiful contact-card image to share." }
                  ].map((item, i) => (
                    <div key={i} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg shadow-primary/20 z-10 font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-white/5 group-hover:border-primary/30 transition-colors ml-4 md:ml-0">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 flex justify-center gap-6 relative w-full perspective-1000">
                <div className="relative z-20 hover:z-30 transition-transform duration-500 hover:scale-105 hover:-translate-y-4">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                  <Image 
                    src="/captures/mobile 1.png" 
                    alt="Mobile App View" 
                    width={280} 
                    height={580}
                    className="relative rounded-[2.5rem] border-[10px] border-black/80 shadow-2xl object-cover h-[550px] w-auto"
                  />
                </div>
                <div className="relative mt-20 z-10 hover:z-30 transition-transform duration-500 hover:scale-105 hover:-translate-y-4">
                  <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
                  <Image 
                    src="/captures/mobile 2.png" 
                    alt="Mobile Edit View" 
                    width={280} 
                    height={580}
                    className="relative rounded-[2.5rem] border-[10px] border-black/80 shadow-2xl object-cover h-[550px] w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute -right-1/4 bottom-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/10">Support</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Everything you need to know about Easy vCard Manager.</p>
            </div>
            
            <Accordion className="w-full space-y-4">
              {[
                { q: "Where does my data go?", a: "Nowhere. Your contact data stays completely in your browser's local storage using IndexedDB. The application is a client-side architecture with no backend server to send data to. Our codebase is open source and auditable." },
                { q: "Which vCard version do I need?", a: "We support vCard 2.1, 3.0, and 4.0. We recommend using 3.0 for maximum compatibility with legacy systems and most address books, and 4.0 for the modern spec that supports all features. The editor writes all three flawlessly." },
                { q: "Will it work on my phone?", a: "Yes! It is built as a Progressive Web App (PWA). You can install it on your mobile device straight from your browser, and it will work completely offline just like a native app." },
                { q: "Is it free?", a: "Yes. Easy vCard Manager is 100% free, MIT-licensed open-source software. There are no accounts, no subscriptions, and no advertisements." },
                { q: "What is a VCF file?", a: "A VCF (Virtual Contact File) or vCard is a standard file format for electronic business cards. They are often attached to e-mail messages or used to import and export contacts from address books on mobile phones, Outlook, and Google Contacts." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-xl px-6 bg-card/30 backdrop-blur-sm data-[state=open]:bg-card/60 transition-colors">
                  <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative py-32 overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight max-w-3xl mx-auto">
              Ready to take control of your contacts?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
              Start editing and managing your vCard files instantly. Secure, offline, and completely free.
            </p>
            <Link href="/app" className={buttonVariants({ size: "lg", className: "h-16 px-12 text-xl font-bold rounded-full shadow-[0_0_40px_-10px_var(--primary)] hover:shadow-[0_0_60px_0px_var(--primary)] transition-all duration-300 scale-100 hover:scale-105" })}>
              Launch App <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
