import { memo } from "react";

import {
  Award,
  BadgeCheck,
  Clock3,
  Download,
  Eye,
  ShieldCheck,
  Ban,
  TrendingUp,
} from "lucide-react";

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

interface CertificatesStatsProps {
  total: number;
  issued: number;
  pending: number;
  revoked: number;
  expired: number;
  verified: number;
  downloads: number;
  averageScore: number;
}

const buildStats = (props: CertificatesStatsProps): {
  title: string;
  value: string | number;
  icon: typeof Award;
  accent: StatCardAccent;
  description: string;
}[] => [
  { title: "Total Certificates", value: props.total, icon: Award, accent: "default", description: "Platform certificates" },
  { title: "Issued", value: props.issued, icon: BadgeCheck, accent: "success", description: "Successfully issued" },
  { title: "Pending", value: props.pending, icon: Clock3, accent: "default", description: "Awaiting issue" },
  { title: "Revoked", value: props.revoked, icon: Ban, accent: "default", description: "Revoked certificates" },
  { title: "Expired", value: props.expired, icon: Eye, accent: "default", description: "Expired credentials" },
  { title: "Verified", value: props.verified, icon: ShieldCheck, accent: "success", description: "Verified credentials" },
  { title: "Downloads", value: props.downloads, icon: Download, accent: "default", description: "Certificate downloads" },
  { title: "Average Score", value: `${props.averageScore}%`, icon: TrendingUp, accent: "success", description: "Learner performance" },
];

const CertificatesStats = (props: CertificatesStatsProps) => {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {buildStats(props).map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          description={stat.description}
          icon={stat.icon}
          accent={stat.accent}
        />
      ))}
    </section>
  );
};

export default memo(CertificatesStats);
