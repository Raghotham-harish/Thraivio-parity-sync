import {
  CheckCircle2,
  Clock3,
  FileText,
  Ticket,
} from "lucide-react";

interface HelpStatsProps {
  openTickets: number;

  resolvedTickets: number;

  averageResponse: string;

  knowledgeBaseArticles: number;
}

const HelpStats = ({
  openTickets,
  resolvedTickets,
  averageResponse,
  knowledgeBaseArticles,
}: HelpStatsProps) => {
  const stats = [
    {
      title: "Open Tickets",
      value: openTickets,
      subtitle: "Awaiting response",
      icon: Ticket,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
    },

    {
      title: "Resolved",
      value: resolvedTickets,
      subtitle: "Successfully closed",
      icon: CheckCircle2,
      bg: "bg-green-50",
      iconColor: "text-green-600",
    },

    {
      title: "Avg Response",
      value: averageResponse,
      subtitle: "Typical reply time",
      icon: Clock3,
      bg: "bg-amber-50",
      iconColor: "text-amber-600",
    },

    {
      title: "Knowledge Base",
      value: knowledgeBaseArticles,
      subtitle: "Helpful articles",
      icon: FileText,
      bg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
  ];

  return (
    <section
      className="
        mt-8

        grid

        gap-6

        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group

              rounded-[30px]

              border
              border-slate-200

              bg-white

              p-6

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-200
              hover:shadow-xl
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <div
                className={`
                  flex
                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-3xl

                  ${item.bg}
                `}
              >
                <Icon
                  size={30}
                  className={item.iconColor}
                />
              </div>

              <div
                className="
                  rounded-full

                  bg-slate-100

                  px-3
                  py-1

                  text-xs
                  font-semibold

                  text-slate-500
                "
              >
                Live
              </div>
            </div>

            <div className="mt-8">
              <p
                className="
                  text-sm

                  text-slate-500
                "
              >
                {item.title}
              </p>

              <h3
                className="
                  mt-2

                  text-4xl
                  font-bold

                  text-slate-900
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-3

                  text-sm

                  text-slate-500
                "
              >
                {item.subtitle}
              </p>
            </div>

            <div
              className="
                mt-6

                h-1.5

                overflow-hidden

                rounded-full

                bg-slate-100
              "
            >
              <div
                className="
                  h-full
                  w-full

                  rounded-full

                  bg-gradient-to-r
                  from-blue-500
                  to-indigo-600
                "
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HelpStats;