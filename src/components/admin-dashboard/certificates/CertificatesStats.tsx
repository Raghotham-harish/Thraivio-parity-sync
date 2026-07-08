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

const stats = (
  props: CertificatesStatsProps
) => [
  {
    title: "Total Certificates",
    value: props.total,
    icon: Award,
    color:
      "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    description:
      "Platform certificates",
  },

  {
    title: "Issued",
    value: props.issued,
    icon: BadgeCheck,
    color:
      "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    description:
      "Successfully issued",
  },

  {
    title: "Pending",
    value: props.pending,
    icon: Clock3,
    color:
      "from-blue-500 to-cyan-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    description:
      "Awaiting issue",
  },

  {
    title: "Revoked",
    value: props.revoked,
    icon: Ban,
    color:
      "from-red-500 to-rose-600",
    bg: "bg-red-50",
    iconColor: "text-red-600",
    description:
      "Revoked certificates",
  },

  {
    title: "Expired",
    value: props.expired,
    icon: Eye,
    color:
      "from-slate-500 to-slate-700",
    bg: "bg-slate-100",
    iconColor: "text-slate-700",
    description:
      "Expired credentials",
  },

  {
    title: "Verified",
    value: props.verified,
    icon: ShieldCheck,
    color:
      "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    description:
      "Verified credentials",
  },

  {
    title: "Downloads",
    value: props.downloads,
    icon: Download,
    color:
      "from-cyan-500 to-sky-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    description:
      "Certificate downloads",
  },

  {
    title: "Average Score",
    value: `${props.averageScore}%`,
    icon: TrendingUp,
    color:
      "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    description:
      "Learner performance",
  },
];

const CertificatesStats = (
  props: CertificatesStatsProps
) => {
  return (
    <section
      className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-4
        2xl:grid-cols-4
      "
    >
      {stats(props).map(
        (
          {
            title,
            value,
            icon: Icon,
            color,
            bg,
            iconColor,
            description,
          },
          index
        ) => (
          <div
            key={title}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div
              className={`
                absolute
                inset-x-0
                top-0
                h-1
                bg-gradient-to-r
                ${color}
              `}
            />

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-muted-foreground">
                  {title}
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight">
                  {value}
                </h2>

                <p className="mt-3 text-sm text-muted-foreground">
                  {description}
                </p>

              </div>

              <div
                className={`
                  ${bg}
                  rounded-2xl
                  p-3
                `}
              >
                <Icon
                  className={`h-6 w-6 ${iconColor}`}
                />
              </div>

            </div>

            <div className="mt-6 flex items-center justify-between">

              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">

                <TrendingUp className="h-4 w-4" />

                +12%

              </div>

              <span className="text-xs text-muted-foreground">
                vs last month
              </span>

            </div>

            <div
              className="
                pointer-events-none
                absolute
                -right-10
                -bottom-10
                h-24
                w-24
                rounded-full
                bg-slate-100/40
                transition-transform
                duration-300
                group-hover:scale-125
              "
            />

            {(title === "Verified" ||
              title === "Issued") && (
              <span
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-green-500
                "
              />
            )}

            {index === 0 && (
              <span
                className="
                  absolute
                  left-4
                  top-4
                  rounded-full
                  bg-amber-100
                  px-2
                  py-1
                  text-[10px]
                  font-semibold
                  text-amber-700
                "
              >
                LIVE
              </span>
            )}
          </div>
        )
      )}
    </section>
  );
};

export default memo(
  CertificatesStats
);