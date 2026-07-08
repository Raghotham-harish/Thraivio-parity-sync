import {
  ChevronDown,
  HelpCircle,
  Search,
} from "lucide-react";

import { useMemo, useState } from "react";

const faqs = [
  {
    question:
      "How do I book a mentorship session?",
    answer:
      "Open any mentor profile, choose an available date and time, then confirm your booking. You'll receive a confirmation notification immediately.",
  },

  {
    question:
      "How can I reschedule a booked session?",
    answer:
      "Go to My Sessions, select the upcoming session and click Reschedule. Available time slots will be shown based on the mentor's availability.",
  },

  {
    question:
      "Where can I download my certificates?",
    answer:
      "Visit My Certificates in your dashboard. Every completed program certificate can be viewed or downloaded as a PDF.",
  },

  {
    question:
      "How do I contact my mentor?",
    answer:
      "Open the mentor profile or your booked session details and use the integrated messaging option to communicate securely.",
  },

  {
    question:
      "How can I request a refund?",
    answer:
      "Navigate to Payments, select the transaction and choose Request Refund. Our support team will review your request according to our refund policy.",
  },

  {
    question:
      "How do I change my account information?",
    answer:
      "Go to Settings → Account Information to update your name, email, phone number, profile photo and other personal information.",
  },

  {
    question:
      "How can I enable two-factor authentication?",
    answer:
      "Open Settings → Security and enable Two-Factor Authentication. You can verify using email or an authenticator application.",
  },

  {
    question:
      "How do I report a technical issue?",
    answer:
      "Create a support ticket from the Help Center with screenshots and a detailed description. Our technical team will investigate the issue.",
  },
];

const FAQSection = () => {
  const [search, setSearch] =
    useState("");

  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    if (!search.trim()) return faqs;

    return faqs.filter(
      (faq) =>
        faq.question
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        faq.answer
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );
  }, [search]);

  return (
    <section className="mt-10">
      {/* Header */}

      <div
        className="
          flex
          flex-col

          gap-6

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-amber-50

              px-4
              py-2

              text-sm
              font-medium

              text-amber-700
            "
          >
            <HelpCircle size={16} />

            Frequently Asked Questions
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Find Answers Quickly
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            Search our most frequently
            asked questions to quickly find
            answers before contacting
            support.
          </p>
        </div>

        {/* Search */}

        <div
          className="
            relative

            w-full

            lg:w-[380px]
          "
        >
          <Search
            size={18}
            className="
              absolute

              left-4
              top-1/2

              -translate-y-1/2

              text-slate-400
            "
          />

          <input
            type="text"
            value={search}
            placeholder="Search FAQs..."
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full

              rounded-2xl

              border
              border-slate-200

              py-3.5
              pl-12
              pr-4

              outline-none

              transition

              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          />
        </div>
      </div>

      {/* FAQ Cards */}

      <div
        className="
          mt-8

          space-y-5
        "
      >
        {filteredFaqs.length === 0 && (
          <div
            className="
              rounded-3xl

              border
              border-dashed
              border-slate-300

              bg-slate-50

              py-16

              text-center
            "
          >
            <HelpCircle
              size={42}
              className="
                mx-auto

                text-slate-400
              "
            />

            <h3
              className="
                mt-5

                text-xl
                font-bold
              "
            >
              No FAQs Found
            </h3>

            <p
              className="
                mt-2

                text-slate-500
              "
            >
              Try searching with different
              keywords.
            </p>
          </div>
        )}

        {filteredFaqs.map(
          (faq, index) => {
            const expanded =
              activeIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  overflow-hidden

                  rounded-[28px]

                  border
                  border-slate-200

                  bg-white

                  transition-all

                  hover:border-blue-200
                  hover:shadow-lg
                "
              >
                <button
                  onClick={() =>
                    setActiveIndex(
                      expanded
                        ? null
                        : index
                    )
                  }
                  className="
                    flex
                    w-full

                    items-center
                    justify-between

                    gap-6

                    p-7

                    text-left
                  "
                >
                  <div
                    className="
                      flex
                      items-center

                      gap-5
                    "
                  >
                    <div
                      className="
                        flex

                        h-14
                        w-14

                        shrink-0

                        items-center
                        justify-center

                        rounded-2xl

                        bg-blue-50
                      "
                    >
                      <HelpCircle
                        size={24}
                        className="
                          text-blue-600
                        "
                      />
                    </div>

                    <h3
                      className="
                        text-xl
                        font-bold
                      "
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    size={22}
                    className={`
                      shrink-0

                      transition-transform
                      duration-300

                      ${
                        expanded
                          ? "rotate-180 text-blue-600"
                          : "text-slate-400"
                      }
                    `}
                  />
                </button>

                {expanded && (
                  <div
                    className="
                      border-t
                      border-slate-200

                      bg-slate-50

                      px-7
                      py-6
                    "
                  >
                    <p
                      className="
                        leading-8

                        text-slate-600
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>

      {/* Footer */}

      <div
        className="
          mt-10

          rounded-[32px]

          bg-gradient-to-r
          from-blue-600
          to-indigo-600

          p-8

          text-white
        "
      >
        <div
          className="
            flex
            flex-col

            gap-6

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <h3
              className="
                text-2xl
                font-bold
              "
            >
              Still need help?
            </h3>

            <p
              className="
                mt-3

                max-w-2xl

                text-blue-100
              "
            >
              If you couldn't find the
              answer you're looking for,
              create a support ticket or
              start a live chat with our
              support specialists.
            </p>
          </div>

          <button
            className="
              rounded-2xl

              bg-white

              px-7
              py-3.5

              font-semibold

              text-blue-600

              transition

              hover:bg-slate-100
            "
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;