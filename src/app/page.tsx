"use client";

import * as React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookingModal } from "@/components/booking-modal";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function LandingPage() {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [year, setYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <div className="min-h-screen selection:bg-primary/30 flex flex-col items-center bg-black overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between w-full">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="h-8 w-8 md:h-9 md:w-9 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800">
              <span className="font-headline font-bold text-primary text-base md:text-lg">J</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-headline font-bold text-xs md:text-sm tracking-wide">Julian</span>
              <div className="flex items-center gap-1.5">
                <Badge variant="secondary" className="h-4 px-1.5 text-[8px] md:text-[9px] gap-1 bg-sky-500/10 text-sky-400 border-sky-500/20">
                  <Star className="h-2 w-2 fill-current" />
                  Verified by PoutReach
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button size="sm" onClick={() => setIsBookingOpen(true)} className="gap-2 text-xs font-bold bg-white text-black hover:bg-zinc-200 px-4 md:px-6">
              Book Call
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] md:min-h-[75vh] flex items-center pt-16 md:pt-20 overflow-hidden border-b border-zinc-900 bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-zinc-950/75 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-20" />
        </div>

        <div className="max-w-3xl mx-auto px-4 relative z-30 w-full text-center py-12 md:py-20">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] md:text-[11px] font-medium text-zinc-400 uppercase tracking-wider">Matched Profile Detected</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-headline font-black leading-[1.1] tracking-tighter mb-8 max-w-[95vw] md:max-w-3xl mx-auto text-balance">
              Your audience is already worth more. <br /> Let’s find out your brand potential.
            </h1>

            <div className="flex justify-center mb-10 w-full">
              <Button size="lg" onClick={() => setIsBookingOpen(true)} className="px-10 py-7 text-sm font-bold rounded-xl bg-white text-black hover:bg-zinc-200 transition-all active:scale-95 shadow-xl shadow-white/5">
                Book Valuation Call
              </Button>
            </div>

            <p className="text-base md:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-4 mx-auto">
              We scale creator brands into businesses producing <span className="text-white font-bold">$1.2M+ in cash flow</span>. We focus on <span className="text-white font-semibold">monetization backends</span> and <span className="text-white font-semibold">systems</span>.
            </p>
            <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-medium mx-auto">
              Profit-first strategy. No pitch. Just ROI.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="w-full py-16 md:py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="max-w-3xl mb-12 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-headline font-bold mb-4 leading-[1.1] max-w-xl text-balance">
              Building Profitable <br /> Business Assets.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">We design and deploy the systems required to turn high-intent audiences into predictable revenue streams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: "High-yield offers",
                desc: "Coaching, programs, and digital products engineered for maximum margin and impact.",
                imgId: "high-ticket"
              },
              {
                title: "Scalable E-commerce",
                desc: "Product sourcing and fulfillment backends that run independently of your content schedule.",
                imgId: "ecommerce"
              },
              {
                title: "Strategic Partnerships",
                desc: "Equity-based brand partnerships that build long-term wealth, not just one-off paychecks.",
                imgId: "partnerships"
              },
              {
                title: "Automated Systems",
                desc: "CRM, sales funnels, and retention systems that stabilize your cash flow.",
                imgId: "backend"
              }
            ].map((card, i) => (
              <Card key={i} className="bg-zinc-900/30 border-zinc-800 overflow-hidden rounded-2xl group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-headline font-bold mb-2">{card.title}</h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-4 min-h-[40px]">{card.desc}</p>
                  <div className="relative h-40 md:h-48 w-full rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image
                      src={getImg(card.imgId)?.imageUrl || `https://picsum.photos/seed/${card.imgId}/800/600`}
                      alt={card.title}
                      fill
                      data-ai-hint={getImg(card.imgId)?.imageHint || card.title}
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" onClick={() => setIsBookingOpen(true)} className="w-full md:w-auto px-10 py-7 rounded-xl text-sm md:text-md font-bold bg-white text-black hover:bg-zinc-200">
              Build Your Business Roadmap
            </Button>
          </div>
        </div>
      </section>

      {/* Brands We Worked With Section */}
      <section className="w-full py-16 md:py-24 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-headline font-bold mb-4 leading-[1.1] max-w-xl text-balance">
              Measurable Business <br /> Outcomes Achieved.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">Real data from creators we've scaled into dominant market players.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { 
                name: "McGregor Fast", 
                copy: "Engineered systems for $12M in annual sales through digital fitness scaling.", 
                imgId: "mcgregor-fast" 
              },
              { 
                name: "Jason Kalambay", 
                copy: "Launched a global coaching infrastructure generating 7-figure cash flow.", 
                imgId: "jason-kalambay", 
                crop: "center" 
              },
              { 
                name: "Daniel Brea", 
                copy: "Transformed a $15k loss into a $1.2M/year business asset in 3 weeks.", 
                imgId: "daniel-brea", 
                crop: "center" 
              },
              { 
                name: "Mindvalley", 
                copy: "Added $1.2M+ in high-ticket revenue through backend optimization.", 
                imgId: "mindvalley" 
              }
            ].map((study, i) => (
              <article key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 md:p-5 group hover:border-zinc-700 transition-colors relative overflow-hidden">
                <div className="h-44 md:h-52 relative overflow-hidden rounded-xl bg-black/80 border border-zinc-800 mb-5">
                  <Image
                    src={getImg(study.imgId)?.imageUrl || `https://picsum.photos/seed/${study.imgId}/400/400`}
                    alt={study.name}
                    fill
                    data-ai-hint={getImg(study.imgId)?.imageHint || study.name}
                    className={`object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ${study.crop === 'center' ? 'object-center' : 'object-top'}`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="font-headline font-bold text-base md:text-xl text-white">{study.name}</h3>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: study.copy.replace(/\$([\d\.]+M)/g, '<span class="text-white font-bold">$$$1</span>') }} />
              </article>
            ))}
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <Button size="lg" onClick={() => setIsBookingOpen(true)} className="w-full md:w-auto px-10 py-7 rounded-xl text-sm md:text-md font-bold bg-white text-black hover:bg-zinc-200">
              Apply for a Valuation Call
            </Button>
            <p className="text-zinc-500 text-[10px] md:text-xs font-medium uppercase tracking-widest">Limited availability for Q1/Q2</p>
          </div>
        </div>
      </section>

      {/* How It Starts Section */}
      <section className="w-full py-16 md:py-24 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-zinc-900/30 border-zinc-800 rounded-2xl p-6 md:p-12 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-headline font-bold mb-4 leading-[1.1] max-w-xl text-balance">
              How This <br /> Actually Starts.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-10 max-w-2xl mx-auto md:mx-0">
              We perform a deep-dive analysis of your brand's monetization potential and deliver a clear, actionable scaling roadmap.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
              {[
                { step: "01", title: "Audit", desc: "We review your brand, audience, and current cash flow." },
                { step: "02", title: "Strategy", desc: "We map out the backend systems needed to hit $1M+." },
                { step: "03", title: "Execution", desc: "You decide if you want us to build it with you." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <span className="text-primary font-headline font-bold text-xl opacity-50">{item.step}</span>
                  <h4 className="text-sm md:text-base font-bold text-white">{item.title}</h4>
                  <p className="text-zinc-500 text-[10px] md:text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button size="lg" onClick={() => setIsBookingOpen(true)} className="px-8 py-6 rounded-xl text-sm font-bold bg-white text-black hover:bg-zinc-200">
                Book a Valuation Call
              </Button>
              <Button size="lg" variant="outline" onClick={() => setIsBookingOpen(true)} className="px-8 py-6 rounded-xl text-sm font-bold border-zinc-800 bg-zinc-900/30 text-white hover:bg-zinc-900/60">
                Claim Strategy Session
              </Button>
            </div>
          </Card>
          
          <footer className="mt-12 pt-8 border-t border-zinc-900 text-zinc-600 text-[10px] uppercase tracking-widest font-bold w-full text-center">
            © {year || '2026'} Julian. Profit-Focused Business Scaling.
          </footer>
        </div>
      </section>

      {/* Modals */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
