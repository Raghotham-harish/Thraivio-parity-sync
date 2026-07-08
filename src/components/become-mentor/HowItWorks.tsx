import {
  UserPlus,
  FileText,
  BadgeCheck,
  CalendarCheck,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create Your Mentor Profile",
    description:
      "Add your professional experience, achievements, skills and mentoring expertise.",
  },
  {
    step: "02",
    icon: FileText,
    title: "Submit Application",
    description:
      "Complete your profile and tell us how you can help mentees achieve their goals.",
  },
  {
    step: "03",
    icon: BadgeCheck,
    title: "Profile Verification",
    description:
      "Our team reviews your profile to maintain a high-quality mentor network.",
  },
  {
    step: "04",
    icon: CalendarCheck,
    title: "Start Mentoring",
    description:
      "Get discovered by learners, receive bookings and begin mentoring immediately.",
  },
];

const HowItWorks = () => {
  return (
    <section className="pb-20 bg-slate-50">
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
            Simple 4-Step Process
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold">
            How It Works
          </h2>

          <p
            className="
              mt-4
              text-slate-600
              text-lg
              max-w-2xl
              mx-auto
            "
          >
            Become a mentor in just a few simple steps and start helping
            professionals, founders and students achieve their goals.
          </p>

        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="
                  relative
                  bg-white
border
border-slate-200
rounded-3xl
p-8
shadow-sm
hover:border-blue-200
hover:shadow-xl
hover:-translate-y-2
transition-all
duration-300
                "
              >

                {/* Step Number */}
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    text-6xl
                    font-bold
                    text-blue-50
                  "
                >
                  {step.step}
                </div>

                {/* Icon */}
                <div
                  className="
                    w-16
                    h-16
                    bg-blue-50
border
border-blue-200
rounded-2xl
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={30}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {step.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-slate-600
                    leading-relaxed
                  "
                >
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20 mb-10">

  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
    <h3 className="text-3xl font-bold text-blue-600">4 Steps</h3>
    <p className="text-slate-500">Simple Process</p>
  </div>

  <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
    <h3 className="text-3xl font-bold text-green-600">48 Hours</h3>
    <p className="text-slate-500">Average Review</p>
  </div>

  <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center">
    <h3 className="text-3xl font-bold text-purple-600">100%</h3>
    <p className="text-slate-500">Flexible Schedule</p>
  </div>

</div>

        {/* Trust Section */}
        <div
          className="
            mt-20
            bg-blue-50
rounded-3xl
border
border-blue-100
            p-10
          "
        >

          <div className="grid md:grid-cols-3 gap-10">

            <div className="flex gap-3 p-3 rounded-xl hover:bg-white transition-all duration-300">

              <CheckCircle
                className="text-green-600 mt-1"
                size={22}
              />

              <div>

                <h4 className="font-bold">
                  Quick Approval
                </h4>

                <p className="text-slate-500 text-sm mt-1">
                  Most applications are reviewed within 48 hours.
                </p>

              </div>

            </div>

            <div className="flex gap-3">

              <CheckCircle
                className="text-green-600 mt-1"
                size={22}
              />

              <div>

                <h4 className="font-bold">
                  Flexible Schedule
                </h4>

                <p className="text-slate-500 text-sm mt-1">
                  Set your own availability and mentoring hours.
                </p>

              </div>

            </div>

            <div className="flex gap-3">

              <CheckCircle
                className="text-green-600 mt-1"
                size={22}
              />

              <div>

                <h4 className="font-bold">
                  Earn While Helping
                </h4>

                <p className="text-slate-500 text-sm mt-1">
                  Get paid for mentorship sessions and career guidance.
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

export default HowItWorks;