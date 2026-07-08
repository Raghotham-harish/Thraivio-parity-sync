import {
  DollarSign,
  Plus,
} from "lucide-react";

interface EmptyPricingProps {
  onAddPricing: () => void;
}

const EmptyPricing = ({
  onAddPricing,
}: EmptyPricingProps) => {
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
      <div
        className="
          h-24
          w-24

          mx-auto

          rounded-full

          bg-blue-50

          flex
          items-center
          justify-center
        "
      >
        <DollarSign
          size={42}
          className="
            text-blue-600
          "
        />
      </div>

      <h2
        className="
          text-3xl
          font-bold

          mt-8
        "
      >
        No Pricing Plans Found
      </h2>

      <p
        className="
          text-slate-500

          max-w-2xl
          mx-auto

          mt-4
        "
      >
        Create coaching plans and
        mentorship packages for your
        future mentees.
      </p>

      <button
        onClick={onAddPricing}
        className="
          mt-10

          inline-flex
          items-center
          gap-2

          bg-blue-600
          hover:bg-blue-700

          text-white

          px-6
          py-4

          rounded-2xl

          font-semibold

          transition
        "
      >
        <Plus size={20} />

        Add Pricing Plan
      </button>

    </div>
  );
};

export default EmptyPricing;