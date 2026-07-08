import {
  useEffect,
  useState,
} from "react";

import type { FAQ } from "@/types/faq";

interface FAQFormModalProps {
  open: boolean;

  faq?: FAQ | null;

  onClose: () => void;

  onSave: (
    faq: FAQ
  ) => void;
}

const FAQFormModal = ({
  open,
  faq,
  onClose,
  onSave,
}: FAQFormModalProps) => {
  const [formData, setFormData] =
    useState<FAQ>({
      question: "",
      answer: "",
    });

  useEffect(() => {
    if (faq) {
      setFormData(faq);
    } else {
      setFormData({
        question: "",
        answer: "",
      });
    }
  }, [faq]);

  if (!open) return null;

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onSave(formData);

    onClose();
  };

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

        overflow-y-auto
      "
    >
      <div
        className="
          bg-white

          w-full
          max-w-2xl

          rounded-3xl

          p-8

          max-h-[90vh]
          overflow-y-auto
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between

            mb-8
          "
        >
          <div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              {faq
                ? "Edit FAQ"
                : "Add FAQ"}
            </h2>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Manage mentor FAQs and
              common student questions.
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              text-3xl
              text-slate-500
            "
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Question */}

          <div>

            <label className="font-medium">
              Question
            </label>

            <input
              type="text"
              value={formData.question}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  question:
                    e.target.value,
                })
              }
              className="
                w-full

                mt-2

                border

                rounded-xl

                p-4
              "
              placeholder="How do mentorship sessions work?"
              required
            />

          </div>

          {/* Answer */}

          <div>

            <label className="font-medium">
              Answer
            </label>

            <textarea
              rows={8}
              value={
                formData.answer
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  answer:
                    e.target.value,
                })
              }
              className="
                w-full

                mt-2

                border

                rounded-xl

                p-4

                resize-none
              "
              placeholder="Enter detailed answer..."
              required
            />

          </div>

          {/* Footer */}

          <div
            className="
              flex
              justify-end
              gap-3

              pt-4
            "
          >
            <button
              type="button"
              onClick={onClose}
              className="
                border

                px-6
                py-3

                rounded-xl
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                bg-blue-600
                hover:bg-blue-700

                text-white

                px-6
                py-3

                rounded-xl
              "
            >
              {faq
                ? "Update FAQ"
                : "Create FAQ"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default FAQFormModal;