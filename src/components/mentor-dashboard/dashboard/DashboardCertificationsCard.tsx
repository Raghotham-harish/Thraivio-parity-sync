import { Award } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  mentor: any;
}

const DashboardCertificationsCard = ({
  mentor,
}: Props) => {
  const certifications =
    mentor.certifications.slice(
      0,
      6
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
      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >
        <div>

          <h3
            className="
              text-xl
              font-bold
            "
          >
            Certifications
          </h3>

          <p
            className="
              text-sm
              text-slate-500
              mt-1
            "
          >
            Professional certifications
          </p>

        </div>

        <Award
          className="
            text-cyan-600
          "
        />
      </div>

      <div className="space-y-3">

        {certifications.map(
          (
            certification: string,
            index: number
          ) => (
            <div
              key={index}
              className="
                flex
                items-center
                gap-3
                p-4
                rounded-2xl
                border
              "
            >
              <div
                className="
                  h-10
                  w-10
                  rounded-xl
                  bg-cyan-50
                  text-cyan-600
                  flex
                  items-center
                  justify-center
                "
              >
                <Award size={18} />
              </div>

              <p
                className="
                  font-medium
                "
              >
                {certification}
              </p>

            </div>
          )
        )}

      </div>

      <Link
        to="/mentor-dashboard/certifications"
        className="
          block
          text-center
          mt-6
          text-cyan-600
          font-medium
        "
      >
        Manage Certifications
      </Link>
    </div>
  );
};

export default DashboardCertificationsCard;