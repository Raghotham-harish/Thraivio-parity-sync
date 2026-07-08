import {
  AlertTriangle,
  CalendarDays,
  Clock3,
  User,
  X,
} from "lucide-react";

import type { Session } from "@/types/session";

interface CancelSessionDialogProps {
  open: boolean;

  session: Session | null;

  onClose: () => void;

  onConfirm: (
    sessionId: string
  ) => void;
}

const CancelSessionDialog = ({
  open,
  session,
  onClose,
  onConfirm,
}: CancelSessionDialogProps) => {
  if (!open || !session)
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
            bg-red-50

            border-b

            p-6
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

                  bg-red-100

                  flex
                  items-center
                  justify-center
                "
              >
                <AlertTriangle
                  size={26}
                  className="
                    text-red-600
                  "
                />
              </div>

              <div>
                <h2
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  Cancel Session
                </h2>

                <p
                  className="
                    text-slate-500

                    mt-1
                  "
                >
                  This action cannot be
                  undone later.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="
                h-10
                w-10

                rounded-full

                border

                flex
                items-center
                justify-center
              "
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Body */}

        <div className="p-6">

          {/* Session Card */}

          <div
            className="
              bg-slate-50

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
                src={session.mentorImage}
                alt={session.mentorName}
                className="
                  h-16
                  w-16

                  rounded-2xl

                  object-cover
                "
              />

              <div>
                <h3
                  className="
                    font-bold
                    text-lg
                  "
                >
                  {session.sessionType}
                </h3>

                <p
                  className="
                    text-slate-500
                  "
                >
                  {session.mentorName}
                </p>
              </div>
            </div>

            <div
              className="
                grid
                md:grid-cols-3

                gap-4

                mt-5
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <CalendarDays
                  size={16}
                />

                {session.date}
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <Clock3
                  size={16}
                />

                {session.time}
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <User
                  size={16}
                />

                {session.duration}
              </div>
            </div>
          </div>

          {/* Refund Box */}

          <div
            className="
              mt-6

              bg-blue-50

              border
              border-blue-100

              rounded-2xl

              p-5
            "
          >
            <h4
              className="
                font-semibold
                text-blue-700
              "
            >
              Refund Information
            </h4>

            <p
              className="
                text-sm
                text-blue-600

                mt-2
              "
            >
              Refund processing will be
              connected later through
              Stripe/Razorpay integration.
              Current UI is API ready.
            </p>
          </div>

          {/* Warning */}

          <div
            className="
              mt-5

              bg-red-50

              border
              border-red-100

              rounded-2xl

              p-5
            "
          >
            <p
              className="
                text-red-700
                text-sm
              "
            >
              Cancelling this session may
              affect your learning plan,
              mentor availability and
              future booking slots.
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
              Keep Session
            </button>

            <button
              onClick={() =>
                onConfirm(
                  session.id
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
              Cancel Session
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CancelSessionDialog;