import { Briefcase } from "lucide-react";

interface Props {
  companies: string[];
}

const CompaniesCard = ({
  companies,
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
        Companies Worked
      </h2>

      <div
        className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-4
          mt-6
        "
      >
        {companies.map(
          (company) => (
            <div
              key={company}
              className="
                border
                rounded-2xl
                p-5

                flex
                items-center
                gap-3

                hover:shadow-md
                transition
              "
            >
              <div
                className="
                  h-12
                  w-12

                  rounded-xl

                  bg-blue-50

                  flex
                  items-center
                  justify-center
                "
              >
                <Briefcase
                  size={20}
                  className="
                    text-blue-600
                  "
                />
              </div>

              <div>
                <h4 className="font-semibold">
                  {company}
                </h4>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CompaniesCard;