import { useState } from "react";

import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import type { MentorApiResponse } from "@/services/mentor.service";

interface MentorFAQProps {
  mentor: MentorApiResponse;
}

interface MentorFAQItem {
  question: string;
  answer: string;
}

const normalizeFAQs = (
  faqs: unknown[]
): MentorFAQItem[] => {
  return faqs
    .map((faq) => {
      if (
        typeof faq !== "object" ||
        faq === null
      ) {
        return null;
      }

      const item =
        faq as Record<string, unknown>;

      const question =
        typeof item.question === "string"
          ? item.question
          : "";

      const answer =
        typeof item.answer === "string"
          ? item.answer
          : "";

      if (!question || !answer) {
        return null;
      }

      return {
        question,
        answer,
      };
    })
    .filter(
      (
        faq
      ): faq is MentorFAQItem =>
        faq !== null
    );
};

const MentorFAQ = ({
  mentor,
}: MentorFAQProps) => {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const faqData = normalizeFAQs(
    mentor.faqs
  );

  if (faqData.length === 0) {
    return null;
  }

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">

          {/* Header */}

          <div className="flex flex-col lg:flex-row justify-between gap-8">

            <div className="max-w-3xl">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-blue-50
                  border
                  border-blue-200
                  text-blue-700
                  px-5
                  py-2
                  rounded-lg
                  text-sm
                  font-semibold
                "
              >
                <Sparkles size={16} />

                Frequently Asked Questions
              </span>

              <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mt-6">
                Everything You Need
                <br />
                Before Getting Started
              </h2>

              <p className="text-slate-700 mt-5 leading-7">
                Find answers to the most common questions
                about mentorship sessions, booking,
                interview preparation, career planning,
                and personalized guidance.
              </p>
            </div>

            {/* Right Card */}

            <div
              className="
                xl:w-[340px]
                rounded-2xl
                bg-white
                border
                border-slate-200
                shadow-sm
                p-8
                text-slate-900
              "
            >
              <HelpCircle size={34} />

              <h3 className="text-3xl font-bold mt-5">
                Need Help?
              </h3>

              <p className="text-slate-500 mt-4 leading-7">
                Browse frequently asked questions or
                connect directly with the mentor for
                personalized assistance.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <MessageCircle size={22} />

                <span>
                  Quick Response
                  <br />
                  Within 24 Hours
                </span>
              </div>
            </div>
          </div>

          {/* FAQ List */}

          <div className="mt-14 space-y-4">
            {faqData.map(
              (faq, index) => (
                <div
                  key={`${faq.question}-${index}`}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    hover:border-blue-300
                    hover:shadow-sm
                    transition
                    duration-300
                  "
                >
                  {/* Question */}

                  <button
                    onClick={() =>
                      setOpenIndex(
                        openIndex === index
                          ? null
                          : index
                      )
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      gap-5
                      p-6
                      text-left
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          h-12
                          w-12
                          rounded-2xl
                          bg-blue-50
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                      >
                        <HelpCircle
                          size={22}
                          className="text-blue-600"
                        />
                      </div>

                      <h3
                        className="
                          text-lg
                          md:text-xl
                          font-semibold
                          text-slate-900
                        "
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`
                        h-10
                        w-10
                        rounded-lg
                        bg-slate-100
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300

                        ${
                          openIndex === index
                            ? "rotate-180 bg-blue-100 shadow-sm"
                            : ""
                        }
                      `}
                    >
                      <ChevronDown
                        size={20}
                        className={`
                          ${
                            openIndex === index
                              ? "text-blue-600"
                              : "text-slate-500"
                          }
                        `}
                      />
                    </div>
                  </button>

                  {/* Answer */}

                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out

                      ${
                        openIndex === index
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          px-6
                          pb-6
                          pl-[88px]
                        "
                      >
                        <div className="border-t border-slate-200 pt-5">
                          <p
                            className="
                              text-slate-600
                              leading-8
                            "
                          >
                            {faq.answer}
                          </p>

                          {/* Tags */}

                          <div className="flex flex-wrap gap-2 mt-5">
                            <span
                              className="
                                bg-white
                                border
                                border-blue-200
                                text-blue-700
                                px-3
                                py-1
                                rounded-lg
                                text-xs
                              "
                            >
                              Mentorship
                            </span>

                            <span
                              className="
                                bg-white
                                border
                                border-slate-200
                                text-slate-700
                                px-3
                                py-1
                                rounded-lg
                                text-xs
                              "
                            >
                              Career
                            </span>

                            <span
                              className="
                                bg-white
                                border
                                border-blue-200
                                text-blue-700
                                px-3
                                py-1
                                rounded-lg
                                text-xs
                              "
                            >
                              Guidance
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Bottom Support Section */}

          <div
            className="
              mt-16
              relative
              overflow-hidden
              bg-white
              border
              border-slate-200
              rounded-2xl
              shadow-sm
              p-10
              text-white
            "
          >
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-10 items-center">

                {/* Left */}

                <div>
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      bg-blue-50
                      border
                      border-blue-200
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      text-slate-900
                    "
                  >
                    💬 Still Have Questions?
                  </span>

                  <h2 className="text-4xl font-bold mt-6 text-slate-900">
                    We're Here To Help You
                    Make The Right Decision
                  </h2>

                  <p className="mt-5 text-slate-600 leading-7 max-w-2xl">
                    If you couldn't find the answer you're looking for,
                    connect directly with the mentor and get personalized
                    guidance before booking your mentorship session.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">
                    <span className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-slate-900">
                      ⚡ Fast Response
                    </span>

                    <span className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-slate-900">
                      🎯 Personalized Advice
                    </span>

                    <span className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-slate-900">
                      🔒 Private Discussion
                    </span>
                  </div>
                </div>

                {/* Right */}

                <div className="grid grid-cols-2 gap-5">
                  <div
                    className="
                      rounded-2xl
                      bg-slate-50
                      border
                      border-slate-200
                      p-6
                      text-slate-900
                    "
                  >
                    <h3 className="text-4xl font-bold">
                      24h
                    </h3>

                    <p className="text-slate-600 mt-2">
                      Average Response
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      p-6
                      text-slate-900
                    "
                  >
                    <h3 className="text-4xl font-bold">
                      1:1
                    </h3>

                    <p className="text-slate-600 mt-2">
                      Personalized Guidance
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      bg-slate-50
                      border
                      border-slate-200
                      p-6
                      text-slate-900
                    "
                  >
                    <h3 className="text-4xl font-bold">
                      100%
                    </h3>

                    <p className="text-slate-600 mt-2">
                      Confidential
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      bg-slate-50
                      border
                      border-slate-200
                      p-6
                      text-slate-900
                    "
                  >
                    <h3 className="text-4xl font-bold">
                      Expert
                    </h3>

                    <p className="text-slate-600 mt-2">
                      Career Support
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}

              <div className="grid md:grid-cols-3 gap-5 mt-12">
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <h4 className="font-semibold text-lg text-slate-900">
                    📅 Book a Session
                  </h4>

                  <p className="text-slate-600 mt-2 text-sm leading-6">
                    Schedule a personalized mentorship session at your
                    preferred time.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <h4 className="font-semibold text-lg text-slate-900">
                    💬 Ask Questions
                  </h4>

                  <p className="text-slate-600 mt-2 text-sm leading-6">
                    Clarify your doubts before enrolling in any program
                    or mentorship.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <h4 className="font-semibold text-lg text-slate-900">
                    🚀 Career Planning
                  </h4>

                  <p className="text-slate-600 mt-2 text-sm leading-6">
                    Get expert advice on career growth, interviews and
                    long-term planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorFAQ;