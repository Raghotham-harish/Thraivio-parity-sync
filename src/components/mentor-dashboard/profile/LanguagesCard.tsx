import { Globe } from "lucide-react";

interface Props {
  languages: string[];
}

const LanguagesCard = ({
  languages,
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
        Languages
      </h2>

      <div
        className="
          flex
          flex-wrap
          gap-3
          mt-6
        "
      >
        {languages.map(
          (language) => (
            <div
              key={language}
              className="
                flex
                items-center
                gap-2

                px-4
                py-2

                rounded-full

                bg-cyan-50
                text-cyan-700

                font-medium
              "
            >
              <Globe size={16} />

              {language}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LanguagesCard;