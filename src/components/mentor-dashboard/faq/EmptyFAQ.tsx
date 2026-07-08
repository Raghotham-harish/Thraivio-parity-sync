import {
  MessageCircleQuestion,
  Plus,
} from "lucide-react";

interface EmptyFAQProps {
  onAddFAQ: () => void;
}

const EmptyFAQ = ({
  onAddFAQ,
}: EmptyFAQProps) => {
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
        <MessageCircleQuestion
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
        No FAQs Found
      </h2>

      <p
        className="
          text-slate-500

          max-w-2xl
          mx-auto

          mt-4
        "
      >
        Create frequently asked questions
        to help students understand your
        mentorship process, sessions and
        career guidance offerings.
      </p>

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
          Mentorship
        </span>

        <span className="bg-slate-100 px-4 py-2 rounded-full text-sm">
          Interview Prep
        </span>

        <span className="bg-slate-100 px-4 py-2 rounded-full text-sm">
          Career Growth
        </span>

        <span className="bg-slate-100 px-4 py-2 rounded-full text-sm">
          Guidance
        </span>
      </div>

      <button
        onClick={onAddFAQ}
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
          hover:shadow-lg
        "
      >
        <Plus size={20} />

        Add First FAQ
      </button>

    </div>
  );
};

export default EmptyFAQ;