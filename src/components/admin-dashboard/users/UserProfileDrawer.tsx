import { memo } from "react";
import {
  X,
  Mail,
  Phone,
  Globe,
  MapPin,
  Calendar,
  Clock,
  Building2,
  Briefcase,
  ShieldCheck,
  Crown,
} from "lucide-react";

import type { AdminUser } from "@/types/admin-users";

interface UserProfileDrawerProps {
  open: boolean;
  user: AdminUser | null;
  onClose: () => void;
}

function UserProfileDrawer({
  open,
  user,
  onClose,
}: UserProfileDrawerProps) {
  if (!open || !user) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />

      {/* Drawer */}

      <aside className="fixed right-0 top-0 z-50 h-screen w-full overflow-y-auto bg-secondary shadow-2xl lg:w-[620px]">

        {/* Cover */}

        <div className="relative h-56">

          <img
            src={user.coverImage}
            alt={user.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0  from-black/60 via-black/10 to-transparent" />

          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-2xl bg-card p-3 shadow-lg transition hover:scale-105"
          >
            <X className="h-5 w-5" />
          </button>

        </div>

        {/* Profile */}

        <div className="relative px-8 pb-8">

          <div className="-mt-16 flex items-end justify-between">

            <div className="flex items-end gap-5">

              <img
                src={user.avatar}
                alt={user.name}
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl"
              />

              <div className="pb-2">

                <div className="flex items-center gap-2">

                  <h2 className="text-3xl font-bold text-foreground">
                    {user.name}
                  </h2>

                  {user.verification === "verified" && (
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  )}

                </div>

                <p className="mt-1 text-muted-foreground">
                  @{user.username}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      user.membership === "pro"
                        ? "bg-secondary text-muted-foreground"
                        : user.membership === "premium"
                        ? "bg-[#FFFBEB] text-[#B45309]"
                        : user.membership === "basic"
                        ? "bg-[#EFF6FF] text-[#2563EB]"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    <Crown className="mr-1 inline h-4 w-4" />
                    {user.membership.toUpperCase()}
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      user.status === "active"
                        ? "bg-[#ECFDF5] text-[#065F46]"
                        : user.status === "inactive"
                        ? "bg-secondary text-foreground"
                        : user.status === "blocked"
                        ? "bg-[#FFDAD6] text-[#BA1A1A]"
                        : "bg-[#FFFBEB] text-[#B45309]"
                    }`}
                  >
                    {user.status.toUpperCase()}
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* About */}

          <div className="mt-8 rounded-[28px] bg-card p-6 shadow-sm">

            <h3 className="text-lg font-bold text-foreground">
              About
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              {user.bio}
            </p>

          </div>

          {/* Basic Information */}

          <div className="mt-6 rounded-[28px] bg-card p-6 shadow-sm">

            <h3 className="mb-6 text-lg font-bold text-foreground">
              Basic Information
            </h3>

            <div className="grid gap-5">

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>{user.email}</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>{user.phone}</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>
                  {user.city}, {user.country}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <span>{user.website || "-"}</span>
              </div>

              <div className="flex items-center gap-4">
                <Building2 className="h-5 w-5 text-muted-foreground" />
                <span>{user.company}</span>
              </div>

              <div className="flex items-center gap-4">
                <Briefcase className="h-5 w-5 text-muted-foreground" />
                <span>{user.occupation}</span>
              </div>

              <div className="flex items-center gap-4">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span>{user.joinedAt}</span>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>{user.lastActive}</span>
              </div>

            </div>

          </div>
                    {/* Statistics */}

          <div className="mt-6 rounded-[28px] bg-card p-6 shadow-sm">

            <h3 className="mb-6 text-lg font-bold text-foreground">
              User Statistics
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-secondary p-5">

                <p className="text-sm text-muted-foreground">
                  Sessions
                </p>

                <h4 className="mt-2 text-2xl font-bold text-foreground">
                  {user.sessions}
                </h4>

              </div>

              <div className="rounded-2xl bg-secondary p-5">

                <p className="text-sm text-muted-foreground">
                  Programs
                </p>

                <h4 className="mt-2 text-2xl font-bold text-foreground">
                  {user.programs}
                </h4>

              </div>

              <div className="rounded-2xl bg-secondary p-5">

                <p className="text-sm text-muted-foreground">
                  Certificates
                </p>

                <h4 className="mt-2 text-2xl font-bold text-foreground">
                  {user.certificates}
                </h4>

              </div>

              <div className="rounded-2xl bg-secondary p-5">

                <p className="text-sm text-muted-foreground">
                  Reviews
                </p>

                <h4 className="mt-2 text-2xl font-bold text-foreground">
                  {user.reviews}
                </h4>

              </div>

            </div>

          </div>

          {/* Profile Completion */}

          <div className="mt-6 rounded-[28px] bg-card p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <h3 className="text-lg font-bold text-foreground">
                Profile Completion
              </h3>

              <span className="font-bold text-primary">
                {user.completion}%
              </span>

            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-secondary">

              <div
                className="h-full rounded-full  bg-primary   transition-all duration-700"
                style={{
                  width: `${user.completion}%`,
                }}
              />

            </div>

          </div>

          {/* Skills */}

          <div className="mt-6 rounded-[28px] bg-card p-6 shadow-sm">

            <h3 className="mb-5 text-lg font-bold text-foreground">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              {user.skills.map((skill) => (

                <span
                  key={skill}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#2563EB]"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

          {/* Summary */}

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            <div className="rounded-[28px]  bg-primary  p-6 text-white">

              <p className="text-blue-100">
                Lifetime Spending
              </p>

              <h3 className="mt-3 text-3xl font-bold">

                ₹{user.totalSpent.toLocaleString()}

              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Total purchases made on the platform.
              </p>

            </div>

            <div className="rounded-[28px]  bg-[#10B981]  p-6 text-white">

              <p className="text-emerald-100">
                Favorite Mentors
              </p>

              <h3 className="mt-3 text-3xl font-bold">

                {user.favoriteMentors}

              </h3>

              <p className="mt-2 text-sm text-emerald-100">
                Mentors added to favourites.
              </p>

            </div>

          </div>

          {/* Quick Summary */}

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-border bg-card p-5 text-center">

              <p className="text-sm text-muted-foreground">
                Purchased Programs
              </p>

              <h4 className="mt-2 text-2xl font-bold text-foreground">
                {user.purchasedPrograms.length}
              </h4>

            </div>

            <div className="rounded-2xl border border-border bg-card p-5 text-center">

              <p className="text-sm text-muted-foreground">
                Booked Sessions
              </p>

              <h4 className="mt-2 text-2xl font-bold text-foreground">
                {user.bookedSessionHistory.length}
              </h4>

            </div>

            <div className="rounded-2xl border border-border bg-card p-5 text-center">

              <p className="text-sm text-muted-foreground">
                Certificates
              </p>

              <h4 className="mt-2 text-2xl font-bold text-foreground">
                {user.certificatesList.length}
              </h4>

            </div>

          </div>
                    {/* Purchased Programs */}

          <div className="mt-6 rounded-[28px] bg-card p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="text-lg font-bold text-foreground">
                Purchased Programs
              </h3>

              <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">
                {user.purchasedPrograms.length} Programs
              </span>

            </div>

            <div className="space-y-4">

              {user.purchasedPrograms.map((program) => (

                <div
                  key={program.id}
                  className="rounded-2xl border border-border p-4 transition hover:border-blue-200 hover:bg-blue-50/30"
                >

                  <div className="flex items-center gap-4">

                    <img
                      src={program.thumbnail}
                      alt={program.title}
                      className="h-16 w-16 rounded-xl object-cover"
                    />

                    <div className="min-w-0 flex-1">

                      <h4 className="truncate font-semibold text-foreground">
                        {program.title}
                      </h4>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {program.mentorName}
                      </p>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">

                        <div
                          className="h-full rounded-full  bg-primary "
                          style={{
                            width: `${program.progress}%`,
                          }}
                        />

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Payment History */}

          <div className="mt-6 rounded-[28px] bg-card p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="text-lg font-bold text-foreground">
                Payment History
              </h3>

              <span className="text-sm text-muted-foreground">
                {user.paymentHistory.length} Transactions
              </span>

            </div>

            <div className="space-y-4">

              {user.paymentHistory.map((payment) => (

                <div
                  key={payment.id}
                  className="flex items-center justify-between rounded-2xl border border-border p-4"
                >

                  <div>

                    <p className="font-semibold text-foreground">
                      ₹{payment.amount.toLocaleString()}
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {payment.method}
                    </p>

                  </div>

                  <div className="text-right">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        payment.status === "paid"
                          ? "bg-[#ECFDF5] text-[#065F46]"
                          : payment.status === "pending"
                          ? "bg-[#FFFBEB] text-[#B45309]"
                          : payment.status === "failed"
                          ? "bg-[#FFDAD6] text-[#BA1A1A]"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      {payment.status.toUpperCase()}
                    </span>

                    <p className="mt-2 text-xs text-muted-foreground">
                      {payment.createdAt}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Booked Sessions */}

          <div className="mt-6 rounded-[28px] bg-card p-6 shadow-sm">

            <h3 className="mb-6 text-lg font-bold text-foreground">
              Booked Sessions
            </h3>

            <div className="space-y-4">

              {user.bookedSessionHistory.map((session) => (

                <div
                  key={session.id}
                  className="rounded-2xl border border-border p-4"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h4 className="font-semibold text-foreground">
                        {session.sessionType}
                      </h4>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {session.mentorName}
                      </p>

                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        session.status === "completed"
                          ? "bg-[#ECFDF5] text-[#065F46]"
                          : session.status === "upcoming"
                          ? "bg-[#EFF6FF] text-[#2563EB]"
                          : "bg-[#FFDAD6] text-[#BA1A1A]"
                      }`}
                    >
                      {session.status}
                    </span>

                  </div>

                  <div className="mt-4 flex justify-between text-sm text-muted-foreground">

                    <span>{session.date}</span>

                    <span>{session.time}</span>

                    <span>{session.duration}</span>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Certificates */}

          <div className="mt-6 rounded-[28px] bg-card p-6 shadow-sm">

            <h3 className="mb-6 text-lg font-bold text-foreground">
              Certificates
            </h3>

            <div className="space-y-3">

              {user.certificatesList.map((certificate) => (

                <div
                  key={certificate.id}
                  className="flex items-center justify-between rounded-2xl border border-border p-4"
                >

                  <div>

                    <h4 className="font-semibold text-foreground">
                      {certificate.title}
                    </h4>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {certificate.issuedBy}
                    </p>

                  </div>

                  <span className="text-sm text-muted-foreground">
                    {certificate.issuedDate}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Recent Activity */}

          <div className="mt-6 rounded-[28px] bg-card p-6 shadow-sm">

            <h3 className="mb-6 text-lg font-bold text-foreground">
              Recent Activity
            </h3>

            <div className="space-y-5">

              {user.activities.map((activity) => (

                <div
                  key={activity.id}
                  className="relative border-l-2 border-blue-200 pl-6"
                >

                  <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary" />

                  <h4 className="font-semibold text-foreground">
                    {activity.title}
                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {activity.description}
                  </p>

                  <p className="mt-2 text-xs text-muted-foreground">
                    {activity.createdAt}
                  </p>

                </div>

              ))}

            </div>

          </div>
                    {/* Admin Notes */}

          <div className="mt-6 rounded-[28px] bg-card p-6 shadow-sm">

            <h3 className="mb-5 text-lg font-bold text-foreground">
              Admin Notes
            </h3>

            <div className="rounded-2xl border border-border bg-secondary p-5">

              <p className="leading-7 text-muted-foreground">
                {user.notes}
              </p>

            </div>

          </div>

          {/* Footer Actions */}

          <div className="mt-8 border-t border-border pt-8">

            <div className="grid gap-4 sm:grid-cols-2">

              <button
                type="button"
                className="rounded-2xl bg-primary px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
              >
                Edit User
              </button>

              <button
                type="button"
                className="rounded-2xl border border-border bg-card px-6 py-4 font-semibold text-foreground transition-all duration-300 hover:bg-secondary"
              >
                Send Email
              </button>

              <button
                type="button"
                className="rounded-2xl bg-[#FFFBEB] px-6 py-4 font-semibold text-[#B45309] transition-all duration-300 hover:bg-amber-200"
              >
                Block User
              </button>

              <button
                type="button"
                className="rounded-2xl bg-[#FFDAD6] px-6 py-4 font-semibold text-[#BA1A1A] transition-all duration-300 hover:bg-red-200"
              >
                Delete User
              </button>

            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-5 w-full rounded-2xl border border-border bg-card px-6 py-4 font-semibold text-foreground transition-all duration-300 hover:bg-secondary"
            >
              Close Drawer
            </button>

          </div>

        </div>

      </aside>

    </>
  );
}
export default memo(UserProfileDrawer);