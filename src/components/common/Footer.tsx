import { Link } from "react-router-dom";
import { BadgeCheck, ShieldCheck, LockKeyhole } from "lucide-react";

import { ThraivioHorizontalDark } from "@/components/shared/ThraivioLogos";

// Every link here must resolve to a real route (see AppRoutes). Sections
// without content yet (blog, careers, success stories) are left out rather
// than linking to empty pages.
const COLUMNS: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: "Platform",
    links: [
      { to: "/mentors", label: "Find a Coach or Mentor" },
      { to: "/programs", label: "Programs & Events" },
      { to: "/how-it-works", label: "How It Works" },
      { to: "/become-mentor", label: "Become a Coach" },
    ],
  },
  {
    title: "For Companies",
    links: [
      { to: "/enterprise", label: "Enterprise Coaching" },
      { to: "/enterprise#teams", label: "Team Development" },
      { to: "/enterprise#leadership", label: "Leadership Programs" },
      { to: "/enterprise#contact", label: "Request a Demo" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/how-it-works#standards", label: "Our Standards" },
      { to: "/how-it-works#faq", label: "FAQs" },
      { to: "/help", label: "Help & Contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Thraivio" },
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Service" },
    ],
  },
];

const BADGES = [
  { icon: BadgeCheck, label: "Reviewed Profiles" },
  { icon: ShieldCheck, label: "Secure Sign-in" },
  { icon: LockKeyhole, label: "Private by Default" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-[10px] pt-[72px] sm:px-8 lg:px-0">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div className="pr-8">
            <Link to="/" className="mb-7 inline-flex items-center" aria-label="Thraivio home">
              <ThraivioHorizontalDark width={142} height={46} />
            </Link>
            <p className="max-w-[300px] text-[13px] leading-[1.7] text-[#9DA7B6]">
              Connecting people with experienced coaches and mentors for career, leadership and life.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-7 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#7D899B]">{col.title}</h4>
              <ul className="space-y-[22px]">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-[13px] text-[#AAB3C0] transition-colors duration-300 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-[#22324A]">
          <div className="flex flex-col items-center justify-between gap-7 py-[27px] lg:flex-row">
            <p className="text-[12px] text-[#60718A]">© {new Date().getFullYear()} Thraivio. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
              {BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-[#60718A]">
                  <Icon size={21} strokeWidth={2.2} className="text-[#00DDB0]" />
                  <span className="text-[12px]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
