import {
  DollarSign,
  Clock3,
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

import type { PricingPlan } from "@/types/pricing";

interface PricingGridCardProps {
  pricing: PricingPlan;

  onEdit: (
    pricing: PricingPlan
  ) => void;

  onDelete: (
    pricing: PricingPlan
  ) => void;
}

const PricingGridCard = ({
  pricing,
  onEdit,
  onDelete,
}: PricingGridCardProps) => {
  return (
    <div
      className={`
        relative

        bg-white

        border

        rounded-3xl

        p-6

        transition-all
        duration-300

        hover:shadow-xl
        hover:-translate-y-1

        ${
          pricing.popular
            ? "border-blue-500 ring-2 ring-blue-100"
            : "border-slate-200"
        }
      `}
    >
      {/* Popular */}

      {pricing.popular && (
        <div
          className="
            absolute
            -top-3
            left-1/2
            -translate-x-1/2

            bg-blue-600

            text-white

            px-4
            py-1

            rounded-full

            text-xs
            font-semibold
          "
        >
          Most Popular
        </div>
      )}

      {/* Top */}

      <div
        className="
          flex
          items-start
          justify-between
        "
      >
        <div
          className="
            h-14
            w-14

            rounded-2xl

            bg-blue-50

            flex
            items-center
            justify-center
          "
        >
          <DollarSign
            size={26}
            className="
              text-blue-600
            "
          />
        </div>

        {pricing.popular && (
          <Star
            size={20}
            className="
              text-amber-500
            "
          />
        )}
      </div>

      {/* Content */}

      <h3
        className="
          text-2xl
          font-bold

          mt-5
        "
      >
        {pricing.title}
      </h3>

      <p
        className="
          text-slate-500

          mt-3
        "
      >
        {pricing.description}
      </p>

      <div
        className="
          mt-6
        "
      >
        <h2
          className="
            text-5xl
            font-bold

            text-blue-600
          "
        >
          ${pricing.price}
        </h2>

        <div
          className="
            flex
            items-center
            gap-2

            text-slate-500

            mt-3
          "
        >
          <Clock3 size={18} />

          {pricing.duration}
        </div>

      </div>

      {/* Footer */}

      <div
        className="
          flex
          gap-3

          mt-8
        "
      >
        <button
          onClick={() =>
            onEdit(pricing)
          }
          className="
            flex-1

            border
            border-blue-600

            text-blue-600

            py-3

            rounded-2xl

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
            onDelete(pricing)
          }
          className="
            flex-1

            bg-red-600
            hover:bg-red-700

            text-white

            py-3

            rounded-2xl

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
  );
};

export default PricingGridCard;