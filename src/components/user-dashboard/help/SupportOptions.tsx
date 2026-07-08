import {
  BookOpen,
  ChevronRight,
  FilePlus2,
  Headphones,
  Mail,
  MessageCircle,
  PhoneCall,
  PlayCircle,
} from "lucide-react";

interface SupportOptionsProps {
  onLiveChat: () => void;

  onEmailSupport: () => void;

  onCallSupport: () => void;

  onCreateTicket: () => void;

  onKnowledgeBase: () => void;

  onVideoGuides: () => void;
}

const supportOptions = [
  {
    title: "Live Chat",

    description:
      "Chat instantly with our support team for quick help.",

    icon: MessageCircle,

    color: "bg-blue-50",

    iconColor: "text-blue-600",

    action: "Start Chat",
  },

  {
    title: "Email Support",

    description:
      "Send us an email and receive a detailed response.",

    icon: Mail,

    color: "bg-emerald-50",

    iconColor: "text-emerald-600",

    action: "Send Email",
  },

  {
    title: "Call Support",

    description:
      "Speak directly with our support specialists.",

    icon: PhoneCall,

    color: "bg-orange-50",

    iconColor: "text-orange-600",

    action: "Call Now",
  },

  {
    title: "Create Ticket",

    description:
      "Submit a support request and track its progress.",

    icon: FilePlus2,

    color: "bg-violet-50",

    iconColor: "text-violet-600",

    action: "Create Ticket",
  },

  {
    title: "Knowledge Base",

    description:
      "Browse articles, FAQs and troubleshooting guides.",

    icon: BookOpen,

    color: "bg-cyan-50",

    iconColor: "text-cyan-600",

    action: "Browse",
  },

  {
    title: "Video Tutorials",

    description:
      "Watch step-by-step tutorials and walkthrough videos.",

    icon: PlayCircle,

    color: "bg-pink-50",

    iconColor: "text-pink-600",

    action: "Watch Videos",
  },
];

interface CardProps {
  title: string;

  description: string;

  icon: any;

  color: string;

  iconColor: string;

  action: string;
}

const SupportOptions = ({
  onLiveChat,
  onEmailSupport,
  onCallSupport,
  onCreateTicket,
  onKnowledgeBase,
  onVideoGuides,
}: SupportOptionsProps) => {
  const handlers = [
    onLiveChat,
    onEmailSupport,
    onCallSupport,
    onCreateTicket,
    onKnowledgeBase,
    onVideoGuides,
  ];

  return (
    <section className="mt-10">
      {/* Heading */}

      <div
        className="
          flex
          flex-col

          gap-4

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

              bg-indigo-50

              px-4
              py-2

              text-sm
              font-medium

              text-indigo-700
            "
          >
            <Headphones size={16} />

            Support Options
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            How can we help you today?
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            Choose your preferred support
            channel. Our team is available
            through live chat, email,
            tickets and a comprehensive
            knowledge base.
          </p>
        </div>
      </div>

      {/* Cards */}

      <div
        className="
          mt-8

          grid

          gap-6

          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {supportOptions.map(
          (item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                onClick={handlers[index]}
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

                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-xl
                "
              >
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

                      ${item.color}
                    `}
                  >
                    <Icon
                      size={30}
                      className={item.iconColor}
                    />
                  </div>

                  <ChevronRight
                    size={22}
                    className="
                      text-slate-400

                      transition-transform

                      group-hover:translate-x-1
                      group-hover:text-blue-600
                    "
                  />
                </div>

                <h3
                  className="
                    mt-7

                    text-2xl
                    font-bold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3

                    leading-7

                    text-slate-500
                  "
                >
                  {item.description}
                </p>

                <div
                  className="
                    mt-8

                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    bg-slate-100

                    px-4
                    py-2

                    text-sm
                    font-semibold

                    transition

                    group-hover:bg-blue-600
                    group-hover:text-white
                  "
                >
                  {item.action}

                  <ChevronRight
                    size={16}
                  />
                </div>
              </button>
            );
          }
        )}
      </div>
    </section>
  );
};

export default SupportOptions;