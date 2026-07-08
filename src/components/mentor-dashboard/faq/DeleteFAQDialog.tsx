import {
  Trash2,
  MessageCircleQuestion,
} from "lucide-react";

import type { FAQ } from "@/types/faq";

interface DeleteFAQDialogProps {
  open: boolean;

  faq: FAQ | null;

  onClose: () => void;

  onConfirm: () => void;
}

const DeleteFAQDialog = ({
  open,
  faq,
  onClose,
  onConfirm,
}: DeleteFAQDialogProps) => {
  if (!open || !faq)
    return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        bg-black/50

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
          max-w-md

          rounded-3xl

          p-8
        "
      >
        <div
          className="
            h-20
            w-20

            mx-auto

            rounded-full

            bg-red-100

            flex
            items-center
            justify-center
          "
        >
          <Trash2
            size={36}
            className="
              text-red-600
            "
          />
        </div>

        <div
          className="
            text-center
            mt-6
          "
        >
          <h2
            className="
              text-2xl
              font-bold
            "
          >
            Delete FAQ?
          </h2>

          <p
            className="
              text-slate-500
              mt-3
            "
          >
            You are about to delete:
          </p>

          <div
            className="
              mt-5

              bg-slate-50

              rounded-2xl

              p-4
            "
          >
            <div
              className="
                flex
                items-start
                gap-3
              "
            >
              <MessageCircleQuestion
                size={22}
                className="
                  text-blue-600
                  shrink-0
                "
              />

              <div className="text-left">

                <h3 className="font-semibold">
                  {faq.question}
                </h3>

              </div>

            </div>

          </div>

          <p
            className="
              text-red-500
              text-sm
              mt-5
            "
          >
            This action cannot be undone.
          </p>

        </div>

        <div
          className="
            grid
            grid-cols-2
            gap-3

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
            "
          >
            Cancel
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
            "
          >
            Delete FAQ
          </button>

        </div>

      </div>
    </div>
  );
};

export default DeleteFAQDialog;