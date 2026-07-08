import {
  DollarSign,
  Clock3,
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

import type { PricingPlan } from "@/types/pricing";

interface PricingListCardProps {
  pricing: PricingPlan;

  onEdit: (
    pricing: PricingPlan
  ) => void;

  onDelete: (
    pricing: PricingPlan
  ) => void;
}

const PricingListCard = ({
  pricing,
  onEdit,
  onDelete,
}: PricingListCardProps) => {
  return (
    <div
      className={`
        bg-white

        border

        rounded-3xl

        overflow-hidden

        hover:shadow-xl

        transition-all
        duration-300

        ${
          pricing.popular
            ? "border-blue-500"
            : "border-slate-200"
        }
      `}
    >
      <div
        className="
          flex
          flex-col

          xl:flex-row
        "
      >
        {/* Left */}

        <div
          className="
            bg-gradient-to-br
            from-blue-600
            to-blue-700

            text-white

            xl:w-[260px]

            flex
            flex-col
            items-center
            justify-center

            py-10
            px-6
          "
        >
          {pricing.popular && (
            <div
              className="
                bg-white/20

                px-4
                py-2

                rounded-full

                text-xs
                font-semibold

                mb-4
              "
            >
              ⭐ Most Popular
            </div>
          )}

          <DollarSign size={40} />

          <h2
            className="
              text-5xl
              font-bold

              mt-4
            "
          >
            ${pricing.price}
          </h2>

          <p className="mt-3 opacity-90">
            {pricing.duration}
          </p>
        </div>

        {/* Right */}

        <div
          className="
            flex-1

            p-6
          "
        >
          <div
            className="
              flex
              flex-col

              lg:flex-row
              lg:justify-between

              gap-4
            "
          >
            <div>

              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                {pricing.title}
              </h2>

              <p
                className="
                  text-slate-500

                  mt-3
                "
              >
                {pricing.description}
              </p>

            </div>

            {pricing.popular && (
              <Star
                size={24}
                className="
                  text-amber-500
                "
              />
            )}

          </div>

          {/* Features */}

          <div
            className="
              flex
              flex-wrap
              gap-2

              mt-6
            "
          >
            <span
              className="
                bg-blue-50
                text-blue-700

                px-3
                py-1

                rounded-full

                text-xs
              "
            >
              Career Growth
            </span>

            <span
              className="
                bg-slate-100
                text-slate-700

                px-3
                py-1

                rounded-full

                text-xs
              "
            >
              Personalized Support
            </span>

            <span
              className="
                bg-green-50
                text-green-700

                px-3
                py-1

                rounded-full

                text-xs
              "
            >
              Expert Guidance
            </span>
          </div>

          {/* Bottom */}

          <div
            className="
              flex
              flex-col

              lg:flex-row
              lg:items-center
              lg:justify-between

              gap-5

              mt-8
            "
          >
            <div
              className="
                bg-slate-50

                rounded-2xl

                p-4
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <Clock3 size={18} />

                <span
                  className="
                    font-medium
                  "
                >
                  {pricing.duration}
                </span>
              </div>
            </div>

            <div
              className="
                flex
                gap-3
              "
            >
              <button
                onClick={() =>
                  onEdit(pricing)
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
                  onDelete(pricing)
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

      </div>
    </div>
  );
};

export default PricingListCard;