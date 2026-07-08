import { Award } from "lucide-react";

interface Props {
  certifications: string[];
}

const CertificationsPreviewCard = ({
  certifications,
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
      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        <Award
          className="
            text-blue-600
          "
        />

        <h2
          className="
            text-2xl
            font-bold
          "
        >
          Certifications
        </h2>
      </div>

      <div className="space-y-4 mt-6">

        {certifications.map(
          (
            certification,
            index
          ) => (
            <div
              key={index}
              className="
                border
                rounded-2xl
                p-5
              "
            >
              📜 {certification}
            </div>
          )
        )}

      </div>
    </div>
  );
};

export default CertificationsPreviewCard;