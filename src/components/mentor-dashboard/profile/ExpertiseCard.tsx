interface Props {
  expertise: string[];
}

const ExpertiseCard = ({
  expertise,
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
        Expertise
      </h2>

      <div
        className="
          flex
          flex-wrap
          gap-3
          mt-6
        "
      >
        {expertise.map(
          (item) => (
            <span
              key={item}
              className="
                bg-purple-50
                text-purple-700

                px-4
                py-2

                rounded-full

                font-medium
              "
            >
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default ExpertiseCard;