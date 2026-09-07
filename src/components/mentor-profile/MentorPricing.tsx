import { useState } from "react";

import type { MentorApiResponse } from "@/services/mentor.service";

interface MentorPricingProps {
  mentor: MentorApiResponse;
}

const MentorPricing = ({
  mentor,
}: MentorPricingProps) => {
  const [selectedPlan, setSelectedPlan] =
    useState("Monthly Program");

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-slate-200 rounded-xl p-10 shadow-sm">

          {/* Header */}
          <div className="text-center">

            <span
              className="
                inline-block
                bg-blue-50
                border
                border-blue-200
                text-blue-700
                px-4
                py-1
                rounded-lg
                text-sm
                font-semibold
              "
            >
              Coaching Plans
            </span>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mt-4">
              Choose Your Mentorship Journey
            </h2>

            <p className="text-slate-600 leading-7 mt-3 max-w-2xl mx-auto">
              Flexible coaching options designed for every stage of your career growth.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

            {/* Intro Call */}
            <div
              onClick={() => setSelectedPlan("Intro Call")}
              className={`
                border
                rounded-lg
                p-5
                hover:shadow-sm
                transition-all
                duration-200
                cursor-pointer

                ${
                  selectedPlan === "Intro Call"
                    ? "border-blue-600 ring-2 ring-blue-100 shadow-md"
                    : ""
                }
              `}
            >

              {selectedPlan === "Intro Call" && (
                <div className="mb-3">
                  <span
                    className="
                      bg-blue-600
                      text-white
                      text-xs
                      px-3
                      py-1
                      rounded-lg
                    "
                  >
                    Selected
                  </span>
                </div>
              )}

              <h3 className="font-semibold">
                Intro Call
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Perfect for career guidance and quick clarity.
              </p>

              {/* Backend: pricing.introCall */}
              <p className="text-3xl font-bold mt-3">
                ${mentor.pricing.introCall}
              </p>

              {/* Backend: sessionDuration.introCall */}
              <p className="text-slate-500 mt-2">
                {mentor.sessionDuration.introCall} minutes
              </p>

              {/* Hardcoded because these features are not in Mentor API */}
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>✓ Career Guidance</li>
                <li>✓ Goal Assessment</li>
                <li>✓ Action Plan</li>
              </ul>

              <button
                type="button"
                className="
                  w-full
                  mt-5
                  bg-blue-600
                  text-white
                  py-2.5
                  rounded-lg
                  font-semibold
                  hover:bg-blue-700
                  transition
                "
              >
                Choose Plan
              </button>

            </div>

            {/* Mentorship Call */}
            <div
              onClick={() => setSelectedPlan("Mentorship Call")}
              className={`
                border
                rounded-lg
                p-5
                hover:shadow-sm
                transition-all
                duration-200
                cursor-pointer

                ${
                  selectedPlan === "Mentorship Call"
                    ? "border-blue-600 ring-2 ring-blue-100 shadow-md"
                    : ""
                }
              `}
            >

              {selectedPlan === "Mentorship Call" && (
                <div className="mb-3">
                  <span
                    className="
                      bg-blue-600
                      text-white
                      text-xs
                      px-3
                      py-1
                      rounded-lg
                    "
                  >
                    Selected
                  </span>
                </div>
              )}

              <h3 className="font-semibold">
                Mentorship Call
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Deep personalized mentorship session.
              </p>

              {/* Backend: pricing.mentorshipCall */}
              <p className="text-3xl font-bold mt-3">
                ${mentor.pricing.mentorshipCall}
              </p>

              {/* Backend: sessionDuration.mentorshipCall */}
              <p className="text-slate-500 mt-2">
                {mentor.sessionDuration.mentorshipCall} minutes
              </p>

              {/* Hardcoded */}
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>✓ Personalized Strategy</li>
                <li>✓ Career Roadmap</li>
                <li>✓ Direct Q&A</li>
              </ul>

              <button
                type="button"
                className="
                  w-full
                  mt-5
                  bg-blue-600
                  text-white
                  py-2.5
                  rounded-lg
                  font-semibold
                  hover:bg-blue-700
                  transition
                "
              >
                Choose Plan
              </button>

            </div>

            {/* Mock Interview */}
            <div
              onClick={() => setSelectedPlan("Mock Interview")}
              className={`
                border
                rounded-lg
                p-5
                hover:shadow-sm
                transition-all
                duration-200
                cursor-pointer

                ${
                  selectedPlan === "Mock Interview"
                    ? "border-blue-600 ring-2 ring-blue-100 shadow-md"
                    : ""
                }
              `}
            >

              {selectedPlan === "Mock Interview" && (
                <div className="mb-3">
                  <span
                    className="
                      bg-blue-600
                      text-white
                      text-xs
                      px-3
                      py-1
                      rounded-lg
                    "
                  >
                    Selected
                  </span>
                </div>
              )}

              <h3 className="font-semibold">
                Mock Interview
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Practice with real interview scenarios.
              </p>

              {/* Backend: pricing.mockInterview */}
              <p className="text-3xl font-bold mt-3">
                ${mentor.pricing.mockInterview}
              </p>

              {/* Backend: sessionDuration.mockInterview */}
              <p className="text-slate-500 mt-2">
                {mentor.sessionDuration.mockInterview} minutes
              </p>

              {/* Hardcoded */}
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>✓ Real Interview Simulation</li>
                <li>✓ Detailed Feedback</li>
                <li>✓ Improvement Plan</li>
              </ul>

              <button
                type="button"
                className="
                  w-full
                  mt-5
                  bg-blue-600
                  text-white
                  py-2.5
                  rounded-lg
                  font-semibold
                  hover:bg-blue-700
                  transition
                "
              >
                Choose Plan
              </button>

            </div>

            {/* Monthly Program */}
            <div
              onClick={() => setSelectedPlan("Monthly Program")}
              className={`
                border
                border-blue-600
                rounded-2xl
                p-5
                bg-white
                relative
                shadow-sm
                hover:shadow-md
                transition-all
                duration-200
                cursor-pointer

                ${
                  selectedPlan === "Monthly Program"
                    ? "ring-2 ring-blue-200 shadow-md"
                    : ""
                }
              `}
            >

              {selectedPlan === "Monthly Program" && (
                <div className="mb-3">
                  <span
                    className="
                      bg-blue-600
                      text-white
                      text-xs
                      px-3
                      py-1
                      rounded-lg
                    "
                  >
                    Selected
                  </span>
                </div>
              )}

              <div
                className="
                  absolute
                  -top-3
                  left-1/2
                  -translate-x-1/2
                  bg-blue-600
                  text-white
                  text-xs
                  font-semibold
                  px-4
                  py-1
                  rounded-lg
                "
              >
                Most Popular
              </div>

              <h3 className="font-semibold">
                Monthly Program
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Complete transformation with structured coaching.
              </p>

              {/* Backend: pricing.monthlyProgram */}
              <p className="text-3xl font-bold mt-3 text-slate-900">
                ${mentor.pricing.monthlyProgram}
              </p>

              {/* Backend: sessionDuration.monthlyProgram */}
              <p className="text-slate-500 mt-2">
                {mentor.sessionDuration.monthlyProgram} minutes
              </p>

              {/* Hardcoded */}
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>✓ Weekly Sessions</li>
                <li>✓ Progress Tracking</li>
                <li>✓ Priority Support</li>
              </ul>

              <button
                type="button"
                className="
                  w-full
                  mt-5
                  bg-blue-600
                  text-white
                  py-2.5
                  rounded-lg
                  font-semibold
                  hover:bg-blue-700
                  transition
                "
              >
                Choose Plan
              </button>

            </div>

          </div>

          {/* Discovery CTA */}
          <div className="mt-8 text-center">

            <p className="text-slate-500 mb-4">
              Not sure which plan is right for you?
              Start with a free discovery conversation.
            </p>

            {/* Booking is not integrated yet */}
            <button
              type="button"
              className="
                inline-block
                bg-blue-600
                text-white
                px-8
                py-3
                rounded-lg
                font-medium
                hover:bg-blue-700
                hover:shadow-sm
                transition
              "
            >
              Book Your Discovery Call
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MentorPricing;