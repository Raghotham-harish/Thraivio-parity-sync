import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, CalendarDays, Clock3, MapPin, RefreshCw, Star, WifiOff } from "lucide-react";
import { getPublishedPrograms, type Program } from "@/services/program.service";
import { getUpcomingEvents, type PublicEvent } from "@/services/event.service";
import { EmptyState } from "@/components/shared/EmptyState";
import {
  PROGRAM_DUMMY_IMAGE,
  formatCurrency,
  programDuration,
  programImage,
  programPrice,
  programRating,
} from "@/components/shared/programDisplay";
import { cn } from "@/lib/utils";

type Tab = "programs" | "events";
type LoadState = "loading" | "ready" | "error";

const eventDate = (e: PublicEvent) =>
  e.schedule?.startDate
    ? new Date(e.schedule.startDate).toLocaleDateString(undefined, {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "2-digit",
      })
    : "Date to be announced";

const eventPrice = (e: PublicEvent) =>
  e.pricing?.isFree || !e.pricing?.price
    ? "Free"
    : formatCurrency(e.pricing.discountPrice ?? e.pricing.price, e.pricing.currency || "USD");

const ProgramsPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("programs");
  const [programs, setPrograms] = useState<Program[]>([]);
  const [events, setEvents] = useState<PublicEvent[]>([]);
  const [state, setState] = useState<LoadState>("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setState("loading");

    Promise.allSettled([getPublishedPrograms(), getUpcomingEvents()]).then(([p, e]) => {
      if (cancelled) return;
      if (p.status === "fulfilled") setPrograms(p.value.data ?? []);
      if (e.status === "fulfilled") setEvents(e.value.data ?? []);
      setState(p.status === "rejected" && e.status === "rejected" ? "error" : "ready");
    });

    return () => {
      cancelled = true;
    };
  }, [attempt]);

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "programs", label: "Programs", count: programs.length },
    { id: "events", label: "Events", count: events.length },
  ];

  return (
    <div className="bg-background">
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1DD7A5]">Programs & Events</p>
          <h1 className="mt-3 max-w-2xl font-heading text-[34px] font-medium leading-tight sm:text-[44px]">
            Structured programs and live events from verified coaches
          </h1>
          <p className="mt-3 max-w-xl text-[15px] text-white/75 font-body">
            Go deeper than a single session: multi-week programs with a curriculum, and live workshops you can join.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div role="tablist" aria-label="Programs and events" className="mb-8 inline-flex rounded-xl border border-border bg-card p-1">
          {tabs.map(({ id, label, count }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={cn(
                "cursor-pointer rounded-lg px-5 py-2 text-sm font-semibold transition-colors",
                tab === id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
              {state === "ready" && <span className="ml-1.5 opacity-75">{count}</span>}
            </button>
          ))}
        </div>

        {state === "loading" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-80 animate-pulse rounded-2xl border border-border bg-card" />
            ))}
          </div>
        )}

        {state === "error" && (
          <EmptyState
            icon={WifiOff}
            title="We can't load programs right now"
            description="Our servers aren't responding. This is on our side; please try again in a few minutes."
            action={{ label: "Try again", icon: RefreshCw, onClick: () => setAttempt((n) => n + 1) }}
          />
        )}

        {state === "ready" && tab === "programs" && (
          programs.length === 0 ? (
            <EmptyState
              icon={BookOpen}
              title="No programs published yet"
              description="Coaches are setting up their first programs. Meanwhile, book a 1:1 session."
              action={{ label: "Find a coach", onClick: () => navigate("/mentors") }}
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((p) => (
                <Link
                  key={p.id}
                  to={`/program/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                    <img src={programImage(p)} alt="" loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-[1.03]" />
                    {p.category && (
                      <span className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {p.category}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-heading text-lg font-medium text-foreground line-clamp-2">{p.title}</h2>
                    {p.shortDescription && (
                      <p className="mt-1.5 text-sm text-muted-foreground font-body line-clamp-2">{p.shortDescription}</p>
                    )}
                    <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><Clock3 size={14} /> {programDuration(p)}</span>
                      {programRating(p) > 0 && (
                        <span className="inline-flex items-center gap-1"><Star size={14} /> {programRating(p).toFixed(1)}</span>
                      )}
                      <span className="ml-auto text-base font-bold text-foreground">{programPrice(p)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )
        )}

        {state === "ready" && tab === "events" && (
          events.length === 0 ? (
            <EmptyState
              icon={CalendarDays}
              title="No upcoming events"
              description="New live workshops are announced regularly. Check back soon."
              action={{ label: "Browse programs", onClick: () => setTab("programs") }}
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((e) => (
                <article key={e.id} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="aspect-[16/9] overflow-hidden bg-secondary">
                    <img src={e.thumbnail?.url || PROGRAM_DUMMY_IMAGE} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-primary">{eventDate(e)}</p>
                    <h2 className="mt-1.5 font-heading text-lg font-medium text-foreground line-clamp-2">{e.title}</h2>
                    {e.shortDescription && (
                      <p className="mt-1.5 text-sm text-muted-foreground font-body line-clamp-2">{e.shortDescription}</p>
                    )}
                    <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-muted-foreground">
                      {e.mode && <span className="inline-flex items-center gap-1 capitalize"><MapPin size={14} /> {e.mode}</span>}
                      <span className="ml-auto text-base font-bold text-foreground">{eventPrice(e)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default ProgramsPage;
