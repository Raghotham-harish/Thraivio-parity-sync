import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Clock,
  ShieldCheck,
  Calendar,
} from "lucide-react";

const faqs = [
  {
    question: "Who can become a mentor?",
    answer:
      "Professionals, founders, managers, professors, coaches and experienced individuals who want to help others grow can become mentors.",
  },
  {
    question: "Do I need any certification?",
    answer:
      "No. Certifications are optional. Your experience, achievements and expertise are more important.",
  },
  {
    question: "Can I edit my profile later?",
    answer:
      "Yes. You can update your profile, skills, experience and social links anytime.",
  },
  {
    question: "How long does verification take?",
    answer:
      "Most mentor applications are reviewed within 24-48 hours.",
  },
  {
    question: "Is becoming a mentor free?",
    answer:
      "Yes. Creating a mentor profile is completely free.",
  },
];

const MentorFAQ = () => {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const scrollToForm = () => {
    const form =
      document.getElementById("mentor-form");

    form?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm">

        {/* Header */}
        <div className="text-center mb-16">

          <span
            className="
              bg-blue-50
border
border-blue-200
text-blue-700
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold">
            Everything You Need To Know
          </h2>

          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Common questions about becoming a mentor.
          </p>

        </div>

        {/* Quick Highlights */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">

          <div
            className="
              border
              rounded-2xl
              p-5
              text-center
              bg-slate-50
shadow-sm
hover:border-blue-200
hover:shadow-lg
hover:-translate-y-1
transition-all
duration-300
            "
          >
            <Clock
              className="mx-auto text-blue-600"
              size={28}
            />

            <h3 className="font-bold mt-3">
              24-48 Hours
            </h3>

            <p className="text-sm text-slate-500">
              Application Review
            </p>

          </div>

          <div
            className="
              border
              rounded-2xl
              p-5
              text-center
              bg-slate-50
            "
          >
            <ShieldCheck
              className="mx-auto text-green-600"
              size={28}
            />

            <h3 className="font-bold mt-3">
              Free Profile
            </h3>

            <p className="text-sm text-slate-500">
              No Joining Fee
            </p>

          </div>

          <div
            className="
              border
              rounded-2xl
              p-5
              text-center
              bg-slate-50
            "
          >
            <Calendar
              className="mx-auto text-purple-600"
              size={28}
            />

            <h3 className="font-bold mt-3">
              Flexible Schedule
            </h3>

            <p className="text-sm text-slate-500">
              You Control Availability
            </p>

          </div>

        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="
                border
                border-slate-200
                rounded-2xl
                overflow-hidden
                shadow-sm
hover:border-blue-200
hover:shadow-lg
transition-all
duration-300
              "
            >

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
p-6
text-left
font-semibold
hover:bg-blue-50
transition-colors
" 
>
                {faq.question}

                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div
                  className="
px-6
pb-6
pt-2
bg-slate-50
text-slate-600
leading-relaxed
border-t
border-slate-100
"
                >
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">

          <p className="text-slate-500 max-w-xl mx-auto mb-6">
            Still have questions? Start your application and our team will guide you.
          </p>

          <button
            onClick={scrollToForm}
            className="
              inline-flex
              items-center
              gap-2
              bg-blue-600
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-blue-700
              transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
            "
          >
            Apply As Mentor

            <ArrowRight size={18} />
          </button>
          <p className="text-sm text-slate-400 mt-4">
  Join hundreds of industry experts helping professionals grow every day.
</p>

        </div>

      </div>
      </div>
    </section>
  );
};

export default MentorFAQ;