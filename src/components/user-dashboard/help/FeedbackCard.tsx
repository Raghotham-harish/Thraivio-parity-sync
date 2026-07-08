import {
  MessageSquareHeart,
  Send,
  Smile,
  Star,
  ThumbsUp,
} from "lucide-react";

import { useState } from "react";

interface FeedbackCardProps {
  onSubmit: (
    rating: number,
    feedback: string
  ) => void;
}

const FeedbackCard = ({
  onSubmit,
}: FeedbackCardProps) => {
  const [rating, setRating] =
    useState(5);

  const [feedback, setFeedback] =
    useState("");

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

              bg-pink-50

              px-4
              py-2

              text-sm
              font-medium

              text-pink-700
            "
          >
            <MessageSquareHeart
              size={16}
            />

            Feedback
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Share Your Experience
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            Your suggestions help us
            improve CoachCoaching. Tell us
            what you love or what we can do
            better.
          </p>
        </div>

        <div
          className="
            flex
            h-20
            w-20

            items-center
            justify-center

            rounded-[28px]

            bg-pink-50
          "
        >
          <Smile
            size={34}
            className="
              text-pink-600
            "
          />
        </div>
      </div>

      {/* Form */}

      <div
        className="
          mt-8

          rounded-[32px]

          border
          border-slate-200

          bg-white

          p-8
        "
      >
        {/* Rating */}

        <div>
          <h3
            className="
              text-xl
              font-bold
            "
          >
            Rate Your Experience
          </h3>

          <div
            className="
              mt-6

              flex

              gap-3
            "
          >
            {[1, 2, 3, 4, 5].map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    setRating(item)
                  }
                  className="
                    transition

                    hover:scale-110
                  "
                >
                  <Star
                    size={36}
                    className={
                      item <= rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                    }
                  />
                </button>
              )
            )}
          </div>
        </div>

        {/* Feedback */}

        <div className="mt-8">
          <label
            className="
              mb-3

              block

              font-medium
            "
          >
            Your Feedback
          </label>

          <textarea
            rows={6}
            value={feedback}
            onChange={(e) =>
              setFeedback(
                e.target.value
              )
            }
            placeholder="Tell us about your experience..."
            className="
              w-full

              rounded-3xl

              border
              border-slate-200

              p-5

              outline-none

              transition

              focus:border-pink-500
              focus:ring-2
              focus:ring-pink-100
            "
          />
        </div>

        {/* Tips */}

        <div
          className="
            mt-8

            rounded-3xl

            bg-pink-50

            p-6
          "
        >
          <div
            className="
              flex
              items-start

              gap-4
            "
          >
            <ThumbsUp
              size={24}
              className="
                mt-1

                text-pink-600
              "
            />

            <div>
              <h4
                className="
                  font-semibold
                "
              >
                Helpful Feedback
              </h4>

              <p
                className="
                  mt-2

                  leading-7

                  text-slate-600
                "
              >
                Mention what worked well,
                what didn't, and any ideas
                you have for improving the
                learning experience.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div
          className="
            mt-8

            flex
            flex-col

            gap-5

            border-t
            border-slate-200

            pt-6

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <h4
              className="
                font-semibold
              "
            >
              Thank You ❤️
            </h4>

            <p
              className="
                mt-2

                max-w-2xl

                text-sm

                text-slate-500
              "
            >
              Every suggestion is reviewed
              by our product team to improve
              CoachCoaching for all
              learners.
            </p>
          </div>

          <button
            onClick={() =>
              onSubmit(
                rating,
                feedback
              )
            }
            className="
              inline-flex
              items-center
              justify-center

              gap-2

              rounded-xl

              bg-pink-600

              px-7
              py-3.5

              font-medium

              text-white

              transition

              hover:bg-pink-700
            "
          >
            <Send size={18} />

            Submit Feedback
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbackCard;