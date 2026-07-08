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

      <aside className="fixed right-0 top-0 z-50 h-screen w-full overflow-y-auto bg-slate-50 shadow-2xl lg:w-[620px]">

        {/* Cover */}

        <div className="relative h-56">

          <img
            src={user.coverImage}
            alt={user.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-2xl bg-white p-3 shadow-lg transition hover:scale-105"
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

                  <h2 className="text-3xl font-bold text-slate-900">
                    {user.name}
                  </h2>

                  {user.verification === "verified" && (
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
                  )}

                </div>

                <p className="mt-1 text-slate-500">
                  @{user.username}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      user.membership === "pro"
                        ? "bg-violet-100 text-violet-700"
                        : user.membership === "premium"
                        ? "bg-amber-100 text-amber-700"
                        : user.membership === "basic"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Crown className="mr-1 inline h-4 w-4" />
                    {user.membership.toUpperCase()}
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      user.status === "active"
                        ? "bg-emerald-100 text-emerald-700"
                        : user.status === "inactive"
                        ? "bg-slate-100 text-slate-700"
                        : user.status === "blocked"
                        ? "bg-red-100 text-red-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {user.status.toUpperCase()}
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* About */}

          <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm">

            <h3 className="text-lg font-bold text-slate-900">
              About
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {user.bio}
            </p>

          </div>

          {/* Basic Information */}

          <div className="mt-6 rounded-[28px] bg-white p-6 shadow-sm">

            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Basic Information
            </h3>

            <div className="grid gap-5">

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-slate-400" />
                <span>{user.email}</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-slate-400" />
                <span>{user.phone}</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-slate-400" />
                <span>
                  {user.city}, {user.country}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="h-5 w-5 text-slate-400" />
                <span>{user.website || "-"}</span>
              </div>

              <div className="flex items-center gap-4">
                <Building2 className="h-5 w-5 text-slate-400" />
                <span>{user.company}</span>
              </div>

              <div className="flex items-center gap-4">
                <Briefcase className="h-5 w-5 text-slate-400" />
                <span>{user.occupation}</span>
              </div>

              <div className="flex items-center gap-4">
                <Calendar className="h-5 w-5 text-slate-400" />
                <span>{user.joinedAt}</span>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-slate-400" />
                <span>{user.lastActive}</span>
              </div>

            </div>

          </div>
                    {/* Statistics */}

          <div className="mt-6 rounded-[28px] bg-white p-6 shadow-sm">

            <h3 className="mb-6 text-lg font-bold text-slate-900">
              User Statistics
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-sm text-slate-500">
                  Sessions
                </p>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  {user.sessions}
                </h4>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-sm text-slate-500">
                  Programs
                </p>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  {user.programs}
                </h4>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-sm text-slate-500">
                  Certificates
                </p>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  {user.certificates}
                </h4>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-sm text-slate-500">
                  Reviews
                </p>

                <h4 className="mt-2 text-2xl font-bold text-slate-900">
                  {user.reviews}
                </h4>

              </div>

            </div>

          </div>

          {/* Profile Completion */}

          <div className="mt-6 rounded-[28px] bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <h3 className="text-lg font-bold text-slate-900">
                Profile Completion
              </h3>

              <span className="font-bold text-blue-600">
                {user.completion}%
              </span>

            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">

              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-all duration-700"
                style={{
                  width: `${user.completion}%`,
                }}
              />

            </div>

          </div>

          {/* Skills */}

          <div className="mt-6 rounded-[28px] bg-white p-6 shadow-sm">

            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              {user.skills.map((skill) => (

                <span
                  key={skill}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

          {/* Summary */}

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            <div className="rounded-[28px] bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white">

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

            <div className="rounded-[28px] bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 text-white">

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

            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">

              <p className="text-sm text-slate-500">
                Purchased Programs
              </p>

              <h4 className="mt-2 text-2xl font-bold text-slate-900">
                {user.purchasedPrograms.length}
              </h4>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">

              <p className="text-sm text-slate-500">
                Booked Sessions
              </p>

              <h4 className="mt-2 text-2xl font-bold text-slate-900">
                {user.bookedSessionHistory.length}
              </h4>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">

              <p className="text-sm text-slate-500">
                Certificates
              </p>

              <h4 className="mt-2 text-2xl font-bold text-slate-900">
                {user.certificatesList.length}
              </h4>

            </div>

          </div>
                    {/* Purchased Programs */}

          <div className="mt-6 rounded-[28px] bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="text-lg font-bold text-slate-900">
                Purchased Programs
              </h3>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {user.purchasedPrograms.length} Programs
              </span>

            </div>

            <div className="space-y-4">

              {user.purchasedPrograms.map((program) => (

                <div
                  key={program.id}
                  className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/30"
                >

                  <div className="flex items-center gap-4">

                    <img
                      src={program.thumbnail}
                      alt={program.title}
                      className="h-16 w-16 rounded-xl object-cover"
                    />

                    <div className="min-w-0 flex-1">

                      <h4 className="truncate font-semibold text-slate-900">
                        {program.title}
                      </h4>

                      <p className="mt-1 text-sm text-slate-500">
                        {program.mentorName}
                      </p>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">

                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
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

          <div className="mt-6 rounded-[28px] bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="text-lg font-bold text-slate-900">
                Payment History
              </h3>

              <span className="text-sm text-slate-500">
                {user.paymentHistory.length} Transactions
              </span>

            </div>

            <div className="space-y-4">

              {user.paymentHistory.map((payment) => (

                <div
                  key={payment.id}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
                >

                  <div>

                    <p className="font-semibold text-slate-900">
                      ₹{payment.amount.toLocaleString()}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {payment.method}
                    </p>

                  </div>

                  <div className="text-right">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        payment.status === "paid"
                          ? "bg-emerald-100 text-emerald-700"
                          : payment.status === "pending"
                          ? "bg-amber-100 text-amber-700"
                          : payment.status === "failed"
                          ? "bg-red-100 text-red-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {payment.status.toUpperCase()}
                    </span>

                    <p className="mt-2 text-xs text-slate-500">
                      {payment.createdAt}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Booked Sessions */}

          <div className="mt-6 rounded-[28px] bg-white p-6 shadow-sm">

            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Booked Sessions
            </h3>

            <div className="space-y-4">

              {user.bookedSessionHistory.map((session) => (

                <div
                  key={session.id}
                  className="rounded-2xl border border-slate-200 p-4"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h4 className="font-semibold text-slate-900">
                        {session.sessionType}
                      </h4>

                      <p className="mt-1 text-sm text-slate-500">
                        {session.mentorName}
                      </p>

                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        session.status === "completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : session.status === "upcoming"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {session.status}
                    </span>

                  </div>

                  <div className="mt-4 flex justify-between text-sm text-slate-500">

                    <span>{session.date}</span>

                    <span>{session.time}</span>

                    <span>{session.duration}</span>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Certificates */}

          <div className="mt-6 rounded-[28px] bg-white p-6 shadow-sm">

            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Certificates
            </h3>

            <div className="space-y-3">

              {user.certificatesList.map((certificate) => (

                <div
                  key={certificate.id}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
                >

                  <div>

                    <h4 className="font-semibold text-slate-900">
                      {certificate.title}
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      {certificate.issuedBy}
                    </p>

                  </div>

                  <span className="text-sm text-slate-500">
                    {certificate.issuedDate}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Recent Activity */}

          <div className="mt-6 rounded-[28px] bg-white p-6 shadow-sm">

            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Recent Activity
            </h3>

            <div className="space-y-5">

              {user.activities.map((activity) => (

                <div
                  key={activity.id}
                  className="relative border-l-2 border-blue-200 pl-6"
                >

                  <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-blue-600" />

                  <h4 className="font-semibold text-slate-900">
                    {activity.title}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    {activity.description}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    {activity.createdAt}
                  </p>

                </div>

              ))}

            </div>

          </div>
                    {/* Admin Notes */}

          <div className="mt-6 rounded-[28px] bg-white p-6 shadow-sm">

            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Admin Notes
            </h3>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <p className="leading-7 text-slate-600">
                {user.notes}
              </p>

            </div>

          </div>

          {/* Footer Actions */}

          <div className="mt-8 border-t border-slate-200 pt-8">

            <div className="grid gap-4 sm:grid-cols-2">

              <button
                type="button"
                className="rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
              >
                Edit User
              </button>

              <button
                type="button"
                className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50"
              >
                Send Email
              </button>

              <button
                type="button"
                className="rounded-2xl bg-amber-100 px-6 py-4 font-semibold text-amber-700 transition-all duration-300 hover:bg-amber-200"
              >
                Block User
              </button>

              <button
                type="button"
                className="rounded-2xl bg-red-100 px-6 py-4 font-semibold text-red-700 transition-all duration-300 hover:bg-red-200"
              >
                Delete User
              </button>

            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-5 w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50"
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