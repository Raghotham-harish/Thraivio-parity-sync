import {
  BookOpen,
  Users,
  Star,
  IndianRupee,
} from "lucide-react";

interface ProgramsStatsProps {
  totalPrograms: number;

  publishedPrograms: number;

  totalStudents: number;

  averageRating: number;

  estimatedRevenue: number;
}

export default function ProgramsStats({
  totalPrograms,
  publishedPrograms,
  averageRating,
  estimatedRevenue,
}: ProgramsStatsProps) {
  const stats = [
    {
      title: "Total Programs",
      value: totalPrograms.toLocaleString(),
      icon: BookOpen,
      color: "bg-violet-100 text-violet-600",
    },
    {
      title: "Published",
      value: publishedPrograms.toLocaleString(),
      icon: Users,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Average Rating",
      value: averageRating.toFixed(1),
      icon: Star,
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Estimated Revenue",
      value: `₹${estimatedRevenue.toLocaleString()}`,
      icon: IndianRupee,
      color: "bg-sky-100 text-sky-600",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm text-slate-500">

                  {stat.title}

                </p>

                <h3 className="mt-3 text-3xl font-bold text-slate-900">

                  {stat.value}

                </h3>

              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color}`}
              >
                <Icon className="h-7 w-7" />
              </div>

            </div>

          </div>
        );
      })}
    </section>
  );
}