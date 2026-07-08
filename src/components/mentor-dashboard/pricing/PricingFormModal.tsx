import {
  useEffect,
  useState,
} from "react";

import type { PricingPlan } from "@/types/pricing";

interface PricingFormModalProps {
  open: boolean;

  pricing?: PricingPlan | null;

  onClose: () => void;

  onSave: (
    pricing: PricingPlan
  ) => void;
}

const PricingFormModal = ({
  open,
  pricing,
  onClose,
  onSave,
}: PricingFormModalProps) => {
  const [formData, setFormData] =
    useState<PricingPlan>({
      title: "",
      price: 0,
      duration: "",
      description: "",
      popular: false,
    });

  useEffect(() => {
    if (pricing) {
      setFormData(pricing);
    } else {
      setFormData({
        title: "",
        price: 0,
        duration: "",
        description: "",
        popular: false,
      });
    }
  }, [pricing]);

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
              {pricing
                ? "Edit Pricing Plan"
                : "Add Pricing Plan"}
            </h2>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Manage your mentorship
              pricing and coaching plans.
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
          {/* Title */}

          <div>

            <label className="font-medium">
              Plan Title
            </label>

            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title:
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
              placeholder="Mentorship Call"
              required
            />

          </div>

          {/* Price */}

          <div>

            <label className="font-medium">
              Price
            </label>

            <input
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  price: Number(
                    e.target.value
                  ),
                })
              }
              className="
                w-full

                mt-2

                border

                rounded-xl

                p-4
              "
              placeholder="99"
              required
            />

          </div>

          {/* Duration */}

          <div>

            <label className="font-medium">
              Duration
            </label>

            <input
              type="text"
              value={formData.duration}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  duration:
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
              placeholder="60 Minutes"
              required
            />

          </div>

          {/* Description */}

          <div>

            <label className="font-medium">
              Description
            </label>

            <textarea
              rows={4}
              value={
                formData.description
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description:
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
              placeholder="Plan description..."
              required
            />

          </div>

          {/* Popular */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <input
              type="checkbox"
              checked={
                formData.popular
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  popular:
                    e.target.checked,
                })
              }
            />

            <label>
              Mark As Most Popular
            </label>

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
              {pricing
                ? "Update Plan"
                : "Create Plan"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default PricingFormModal;