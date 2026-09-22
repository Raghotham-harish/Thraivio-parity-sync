import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Clock,
  Handshake,
  HeartHandshake,
  Rocket,
  Search,
  ShieldCheck,
  Star,
  Store,
  Users,
} from "lucide-react";

import { ThraivioMark } from "@/components/shared/ThraivioLogos";
import {
  getMentors,
  getTopRatedMentors,
  type MentorApiResponse,
} from "@/services/mentor.service";
import {
  getFeaturedPrograms,
  getPrograms,
  type Program,
} from "@/services/program.service";

function DiamondAccent() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className="mr-2 -mt-0.5 inline-block shrink-0"
    >
      <rect
        x="5"
        y="0.5"
        width="6.36"
        height="6.36"
        rx="0.8"
        transform="rotate(45 5 0.5)"
        fill="#1DD7A5"
      />
    </svg>
  );
}

function GeometricDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="260" cy="260" r="240" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
      <circle cx="260" cy="260" r="170" stroke="rgba(29,215,165,0.12)" strokeWidth="1" />
      <circle cx="260" cy="260" r="100" stroke="rgba(29,215,165,0.18)" strokeWidth="1.5" />
      <path d="M 260 20 A 240 240 0 0 1 500 260" stroke="rgba(0,219,162,0.25)" strokeWidth="2" strokeLinecap="round" />
      <path d="M 20 260 A 240 240 0 0 1 260 500" stroke="rgba(37,99,235,0.2)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="260" cy="20" r="4" fill="#1DD7A5" opacity="0.6" />
      <circle cx="500" cy="260" r="3" fill="#2563EB" opacity="0.5" />
    </svg>
  );
}

/* Descriptive goal tiles — copy only, no invented per-tile counts.
   Routed through the real `search` query param MentorsPage reads. */
const goalTiles = [
  { icon: Rocket, label: "Advance my career", sub: "Promotions, pivots & job transitions", query: "career" },
  { icon: Users, label: "Build leadership skills", sub: "Executive presence, teams & strategy", query: "leadership" },
  { icon: Store, label: "Grow my business", sub: "Startups, scale-ups & entrepreneurship", query: "business" },
  { icon: HeartHandshake, label: "Improve well-being", sub: "Mindfulness, energy & resilience", query: "well-being" },
  { icon: Brain, label: "Unlock peak performance", sub: "Habits, mindset & accountability", query: "performance" },
  { icon: Handshake, label: "Navigate relationships", sub: "Communication, conflict & connection", query: "relationships" },
];

const popularSearches = [
  "Executive coach",
  "Career pivot",
  "Startup mentor",
  "Work-life balance",
  "Public speaking",
  "Leadership transition",
];

