import {
  AlertTriangle,
  CalendarDays,
  X,
} from "lucide-react";

import type { UserEvent } from "@/types/user-event";

interface CancelRegistrationDialogProps {
  open: boolean;

  event: UserEvent | null;

  onClose: () => void;

  onConfirm: () => void;
}

const CancelRegistrationDialog = ({
  open,
  event,
  onClose,
  onConfirm,
}: CancelRegistrationDialogProps) => {
  if (!open || !event) return null;

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
          max-w-lg

          rounded-[32px]

          overflow-hidden

          shadow-2xl
        "
      >
        {/* Header */}

        <div
          className="
            relative

            bg-red-50

            p-8

            border-b
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

              hover:bg-white

              flex
              items-center
              justify-center

              transition
            "
          >
            <X size={18} />
          </button>

          <div
            className="
              h-16
              w-16

              rounded-2xl

              bg-red-100

              flex
              items-center
              justify-center
            "
          >
            <AlertTriangle
              size={30}
              className="
                text-red-600
              "
            />
          </div>

          <h2
            className="
              text-2xl
              font-bold

              mt-5
            "
          >
            Cancel Registration?
          </h2>

          <p
            className="
              text-slate-600

              mt-2
            "
          >
            This action cannot be undone.
          </p>
        </div>

        {/* Content */}

        <div className="p-8">

          <div
            className="
              bg-slate-50

              rounded-2xl

              p-5
            "
          >
            <h3
              className="
                font-bold
                text-lg
              "
            >
              {event.title}
            </h3>

            <div
              className="
                flex
                items-center
                gap-2

                mt-3

                text-slate-500
              "
            >
              <CalendarDays size={16} />
              {event.date}
            </div>

            <p
              className="
                mt-3

                text-sm
                text-slate-500
              "
            >
              Mentor: {event.mentorName}
            </p>
          </div>

          <div
            className="
              mt-6

              rounded-2xl

              border
              border-red-200

              bg-red-50

              p-4
            "
          >
            <p
              className="
                text-sm
                text-red-700
              "
            >
              Your seat will be released and you
              may lose access to recordings,
              certificates and event resources.
            </p>
          </div>

          {/* Buttons */}

          <div
            className="
              grid
              sm:grid-cols-2

              gap-4

              mt-8
            "
          >
            <button
              onClick={onClose}
              className="
                border

                py-3

                rounded-xl

                font-medium

                hover:bg-slate-50

                transition
              "
            >
              Keep Registration
            </button>

            <button
              onClick={onConfirm}
              className="
                bg-red-600
                hover:bg-red-700

                text-white

                py-3

                rounded-xl

                font-medium

                transition
              "
            >
              Yes, Cancel
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CancelRegistrationDialog;