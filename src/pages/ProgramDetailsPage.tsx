import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock3,
  GraduationCap,
  Loader2,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getProgramBySlug,
  type Program,
} from "@/services/program.service";

const PROGRAM_DUMMY_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200";

const formatDuration = (program: Program) => {
  const unit = program.durationUnit || "weeks";

  const formattedUnit =
    program.duration === 1
      ? unit.replace(/s$/, "")
      : unit;

  return `${program.duration} ${formattedUnit}`;
};

const ProgramDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchProgram = async () => {
      if (!slug) {
        if (mounted) {
          setError("Program not found.");
          setLoading(false);
        }
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await getProgramBySlug(slug);

        if (!mounted) return;

        if (!response.success || !response.data) {
          setProgram(null);
          setError(response.message || "Program not found.");
          return;
        }

        setProgram(response.data);
      } catch (err) {
        if (!mounted) return;

        console.error("Failed to load program:", err);
        setProgram(null);
        setError(
          "Unable to load this program. Please try again.",
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    void fetchProgram();

    return () => {
      mounted = false;
    };
  }, [slug]);

  const thumbnail = useMemo(() => {
    return program?.thumbnail?.url || PROGRAM_DUMMY_IMAGE;
  }, [program]);

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary">
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span className="font-medium">
              Loading program...
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (error || !program) {
    return (
      <div className="min-h-screen bg-secondary">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6">
          <div className="w-full rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFDAD6] text-[#BA1A1A]">
              <BookOpen className="h-7 w-7" />
            </div>

            <h1 className="mt-6 text-2xl font-bold text-foreground">
              Program Not Found
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              {error ||
                "The requested program could not be found."}
            </p>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const price = Number(program.pricing?.price ?? 0);
  const discountPrice = Number(
    program.pricing?.discountPrice ?? 0,
  );

  const hasDiscount =
    discountPrice > 0 && discountPrice < price;

  const displayPrice = hasDiscount
    ? discountPrice
    : price;

  const enrollments = Number(
    program.analytics?.enrollments ?? 0,
  );

  const rating = Number(
    program.analytics?.averageRating ?? 0,
  );

  const totalReviews = Number(
    program.analytics?.totalReviews ?? 0,
  );

  const currency =
    program.pricing?.currency || "INR";

  const currencySymbol =
    currency.toUpperCase() === "INR"
      ? "₹"
      : currency;

  const sections =
    program.curriculum?.sections ?? [];

  const benefits = program.benefits ?? [];
  const requirements =
    program.requirements ?? [];
  const learningOutcomes =
    program.learningOutcomes ?? [];
  const faqs = program.faqs ?? [];

  return (
    <div className="min-h-screen bg-secondary">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img
            src={thumbnail}
            alt={program.thumbnail?.alt || program.title}
            className="h-full w-full object-cover opacity-30"
            onError={(event) => {
              event.currentTarget.src =
                PROGRAM_DUMMY_IMAGE;
            }}
          />

          <div className="absolute inset-0 bg-[#0A192F] " />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-10 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <span className="inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                {program.category}
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                {program.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
                {program.shortDescription ||
                  program.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Clock3 className="h-5 w-5 text-[#1DD7A5]" />
                  {formatDuration(program)}
                </div>

                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#1DD7A5]" />
                  {enrollments} Enrollments
                </div>

                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-[#1DD7A5]" />
                  {program.level}
                </div>

                {rating > 0 && (
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    {rating.toFixed(1)}

                    {totalReviews > 0 && (
                      <span className="text-white/70">
                        ({totalReviews})
                      </span>
                    )}
                  </div>
                )}
              </div>

              {program.tags.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-2">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/70"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing Card */}

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur">
              <img
                src={thumbnail}
                alt={program.thumbnail?.alt || program.title}
                className="h-64 w-full object-cover"
                onError={(event) => {
                  event.currentTarget.src =
                    PROGRAM_DUMMY_IMAGE;
                }}
              />

              <div className="p-6">
                <p className="text-sm text-white/70">
                  Program Fee
                </p>

                <div className="mt-2 flex flex-wrap items-end gap-3">
                  <h2 className="text-4xl font-bold text-white">
                    {program.isFree
                      ? "Free"
                      : `${currencySymbol}${displayPrice.toLocaleString()}`}
                  </h2>

                  {hasDiscount && (
                    <span className="mb-1 text-lg text-white/70 line-through">
                      {currencySymbol}
                      {price.toLocaleString()}
                    </span>
                  )}
                </div>

                {program.hasDiscount && hasDiscount && (
                  <span className="mt-3 inline-flex rounded-full bg-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                    Discount Available
                  </span>
                )}

                <button
                  type="button"
                  disabled
                  className="mt-6 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white opacity-90"
                >
                  <PlayCircle className="h-5 w-5" />
                  Purchase / Enroll
                </button>

                <p className="mt-3 text-center text-xs leading-5 text-white/70">
                  Enrollment and payment will be connected
                  in the next API integration step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.65fr_0.75fr]">
          <div className="space-y-8">
            {/* Overview */}

            <section className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground">
                Program Overview
              </h2>

              <div className="mt-5 whitespace-pre-line leading-8 text-muted-foreground">
                {program.description}
              </div>
            </section>

            {/* Learning Outcomes */}

            {learningOutcomes.length > 0 && (
              <section className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground">
                  What You&apos;ll Learn
                </h2>

                <div className="mt-6 space-y-4">
                  {learningOutcomes.map(
                    (outcome) => (
                      <div
                        key={`${outcome.order}-${outcome.title}`}
                        className="flex gap-4 rounded-2xl bg-secondary p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#065F46]" />

                        <div>
                          <h3 className="font-semibold text-foreground">
                            {outcome.title}
                          </h3>

                          {outcome.description && (
                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                              {outcome.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </section>
            )}

            {/* Benefits */}

            {benefits.length > 0 && (
              <section className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground">
                  Program Benefits
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div
                      key={`${benefit.order}-${benefit.title}`}
                      className="rounded-2xl border border-border bg-secondary p-5"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                        <div>
                          <h3 className="font-semibold text-foreground">
                            {benefit.title}
                          </h3>

                          {benefit.description && (
                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                              {benefit.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Requirements */}

            {requirements.length > 0 && (
              <section className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground">
                  Requirements
                </h2>

                <div className="mt-6 space-y-4">
                  {requirements.map(
                    (requirement) => (
                      <div
                        key={`${requirement.order}-${requirement.title}`}
                        className="flex gap-4 rounded-2xl border border-border p-4"
                      >
                        <div
                          className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                            requirement.mandatory
                              ? "bg-[#BA1A1A]"
                              : "bg-muted-foreground"
                          }`}
                        />

                        <div>
                          <h3 className="font-semibold text-foreground">
                            {requirement.title}
                          </h3>

                          {requirement.description && (
                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                              {requirement.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </section>
            )}

            {/* Curriculum */}

            {sections.length > 0 && (
              <section className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground">
                  Curriculum
                </h2>

                <div className="mt-6 space-y-4">
                  {sections.map(
                    (section, sectionIndex) => (
                      <div
                        key={`${section.order}-${section.title}`}
                        className="overflow-hidden rounded-2xl border border-border"
                      >
                        <div className="flex items-center gap-4 bg-secondary p-5">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary font-bold text-white">
                            {sectionIndex + 1}
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-foreground">
                              {section.title}
                            </h3>

                            {section.description && (
                              <p className="mt-1 text-sm text-muted-foreground">
                                {section.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {section.lessons.length > 0 && (
                          <div className="divide-y divide-border">
                            {section.lessons.map(
                              (lesson) => (
                                <div
                                  key={`${lesson.order}-${lesson.title}`}
                                  className="flex items-center gap-4 p-4"
                                >
                                  <BookOpen className="h-5 w-5 shrink-0 text-muted-foreground" />

                                  <div className="min-w-0 flex-1">
                                    <p className="font-medium text-foreground">
                                      {lesson.title}
                                    </p>

                                    {lesson.description && (
                                      <p className="mt-1 text-sm text-muted-foreground">
                                        {lesson.description}
                                      </p>
                                    )}
                                  </div>

                                  {lesson.preview && (
                                    <span className="shrink-0 rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-primary">
                                      Preview
                                    </span>
                                  )}

                                  <span className="shrink-0 text-sm text-muted-foreground">
                                    {lesson.duration} min
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        )}
                      </div>
                    ),
                  )}
                </div>
              </section>
            )}

            {/* FAQs */}

            {faqs.length > 0 && (
              <section className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground">
                  Frequently Asked Questions
                </h2>

                <div className="mt-6 divide-y divide-border">
                  {faqs.map((faq, index) => {
                    const isOpen =
                      openFaq === index;

                    return (
                      <div
                        key={`${faq.order}-${faq.question}`}
                        className="py-4"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaq(
                              isOpen
                                ? null
                                : index,
                            )
                          }
                          className="flex w-full items-center justify-between gap-6 text-left"
                        >
                          <span className="font-semibold text-foreground">
                            {faq.question}
                          </span>

                          <ChevronDown
                            className={`h-5 w-5 shrink-0 text-muted-foreground transition ${
                              isOpen
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <p className="mt-3 pr-8 leading-7 text-muted-foreground">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground">
                Program Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-secondary p-4">
                  <p className="text-sm text-muted-foreground">
                    Duration
                  </p>

                  <p className="mt-1 font-semibold text-foreground">
                    {formatDuration(program)}
                  </p>
                </div>

                <div className="rounded-2xl bg-secondary p-4">
                  <p className="text-sm text-muted-foreground">
                    Level
                  </p>

                  <p className="mt-1 font-semibold capitalize text-foreground">
                    {program.level}
                  </p>
                </div>

                <div className="rounded-2xl bg-secondary p-4">
                  <p className="text-sm text-muted-foreground">
                    Enrollments
                  </p>

                  <p className="mt-1 font-semibold text-foreground">
                    {enrollments}
                  </p>
                </div>

                <div className="rounded-2xl bg-secondary p-4">
                  <p className="text-sm text-muted-foreground">
                    Rating
                  </p>

                  <div className="mt-1 flex items-center gap-2 font-semibold text-foreground">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />

                    {rating > 0
                      ? rating.toFixed(1)
                      : "New"}

                    {totalReviews > 0 && (
                      <span className="text-sm font-normal text-muted-foreground">
                        ({totalReviews} reviews)
                      </span>
                    )}
                  </div>
                </div>

                <div className="rounded-2xl bg-[#EFF6FF] p-5">
                  <p className="text-sm text-primary">
                    Program Fee
                  </p>

                  <p className="mt-1 text-3xl font-bold text-primary">
                    {program.isFree
                      ? "Free"
                      : `${currencySymbol}${displayPrice.toLocaleString()}`}
                  </p>

                  {hasDiscount && (
                    <p className="mt-1 text-sm text-muted-foreground line-through">
                      {currencySymbol}
                      {price.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="button"
                disabled
                className="mt-6 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white opacity-90"
              >
                <PlayCircle className="h-5 w-5" />
                Purchase / Enroll
              </button>

              <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
                Payment and enrollment API will be
                connected next.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ProgramDetailsPage;