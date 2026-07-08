import {
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Star,
  UserCheck,
  UserX,
} from "lucide-react";

import type { MentorStats } from "@/types/admin-mentors";

interface MentorsStatsProps {
  stats: MentorStats;
}

export default function MentorsStats({
  stats,
}: MentorsStatsProps) {
  const cards = [
    {
      title: "Total Mentors",
      value: stats.totalMentors,
      icon: BadgeCheck,
      color: "bg-blue-500",
    },
    {
      title: "Active",
      value: stats.activeMentors,
      icon: UserCheck,
      color: "bg-emerald-500",
    },
    {
      title: "Pending",
      value: stats.pendingApprovals,
      icon: Clock3,
      color: "bg-amber-500",
    },
    {
      title: "Verified",
      value: stats.verifiedMentors,
      icon: ShieldCheck,
      color: "bg-indigo-500",
    },
    {
      title: "Suspended",
      value: stats.suspendedMentors,
      icon: UserX,
      color: "bg-red-500",
    },
    {
      title: "Featured",
      value: stats.featuredMentors,
      icon: Star,
      color: "bg-pink-500",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  {card.title}
                </p>

                <h3 className="mt-3 text-4xl font-bold text-slate-900">
                  {card.value.toLocaleString()}
                </h3>

                <div className="mt-5 h-2 w-24 overflow-hidden rounded-full bg-slate-100">

                  <div
                    className={`h-full rounded-full ${card.color}`}
                    style={{ width: "70%" }}
                  />

                </div>

              </div>

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-3xl ${card.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className="h-8 w-8" />
              </div>

            </div>
          </div>
        );
      })}

    </section>
  );
}