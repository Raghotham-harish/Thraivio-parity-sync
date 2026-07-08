import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarCheck,
  CalendarDays,
  CreditCard,
  Heart,
  LifeBuoy,
  Users,
} from "lucide-react";

interface QuickActionsProps {
  onBookSession: () => void;

  onExploreMentors: () => void;

  onPrograms: () => void;

  onEvents: () => void;

  onCertificates: () => void;

  onPayments: () => void;

  onSavedMentors: () => void;

  onHelpSupport: () => void;
}

interface ActionItem {
  title: string;

  description: string;

  button: string;

  icon: any;

  bg: string;

  iconColor: string;

  onClick: () => void;
}

const QuickActions = ({
  onBookSession,
  onExploreMentors,
  onPrograms,
  onEvents,
  onCertificates,
  onPayments,
  onSavedMentors,
  onHelpSupport,
}: QuickActionsProps) => {
  const actions: ActionItem[] = [
    {
      title: "Book Session",

      description:
        "Schedule your next mentoring session with your favorite coach.",

      button: "Book Now",

      icon: CalendarCheck,

      bg: "bg-blue-50",

      iconColor: "text-blue-600",

      onClick: onBookSession,
    },

    {
      title: "Explore Mentors",

      description:
        "Discover experienced mentors across multiple domains.",

      button: "Explore",

      icon: Users,

      bg: "bg-violet-50",

      iconColor: "text-violet-600",

      onClick: onExploreMentors,
    },

    {
      title: "Programs",

      description:
        "Browse premium learning programs and certifications.",

      button: "Browse",

      icon: BookOpen,

      bg: "bg-emerald-50",

      iconColor: "text-emerald-600",

      onClick: onPrograms,
    },

    {
      title: "Events",

      description:
        "Join live workshops, webinars and community events.",

      button: "View Events",

      icon: CalendarDays,

      bg: "bg-orange-50",

      iconColor: "text-orange-600",

      onClick: onEvents,
    },

    {
      title: "Certificates",

      description:
        "Access and download your earned certificates anytime.",

      button: "View",

      icon: Award,

      bg: "bg-amber-50",

      iconColor: "text-amber-600",

      onClick: onCertificates,
    },

    {
      title: "Payments",

      description:
        "Review invoices, transactions and payment history.",

      button: "Open",

      icon: CreditCard,

      bg: "bg-cyan-50",

      iconColor: "text-cyan-600",

      onClick: onPayments,
    },

    {
      title: "Saved Mentors",

      description:
        "Quickly access mentors you've saved for later.",

      button: "Open",

      icon: Heart,

      bg: "bg-pink-50",

      iconColor: "text-pink-600",

      onClick: onSavedMentors,
    },

    {
      title: "Help & Support",

      description:
        "Need help? Contact support or browse helpful resources.",

      button: "Get Help",

      icon: LifeBuoy,

      bg: "bg-indigo-50",

      iconColor: "text-indigo-600",

      onClick: onHelpSupport,
    },
  ];

  return (
    <section className="mt-10">
      {/* Header */}

      <div
        className="
          flex
          flex-col

          gap-5

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <span
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-slate-100

              px-4
              py-2

              text-sm
              font-medium
            "
          >
            <CalendarCheck size={16} />

            Quick Actions
          </span>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Shortcuts
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            Instantly access the most frequently
            used features of your learning
            dashboard.
          </p>
        </div>
                <button
          className="
            rounded-2xl

            border
            border-slate-200

            px-6
            py-3

            font-semibold

            transition

            hover:bg-slate-50
          "
        >
          View All
        </button>
      </div>

      {/* Cards */}

      <div
        className="
          mt-8

          grid

          gap-6

          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={action.onClick}
              className="
                group

                rounded-[30px]

                border
                border-slate-200

                bg-white

                p-7

                text-left

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-xl
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className={`
                    flex

                    h-16
                    w-16

                    items-center
                    justify-center

                    rounded-3xl

                    ${action.bg}
                  `}
                >
                  <Icon
                    size={30}
                    className={action.iconColor}
                  />
                </div>

                <ArrowRight
                  size={22}
                  className="
                    text-slate-400

                    transition-all
                    duration-300

                    group-hover:translate-x-1
                    group-hover:text-blue-600
                  "
                />
              </div>

              {/* Content */}

              <h3
                className="
                  mt-7

                  text-2xl
                  font-bold

                  transition-colors

                  group-hover:text-blue-600
                "
              >
                {action.title}
              </h3>

              <p
                className="
                  mt-3

                  leading-7

                  text-slate-500
                "
              >
                {action.description}
              </p>

              {/* Bottom */}

              <div
                className="
                  mt-8

                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    bg-slate-100

                    px-4
                    py-2

                    text-sm
                    font-semibold

                    transition-all

                    group-hover:bg-blue-600
                    group-hover:text-white
                  "
                >
                  {action.button}

                  <ArrowRight size={16} />
                </span>

                <div
                  className="
                    h-2
                    w-2

                    rounded-full

                    bg-green-500
                  "
                />
              </div>
            </button>
          );
        })}
      </div>
            {/* Bottom Banner */}

      <div
        className="
          mt-10

          overflow-hidden

          rounded-[36px]

          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-violet-600

          p-8

          text-white
        "
      >
        <div
          className="
            flex
            flex-col

            gap-8

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Left */}

          <div className="max-w-2xl">
            <span
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                bg-white/10

                px-4
                py-2

                text-sm
                font-medium
              "
            >
              🚀 Productivity
            </span>

            <h3
              className="
                mt-5

                text-4xl
                font-bold

                leading-tight
              "
            >
              Everything you need,
              just one click away.
            </h3>

            <p
              className="
                mt-4

                leading-8

                text-blue-100
              "
            >
              Quickly schedule mentoring
              sessions, explore new mentors,
              join live events, access your
              certificates, manage payments
              and much more from a single
              dashboard.
            </p>

            <button
              onClick={onExploreMentors}
              className="
                mt-8

                inline-flex
                items-center
                gap-2

                rounded-2xl

                bg-white

                px-7
                py-3.5

                font-semibold

                text-blue-700

                transition-all
                duration-300

                hover:scale-105
                hover:bg-slate-100
              "
            >
              Explore Mentors

              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right */}

          <div
            className="
              grid

              gap-4

              sm:grid-cols-2
            "
          >
            <div
              className="
                rounded-3xl

                bg-white/10

                p-6

                backdrop-blur-sm
              "
            >
              <h4
                className="
                  text-4xl
                  font-bold
                "
              >
                8+
              </h4>

              <p className="mt-2 text-blue-100">
                Quick Shortcuts
              </p>
            </div>

            <div
              className="
                rounded-3xl

                bg-white/10

                p-6

                backdrop-blur-sm
              "
            >
              <h4
                className="
                  text-4xl
                  font-bold
                "
              >
                24/7
              </h4>

              <p className="mt-2 text-blue-100">
                Student Support
              </p>
            </div>

            <div
              className="
                rounded-3xl

                bg-white/10

                p-6

                backdrop-blur-sm
              "
            >
              <h4
                className="
                  text-4xl
                  font-bold
                "
              >
                100+
              </h4>

              <p className="mt-2 text-blue-100">
                Expert Mentors
              </p>
            </div>

            <div
              className="
                rounded-3xl

                bg-white/10

                p-6

                backdrop-blur-sm
              "
            >
              <h4
                className="
                  text-4xl
                  font-bold
                "
              >
                50+
              </h4>

              <p className="mt-2 text-blue-100">
                Premium Programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;