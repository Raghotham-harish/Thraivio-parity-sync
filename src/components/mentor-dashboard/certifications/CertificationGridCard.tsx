import {
  BadgeCheck,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Certification } from "@/types/certification";

interface CertificationGridCardProps {
  certification: Certification;

  onEdit: (
    certification: Certification
  ) => void;

  onDelete: (
    certification: Certification
  ) => void;
}

const certificateImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
  "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500",
];

const CertificationGridCard = ({
  certification,
  onEdit,
  onDelete,
}: CertificationGridCardProps) => {
  const image =
    certificateImages[
      Number(
        certification.id || 0
      ) %
        certificateImages.length
    ];

  return (
    <div
      className="
        group

        bg-white

        border
        border-slate-200

        rounded-3xl

        overflow-hidden

        hover:shadow-xl
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      {/* Thumbnail */}

      <div className="relative">

        <img
          src={image}
          alt={certification.title}
          className="
            w-full
            h-56

            object-cover
          "
        />

        <div
          className="
            absolute
            top-4
            left-4
          "
        >
          <span
            className="
              bg-white/95
              backdrop-blur

              px-3
              py-1

              rounded-full

              text-xs
              font-semibold

              text-green-700
            "
          >
            ✓ Verified
          </span>
        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <div
          className="
            flex
            items-start
            gap-4
          "
        >
          <div
            className="
              h-12
              w-12

              rounded-2xl

              bg-green-100

              flex
              items-center
              justify-center

              shrink-0
            "
          >
            <BadgeCheck
              size={24}
              className="
                text-green-600
              "
            />
          </div>

          <div className="flex-1">

            <h3
              className="
                text-xl
                font-bold
                leading-snug
              "
            >
              {certification.title}
            </h3>

            <p
              className="
                text-slate-500
                text-sm

                mt-2
              "
            >
              Professional Certification
            </p>

          </div>

        </div>

        {/* Footer */}

        <div
          className="
            flex
            items-center
            justify-between

            mt-8
          "
        >
          <span
            className="
              bg-green-50
              text-green-700

              px-3
              py-2

              rounded-full

              text-xs
              font-medium
            "
          >
            Industry Verified
          </span>

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

                px-4
                py-2

                rounded-xl

                flex
                items-center
                gap-2

                hover:bg-blue-600
                hover:text-white

                transition
              "
            >
              <Pencil size={16} />
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

                px-4
                py-2

                rounded-xl

                flex
                items-center
                gap-2

                transition
              "
            >
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CertificationGridCard;