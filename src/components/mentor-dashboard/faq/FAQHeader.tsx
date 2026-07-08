import {
  MessageCircleQuestion,
  Plus,
} from "lucide-react";

interface FAQHeaderProps {
  totalFAQs: number;

  onAddFAQ: () => void;
}

const FAQHeader = ({
  totalFAQs,
  onAddFAQ,
}: FAQHeaderProps) => {
  return (
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

      <div>

        <div
          className="
            inline-flex
            items-center
            gap-2

            px-4
            py-2

            rounded-full

            bg-blue-50
            text-blue-700

            text-sm
            font-medium
          "
        >
          <MessageCircleQuestion size={16} />

          FAQ Management
        </div>

        <h1
          className="
            text-4xl
            font-bold
            mt-4
          "
        >
          FAQ Dashboard
        </h1>

        <p
          className="
            mt-3
            text-slate-500
            max-w-2xl
          "
        >
          Manage frequently asked questions,
          student doubts, mentorship guidance
          and common onboarding queries.
        </p>

        <div
          className="
            mt-5

            flex
            flex-wrap

            gap-3
          "
        >
          <div
            className="
              px-4
              py-2

              rounded-xl

              bg-slate-100

              text-sm
              font-medium
            "
          >
            {totalFAQs} FAQs
          </div>

          <div
            className="
              px-4
              py-2

              rounded-xl

              bg-green-50
              text-green-700

              text-sm
              font-medium
            "
          >
            Mentor Dashboard
          </div>

        </div>

      </div>

      {/* Right */}

      <button
        onClick={onAddFAQ}
        className="
          bg-blue-600
          hover:bg-blue-700

          text-white

          px-6
          py-4

          rounded-2xl

          font-semibold

          flex
          items-center
          gap-2

          transition
          hover:shadow-lg
        "
      >
        <Plus size={20} />

        Add New FAQ
      </button>

    </div>
  );
};

export default FAQHeader;