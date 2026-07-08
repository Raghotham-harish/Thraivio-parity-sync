interface Props {
  mentor: any;
}

const DashboardProfileCompletion =
  ({
    mentor,
  }: Props) => {
    const checks = [
      mentor.name,
      mentor.image,
      mentor.about,
      mentor.skills?.length,
      mentor.expertise?.length,
      mentor.languages?.length,
      mentor.programs?.length,
      mentor.events?.length,
      mentor.videos?.length,
      mentor.availability?.length,
      mentor.certifications
        ?.length,
      mentor.achievements
        ?.length,
    ];

    const completed =
      checks.filter(Boolean)
        .length;

    const percentage =
      Math.round(
        (completed /
          checks.length) *
          100
      );

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
        <h3
          className="
            text-xl
            font-bold
          "
        >
          Profile Completion
        </h3>

        <p
          className="
            text-sm
            text-slate-500
            mt-2
          "
        >
          Complete your profile to
          increase bookings and
          visibility.
        </p>

        <div className="mt-8">

          <div
            className="
              flex
              justify-between
              mb-2
            "
          >
            <span
              className="
                font-medium
              "
            >
              Completion
            </span>

            <span
              className="
                font-bold
                text-blue-600
              "
            >
              {percentage}%
            </span>
          </div>

          <div
            className="
              h-4
              bg-slate-100
              rounded-full
              overflow-hidden
            "
          >
            <div
              className="
                h-full
                bg-blue-600
                rounded-full
                transition-all
                duration-500
              "
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>

        </div>

        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-3
          "
        >
          <div
            className="
              bg-blue-50
              rounded-2xl
              p-4
            "
          >
            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Completed
            </p>

            <h4
              className="
                text-2xl
                font-bold
                mt-1
              "
            >
              {completed}
            </h4>
          </div>

          <div
            className="
              bg-green-50
              rounded-2xl
              p-4
            "
          >
            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Remaining
            </p>

            <h4
              className="
                text-2xl
                font-bold
                mt-1
              "
            >
              {
                checks.length -
                completed
              }
            </h4>
          </div>

        </div>

      </div>
    );
  };

export default DashboardProfileCompletion;