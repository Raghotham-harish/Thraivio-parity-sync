import {
  BadgeCheck,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Certification } from "@/types/certification";

interface CertificationListCardProps {
  certification: Certification;

  onEdit: (
    certification: Certification
  ) => void;

  onDelete: (
    certification: Certification
  ) => void;
}

const CertificationListCard = ({
  certification,
  onEdit,
  onDelete,
}: CertificationListCardProps) => {
  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-3xl

        p-6

        hover:shadow-xl

        transition-all
        duration-300
      "
    >
      <div
        className="
          flex
          flex-col

          lg:flex-row
          lg:items-center
          lg:justify-between

          gap-6
        "
      >
        {/* Left */}

        <div
          className="
            flex
            items-center
            gap-5
          "
        >
          <div
            className="
              h-16
              w-16

              rounded-2xl

              bg-green-100

              flex
              items-center
              justify-center

              shrink-0
            "
          >
            <BadgeCheck
              size={30}
              className="
                text-green-600
              "
            />
          </div>

          <div>

            <h3
              className="
                text-xl
                font-bold
              "
            >
              {certification.title}
            </h3>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Professional Certification
            </p>

            <span
              className="
                inline-flex
                items-center

                mt-3

                px-3
                py-1

                rounded-full

                bg-green-50
                text-green-700

                text-xs
                font-medium
              "
            >
              ✓ Verified Credential
            </span>

          </div>

        </div>

        {/* Right */}

        <div
          className="
            flex
            gap-3
          "
        >
          <button
            onClick={() =>
              onEdit(
                certification
              )
            }
            className="
              border
              border-blue-600

              text-blue-600

              px-5
              py-3

              rounded-2xl

              flex
              items-center
              gap-2

              hover:bg-blue-600
              hover:text-white

              transition
            "
          >
            <Pencil size={18} />
            Edit
          </button>

          <button
            onClick={() =>
              onDelete(
                certification
              )
            }
            className="
              bg-red-600
              hover:bg-red-700

              text-white

              px-5
              py-3

              rounded-2xl

              flex
              items-center
              gap-2

              transition
            "
          >
            <Trash2 size={18} />
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default CertificationListCard;