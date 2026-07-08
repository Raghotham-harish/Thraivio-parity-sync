import {
  DollarSign,
  Award,
  Users,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Earn From Your Expertise",
    description:
      "Monetize your knowledge through mentorship sessions, mock interviews and career guidance.",
    color: "green",
  },
  {
    icon: Award,
    title: "Build Your Personal Brand",
    description:
      "Establish yourself as a trusted expert and grow your visibility across the industry.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Expand Your Network",
    description:
      "Connect with ambitious professionals, founders and future leaders worldwide.",
    color: "purple",
  },
  {
    icon: HeartHandshake,
    title: "Create Meaningful Impact",
    description:
      "Help others achieve career success while giving back to the professional community.",
    color: "amber",
  },
];

const WhyBecomeMentor = () => {
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
            Why Mentors Love Our Platform
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold">
            More Than Just Mentoring
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
            Join a growing community of industry experts
            who are sharing knowledge, building influence,
            creating opportunities and helping others succeed.
          </p>

        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {benefits.map((item) => {
            const Icon = item.icon;

            const bgColor =
              item.color === "green"
                ? "bg-green-100"
                : item.color === "blue"
                ? "bg-blue-100"
                : item.color === "purple"
                ? "bg-purple-100"
                : "bg-amber-100";

            const borderColor =
  item.color === "green"
    ? "border-green-200"
    : item.color === "blue"
    ? "border-blue-200"
    : item.color === "purple"
    ? "border-purple-200"
    : "border-amber-200";    

            const textColor =
              item.color === "green"
                ? "text-green-600"
                : item.color === "blue"
                ? "text-blue-600"
                : item.color === "purple"
                ? "text-purple-600"
                : "text-amber-600";

            return (
              <div
                key={item.title}
                className="
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

                <div
                  className={`
                    w-14
                    h-14
                    ${bgColor}
${borderColor}
rounded-2xl
border
                    flex
                    items-center
                    justify-center
                  `}
                >
                  <Icon
                    className={textColor}
                    size={28}
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-slate-600
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20 mb-10">

  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
    <h3 className="text-3xl font-bold text-blue-600">500+</h3>
    <p className="text-slate-500">Active Mentors</p>
  </div>

  <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
    <h3 className="text-3xl font-bold text-green-600">10K+</h3>
    <p className="text-slate-500">Sessions</p>
  </div>

  <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center">
    <h3 className="text-3xl font-bold text-purple-600">4.9★</h3>
    <p className="text-slate-500">Average Rating</p>
  </div>

</div>

        {/* Extra Trust Section */}
        <div
          className="
            mt-20
            bg-blue-50
border
border-blue-100
rounded-3xl
p-10
          "
        >

          <div className="grid md:grid-cols-3 gap-8">

            <div className="flex gap-3 p-3 rounded-xl hover:bg-white transition-all duration-300">

              <CheckCircle
    className="text-green-600 mt-1"
    size={22}
  />


              <div>

                <h4 className="font-bold">
                  Flexible Schedule
                </h4>

                <p className="text-slate-500 text-sm mt-1">
                  Mentor whenever it fits your calendar.
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
                  Global Reach
                </h4>

                <p className="text-slate-500 text-sm mt-1">
                  Connect with mentees worldwide.
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
                  Long-Term Impact
                </h4>

                <p className="text-slate-500 text-sm mt-1">
                  Help shape future professionals.
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

export default WhyBecomeMentor;