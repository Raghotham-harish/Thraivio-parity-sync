import {
  Plus,
  BadgeCheck,
} from "lucide-react";

interface EmptyCertificationsProps {
  onAddCertification: () => void;
}

const EmptyCertifications = ({
  onAddCertification,
}: EmptyCertificationsProps) => {
  return (
    <div
      className="
        bg-white

        border
        border-dashed
        border-slate-300

        rounded-3xl

        p-12
        md:p-20

        text-center
      "
    >
      {/* Icon */}

      <div
        className="
          h-24
          w-24

          mx-auto

          rounded-full

          bg-green-50

          flex
          items-center
          justify-center
        "
      >
        <BadgeCheck
          size={42}
          className="
            text-green-600
          "
        />
      </div>

      {/* Title */}

      <h2
        className="
          text-3xl
          font-bold

          mt-8
        "
      >
        No Certifications Found
      </h2>

      {/* Description */}

      <p
        className="
          text-slate-500

          max-w-2xl
          mx-auto

          mt-4
        "
      >
        Add your professional certifications,
        credentials and industry recognized
        achievements to build trust and
        credibility with mentees.
      </p>

      {/* Tags */}

      <div
        className="
          mt-8

          flex
          flex-wrap
          justify-center

          gap-3
        "
      >
        <span className="bg-slate-100 px-4 py-2 rounded-full text-sm">
          Leadership
        </span>

        <span className="bg-slate-100 px-4 py-2 rounded-full text-sm">
          Product
        </span>

        <span className="bg-slate-100 px-4 py-2 rounded-full text-sm">
          AI
        </span>

        <span className="bg-slate-100 px-4 py-2 rounded-full text-sm">
          Coaching
        </span>

        <span className="bg-slate-100 px-4 py-2 rounded-full text-sm">
          Industry Verified
        </span>
      </div>

      {/* CTA */}

      <button
        onClick={
          onAddCertification
        }
        className="
          mt-10

          inline-flex
          items-center
          gap-2

          bg-green-600
          hover:bg-green-700

          text-white

          px-6
          py-4

          rounded-2xl

          font-semibold

          transition
          hover:shadow-lg
        "
      >
        <Plus size={20} />

        Add First Certification
      </button>
    </div>
  );
};

export default EmptyCertifications;