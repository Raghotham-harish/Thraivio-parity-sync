import { useState } from "react";

import {
  ChevronDown,
  HelpCircle,
  Pencil,
  Trash2,
} from "lucide-react";

import type { FAQ } from "@/types/faq";

interface FAQGridCardProps {
  faq: FAQ;

  onEdit: (
    faq: FAQ
  ) => void;

  onDelete: (
    faq: FAQ
  ) => void;
}

const FAQGridCard = ({
  faq,
  onEdit,
  onDelete,
}: FAQGridCardProps) => {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-3xl

        overflow-hidden

        hover:border-blue-300
        hover:shadow-xl

        transition-all
        duration-300
      "
    >
      {/* Top */}

      <div className="p-6">

        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <div
            className="
              flex
              items-start
              gap-4
            "
          >
            <div
              className="
                h-12
                w-12

                rounded-2xl

                bg-blue-50

                flex
                items-center
                justify-center

                shrink-0
              "
            >
              <HelpCircle
                size={22}
                className="
                  text-blue-600
                "
              />
            </div>

            <div>

              <h3
                className="
                  text-xl
                  font-bold
                  leading-8
                "
              >
                {faq.question}
              </h3>

              <p
                className="
                  text-slate-500
                  text-sm

                  mt-3
                  line-clamp-2
                "
              >
                {faq.answer}
              </p>

            </div>

          </div>

          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className={`
              h-10
              w-10

              rounded-full

              bg-slate-100

              flex
              items-center
              justify-center

              transition

              ${
                isOpen
                  ? "rotate-180 bg-blue-100"
                  : ""
              }
            `}
          >
            <ChevronDown
              size={18}
              className="
                text-slate-600
              "
            />
          </button>

        </div>

        {/* Expanded */}

        {isOpen && (
          <div
            className="
              border-t

              mt-5
              pt-5
            "
          >
            <p
              className="
                text-slate-600
                leading-8
              "
            >
              {faq.answer}
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-2

                mt-5
              "
            >
              <span
                className="
                  bg-blue-50
                  text-blue-700

                  px-3
                  py-1

                  rounded-full

                  text-xs
                "
              >
                Mentorship
              </span>

              <span
                className="
                  bg-slate-100
                  text-slate-700

                  px-3
                  py-1

                  rounded-full

                  text-xs
                "
              >
                Career
              </span>

              <span
                className="
                  bg-blue-50
                  text-blue-700

                  px-3
                  py-1

                  rounded-full

                  text-xs
                "
              >
                Guidance
              </span>

            </div>

          </div>
        )}

        {/* Footer */}

        <div
          className="
            flex
            items-center
            justify-between

            mt-6
          "
        >
          <span
            className="
              text-sm
              text-slate-500
            "
          >
            FAQ Item
          </span>

          <div
            className="
              flex
              gap-3
            "
          >
            <button
              onClick={() =>
                onEdit(faq)
              }
              className="
                border
                border-blue-600

                text-blue-600

                px-5
                py-3

                rounded-2xl

                flex
                items-center
                gap-2

                hover:bg-blue-600
                hover:text-white

                transition
              "
            >
              <Pencil size={18} />

              Edit
            </button>

            <button
              onClick={() =>
                onDelete(faq)
              }
              className="
                bg-red-600
                hover:bg-red-700

                text-white

                px-5
                py-3

                rounded-2xl

                flex
                items-center
                gap-2

                transition
              "
            >
              <Trash2 size={18} />

              Delete
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FAQGridCard;