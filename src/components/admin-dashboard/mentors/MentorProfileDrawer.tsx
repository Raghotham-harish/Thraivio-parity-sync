import {
  Award,
  BookOpen,
  Calendar,
  Globe,
  Mail,
  MapPin,
  ShieldCheck,
  Star,
  Wallet,
  X,
  Clock3,
} from "lucide-react";

import type { AdminMentor } from "@/types/admin-mentors";

interface MentorProfileDrawerProps {
  open: boolean;
  mentor: AdminMentor | null;
  onClose: () => void;
  onSuspend: (mentor: AdminMentor) => void;
  onApprove: (mentor: AdminMentor) => void;
  onActivate: (mentor: AdminMentor) => void;
  onDeactivate: (mentor: AdminMentor) => void;
  onUnblock: (mentor: AdminMentor) => void;
  onPublish: (mentor: AdminMentor) => void;
  onUnpublish: (mentor: AdminMentor) => void;
  onSoftDelete: (mentor: AdminMentor) => void;
  onRestore: (mentor: AdminMentor) => void;
}
export default function MentorProfileDrawer({
  open,
  mentor,
  onClose,
  onSuspend,
  onApprove,
  onActivate,
  onDeactivate,
  onUnblock,
  onPublish,
  onUnpublish,
  onSoftDelete,
  onRestore,
}: MentorProfileDrawerProps) {
  if (!open || !mentor) return null;

  return (
    <div className="fixed inset-0 z-50">

      {/* Overlay */}

      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Drawer */}

      <div className="absolute right-0 top-0 flex h-screen w-full max-w-3xl flex-col overflow-hidden bg-card shadow-2xl">

        {/* Cover */}

        <div className="relative h-56">

          <img
            src={mentor.coverImage}
            alt={mentor.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0  from-black/70 via-black/20 to-transparent" />

          <button
            onClick={onClose}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-card/20 text-white backdrop-blur transition hover:bg-card/30"
          >
            <X className="h-5 w-5" />
          </button>

          {mentor.featured && (
            <span className="absolute left-6 top-6 rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-white shadow-lg">

              Featured Mentor

            </span>
          )}

        </div>

        {/* Scroll Body */}

        <div className="flex-1 overflow-y-auto">

          {/* Hero */}

          <div className="relative px-8 pb-8">

            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="-mt-16 h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl"
            />

            <div className="mt-5 flex items-start justify-between gap-6">

              <div>

                <div className="flex items-center gap-3">

                  <h2 className="text-3xl font-bold text-foreground">

                    {mentor.name}

                  </h2>

                  {mentor.verification === "verified" && (
                    <ShieldCheck className="h-7 w-7 text-emerald-500" />
                  )}

                </div>

                <p className="mt-2 text-lg text-muted-foreground">

                  {mentor.headline}

                </p>

                <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">

                  <div className="flex items-center gap-2">

                    <Mail className="h-4 w-4" />

                    {mentor.email}

                  </div>

                  <div className="flex items-center gap-2">

                    <MapPin className="h-4 w-4" />

                    {mentor.location}

                  </div>

                  <div className="flex items-center gap-2">

                    <Globe className="h-4 w-4" />

                    {mentor.timezone}

                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-border bg-secondary px-5 py-4">

                <div className="flex items-center gap-2">

                  <Star className="h-5 w-5 fill-[#F59E0B] text-[#F59E0B]" />

                  <span className="text-lg font-bold">

                    {mentor.rating}

                  </span>

                </div>

                <p className="mt-1 text-sm text-muted-foreground">

                  {mentor.totalReviews} Reviews

                </p>

              </div>

            </div>
                        {/* About */}

            <div className="mt-10">

              <h3 className="text-xl font-bold text-foreground">

                About Mentor

              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">

                {mentor.bio}

              </p>

            </div>

            {/* Analytics */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {/* Experience */}

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-lg">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Experience

                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-foreground">

                      {mentor.experience} Years

                    </h3>

                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF]">

                    <Award className="h-7 w-7 text-primary" />

                  </div>

                </div>

              </div>

              {/* Sessions */}

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-lg">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Completed Sessions

                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-foreground">

                      {mentor.completedSessions.toLocaleString()}

                    </h3>

                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF5]">

                    <Calendar className="h-7 w-7 text-[#0F8F65]" />

                  </div>

                </div>

              </div>

              {/* Programs */}

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-lg">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Active Programs

                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-foreground">

                      {mentor.activePrograms}

                    </h3>

                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">

                    <BookOpen className="h-7 w-7 text-violet-600" />

                  </div>

                </div>

              </div>

              {/* Earnings */}

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-lg">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Total Earnings

                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-foreground">

                      ${mentor.earnings.toLocaleString()}

                    </h3>

                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFFBEB]">

                    <Wallet className="h-7 w-7 text-amber-600" />

                  </div>

                </div>

              </div>

            </div>
                        {/* Skills */}

            <div className="mt-10">

              <h3 className="text-xl font-bold text-foreground">

                Skills & Expertise

              </h3>

              <div className="mt-5 flex flex-wrap gap-3">

                {mentor.skills.map((skill) => (

                  <span
                    key={skill.id}
                    className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#2563EB] transition hover:bg-[#EFF6FF]"
                  >
                    {skill.name}
                  </span>

                ))}

              </div>

            </div>

            {/* Languages */}

            <div className="mt-10">

              <h3 className="text-xl font-bold text-foreground">

                Languages

              </h3>

              <div className="mt-5 flex flex-wrap gap-3">

                {mentor.languages.map((language) => (

                  <span
                    key={language.id}
                    className="rounded-full border border-[#A7E8CE] bg-[#ECFDF5] px-4 py-2 text-sm font-semibold text-[#065F46]"
                  >
                    {language.name}
                  </span>

                ))}

              </div>

            </div>

            {/* Certifications */}

            <div className="mt-10">

              <h3 className="text-xl font-bold text-foreground">

                Certifications

              </h3>

              <div className="mt-5 space-y-4">

                {mentor.certifications.map((certificate) => (

                  <div
                    key={certificate.id}
                    className="flex items-start justify-between rounded-2xl border border-border bg-secondary p-5 transition hover:border-blue-300 hover:bg-card"
                  >

                    <div>

                      <h4 className="font-semibold text-foreground">

                        {certificate.title}

                      </h4>

                      <p className="mt-2 text-sm text-muted-foreground">

                        Issued by {certificate.issuer}

                      </p>

                    </div>

                    <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">

                      {certificate.year}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Membership & Status */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {/* Membership */}

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">

                <p className="text-sm text-muted-foreground">

                  Membership

                </p>

                <div className="mt-4">

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold capitalize ${
                      mentor.membership === "enterprise"
                        ? "bg-secondary text-muted-foreground"
                        : mentor.membership === "pro"
                        ? "bg-[#EFF6FF] text-[#2563EB]"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {mentor.membership}
                  </span>

                </div>

              </div>

              {/* Status */}

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">

                <p className="text-sm text-muted-foreground">

                  Account Status

                </p>

                <div className="mt-4 flex flex-wrap gap-3">

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold capitalize ${
                      mentor.status === "active"
                        ? "bg-[#ECFDF5] text-[#065F46]"
                        : mentor.status === "pending"
                        ? "bg-[#FFFBEB] text-[#B45309]"
                        : "bg-[#FFDAD6] text-[#BA1A1A]"
                    }`}
                  >
                    {mentor.status}
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold capitalize ${
                      mentor.verification === "verified"
                        ? "bg-[#EFF6FF] text-[#2563EB]"
                        : mentor.verification === "pending"
                        ? "bg-[#FFFBEB] text-[#B45309]"
                        : "bg-[#FFDAD6] text-[#BA1A1A]"
                    }`}
                  >
                    {mentor.verification}
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      mentor.available
                        ? "bg-[#ECFDF5] text-[#065F46]"
                        : "bg-[#FFDAD6] text-[#BA1A1A]"
                    }`}
                  >
                    {mentor.available
                      ? "Available"
                      : "Unavailable"}
                  </span>

                </div>

              </div>

            </div>
                        {/* Account Timeline */}

            <div className="mt-10">

              <h3 className="text-xl font-bold text-foreground">

                Account Timeline

              </h3>

              <div className="mt-5 space-y-4">

                <div className="flex items-center justify-between rounded-2xl border border-border bg-secondary p-5">

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Joined Platform

                    </p>

                    <h4 className="mt-2 text-lg font-semibold text-foreground">

                      {mentor.joinedAt}

                    </h4>

                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF]">

                    <Calendar className="h-7 w-7 text-primary" />

                  </div>

                </div>

                <div className="flex items-center justify-between rounded-2xl border border-border bg-secondary p-5">

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Last Active

                    </p>

                    <h4 className="mt-2 text-lg font-semibold text-foreground">

                      {mentor.lastActive}

                    </h4>

                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF5]">

                    <Clock3 className="h-7 w-7 text-[#0F8F65]" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="border-t border-border bg-card px-8 py-6">

          <div className="flex flex-wrap justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl border border-border bg-card px-6 py-3 font-semibold text-foreground transition hover:bg-secondary"
            >
              Close
            </button>

            {mentor.status === "active" ? (
  <button
    type="button"
    onClick={() => onDeactivate(mentor)}
    className="rounded-2xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-destructive"
  >
    Deactivate Mentor
  </button>
) : (
  <button
    type="button"
    onClick={() => onActivate(mentor)}
    className="rounded-2xl bg-[#10B981] px-6 py-3 font-semibold text-white transition hover:bg-[#0da271]"
  >
    Activate Mentor
  </button>
)}

{mentor.status === "suspended" && (
  <button
    type="button"
    onClick={() => onUnblock(mentor)}
    className="rounded-2xl bg-[#10B981] px-6 py-3 font-semibold text-white transition hover:bg-[#0da271]"
  >
    Unblock Mentor
  </button>
)}

{mentor.status === "active" && (
  mentor.verification === "verified" && (
    <button
      type="button"
      onClick={() =>
        mentor.published
          ? onUnpublish(mentor)
          : onPublish(mentor)
      }
      className="rounded-2xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90"
    >
      {mentor.published
        ? "Unpublish Mentor"
        : "Publish Mentor"}
    </button>
  )
)}

            <button
  type="button"
  onClick={() => onSuspend(mentor)}
  className="rounded-2xl bg-[#F59E0B] px-6 py-3 font-semibold text-white transition hover:bg-[#D97706]"
>
  Suspend Mentor
</button>

            <button
  type="button"
  onClick={() => onApprove(mentor)}
  className="rounded-2xl bg-[#10B981] px-6 py-3 font-semibold text-white transition hover:bg-[#0da271]"
>
  Approve Mentor
</button>

{mentor.status === "suspended" ? (
  <button
    type="button"
    onClick={() => onRestore(mentor)}
    className="rounded-2xl bg-[#10B981] px-6 py-3 font-semibold text-white transition hover:bg-[#0da271]"
  >
    Restore Mentor
  </button>
) : (
  <button
    type="button"
    onClick={() => onSoftDelete(mentor)}
    className="rounded-2xl bg-destructive px-6 py-3 font-semibold text-white transition hover:bg-destructive/90"
  >
    Soft Delete Mentor
  </button>
)}

          </div>

        </div>

      </div>

    </div>
  );
}