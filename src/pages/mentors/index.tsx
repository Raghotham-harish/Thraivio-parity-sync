import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Award,
  Building2,
  HelpCircle,
  LayoutGrid,
  List,
  Loader2,
  RefreshCw,
  Search,
  SearchX,
  SlidersHorizontal,
  Star,
  WifiOff,
  X,
} from "lucide-react";
import { getMentors, type MentorApiResponse } from "@/services/mentor.service";
import { EmptyState } from "@/components/shared/EmptyState";
import { Eyebrow } from "@/components/marketing/DiamondAccent";
import { ExploreLinks } from "@/components/marketing/ExploreLinks";
import { cn } from "@/lib/utils";

const SORTS = ["Top rated", "Most reviewed", "Price: low to high", "Price: high to low"] as const;
type Sort = (typeof SORTS)[number];

function initialsOf(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

function startingPrice(pricing: MentorApiResponse["pricing"] | undefined): number | null {
  if (!pricing) return null;
  const values = [pricing.introCall, pricing.mentorshipCall, pricing.mockInterview, pricing.monthlyProgram].filter(
    (v): v is number => typeof v === "number" && v > 0
  );
  return values.length ? Math.min(...values) : null;
}

const profileUrl = (m: MentorApiResponse) => `/mentors/${m.slug || m.id}`;

const MentorsPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("search") || searchParams.get("company") || searchParams.get("q") || "";

  const [mentors, setMentors] = useState<MentorApiResponse[]>([]);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const [attempt, setAttempt] = useState(0);

  const [query, setQuery] = useState(initialQuery);
  const [specialty, setSpecialty] = useState(searchParams.get("category") || "All");
  const [sort, setSort] = useState<Sort>("Top rated");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setState("loading");
    getMentors({ limit: 60, sortBy: "averageRating", sortOrder: "desc" })
      .then((res) => {
        if (cancelled) return;
        setMentors(res.data?.mentors ?? []);
        setState("ready");
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  // Specialties come from what coaches actually list, most common first.
  const specialties = useMemo(() => {
    const counts = new Map<string, number>();
    mentors.forEach((m) => (m.expertise || []).forEach((e) => counts.set(e, (counts.get(e) || 0) + 1)));
    return ["All", ...[...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10).map(([e]) => e)];
  }, [mentors]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return mentors
      .filter((m) => {
        const matchQ =
          !q ||
          m.name?.toLowerCase().includes(q) ||
          m.headline?.toLowerCase().includes(q) ||
          m.company?.toLowerCase().includes(q) ||
          (m.expertise || []).some((t) => t.toLowerCase().includes(q)) ||
          (m.skills || []).some((t) => t.toLowerCase().includes(q));
        const matchSpec =
          specialty === "All" || (m.expertise || []).some((e) => e.toLowerCase() === specialty.toLowerCase());
        return matchQ && matchSpec;
      })
      .sort((a, b) => {
        if (sort === "Top rated") return (b.averageRating || 0) - (a.averageRating || 0);
        if (sort === "Most reviewed") return (b.totalReviews || 0) - (a.totalReviews || 0);
        const pa = startingPrice(a.pricing) ?? Infinity;
        const pb = startingPrice(b.pricing) ?? Infinity;
        return sort === "Price: low to high" ? pa - pb : (pb === Infinity ? -1 : pb) - (pa === Infinity ? -1 : pa);
      });
  }, [mentors, query, specialty, sort]);

  const clearFilters = () => {
    setQuery("");
    setSpecialty("All");
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-hero relative overflow-hidden border-b border-white/10" aria-labelledby="fc-heading">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1400&h=400&fit=crop&auto=format"
            alt=""
            className="h-full w-full object-cover opacity-20 grayscale-[40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] from-40% to-[#0A192F]/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <Eyebrow onDark>Find your guide</Eyebrow>
          <h1 id="fc-heading" className="mb-3 font-heading text-[36px] font-medium leading-tight text-white sm:text-[44px]">
            Find a <span className="accent-underline italic">coach or mentor</span>
          </h1>
          <p className="mb-6 max-w-lg text-[15px] text-[#C8D9F0] font-body">
            Experienced coaches and mentors across careers, leadership, business and life.
          </p>

          <div className="mb-5 flex max-w-xl items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
            <Search size={20} className="shrink-0 text-white/60" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, company, skill or focus area…"
              className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/50"
              aria-label="Search coaches and mentors"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="cursor-pointer text-white/60 hover:text-white">
                <X size={18} />
              </button>
            )}
          </div>

          {specialties.length > 1 && (
            <div className="flex flex-wrap gap-2">
              {specialties.slice(1, 8).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSpecialty(specialty === s ? "All" : s)}
                  className={cn(
                    "cursor-pointer rounded-full border px-3 py-1.5 text-xs font-semibold transition-all",
                    specialty === s
                      ? "border-primary bg-primary text-white"
                      : "border-white/20 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 sm:px-6">
        <aside className="hidden w-56 shrink-0 lg:block" aria-label="Filters">
          <SpecialtyFilter options={specialties} value={specialty} onChange={setSpecialty} />
        </aside>

        <div className="min-w-0 flex-1">
          {/* Toolbar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground font-body">
              {state === "ready" ? (
                <>
                  <span className="font-bold text-foreground">{filtered.length}</span> coaches & mentors
                </>
              ) : (
                " "
              )}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-[13px] font-semibold text-foreground lg:hidden"
                onClick={() => setFilterOpen((o) => !o)}
                aria-expanded={filterOpen}
              >
                <SlidersHorizontal size={16} /> Filters
              </button>
              <label className="sr-only" htmlFor="fc-sort">Sort</label>
              <select
                id="fc-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="cursor-pointer rounded-lg border border-border bg-card px-3 py-2 text-[13px] font-semibold text-foreground hover:border-primary focus:border-primary focus:outline-none"
              >
                {SORTS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <div className="hidden overflow-hidden rounded-lg border border-border sm:flex">
                {(["grid", "list"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setView(v)}
                    aria-pressed={view === v}
                    aria-label={v === "grid" ? "Grid view" : "List view"}
                    className={cn(
                      "cursor-pointer px-3 py-2 transition-colors",
                      view === v ? "bg-primary text-white" : "bg-card text-muted-foreground hover:bg-background"
                    )}
                  >
                    {v === "grid" ? <LayoutGrid size={18} /> : <List size={18} />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filterOpen && (
            <div className="mb-6 rounded-xl border border-border bg-card p-4 lg:hidden">
              <SpecialtyFilter options={specialties} value={specialty} onChange={setSpecialty} />
            </div>
          )}

          {state === "loading" ? (
            <div className="py-20 text-center">
              <Loader2 size={32} className="mx-auto mb-3 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground font-body">Loading coaches…</p>
            </div>
          ) : state === "error" ? (
            <EmptyState
              icon={WifiOff}
              title="We can't load coaches right now"
              description="Our servers aren't responding. This is on our side; please try again in a few minutes."
              action={{ label: "Try again", icon: RefreshCw, onClick: () => setAttempt((n) => n + 1) }}
            />
          ) : filtered.length === 0 ? (
            <EmptyState
              icon={SearchX}
              title={mentors.length === 0 ? "No coaches listed yet" : "No coaches match your search"}
              description={mentors.length === 0 ? "Coaches are joining now. Check back soon." : "Try a different search or clear the filters."}
              action={mentors.length === 0 ? undefined : { label: "Clear all filters", onClick: clearFilters }}
            />
          ) : (
            <div className={view === "grid" ? "grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3" : "space-y-4"}>
              {filtered.map((m) => (view === "grid" ? <CoachCard key={m.id} m={m} /> : <CoachRow key={m.id} m={m} />))}
            </div>
          )}

          <div className="mt-12 pb-6">
            <ExploreLinks
              links={[
                { to: "/programs", label: "Browse programs & events", icon: Award },
                { to: "/how-it-works", label: "How Thraivio works", icon: HelpCircle },
                { to: "/enterprise", label: "Coaching for your organisation", icon: Building2 },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function SpecialtyFilter({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="mb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Specialty</legend>
      <div className="space-y-1.5">
        {options.map((o) => (
          <label key={o} className="group flex cursor-pointer items-center gap-2">
            <input type="radio" name="specialty" value={o} checked={value === o} onChange={() => onChange(o)} className="accent-primary" />
            <span className={cn("text-[13px] transition-colors font-body", value === o ? "font-bold text-[#0A192F]" : "text-muted-foreground group-hover:text-[#0A192F]")}>
              {o}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Avatar({ m, className }: { m: MentorApiResponse; className: string }) {
  if (m.avatar) {
    return <img src={m.avatar} alt={m.name} loading="lazy" className={cn(className, "object-cover object-top")} />;
  }
  // Initials chips are always neutral gray in the Thraivio system.
  return <div className={cn(className, "flex items-center justify-center bg-[#ECEEF2] font-bold text-[#5A6479]")}>{initialsOf(m.name || "?")}</div>;
}

function PriceLabel({ m }: { m: MentorApiResponse }) {
  const p = startingPrice(m.pricing);
  if (p === null) return <p className="text-[13px] font-semibold text-muted-foreground">Contact for pricing</p>;
  return (
    <p className="text-[15px] font-bold text-foreground">
      <span className="text-[11px] font-normal text-muted-foreground">From </span>${p}
    </p>
  );
}

function AvailabilityLabel({ m }: { m: MentorApiResponse }) {
  const accepting = m.acceptingBookings !== false;
  return (
    <span className={cn("text-[11px] font-semibold", accepting ? "text-[#065F46]" : "text-[#B45309]")}>
      {accepting ? "Accepting new clients" : "Not accepting bookings"}
    </span>
  );
}

function Rating({ m }: { m: MentorApiResponse }) {
  return (
    <span className="flex items-center gap-1.5 text-xs">
      <Star size={14} className="fill-[#B45309] text-[#B45309]" aria-hidden="true" />
      <span className="text-[13px] font-bold text-foreground">{(m.averageRating || 0).toFixed(1)}</span>
      <span className="text-muted-foreground">({m.totalReviews || 0})</span>
    </span>
  );
}

function CoachCard({ m }: { m: MentorApiResponse }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg">
      <Link to={profileUrl(m)} className="relative block h-40 overflow-hidden bg-[#0D2347]" tabIndex={-1} aria-hidden="true">
        <Avatar m={m} className="h-full w-full text-[28px] transition-transform duration-500 group-hover:scale-105" />
        {m.verificationStatus === "verified" && (
          <span className="absolute right-3 top-3 rounded-full bg-[#ECFDF5] px-2 py-0.5 text-[10px] font-bold text-[#065F46]">Verified</span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3">
          <Link to={profileUrl(m)} className="text-sm font-bold leading-tight text-foreground hover:text-primary">{m.name}</Link>
          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2 font-body">{m.headline}</p>
        </div>
        <div className="mb-3"><Rating m={m} /></div>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {(m.expertise || []).slice(0, 3).map((t) => (
            <span key={t} className="rounded-full bg-[#ECEEF2] px-2 py-0.5 text-[11px] font-semibold text-[#5A6479]">{t}</span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-border pt-3">
          <div>
            <PriceLabel m={m} />
            <AvailabilityLabel m={m} />
          </div>
          <Link to={profileUrl(m)} className="rounded-lg bg-[#0A192F] px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#0D2347]">
            View profile
          </Link>
        </div>
      </div>
    </article>
  );
}

function CoachRow({ m }: { m: MentorApiResponse }) {
  return (
    <article className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md">
      <Avatar m={m} className="h-14 w-14 shrink-0 rounded-xl text-base" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Link to={profileUrl(m)} className="text-[15px] font-bold text-foreground hover:text-primary">{m.name}</Link>
          <Rating m={m} />
          {m.verificationStatus === "verified" && (
            <span className="rounded-full bg-[#ECFDF5] px-2 py-0.5 text-[10px] font-bold text-[#065F46]">Verified</span>
          )}
        </div>
        <p className="mb-2 text-[13px] leading-relaxed text-muted-foreground font-body">{m.headline}</p>
        <div className="flex flex-wrap gap-1.5">
          {(m.expertise || []).slice(0, 4).map((t) => (
            <span key={t} className="rounded-full bg-[#ECEEF2] px-2 py-0.5 text-[11px] font-semibold text-[#5A6479]">{t}</span>
          ))}
        </div>
      </div>
      <div className="shrink-0 text-right">
        <PriceLabel m={m} />
        <div className="mb-2"><AvailabilityLabel m={m} /></div>
        <Link to={profileUrl(m)} className="rounded-lg bg-[#0A192F] px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#0D2347]">
          View profile
        </Link>
      </div>
    </article>
  );
}

export default MentorsPage;
