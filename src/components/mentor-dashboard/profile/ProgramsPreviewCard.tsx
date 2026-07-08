interface Props {
  programs: any[];
}

const ProgramsPreviewCard = ({
  programs,
}: Props) => {
  return (
    <div
      className="
        bg-white
        border
        rounded-3xl
        p-8
      "
    >
      <h2
        className="
          text-2xl
          font-bold
        "
      >
        Programs
      </h2>

      <div
        className="
          grid
          md:grid-cols-2
          gap-4
          mt-6
        "
      >
        {programs
          .slice(0, 4)
          .map((program) => (
            <div
              key={program.id}
              className="
                border
                rounded-2xl
                p-5
              "
            >
              <h3 className="font-bold">
                {program.title}
              </h3>

              <p
                className="
                  text-slate-500
                  mt-2
                "
              >
                {program.category}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProgramsPreviewCard;