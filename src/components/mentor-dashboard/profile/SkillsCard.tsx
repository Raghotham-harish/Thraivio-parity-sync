interface Props {
  skills: string[];
}

const SkillsCard = ({
  skills,
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
        Skills
      </h2>

      <div
        className="
          flex
          flex-wrap
          gap-3
          mt-6
        "
      >
        {skills.map(
          (skill) => (
            <span
              key={skill}
              className="
                bg-blue-50
                text-blue-700

                px-4
                py-2

                rounded-full

                font-medium
              "
            >
              {skill}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default SkillsCard;