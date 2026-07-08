import {
  HeartCrack,
  X,
  Star,
  Building2,
} from "lucide-react";

interface RemoveSavedMentorDialogProps {
  open: boolean;

  mentor: any | null;

  onClose: () => void;

  onConfirm: (
    mentorId: number
  ) => void;
}

const RemoveSavedMentorDialog = ({
  open,
  mentor,
  onClose,
  onConfirm,
}: RemoveSavedMentorDialogProps) => {
  if (!open || !mentor)
    return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        bg-black/60
        backdrop-blur-sm

        flex
        items-center
        justify-center

        p-4
      "
    >
      <div
        className="
          bg-white

          w-full
          max-w-xl

          rounded-[32px]

          overflow-hidden
        "
      >
        {/* Header */}

        <div
          className="
            relative

            bg-gradient-to-r
            from-red-500
            via-rose-500
            to-pink-500

            text-white

            p-6
          "
        >
          <button
            onClick={onClose}
            className="
              absolute
              top-5
              right-5

              h-10
              w-10

              rounded-full

              bg-white/20

              flex
              items-center
              justify-center
            "
          >
            <X size={18} />
          </button>

          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                h-14
                w-14

                rounded-2xl

                bg-white/20

                flex
                items-center
                justify-center
              "
            >
              <HeartCrack
                size={28}
              />
            </div>

            <div>
              <h2
                className="
                  text-2xl
                  font-bold
                "
              >
                Remove Saved Mentor
              </h2>

              <p
                className="
                  text-white/80

                  mt-1
                "
              >
                This mentor will be removed
                from your saved collection.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}

        <div className="p-6">

          {/* Mentor Card */}

          <div
            className="
              border

              rounded-3xl

              p-5
            "
          >
            <div
              className="
                flex
                items-center

                gap-4
              "
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="
                  h-20
                  w-20

                  rounded-3xl

                  object-cover

                  border
                "
              />

              <div>

                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  {mentor.name}
                </h3>

                <p
                  className="
                    text-slate-600

                    mt-1
                  "
                >
                  {mentor.role}
                </p>

                <div
                  className="
                    flex
                    items-center

                    gap-2

                    mt-2

                    text-slate-500
                  "
                >
                  <Building2
                    size={15}
                  />

                  {mentor.company}
                </div>

                <div
                  className="
                    flex
                    items-center

                    gap-2

                    mt-2
                  "
                >
                  <Star
                    size={15}
                    fill="currentColor"
                    className="
                      text-amber-500
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-medium
                    "
                  >
                    {mentor.rating}
                  </span>

                  <span
                    className="
                      text-slate-400
                    "
                  >
                    •
                  </span>

                  <span
                    className="
                      text-sm
                      text-slate-500
                    "
                  >
                    {
                      mentor.reviewsCount
                    }
                    {" "}
                    Reviews
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Warning */}

          <div
            className="
              mt-6

              bg-red-50

              border
              border-red-100

              rounded-3xl

              p-5
            "
          >
            <h4
              className="
                font-semibold
                text-red-700
              "
            >
              Important Notice
            </h4>

            <p
              className="
                text-red-600
                text-sm

                mt-2
              "
            >
              Removing this mentor will
              only remove them from your
              saved list. Your sessions,
              programs, certificates and
              previous bookings will remain
              unaffected.
            </p>
          </div>

          {/* Actions */}

          <div
            className="
              flex

              gap-4

              mt-8
            "
          >
            <button
              onClick={onClose}
              className="
                flex-1

                border

                py-3

                rounded-xl

                font-medium
              "
            >
              Keep Saved
            </button>

            <button
              onClick={() =>
                onConfirm(
                  mentor.id
                )
              }
              className="
                flex-1

                bg-red-600
                hover:bg-red-700

                text-white

                py-3

                rounded-xl

                font-medium

                transition
              "
            >
              Remove Mentor
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RemoveSavedMentorDialog;