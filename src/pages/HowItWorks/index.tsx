import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  CalendarRange,
  CheckCircle2,
  ChevronDown,
  Flag,
  Headset,
  LockKeyhole,
  ShieldCheck,
  Trophy,
  TrendingUp,
  User,
  UserSearch,
  Video,
  Award,
} from "lucide-react";
import { Eyebrow } from "@/components/marketing/DiamondAccent";
import { ExploreLinks } from "@/components/marketing/ExploreLinks";

const steps = [
  { icon: Flag, title: "Set your intention", desc: "Clarity precedes change. Identify what is blocking you: a stalled career, a leadership gap, a life that needs redesigning. The more specific, the better the match." },
  { icon: UserSearch, title: "Find your match", desc: "Browse coaches and mentors and filter by specialty, experience, language and price. Every profile is reviewed by our team before it goes live." },
  { icon: Video, title: "Intro call", desc: "Start with a short intro session to check the fit. You decide if the chemistry is right before committing to more." },
  { icon: CalendarRange, title: "Build a plan", desc: "Your coach or mentor works with you on a structured plan: milestones, session cadence and the outcomes you want." },
  { icon: TrendingUp, title: "Show up and grow", desc: "Attend sessions, follow through between calls and track your progress. The change compounds with consistency." },
  { icon: Trophy, title: "Celebrate outcomes", desc: "Reach milestones, revisit goals, and extend or close your engagement. You are in control at every stage." },
];

const faqs = [
  { q: "How are coaches and mentors vetted?", a: "Every coach and mentor applies with their experience, credentials and areas of expertise. Our team reviews each profile before it is published, and profiles show a Verified badge once credentials are confirmed." },
  { q: "What is the difference between coaching and mentoring?", a: "Coaches use structured frameworks to help you find your own answers. Mentors share lived experience and domain expertise to guide you. Thraivio offers both, and every profile says which." },
  { q: "How does the intro call work?", a: "Book an intro session from the coach's profile. It is a two-way conversation: you assess them as much as they learn about your goals. Prices for intro calls are shown on each profile." },
  { q: "Can I switch coaches or mentors?", a: "Yes. You are never locked in. Book with someone else at any time, or contact support and we will help you find a better fit." },
  { q: "Is my information confidential?", a: "Yes. Coaches and mentors follow Thraivio's code of conduct and may not share client information. Sessions are not recorded without your explicit consent." },
  { q: "What does it cost?", a: "Each coach and mentor sets their own prices for intro calls, sessions and programs, shown upfront on their profile. Creating an account is free." },
];

const personas = [
  { icon: User, title: "For individuals", points: ["Navigate career transitions", "Develop executive presence", "Work through burnout or life changes", "Build confidence and clarity", "Achieve measurable personal goals"] },
  { icon: Briefcase, title: "For professionals", points: ["Accelerate leadership development", "Manage up and across teams", "Prepare for a senior or board role", "Improve stakeholder communication", "Balance performance with well-being"] },
  { icon: Building2, title: "For organisations", points: ["Scale coaching across teams", "Retain high-potential talent", "Develop future leaders", "Support inclusion initiatives", "Track the impact of people investment"] },
];

const trust = [
  { icon: BadgeCheck, label: "Reviewed profiles", sub: "Every coach checked before listing" },
  { icon: ShieldCheck, label: "Code of conduct", sub: "Professional standards for every session" },
  { icon: LockKeyhole, label: "Private by default", sub: "Your data is never sold" },
  { icon: Headset, label: "Real human support", sub: "Help when you need it" },
];

function GeometricDecor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      <circle cx="200" cy="200" r="180" stroke="#1DD7A5" strokeOpacity="0.3" />
      <circle cx="200" cy="200" r="140" stroke="#2563EB" strokeOpacity="0.25" />
      <circle cx="200" cy="200" r="100" stroke="#1DD7A5" strokeOpacity="0.2" />
      <circle cx="200" cy="200" r="60" stroke="#2563EB" strokeOpacity="0.15" />
      <path d="M200 20 A180 180 0 0 1 380 200" stroke="#1DD7A5" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
      <path d="M200 60 A140 140 0 0 1 340 200" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
    </svg>
  );
}

const HowItWorksPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A192F] py-20 sm:py-24" aria-labelledby="hiw-heading">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=1400&h=600&fit=crop&auto=format"
            alt=""
            className="h-full w-full object-cover opacity-20 grayscale-[60%]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] from-50% to-[#0A192F]/80" />
        </div>
        <GeometricDecor className="pointer-events-none absolute -right-24 top-1/2 hidden h-[400px] w-[400px] -translate-y-1/2 opacity-40 md:block" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <Eyebrow onDark>Designed for real transformation</Eyebrow>
            <h1 id="hiw-heading" className="mb-4 font-heading text-[40px] font-medium leading-[1.1] text-white sm:text-[48px]">
              How <span className="accent-underline italic">Thraivio</span> works
            </h1>
            <p className="text-[17px] leading-relaxed text-[#C8D9F0] font-body">
              A structured, human-first process from discovery to breakthrough, built around what coaching research shows actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background py-20" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <Eyebrow center>The journey</Eyebrow>
            <h2 id="steps-heading" className="font-heading text-[32px] font-medium leading-tight text-[#0A192F]">
              Six stages of the <span className="accent-underline italic">Thraivio journey</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="icon-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-primary">
                    <Icon size={20} />
                  </div>
                  <span className="text-[11px] font-bold text-muted-foreground">STEP {String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mb-2 text-[17px] font-bold leading-tight text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground font-body">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-card py-20" aria-labelledby="personas-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <Eyebrow center>Who it is for</Eyebrow>
            <h2 id="personas-heading" className="mb-4 font-heading text-[32px] font-medium leading-tight text-[#0A192F]">
              Coaching and mentoring for <span className="accent-underline italic">every stage</span>
            </h2>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground font-body">
              From first-time career builders to senior executives.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {personas.map(({ icon: Icon, title, points }) => (
              <div key={title} className="overflow-hidden rounded-2xl border border-l-4 border-border border-l-primary bg-card p-6">
                <div className="icon-bg mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mb-4 text-[17px] font-bold leading-tight text-foreground">{title}</h3>
                <ul className="space-y-2.5">
                  {points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground font-body">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#1DD7A5]" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="standards" className="scroll-mt-20 bg-secondary py-16" aria-label="Our standards">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:gap-6">
            {trust.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-5">
                <Icon size={28} className="mx-auto mb-2 text-primary" />
                <p className="text-sm font-bold text-foreground">{label}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground font-body">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-card py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <Eyebrow center>Common questions</Eyebrow>
            <h2 id="faq-heading" className="font-heading text-[32px] font-medium leading-tight text-[#0A192F]">
              Frequently asked <span className="accent-underline italic">questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="overflow-hidden rounded-xl border border-border">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-background"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[15px] font-semibold text-foreground">{faq.q}</span>
                  <ChevronDown size={20} className={`shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="border-t border-border px-5 pb-5">
                    <p className="pt-4 text-sm leading-relaxed text-muted-foreground font-body">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <ExploreLinks
              title="You might also explore"
              links={[
                { to: "/mentors", label: "Find a coach or mentor", icon: UserSearch },
                { to: "/programs", label: "Browse programs", icon: Award },
                { to: "/enterprise", label: "Enterprise coaching", icon: Building2 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-hero py-20" aria-label="Get started">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-heading text-[36px] font-medium leading-[1.1] text-white">Ready to begin?</h2>
          <p className="mb-8 text-base leading-relaxed text-[#C8D9F0] font-body">
            Find the right coach or mentor for where you are now. Creating an account is free.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/mentors" className="rounded-xl bg-[#1DD7A5] px-7 py-3.5 text-[15px] font-bold text-[#0A192F] transition-colors hover:bg-[#15C496]">
              Find my coach or mentor
            </Link>
            <Link to="/signup" className="rounded-xl border-2 border-white/30 px-7 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white/10">
              Create free account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
