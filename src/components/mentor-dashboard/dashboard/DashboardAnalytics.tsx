import {
  TrendingUp,
  Users,
  CalendarCheck,
  DollarSign,
} from "lucide-react";

interface Props {
  mentor: any;
}

const DashboardAnalytics = ({
  mentor,
}: Props) => {
  const estimatedRevenue =
    mentor.pricing.monthlyProgram *
    mentor.studentsCoached;

  return (
    <div
      className="
        bg-white
        border
        rounded-3xl
        p-6
        shadow-sm
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          mb-8
        "
      >
        <div>
          <h3
            className="
              text-xl
              font-bold
            "
          >
            Business Analytics
          </h3>

          <p
            className="
              text-slate-500
              text-sm
              mt-1
            "
          >
            Mentorship performance
            overview
          </p>
        </div>

        <TrendingUp
          className="
            text-green-600
          "
        />
      </div>

      <div
        className="
          grid
          md:grid-cols-2
          gap-5
        "
      >
        {/* Students */}

        <div
          className="
            rounded-2xl
            border
            p-5
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <Users
              className="
                text-blue-600
              "
            />

            <span
              className="
                text-xs
                bg-blue-50
                text-blue-600
                px-2
                py-1
                rounded-full
              "
            >
              Total
            </span>
          </div>

          <h4
            className="
              text-3xl
              font-bold
              mt-4
            "
          >
            {mentor.studentsCoached}
          </h4>

          <p
            className="
              text-slate-500
              text-sm
              mt-1
            "
          >
            Students Coached
          </p>
        </div>

        {/* Sessions */}

        <div
          className="
            rounded-2xl
            border
            p-5
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <CalendarCheck
              className="
                text-purple-600
              "
            />

            <span
              className="
                text-xs
                bg-purple-50
                text-purple-600
                px-2
                py-1
                rounded-full
              "
            >
              Completed
            </span>
          </div>

          <h4
            className="
              text-3xl
              font-bold
              mt-4
            "
          >
            {mentor.sessionsCompleted}
          </h4>

          <p
            className="
              text-slate-500
              text-sm
              mt-1
            "
          >
            Sessions Delivered
          </p>
        </div>

        {/* Rating */}

        <div
          className="
            rounded-2xl
            border
            p-5
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <TrendingUp
              className="
                text-orange-500
              "
            />

            <span
              className="
                text-xs
                bg-orange-50
                text-orange-600
                px-2
                py-1
                rounded-full
              "
            >
              Growth
            </span>
          </div>

          <h4
            className="
              text-3xl
              font-bold
              mt-4
            "
          >
            {mentor.rating}
          </h4>

          <p
            className="
              text-slate-500
              text-sm
              mt-1
            "
          >
            Average Rating
          </p>
        </div>

        {/* Revenue */}

        <div
          className="
            rounded-2xl
            border
            p-5
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <DollarSign
              className="
                text-green-600
              "
            />

            <span
              className="
                text-xs
                bg-green-50
                text-green-600
                px-2
                py-1
                rounded-full
              "
            >
              Estimated
            </span>
          </div>

          <h4
            className="
              text-3xl
              font-bold
              mt-4
            "
          >
            $
            {estimatedRevenue.toLocaleString()}
          </h4>

          <p
            className="
              text-slate-500
              text-sm
              mt-1
            "
          >
            Potential Revenue
          </p>
        </div>

      </div>
    </div>
  );
};

export default DashboardAnalytics;