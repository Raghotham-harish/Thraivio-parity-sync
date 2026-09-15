import {
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Star,
  UserCheck,
  UserX,
} from "lucide-react";

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";
import type { MentorStats } from "@/types/admin-mentors";

interface MentorsStatsProps {
  stats: MentorStats;
}

export default function MentorsStats({ stats }: MentorsStatsProps) {
  const cards: {
    title: string;
    value: number;
    icon: typeof BadgeCheck;
    accent: StatCardAccent;
  }[] = [
    { title: "Total Mentors", value: stats.totalMentors, icon: BadgeCheck, accent: "default" },
    { title: "Active", value: stats.activeMentors, icon: UserCheck, accent: "success" },
    { title: "Pending", value: stats.pendingApprovals, icon: Clock3, accent: "default" },
    { title: "Verified", value: stats.verifiedMentors, icon: ShieldCheck, accent: "success" },
    { title: "Suspended", value: stats.suspendedMentors, icon: UserX, accent: "default" },
    { title: "Featured", value: stats.featuredMentors, icon: Star, accent: "default" },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value.toLocaleString()}
          icon={card.icon}
          accent={card.accent}
        />
      ))}
    </section>
  );
}
