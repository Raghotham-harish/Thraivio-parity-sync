import {
  Clock3,
  Users,
  Star,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Program } from "@/types/program";

interface ProgramGridCardProps {
  program: Program;

  onEdit: (
    program: Program
  ) => void;

  onDelete: (
    program: Program
  ) => void;
}

const ProgramGridCard = ({
  program,
  onEdit,
  onDelete,
}: ProgramGridCardProps) => {
  return (
    <div
      className="
        group
        bg-white
        border
        border-slate-200
        rounded-3xl
        overflow-hidden

        hover:-translate-y-1
        hover:shadow-xl

        transition-all
        duration-300
      "
    >
      {/* Banner */}

      <div className="relative h-56">

        <img
          src={
            program.image ||
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
          }
          alt={program.title}
          className="
            h-full
            w-full
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            to-transparent
          "
        />

        {/* Level */}

        <span
          className="
            absolute
            top-4
            left-4

            bg-white/20
            backdrop-blur

            px-3
            py-1

            rounded-full

            text-xs
            text-white
            font-semibold
          "
        >
          {program.level}
        </span>

        {/* Featured */}

        {program.featured && (
          <span
            className="
              absolute
              top-4
              right-4

              bg-blue-600
              text-white

              px-3
              py-1

              rounded-full

              text-xs
              font-semibold
            "
          >
            🔥 Best Seller
          </span>
        )}

        {/* Title */}

        <div
          className="
            absolute
            bottom-5
            left-5
            text-white
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-wider
            "
          >
            Career Accelerator
          </p>

          <h3
            className="
              text-2xl
              font-bold
              mt-1
            "
          >
            {program.title}
          </h3>

        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        {/* Duration + Students */}

        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              text-slate-600
            "
          >
            <Clock3 size={18} />

            <span>
              {program.duration}
            </span>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              text-slate-600
            "
          >
            <Users size={18} />

            <span>
              {program.students}
              + Students
            </span>
          </div>

        </div>

        {/* Rating */}

        <div
          className="
            flex
            items-center
            gap-1
            mt-5
          "
        >
          <Star
            size={16}
            fill="currentColor"
            className="
              text-yellow-500
            "
          />

          <Star
            size={16}
            fill="currentColor"
            className="
              text-yellow-500
            "
          />

          <Star
            size={16}
            fill="currentColor"
            className="
              text-yellow-500
            "
          />

          <Star
            size={16}
            fill="currentColor"
            className="
              text-yellow-500
            "
          />

          <Star
            size={16}
            fill="currentColor"
            className="
              text-yellow-500
            "
          />

          <span
            className="
              ml-2
              text-sm
              text-slate-500
            "
          >
            {program.rating || 4.9}
            {" "}
            (
            {program.reviews || 120}
            {" "}
            Reviews)
          </span>

        </div>

        {/* Pricing */}

        <div className="mt-6">

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            Program Fee
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-blue-600
              mt-1
            "
          >
            ${program.price}
          </h2>

          <p
            className="
              text-sm
              text-blue-600
              mt-1
            "
          >
            Flexible payment options
            available
          </p>

        </div>

        {/* Features */}

        <div
          className="
            mt-6
            space-y-2
            text-sm
            text-slate-600
          "
        >
          <p>
            ✅ Weekly Live Sessions
          </p>

          <p>
            ✅ Resume Review
          </p>

          <p>
            ✅ Mock Interviews
          </p>

          <p>
            ✅ Priority Community Access
          </p>

        </div>

        {/* Seats */}

        <div
          className="
            mt-6

            flex
            items-center
            justify-between

            rounded-2xl
            bg-amber-50

            p-4
          "
        >
          <div>

            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Seats Remaining
            </p>

            <p
              className="
                font-semibold
                text-amber-700
              "
            >
              Only
              {" "}
              {program.seatsLeft || 8}
              {" "}
              Spots Left
            </p>

          </div>

          <span
            className="
              bg-amber-100
              text-amber-800

              px-3
              py-1

              rounded-full

              text-xs
              font-semibold
            "
          >
            Limited
          </span>

        </div>

        {/* Actions */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            mt-6
          "
        >
          <button
            onClick={() =>
              onEdit(program)
            }
            className="
              border
              border-blue-600

              text-blue-600

              py-3

              rounded-xl

              font-medium

              flex
              items-center
              justify-center
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
              onDelete(program)
            }
            className="
              bg-red-600
              hover:bg-red-700

              text-white

              rounded-xl

              py-3

              font-medium

              flex
              items-center
              justify-center
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

export default ProgramGridCard;