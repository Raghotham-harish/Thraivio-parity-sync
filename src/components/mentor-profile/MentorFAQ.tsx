import { useState } from "react";

import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const faqData = [
  {
    question: "How do mentorship sessions work?",
    answer:
      "Sessions are conducted one-on-one and tailored to your goals. They include career guidance, interview preparation, resume reviews, and actionable growth strategies.",
  },

  {
    question: "Who should book a mentorship session?",
    answer:
      "Students, fresh graduates, working professionals, and leaders looking to accelerate their careers or switch domains can benefit from mentorship.",
  },

  {
    question: "Can I reschedule my booked session?",
    answer:
      "Yes. Sessions can usually be rescheduled with prior notice based on mentor availability.",
  },

  {
    question: "Do you provide interview preparation?",
    answer:
      "Absolutely. Mock interviews, system design discussions, behavioral rounds, and personalized feedback are included depending on the selected program.",
  },

  {
    question: "Will I get a personalized roadmap?",
    answer:
      "Yes. Every mentee receives customized recommendations and a practical roadmap aligned with their career objectives.",
  },

  {
    question: "Are follow-up questions allowed?",
    answer:
      "Most mentorship plans include limited follow-up support to clarify doubts after the session.",
  },
];

const MentorFAQ = () => {

  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (

    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-4">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

          {/* Header */}

          <div className="flex flex-col lg:flex-row justify-between gap-8">

            <div className="max-w-3xl">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-blue-100
                  text-blue-700
                  px-5
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                "
              >

                <Sparkles size={16} />

                Frequently Asked Questions

              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-6">

                Everything You Need
                Before Getting Started

              </h2>

              <p className="text-slate-500 mt-5 leading-8">

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
                rounded-3xl
                bg-gradient-to-br
                from-blue-600
via-indigo-600
to-slate-900
                p-8
                text-white
                shadow-lg
              "
            >

              <HelpCircle size={34} />

              <h3 className="text-3xl font-bold mt-5">

                Need Help?

              </h3>

              <p className="text-blue-100 mt-4 leading-7">

                Browse frequently asked questions or
                connect directly with the mentor for
                personalized assistance.

              </p>

              <div className="mt-8 flex items-center gap-3">

                <MessageCircle size={22} />

                <span>

                  Quick Response
                  Within 24 Hours

                </span>

              </div>

            </div>

          </div>

          {/* FAQ List */}

          <div className="mt-14 space-y-4">{faqData.map((faq, index) => (

  <div
    key={index}
    className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      hover:border-blue-300
      hover:shadow-lg
      transition-all
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
          rounded-full
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
                  bg-blue-50
                  text-blue-700
                  px-3
                  py-1
                  rounded-full
                  text-xs
                "
              >
                Mentorship
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
                Career
              </span>

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
                Guidance
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

))}

</div>
{/* Bottom Support Section */}

<div
  className="
    mt-16
    relative
    overflow-hidden
    rounded-[32px]
    bg-gradient-to-r
    from-slate-900
    via-blue-900
    to-indigo-900
    p-10
    text-white
  "
>
  <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 z-10"></div>

  {/* Background Glow */}

  <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>

  <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>

  <div className="relative z-10">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* Left */}

      <div>

        <span
          className="
            inline-flex
            items-center
            gap-2
            bg-white/10
            px-4
            py-2
            rounded-full
            text-sm
          "
        >
          💬 Still Have Questions?
        </span>

        <h2 className="text-4xl font-bold mt-6">

          We're Here To Help You
          Make The Right Decision

        </h2>

        <p className="mt-5 text-slate-300 leading-8 max-w-2xl">

          If you couldn't find the answer you're looking for,
          connect directly with the mentor and get personalized
          guidance before booking your mentorship session.

        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          <span className="bg-white/10 px-4 py-2 rounded-xl">
            ⚡ Fast Response
          </span>

          <span className="bg-white/10 px-4 py-2 rounded-xl">
            🎯 Personalized Advice
          </span>

          <span className="bg-white/10 px-4 py-2 rounded-xl">
            🔒 Private Discussion
          </span>

        </div>

      </div>

      {/* Right */}

      <div className="grid grid-cols-2 gap-5">

        <div
          className="
            rounded-2xl
            bg-white/10
            border
border-white/10
            backdrop-blur
            p-6
          "
        >

          <h3 className="text-4xl font-bold">

            24h

          </h3>

          <p className="text-slate-300 mt-2">

            Average Response

          </p>

        </div>

        <div
          className="
            rounded-2xl
            bg-white/10
            border
             border-white/10
            backdrop-blur
            p-6
          "
        >

          <h3 className="text-4xl font-bold">

            1:1

          </h3>

          <p className="text-slate-300 mt-2">

            Personalized Guidance

          </p>

        </div>

        <div
          className="
            rounded-2xl
            bg-white/10
            border
             border-white/10
            backdrop-blur
            p-6
          "
        >

          <h3 className="text-4xl font-bold">

            100%

          </h3>

          <p className="text-slate-300 mt-2">

            Confidential

          </p>

        </div>

        <div
          className="
            rounded-2xl
            bg-white/10
            border
             border-white/10
            backdrop-blur
            p-6
          "
        >

          <h3 className="text-4xl font-bold">

            Expert

          </h3>

          <p className="text-slate-300 mt-2">

            Career Support

          </p>

        </div>

      </div>

    </div>

    {/* Contact Cards */}

    <div className="grid md:grid-cols-3 gap-5 mt-12">

      <div className="bg-white/10 border
             border-white/10 backdrop-blur rounded-2xl p-6">

        <h4 className="font-semibold text-lg">

          📅 Book a Session

        </h4>

        <p className="text-slate-300 mt-2 text-sm leading-6">

          Schedule a personalized mentorship session at your
          preferred time.

        </p>

      </div>

      <div className="bg-white/10 border
             border-white/10 backdrop-blur rounded-2xl p-6">

        <h4 className="font-semibold text-lg">

          💬 Ask Questions

        </h4>

        <p className="text-slate-300 mt-2 text-sm leading-6">

          Clarify your doubts before enrolling in any program
          or mentorship.

        </p>

      </div>

      <div className="bg-white/10 border
             border-white/10 backdrop-blur rounded-2xl p-6">

        <h4 className="font-semibold text-lg">

          🚀 Career Planning

        </h4>

        <p className="text-slate-300 mt-2 text-sm leading-6">

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