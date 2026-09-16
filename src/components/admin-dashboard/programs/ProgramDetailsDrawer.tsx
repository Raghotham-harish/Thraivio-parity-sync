
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  FileText,
  Globe,
  Image as ImageIcon,
  Layers,
  Star,
  Tag,
  Users,
  X,
} from "lucide-react";

import type { Program } from "@/services/program.service";

interface ProgramDetailsDrawerProps {
  open: boolean;
  program: Program | null;
  onClose: () => void;
}

const statusStyles: Record<string, string> = {
  draft: "bg-slate-100 text-slate-700",
  pending: "bg-amber-100 text-amber-700",
  published: "bg-emerald-100 text-emerald-700",
  rejected: "bg-red-100 text-red-700",
  inactive: "bg-orange-100 text-orange-700",
  archived: "bg-gray-200 text-gray-700",
};

const formatDate = (date?: string | null) => {
  if (!date) return "Not available";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatCurrency = (
  amount: number,
  currency: string = "INR",
) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
};

const getStatusLabel = (status: string) => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};

const InfoItem = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: React.ReactNode;
}) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-500">
        <Icon className="h-4 w-4" />
        {label}
      </div>

      <div className="text-sm font-semibold text-slate-900">
        {value}
      </div>
    </div>
  );
};

const SectionTitle = ({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) => {
  return (
    <div className="mb-4 flex items-center gap-2">
      <Icon className="h-5 w-5 text-indigo-600" />
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
    </div>
  );
};

export default function ProgramDetailsDrawer({
  open,
  program,
  onClose,
}: ProgramDetailsDrawerProps) {
  if (!open || !program) return null;

  const pricing = program.pricing;
  const analytics = program.analytics;
  const sections = program.curriculum?.sections ?? [];

  const price = pricing?.isFree
    ? "Free"
    : formatCurrency(
        program.finalPrice ?? pricing?.price ?? 0,
        pricing?.currency || "INR",
      );

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end bg-slate-950/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Program details"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside className="flex h-full w-full max-w-3xl flex-col overflow-hidden bg-slate-50 shadow-2xl">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Program Management
            </p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">
              Program Details
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close program details"
            className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="space-y-6 p-5 sm:p-6">
            {/* Hero */}
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative aspect-[16/7] w-full overflow-hidden bg-slate-100">
                {program.thumbnail?.url ? (
                  <img
                    src={program.thumbnail.url}
                    alt={program.thumbnail.alt || program.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-slate-300" />
                  </div>
                )}

                <div className="absolute left-4 top-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      statusStyles[program.status] ||
                      "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {getStatusLabel(program.status)}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="rounded-md bg-indigo-50 px-2 py-1 text-indigo-700">
                    {program.category}
                  </span>

                  {program.subCategory && (
                    <span className="rounded-md bg-slate-100 px-2 py-1">
                      {program.subCategory}
                    </span>
                  )}

                  <span className="rounded-md bg-slate-100 px-2 py-1">
                    {program.level}
                  </span>
                </div>

                <h1 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                  {program.title}
                </h1>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {program.shortDescription}
                </p>

                {program.description && (
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-600">
                    {program.description}
                  </p>
                )}
              </div>
            </section>

            {/* Basic information */}
            <section>
              <SectionTitle icon={FileText} title="Basic Information" />

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <InfoItem
                  icon={Clock}
                  label="Duration"
                  value={`${program.duration} ${program.durationUnit}`}
                />

                <InfoItem
                  icon={Layers}
                  label="Difficulty Level"
                  value={getStatusLabel(program.level)}
                />

                <InfoItem
                  icon={Globe}
                  label="Languages"
                  value={
                    program.languages?.length
                      ? program.languages.join(", ")
                      : "Not specified"
                  }
                />

                <InfoItem
                  icon={Tag}
                  label="Tags"
                  value={
                    program.tags?.length
                      ? program.tags.join(", ")
                      : "No tags"
                  }
                />
              </div>
            </section>

            {/* Analytics */}
            <section>
              <SectionTitle icon={Users} title="Program Analytics" />

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                <InfoItem
                  icon={Users}
                  label="Enrollments"
                  value={analytics?.enrollments ?? 0}
                />

                <InfoItem
                  icon={Star}
                  label="Rating"
                  value={`${analytics?.averageRating ?? 0} / 5`}
                />

                <InfoItem
                  icon={FileText}
                  label="Reviews"
                  value={analytics?.totalReviews ?? 0}
                />

                <InfoItem
                  icon={Globe}
                  label="Views"
                  value={analytics?.views ?? 0}
                />
              </div>
            </section>

            {/* Pricing */}
            <section>
              <SectionTitle icon={DollarSign} title="Pricing Details" />

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      Current Price
                    </p>

                    <p className="mt-1 text-2xl font-bold text-slate-900">
                      {price}
                    </p>
                  </div>
                </div>

                {!pricing?.isFree &&
                  pricing?.discountPrice > 0 && (
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <InfoItem
                        icon={DollarSign}
                        label="Original Price"
                        value={formatCurrency(
                          pricing.price,
                          pricing.currency,
                        )}
                      />

                      <InfoItem
                        icon={DollarSign}
                        label="Discount Price"
                        value={formatCurrency(
                          pricing.discountPrice,
                          pricing.currency,
                        )}
                      />
                    </div>
                  )}

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="rounded-md bg-slate-100 px-2 py-1">
                    Currency: {pricing?.currency || "INR"}
                  </span>

                  <span className="rounded-md bg-slate-100 px-2 py-1">
                    Tax included: {pricing?.taxIncluded ? "Yes" : "No"}
                  </span>

                  <span className="rounded-md bg-slate-100 px-2 py-1">
                    Free program: {pricing?.isFree ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </section>

            {/* Benefits */}
            {program.benefits?.length > 0 && (
              <section>
                <SectionTitle icon={Award} title="Program Benefits" />

                <div className="space-y-3">
                  {program.benefits.map((benefit, index) => (
                    <div
                      key={`${benefit.title}-${index}`}
                      className="rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                        <div>
                          <h4 className="text-sm font-bold text-slate-900">
                            {benefit.title}
                          </h4>

                          {benefit.description && (
                            <p className="mt-1 text-sm leading-5 text-slate-600">
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
            {program.requirements?.length > 0 && (
              <section>
                <SectionTitle icon={CheckCircle2} title="Requirements" />

                <div className="space-y-3">
                  {program.requirements.map((requirement, index) => (
                    <div
                      key={`${requirement.title}-${index}`}
                      className="rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">
                            {requirement.title}
                          </h4>

                          {requirement.description && (
                            <p className="mt-1 text-sm leading-5 text-slate-600">
                              {requirement.description}
                            </p>
                          )}
                        </div>

                        {requirement.mandatory && (
                          <span className="shrink-0 rounded-md bg-red-50 px-2 py-1 text-[10px] font-bold uppercase text-red-600">
                            Required
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Learning outcomes */}
            {program.learningOutcomes?.length > 0 && (
              <section>
                <SectionTitle
                  icon={CheckCircle2}
                  title="Learning Outcomes"
                />

                <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5">
                  {program.learningOutcomes.map((outcome, index) => (
                    <div
                      key={`${outcome.title}-${index}`}
                      className="flex items-start gap-3 border-b border-slate-100 py-3 last:border-0"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />

                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {outcome.title}
                        </p>

                        {outcome.description && (
                          <p className="mt-1 text-sm text-slate-600">
                            {outcome.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Curriculum */}
            <section>
              <SectionTitle icon={BookOpen} title="Curriculum" />

              {sections.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center">
                  <BookOpen className="mx-auto h-8 w-8 text-slate-300" />
                  <p className="mt-2 text-sm text-slate-500">
                    No curriculum sections available.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {sections.map((section, sectionIndex) => (
                    <details
                      key={`${section.title}-${sectionIndex}`}
                      className="group rounded-xl border border-slate-200 bg-white"
                      open={sectionIndex === 0}
                    >
                      <summary className="cursor-pointer list-none px-4 py-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs font-medium text-slate-500">
                              Section {sectionIndex + 1}
                            </p>

                            <h4 className="mt-1 text-sm font-bold text-slate-900">
                              {section.title}
                            </h4>
                          </div>

                          <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                            {section.lessons?.length ?? 0} lessons
                          </span>
                        </div>
                      </summary>

                      <div className="border-t border-slate-100 px-4 pb-4">
                        {section.description && (
                          <p className="py-3 text-sm text-slate-600">
                            {section.description}
                          </p>
                        )}

                        <div className="space-y-2">
                          {(section.lessons ?? []).map(
                            (lesson, lessonIndex) => (
                              <div
                                key={`${lesson.title}-${lessonIndex}`}
                                className="rounded-lg bg-slate-50 p-3"
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div className="flex items-start gap-2">
                                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />

                                    <div>
                                      <p className="text-sm font-semibold text-slate-800">
                                        {lesson.title}
                                      </p>

                                      {lesson.description && (
                                        <p className="mt-1 text-xs leading-5 text-slate-500">
                                          {lesson.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>

                                  {lesson.preview && (
                                    <span className="shrink-0 rounded-md bg-indigo-100 px-2 py-1 text-[10px] font-bold text-indigo-700">
                                      Preview
                                    </span>
                                  )}
                                </div>

                                <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-500">
                                  <span>
                                    Duration: {lesson.duration ?? 0} min
                                  </span>

                                  <span>
                                    Published:{" "}
                                    {lesson.isPublished ? "Yes" : "No"}
                                  </span>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              )}
            </section>

            {/* FAQs */}
            {program.faqs?.length > 0 && (
              <section>
                <SectionTitle icon={FileText} title="Frequently Asked Questions" />

                <div className="space-y-3">
                  {program.faqs.map((faq, index) => (
                    <details
                      key={`${faq.question}-${index}`}
                      className="rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <summary className="cursor-pointer text-sm font-bold text-slate-900">
                        {faq.question}
                      </summary>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Metadata */}
            <section>
              <SectionTitle icon={Calendar} title="Program Metadata" />

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <InfoItem
                  icon={Calendar}
                  label="Created At"
                  value={formatDate(program.createdAt)}
                />

                <InfoItem
                  icon={Calendar}
                  label="Last Updated"
                  value={formatDate(program.updatedAt)}
                />

                <InfoItem
                  icon={Calendar}
                  label="Published At"
                  value={formatDate(program.publishedAt)}
                />

                <InfoItem
                  icon={CheckCircle2}
                  label="Completion"
                  value={`${program.completionPercentage ?? 0}%`}
                />
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="flex shrink-0 justify-end border-t border-slate-200 bg-white px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Close Details
          </button>
        </div>
      </aside>
    </div>
  );
}