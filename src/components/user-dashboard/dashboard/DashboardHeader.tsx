import { CalendarDays } from "lucide-react";

interface DashboardHeaderProps {
  userName: string;
}

const DashboardHeader = ({
  userName,
}: DashboardHeaderProps) => {
  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <section className="mb-8">
      {/* Left */}

      <div>
        <span
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            bg-blue-50

            px-4
            py-2

            text-sm
            font-medium

            text-blue-700
          "
        >
          <CalendarDays size={16} />

          {today}
        </span>

        <h1
          className="
            mt-5

            text-4xl
            font-bold

            text-slate-900
          "
        >
          Welcome back,
          <span className="text-blue-600">
            {" "}
            {userName}
          </span>
          👋
        </h1>

        <p
          className="
            mt-3

            max-w-3xl

            text-slate-500
            leading-7
          "
        >
          Track your learning progress,
          join upcoming mentorship
          sessions, explore recommended
          mentors and continue your
          learning journey.
        </p>
      </div>

    </section>
  );
};

export default DashboardHeader;