import { Link } from "react-router-dom";
import { Building2, Compass, HeartHandshake, ShieldCheck, Sparkles, UserSearch, Users } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Eyebrow } from "@/components/marketing/DiamondAccent";

const values = [
  { icon: HeartHandshake, title: "People first", desc: "Coaching works when the relationship works. We help you find the right person, not just any person." },
  { icon: ShieldCheck, title: "Trust by design", desc: "Profiles are reviewed before they go live, prices are shown upfront, and your information stays private." },
  { icon: Compass, title: "Clear outcomes", desc: "Goals, plans and progress you can see, so every session moves you forward." },
  { icon: Sparkles, title: "Fair for coaches", desc: "Coaches and mentors set their own prices and keep the large majority of what they earn." },
];

const offers = [
  { icon: UserSearch, title: "For individuals", desc: "Find a coach or mentor, book 1:1 sessions, join programs and live events.", to: "/mentors", cta: "Find a coach" },
  { icon: Users, title: "For coaches & mentors", desc: "Build your profile, set availability and pricing, and run programs and events.", to: "/become-mentor", cta: "Become a coach" },
  { icon: Building2, title: "For organisations", desc: "Run coaching and mentoring programs for your teams, under your own brand if you like.", to: "/enterprise", cta: "Talk to us" },
];

const AboutPage = () => {
  return (
    <div>
      <PageHero eyebrow="About Thraivio" title={<>Helping people <span className="accent-underline italic">thrive</span> with the right guide</>}>
        Thraivio connects people with experienced coaches and mentors for career, leadership and life, and gives organisations one place to run coaching for their teams.
      </PageHero>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="mb-10 font-heading text-[30px] font-medium text-[#0A192F]">Our values</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6">
                <div className="icon-bg mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground font-body">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow>Who we serve</Eyebrow>
          <h2 className="mb-10 font-heading text-[30px] font-medium text-[#0A192F]">One platform, three ways to use it</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {offers.map(({ icon: Icon, title, desc, to, cta }) => (
              <div key={title} className="flex flex-col rounded-2xl border border-l-4 border-border border-l-primary bg-card p-6">
                <Icon size={24} className="mb-4 text-primary" />
                <h3 className="mb-2 text-base font-bold text-foreground">{title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground font-body">{desc}</p>
                <Link to={to} className="self-start rounded-lg bg-[#0A192F] px-4 py-2 text-[13px] font-bold text-white hover:bg-[#0D2347]">
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
