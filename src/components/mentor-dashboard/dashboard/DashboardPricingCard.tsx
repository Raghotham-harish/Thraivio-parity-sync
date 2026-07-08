import { DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  mentor: any;
}

const DashboardPricingCard = ({
  mentor,
}: Props) => {
  const plans = [
    {
      title: "Intro Call",
      price:
        mentor.pricing.introCall,
      duration:
        mentor.sessionDuration
          .introCall,
    },

    {
      title:
        "Mentorship Call",
      price:
        mentor.pricing
          .mentorshipCall,
      duration:
        mentor.sessionDuration
          .mentorshipCall,
    },

    {
      title:
        "Mock Interview",
      price:
        mentor.pricing
          .mockInterview,
      duration:
        mentor.sessionDuration
          .mockInterview,
    },

    {
      title:
        "Monthly Program",
      price:
        mentor.pricing
          .monthlyProgram,
      duration:
        mentor.sessionDuration
          .monthlyProgram,
    },
  ];

  return (
    <div
      className="
        bg-white
        border
        rounded-3xl
        p-6
        shadow-sm
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >
        <div>
          <h3
            className="
              text-xl
              font-bold
            "
          >
            Pricing Plans
          </h3>

          <p
            className="
              text-sm
              text-slate-500
              mt-1
            "
          >
            Current mentorship pricing
          </p>
        </div>

        <DollarSign
          className="
            text-green-600
          "
        />
      </div>

      <div className="space-y-4">
        {plans.map(
          (plan) => (
            <div
              key={plan.title}
              className="
                border
                rounded-2xl
                p-4
                flex
                justify-between
                items-center
              "
            >
              <div>
                <h4 className="font-semibold">
                  {plan.title}
                </h4>

                <p
                  className="
                    text-sm
                    text-slate-500
                    mt-1
                  "
                >
                  {plan.duration}
                </p>
              </div>

              <span
                className="
                  text-xl
                  font-bold
                  text-green-600
                "
              >
                ${plan.price}
              </span>
            </div>
          )
        )}
      </div>

      <Link
        to="/mentor-dashboard/pricing"
        className="
          block
          text-center
          mt-6
          text-green-600
          font-medium
        "
      >
        Manage Pricing
      </Link>
    </div>
  );
};

export default DashboardPricingCard;