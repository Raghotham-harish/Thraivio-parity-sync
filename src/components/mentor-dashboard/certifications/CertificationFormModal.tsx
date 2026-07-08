import {
  useEffect,
  useState,
} from "react";

import type { Certification } from "@/types/certification";

interface CertificationFormModalProps {
  open: boolean;

  certification?: Certification | null;

  onClose: () => void;

  onSave: (
    certification: Certification
  ) => void;
}

const CertificationFormModal = ({
  open,
  certification,
  onClose,
  onSave,
}: CertificationFormModalProps) => {
  const [formData, setFormData] =
    useState<Certification>({
      title: "",
    });

  useEffect(() => {
    if (certification) {
      setFormData(
        certification
      );
    } else {
      setFormData({
        title: "",
      });
    }
  }, [certification]);

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
      "
    >
      <div
        className="
          bg-white

          w-full
          max-w-2xl

          rounded-3xl

          p-8
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
              {certification
                ? "Edit Certification"
                : "Add Certification"}
            </h2>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Add professional certifications
              and credentials.
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

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>

            <label className="font-medium">
              Certification Title
            </label>

            <textarea
              rows={4}
              value={
                formData.title
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title:
                    e.target.value,
                })
              }
              placeholder="Example: Google Product Leadership"
              className="
                w-full

                mt-2

                border

                rounded-xl

                p-4

                resize-none
              "
              required
            />

          </div>

          {/* Footer */}

          <div
            className="
              flex
              justify-end
              gap-3

              pt-6
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
              {certification
                ? "Update Certification"
                : "Create Certification"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default CertificationFormModal;