function formatPrice(amount?: number) {
  if (!amount) return null;
  return `$${amount}`;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const [mentorCount, setMentorCount] = useState<number | null>(null);
  const [programCount, setProgramCount] = useState<number | null>(null);
  const [featuredMentors, setFeaturedMentors] = useState<MentorApiResponse[]>([]);
  const [featuredPrograms, setFeaturedPrograms] = useState<Program[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const [mentorsRes, topMentorsRes, programsRes, featuredProgramsRes] =
        await Promise.allSettled([
          getMentors({ limit: 1 }),
          getTopRatedMentors(4),
          getPrograms({ limit: 1 }),
          getFeaturedPrograms(),
        ]);

      if (cancelled) return;

      if (mentorsRes.status === "fulfilled") {
        setMentorCount(mentorsRes.value.data.pagination.total);
      }
      if (topMentorsRes.status === "fulfilled") {
        setFeaturedMentors(topMentorsRes.value.data);
      }
      if (programsRes.status === "fulfilled") {
        setProgramCount(programsRes.value.data.pagination.total);
      }
      if (featuredProgramsRes.status === "fulfilled") {
        setFeaturedPrograms(featuredProgramsRes.value.data.slice(0, 3));
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate(`/mentors${query ? `?search=${encodeURIComponent(query)}` : ""}`);
  }

  const stats = [
    mentorCount !== null && mentorCount > 0
      ? { value: `${mentorCount}+`, label: "Verified Coaches & Mentors" }
      : null,
    programCount !== null && programCount > 0
      ? { value: `${programCount}+`, label: "Programs Available" }
      : null,
  ].filter((s): s is { value: string; label: string } => s !== null);

  return (
    <main id="main-content">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-hero" aria-label="Hero">
        <GeometricDecor className="pointer-events-none absolute -right-16 top-1/2 h-[480px] w-[480px] -translate-y-1/2 select-none" />
        <div className="pointer-events-none absolute bottom-0 left-0 translate-y-16 select-none opacity-[0.03]">
          <ThraivioMark className="h-[360px] w-[360px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid min-h-[520px] items-center gap-0 py-14 lg:grid-cols-2 md:py-20">
            <div className="py-4 lg:pr-12">
              <span className="mb-7 inline-flex items-center gap-1.5 rounded-full bg-[#1DD7A5]/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#A8F0DF]">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Verified Coaching &amp; Mentoring Platform
              </span>

              <h1
                className="mb-5 text-[42px] font-medium leading-[1.1] text-white sm:text-[54px] md:text-[60px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Find your coach
                <br />
                or <span className="accent-underline italic" style={{ fontWeight: 500 }}>mentor.</span>
              </h1>

              <p className="mb-7 max-w-md text-[16px] leading-relaxed font-body text-[#C8D9F0]">
                Connect with credentialed coaches and mentors for career growth, leadership
                development, and life transformation.
              </p>

              <form
                onSubmit={handleSearch}
                className="mb-5 flex max-w-lg gap-2 rounded-xl border border-white/20 bg-white/10 p-1.5 backdrop-blur-sm"
              >
                <div className="flex flex-1 items-center gap-2 px-3">
                  <Search className="h-5 w-5 shrink-0 text-white/60" aria-hidden="true" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g. Leadership coach, career mentor..."
                    className="flex-1 bg-transparent text-[14px] text-white outline-none placeholder:text-white/50"
                    aria-label="Search coaches and mentors"
                  />
                </div>
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-[#2563EB] px-5 py-2.5 text-[14px] font-bold text-white transition-colors hover:bg-[#1D4ED8]"
                >
                  Search
                </button>
              </form>

              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-white/65">
                  Popular searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.slice(0, 6).map((t) => (
                    <button
                      key={t}
                      onClick={() => navigate(`/mentors?search=${encodeURIComponent(t)}`)}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/80 transition-all hover:border-white/35 hover:bg-white/18"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden min-h-[420px] grid-cols-2 gap-3 py-6 lg:grid">
              <div className="col-span-2 h-52 overflow-hidden rounded-2xl bg-[#0D2347]">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&h=400&fit=crop&auto=format"
                  alt="A coaching session between two professionals"
                  className="h-full w-full object-cover opacity-80"
                  style={{ filter: "contrast(1.05) saturate(0.8)" }}
                />
              </div>
              <div className="h-44 overflow-hidden rounded-2xl bg-[#0D2347]">
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=320&fit=crop&auto=format"
                  alt="Professional in a coaching conversation"
                  className="h-full w-full object-cover opacity-75"
                  style={{ filter: "saturate(0.85)" }}
                />
              </div>
              <div className="h-44 overflow-hidden rounded-2xl bg-[#0D2347]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=320&fit=crop&auto=format"
                  alt="Mentor in a professional setting"
                  className="h-full w-full object-cover opacity-75"
                  style={{ filter: "saturate(0.85)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats band — real counts only, hidden until we have data ── */}
      {stats.length > 0 && (
        <section className="border-b border-border bg-card" aria-label="Platform statistics">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <dl className="flex flex-wrap justify-center gap-12">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <dd
                    className="text-[34px] font-medium text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s.value}
                  </dd>
                  <dt className="mt-1 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground font-body">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ── Explore by goal ── */}
      <section className="bg-secondary py-20" aria-labelledby="goals-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 flex items-center text-[11px] font-bold uppercase tracking-widest text-primary">
                <DiamondAccent />
                What do you want to achieve?
              </p>
              <h2
                id="goals-heading"
                className="text-[36px] font-medium text-foreground sm:text-[42px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Explore by{" "}
                <span className="accent-underline accent-underline-blue italic" style={{ fontWeight: 500 }}>
                  goal
                </span>
              </h2>
            </div>
            <Link to="/mentors" className="flex items-center gap-1.5 text-[14px] font-bold text-primary hover:opacity-80">
              Browse all mentors
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {goalTiles.map((g) => (
              <Link
                key={g.label}
                to={`/mentors?search=${encodeURIComponent(g.query)}`}
                className="group flex cursor-pointer flex-col items-center rounded-2xl border border-border bg-card p-5 text-center transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="icon-bg mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
                  <g.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <p className="mb-1 text-[13px] font-bold leading-snug text-foreground">{g.label}</p>
                <p className="text-[11px] leading-snug text-muted-foreground font-body">{g.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured mentors — real data, hidden if none yet ── */}
      {featuredMentors.length > 0 && (
        <section className="bg-card py-20" aria-labelledby="members-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 flex items-center text-[11px] font-bold uppercase tracking-widest text-primary">
                  <DiamondAccent />
                  Top rated
                </p>
                <h2
                  id="members-heading"
                  className="text-[36px] font-medium text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Meet featured{" "}
                  <span className="accent-underline accent-underline-blue italic" style={{ fontWeight: 500 }}>
                    coaches &amp; mentors
                  </span>
                </h2>
              </div>
              <Link to="/mentors" className="flex items-center gap-1.5 text-[14px] font-bold text-primary hover:opacity-80">
                View all mentors
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredMentors.map((m) => {
                const price = formatPrice(m.pricing?.introCall);
                return (
                  <Link
                    to={`/mentors/${m.id}`}
                    key={m.id}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-xl"
                  >
                    <div className="relative flex h-44 items-center justify-center overflow-hidden bg-[#0D2347]">
                      {m.avatar ? (
                        <img
                          src={m.avatar}
                          alt={m.name}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ECEEF2] text-2xl font-bold text-[#5A6479]">
                          {m.name?.charAt(0)?.toUpperCase() || "M"}
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <p className="text-[15px] font-bold leading-tight text-foreground">{m.name}</p>
                      <p className="mb-3 mt-0.5 truncate text-[12px] text-muted-foreground font-body">
                        {m.headline || m.role}
                      </p>

                      {m.averageRating > 0 && (
                        <div className="mb-3 flex items-center gap-1.5">
                          <Star className="h-[15px] w-[15px] fill-[#B45309] text-[#B45309]" aria-hidden="true" />
                          <span className="text-[13px] font-bold text-foreground">{m.averageRating.toFixed(1)}</span>
                          {m.totalReviews > 0 && (
                            <span className="text-[12px] text-muted-foreground">({m.totalReviews} reviews)</span>
                          )}
                        </div>
                      )}

                      {m.expertise?.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-1.5">
                          {m.expertise.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[#ECEEF2] px-2 py-0.5 text-[11px] font-semibold text-[#5A6479]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between border-t border-border pt-3">
                        <p className="text-[16px] font-bold text-foreground">
                          {price ? (
                            <>
                              {price}
                              <span className="text-[11px] font-normal text-muted-foreground">/intro call</span>
                            </>
                          ) : (
                            <span className="text-[13px] font-normal text-muted-foreground">Contact for rates</span>
                          )}
                        </p>
                        <span className="rounded-lg bg-primary px-3 py-1.5 text-[12px] font-bold text-primary-foreground transition-colors group-hover:opacity-90">
                          View profile
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Featured programs — real data, hidden if none yet ── */}
      {featuredPrograms.length > 0 && (
        <section className="bg-secondary py-20" aria-labelledby="programs-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 flex items-center text-[11px] font-bold uppercase tracking-widest text-primary">
                  <DiamondAccent />
                  Featured
                </p>
                <h2
                  id="programs-heading"
                  className="text-[36px] font-medium text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Programs
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {featuredPrograms.map((p) => (
                <Link
                  to={`/program/${p.slug}`}
                  key={p.id}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl"
                >
                  <div className="relative h-52 overflow-hidden bg-[#0D2347]">
                    {p.thumbnail?.url && (
                      <img
                        src={p.thumbnail.url}
                        alt={p.thumbnail.alt || p.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(0deg, rgba(10,25,47,0.85) 0%, transparent 55%)" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-[17px] font-bold leading-tight text-white">{p.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <span className="flex items-center gap-1 text-[12px] text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {p.duration} {p.durationUnit}
                    </span>
                    <span className="text-[13px] font-bold text-foreground">
                      {p.pricing?.isFree ? "Free" : formatPrice(p.finalPrice ?? p.pricing?.price) || "—"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden bg-card py-24" aria-labelledby="cta-heading">
        <svg
          className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 opacity-[0.04]"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="190" stroke="#2563EB" strokeWidth="2" />
          <circle cx="200" cy="200" r="130" stroke="#2563EB" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="70" stroke="#1DD7A5" strokeWidth="2" />
        </svg>

        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2
            id="cta-heading"
            className="mb-4 text-[40px] font-medium text-foreground sm:text-[50px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your next chapter
            <br />
            <span className="accent-underline italic" style={{ fontWeight: 500 }}>
              starts here.
            </span>
          </h2>
          <p className="mb-8 text-[17px] text-muted-foreground font-body">
            Connect with credentialed coaches and mentors for career growth, leadership
            development, and life transformation.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/signup"
              className="rounded-xl bg-primary px-8 py-3.5 text-[16px] font-bold text-primary-foreground transition-colors hover:opacity-90"
            >
              Create your account
            </Link>
            <Link
              to="/mentors"
              className="rounded-xl border-2 border-border px-8 py-3.5 text-[16px] font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Browse coaches &amp; mentors
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
