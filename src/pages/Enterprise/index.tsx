import { useState } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  HelpCircle,
  Layers,
  Mail,
  Brain,
  TrendingUp,
  UserSearch,
  Users,
  Building2,
  Palette,
} from "lucide-react";
import { Eyebrow } from "@/components/marketing/DiamondAccent";
import { ExploreLinks } from "@/components/marketing/ExploreLinks";
import { CONTACT_EMAIL } from "@/constants/contact";

const solutions = [
  { id: "leadership", icon: TrendingUp, title: "Leadership Pipeline", desc: "Identify and develop your next generation of leaders before critical roles go vacant. Structured 6–12 month programs built around your competency framework.", photo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=460&fit=crop&auto=format" },
  { id: "teams", icon: Users, title: "Team Effectiveness", desc: "Improve group dynamics, communication and trust. Coaching cohorts for cross-functional groups and newly formed leadership teams.", photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=460&fit=crop&auto=format" },
  { id: "executive", icon: Brain, title: "Executive Coaching", desc: "1:1 coaching for C-suite, VPs and senior directors from experienced executive coaches.", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&h=460&fit=crop&auto=format" },
  { id: "inclusion", icon: Layers, title: "DEI & Belonging", desc: "Coaching and mentoring programs that support underrepresented talent, allyship and inclusive leadership at every level.", photo: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=700&h=460&fit=crop&auto=format" },
  { id: "wellbeing", icon: HeartPulse, title: "Well-being at Scale", desc: "Prevent burnout before it costs you top talent. Group and individual well-being programs alongside your employee benefits.", photo: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=700&h=460&fit=crop&auto=format" },
  { id: "custom", icon: GraduationCap, title: "Custom Learning Journeys", desc: "White-labelled coaching programs designed with your L&D team and run on Thraivio, with analytics on participation and progress.", photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&h=460&fit=crop&auto=format" },
];

const process = [
  { step: "01", title: "Discovery & design", desc: "We work with your HR and L&D leaders to map your goals, competency framework and coaching needs." },
  { step: "02", title: "Coach matching", desc: "We curate coaches and mentors matched to your industry, culture and leadership levels." },
  { step: "03", title: "Roll out", desc: "Launch 1:1, group or cohort programs across your organisation, with scheduling and progress tracking built in." },
  { step: "04", title: "Measure & iterate", desc: "Participation and progress reporting plus regular reviews keep the program improving." },
];

const capabilities = [
  { icon: Users, title: "Seats for your whole team", desc: "Add employees in blocks and manage who has access." },
  { icon: Palette, title: "White-label option", desc: "Run programs under your own brand." },
  { icon: BarChart3, title: "Progress reporting", desc: "See participation and outcomes across cohorts." },
  { icon: Award, title: "Certifications", desc: "Issue certificates when people complete a program." },
];

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

const EnterprisePage = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", size: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  // There is no lead-capture API yet, so the request opens the visitor's
  // email app pre-filled to CONTACT_EMAIL rather than pretending to submit.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.company.trim()) {
      setError("Please add your name, work email and company.");
      return;
    }
    setError("");
    const subject = `Demo request: ${form.company}`;
    const body = [
      `Name: ${form.name}`,
      `Work email: ${form.email}`,
      `Company: ${form.company}`,
      `Team size: ${form.size || "Not specified"}`,
      "",
      form.message || "",
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center bg-[#060F1E]" aria-labelledby="ent-heading">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=900&fit=crop&auto=format"
            alt=""
            className="h-full w-full object-cover saturate-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060F1E]/[0.97] via-[#060F1E]/90 to-[#060F1E]/45" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
          <div className="max-w-2xl">
            <span className="mb-8 inline-flex items-center gap-1.5 rounded-full border border-[#1DD7A5]/30 bg-[#1DD7A5]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#1DD7A5]">
              <Building2 size={13} />
              Thraivio for organisations
            </span>
            <h1 id="ent-heading" className="mb-6 font-heading text-[44px] font-medium leading-[1.05] text-white sm:text-[60px]">
              Build a coaching culture that <span className="accent-underline italic">scales.</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#C8D9F0] font-body">
              Thraivio gives HR and L&D leaders one place to run coaching and mentoring: from leadership pipelines to well-being, with reporting on participation and progress.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-xl bg-[#1DD7A5] px-7 py-4 text-center text-[15px] font-bold text-[#0A192F] transition-colors hover:bg-[#15C496]">
                Request a demo
              </a>
              <a href="#solutions" className="rounded-xl border border-white/25 px-7 py-4 text-center text-[15px] font-bold text-white transition-colors hover:bg-white/10">
                Explore solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="scroll-mt-20 bg-background py-20 sm:py-24" aria-labelledby="solutions-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14">
            <Eyebrow>What we offer</Eyebrow>
            <h2 id="solutions-heading" className="font-heading text-[34px] font-medium leading-tight text-[#0A192F] sm:text-[38px]">
              Coaching solutions for <span className="accent-underline italic">every need</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ id, icon: Icon, title, desc, photo }) => (
              <article id={id} key={id} className="group flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/20 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img src={photo} alt="" loading="lazy" className="h-full w-full object-cover saturate-[0.75] transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/65 to-transparent to-55%" />
                  <div className="absolute bottom-3 left-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-sm">
                    <Icon size={20} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 text-base font-bold text-foreground">{title}</h3>
                  <p className="flex-1 text-[13px] leading-relaxed text-muted-foreground font-body">{desc}</p>
                  <a href="#contact" className="mt-4 flex items-center gap-1 text-[13px] font-bold text-primary transition-colors hover:text-primary/80">
                    Talk to us <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-20 overflow-hidden bg-card py-20 sm:py-24" aria-labelledby="how-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&h=680&fit=crop&auto=format"
              alt="Leadership team in a planning session"
              loading="lazy"
              className="h-full w-full object-cover saturate-[0.85]"
            />
          </div>
          <div>
            <Eyebrow>How it works</Eyebrow>
            <h2 id="how-heading" className="mb-6 font-heading text-[34px] font-medium leading-tight text-[#0A192F] sm:text-[36px]">
              Built for your <span className="accent-underline italic">L&D strategy</span>
            </h2>
            <div className="space-y-6">
              {process.map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-border">
                    <span className="text-[11px] font-bold text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="mb-1 text-[15px] font-bold text-foreground">{item.title}</h3>
                    <p className="text-[13px] leading-relaxed text-muted-foreground font-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0A192F] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#0D2347]">
              Schedule a call <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities (replaces unverified stats / case studies) */}
      <section className="bg-[#0A192F] py-20" aria-labelledby="cap-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow onDark>Platform</Eyebrow>
          <h2 id="cap-heading" className="mb-12 font-heading text-[34px] font-medium leading-tight text-white">
            Everything you need to <span className="accent-underline italic">run programs</span>
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Icon size={24} className="mb-4 text-[#1DD7A5]" />
                <h3 className="mb-1 text-[15px] font-bold text-white">{title}</h3>
                <p className="text-[13px] leading-relaxed text-[#C8D9F0] font-body">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-24" aria-label="Talk to our team">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&h=600&fit=crop&auto=format"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060F1E]/[0.96] via-[#060F1E]/[0.82] to-[#060F1E]/55" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Eyebrow onDark>Ready to start</Eyebrow>
            <h2 className="mb-4 font-heading text-[34px] font-medium leading-tight text-white sm:text-[38px]">
              Talk to our <span className="accent-underline italic">team</span>
            </h2>
            <p className="mb-6 text-base leading-relaxed text-[#C8D9F0] font-body">
              Tell us about your organisation and goals. We'll show you how Thraivio works for teams like yours and design a program around your size and budget.
            </p>
            <ul className="space-y-2">
              {["Programs for teams of any size", "Pricing tailored to your organisation", "Pilot with a small cohort first"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-[13px] font-semibold text-white/80 font-body">
                  <CheckCircle2 size={18} className="text-[#1DD7A5]" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            {sent ? (
              <div className="rounded-2xl bg-card p-10 text-center">
                <Mail size={44} className="mx-auto mb-3 text-[#065F46]" />
                <h3 className="mb-2 font-heading text-[22px] font-medium text-foreground">Your email is ready to send</h3>
                <p className="text-sm text-muted-foreground font-body">
                  We opened your email app with the details filled in. If nothing opened, write to{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary underline">{CONTACT_EMAIL}</a>.
                </p>
                <button type="button" onClick={() => setSent(false)} className="mt-5 cursor-pointer text-sm font-semibold text-primary hover:underline">
                  Edit details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-card p-6 shadow-2xl sm:p-7" noValidate>
                <h3 className="font-heading text-xl font-medium text-foreground">Request a demo</h3>
                {error && (
                  <div role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive">{error}</div>
                )}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground" htmlFor="ent-name">Full name</label>
                    <input id="ent-name" type="text" autoComplete="name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className={inputClass} placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground" htmlFor="ent-email">Work email</label>
                    <input id="ent-email" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className={inputClass} placeholder="jane@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground" htmlFor="ent-company">Company</label>
                    <input id="ent-company" type="text" autoComplete="organization" value={form.company} onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))} className={inputClass} placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground" htmlFor="ent-size">Team size</label>
                    <select id="ent-size" value={form.size} onChange={(e) => setForm((f) => ({ ...f, size: e.target.value }))} className={inputClass}>
                      <option value="">Select size</option>
                      <option>1–20 employees</option>
                      <option>21–100 employees</option>
                      <option>101–500 employees</option>
                      <option>500+ employees</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground" htmlFor="ent-msg">What are you hoping to achieve?</label>
                  <textarea id="ent-msg" rows={3} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} className={`${inputClass} resize-none`} placeholder="e.g. Develop our senior leadership team, reduce attrition…" />
                </div>
                <button type="submit" className="w-full cursor-pointer rounded-xl bg-primary py-3.5 text-[15px] font-bold text-primary-foreground transition-colors hover:bg-primary/90">
                  Send request
                </button>
                <p className="text-center text-[11px] text-muted-foreground font-body">Opens your email app with your details filled in.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <ExploreLinks
          links={[
            { to: "/mentors", label: "Individual coaches & mentors", icon: UserSearch },
            { to: "/programs", label: "Programs & group events", icon: Award },
            { to: "/how-it-works", label: "How Thraivio works", icon: HelpCircle },
          ]}
        />
      </div>
    </div>
  );
};

export default EnterprisePage;
