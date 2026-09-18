import { useEffect, useState } from "react";

import type {
  CreateProgramPayload,
  Program,
  ProgramDurationUnit,
  ProgramLevel,
} from "@/types/program";

import {
  createProgram,
  updateProgram,
} from "@/services/program.service";

interface ProgramFormModalProps {
  open: boolean;

  program?: Program | null;

  onClose: () => void;

  onSave: (program: Program) => void;
}

interface ProgramFormState {
  title: string;
  shortDescription: string;
  description: string;

  thumbnailUrl: string;

  category: string;
  subCategory: string;

  level: ProgramLevel;

  languages: string;
  tags: string;

  duration: number;
  durationUnit: ProgramDurationUnit;

  price: number;
  discountPrice: number;
  currency: string;

  isFree: boolean;
  taxIncluded: boolean;

  maxEnrollments: number;
  allowEnrollment: boolean;
}

const getInitialFormData = (): ProgramFormState => ({
  title: "",
  shortDescription: "",
  description: "",

  thumbnailUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",

  category: "",
  subCategory: "",

  level: "beginner",

  languages: "",
  tags: "",

  duration: 1,
  durationUnit: "weeks",

  price: 0,
  discountPrice: 0,
  currency: "USD",

  isFree: false,
  taxIncluded: false,

  maxEnrollments: 0,
  allowEnrollment: true,
});

const ProgramFormModal = ({
  open,
  program,
  onClose,
  onSave,
}: ProgramFormModalProps) => {
  const [formData, setFormData] =
    useState<ProgramFormState>(
      getInitialFormData()
    );

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitError, setSubmitError] =
    useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    setSubmitError(null);

    if (!program) {
      setFormData(getInitialFormData());
      return;
    }

    setFormData({
      title: program.title ?? "",
      shortDescription:
        program.shortDescription ?? "",
      description:
        program.description ?? "",

      thumbnailUrl:
        program.thumbnail?.url ?? "",

      category:
        program.category ?? "",
      subCategory:
        program.subCategory ?? "",

      level:
        program.level ?? "beginner",

      languages:
        program.languages?.join(", ") ?? "",

      tags:
        program.tags?.join(", ") ?? "",

      duration:
        Number(program.duration ?? 1),

      durationUnit:
        program.durationUnit ?? "weeks",

      price:
        Number(program.pricing?.price ?? 0),

      discountPrice:
        Number(
          program.pricing?.discountPrice ?? 0
        ),

      currency:
        program.pricing?.currency ?? "USD",

      isFree:
        Boolean(
          program.pricing?.isFree
        ),

      taxIncluded:
        Boolean(
          program.pricing?.taxIncluded
        ),

      maxEnrollments:
        Number(
          program.settings?.maxEnrollments ?? 0
        ),

      allowEnrollment:
        program.settings?.allowEnrollment ??
        true,
    });
  }, [open, program]);

  if (!open) {
    return null;
  }

  const updateField = <
    K extends keyof ProgramFormState
  >(
    field: K,
    value: ProgramFormState[K]
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setSubmitError(null);

      const languages = formData.languages
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      const tags = formData.tags
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      const thumbnailUrl =
        formData.thumbnailUrl.trim();

      const payload: CreateProgramPayload = {
        title: formData.title.trim(),

        shortDescription:
          formData.shortDescription.trim(),

        description:
          formData.description.trim(),

        thumbnail: {
          url: thumbnailUrl,
          publicId: "external-image",
          alt:
            formData.title.trim(),
        },

        gallery: [],

        category:
          formData.category.trim(),

        subCategory:
          formData.subCategory.trim(),

        level: formData.level,

        languages,

        tags,

        duration:
          Number(formData.duration),

        durationUnit:
          formData.durationUnit,

        pricing: {
          price:
            formData.isFree
              ? 0
              : Number(formData.price),

          discountPrice:
            formData.isFree
              ? 0
              : Number(
                  formData.discountPrice
                ),

          currency:
            formData.currency.trim() || "USD",

          isFree:
            formData.isFree,

          taxIncluded:
            formData.taxIncluded,
        },

        benefits: [],

        requirements: [],

        learningOutcomes: [],

        curriculum: {
          sections: [],
        },

        faqs: [],
      };

      let response;

      if (program) {
        response = await updateProgram(
          program.id,
          {
            ...payload,
            pricing: {
              ...payload.pricing,
            },
          }
        );
      } else {
        response =
          await createProgram(payload);
      }

      if (!response.data) {
        throw new Error(
          "Program response is empty."
        );
      }

      onSave(response.data);

      onClose();
    } catch (error) {
      console.error(
        program
          ? "Failed to update program:"
          : "Failed to create program:",
        error
      );

      setSubmitError(
        program
          ? "Unable to update the program. Please try again."
          : "Unable to create the program. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
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
          max-w-4xl
          rounded-3xl
          max-h-[90vh]
          overflow-y-auto
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
              {program
                ? "Edit Program"
                : "Create Program"}
            </h2>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Manage your coaching
              program information.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="
              text-2xl
              text-slate-500
              hover:text-slate-900
              disabled:opacity-50
            "
          >
            ✕
          </button>
        </div>

        {/* Error */}

        {submitError && (
          <div
            className="
              mb-6
              rounded-xl
              border
              border-red-200
              bg-red-50
              px-4
              py-3
              text-sm
              text-red-600
            "
          >
            {submitError}
          </div>
        )}

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Title */}

          <div>
            <label
              className="font-medium"
            >
              Program Title
            </label>

            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                updateField(
                  "title",
                  e.target.value
                )
              }
              className="
                w-full
                mt-2
                border
                rounded-xl
                p-3
              "
              placeholder="Complete MERN Stack Bootcamp"
              required
            />
          </div>

          {/* Short Description */}

          <div>
            <label
              className="font-medium"
            >
              Short Description
            </label>

            <input
              type="text"
              value={
                formData.shortDescription
              }
              onChange={(e) =>
                updateField(
                  "shortDescription",
                  e.target.value
                )
              }
              className="
                w-full
                mt-2
                border
                rounded-xl
                p-3
              "
              placeholder="Learn MERN Stack from beginner to advanced"
              required
            />
          </div>

          {/* Description */}

          <div>
            <label
              className="font-medium"
            >
              Description
            </label>

            <textarea
              rows={5}
              value={
                formData.description
              }
              onChange={(e) =>
                updateField(
                  "description",
                  e.target.value
                )
              }
              className="
                w-full
                mt-2
                border
                rounded-xl
                p-3
              "
              placeholder="Describe your coaching program..."
              required
            />
          </div>

          {/* Thumbnail */}

          <div>
            <label
              className="font-medium"
            >
              Thumbnail Image URL
            </label>

            <input
              type="url"
              value={
                formData.thumbnailUrl
              }
              onChange={(e) =>
                updateField(
                  "thumbnailUrl",
                  e.target.value
                )
              }
              className="
                w-full
                mt-2
                border
                rounded-xl
                p-3
              "
              placeholder="https://example.com/program-image.jpg"
              required
            />
          </div>

          {/* Category */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-5
            "
          >
            <div>
              <label
                className="font-medium"
              >
                Category
              </label>

              <input
                type="text"
                value={
                  formData.category
                }
                onChange={(e) =>
                  updateField(
                    "category",
                    e.target.value
                  )
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
                placeholder="Web Development"
                required
              />
            </div>

            <div>
              <label
                className="font-medium"
              >
                Sub Category
              </label>

              <input
                type="text"
                value={
                  formData.subCategory
                }
                onChange={(e) =>
                  updateField(
                    "subCategory",
                    e.target.value
                  )
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
                placeholder="MERN Stack"
                required
              />
            </div>
          </div>

          {/* Level + Duration */}

          <div
            className="
              grid
              md:grid-cols-3
              gap-5
            "
          >
            <div>
              <label
                className="font-medium"
              >
                Level
              </label>

              <select
                value={formData.level}
                onChange={(e) =>
                  updateField(
                    "level",
                    e.target.value as ProgramLevel
                  )
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
              >
                <option value="beginner">
                  Beginner
                </option>

                <option value="intermediate">
                  Intermediate
                </option>

                <option value="advanced">
                  Advanced
                </option>
              </select>
            </div>

            <div>
              <label
                className="font-medium"
              >
                Duration
              </label>

              <input
                type="number"
                min="1"
                value={
                  formData.duration
                }
                onChange={(e) =>
                  updateField(
                    "duration",
                    Number(e.target.value)
                  )
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
                required
              />
            </div>

            <div>
              <label
                className="font-medium"
              >
                Duration Unit
              </label>

              <select
                value={
                  formData.durationUnit
                }
                onChange={(e) =>
                  updateField(
                    "durationUnit",
                    e.target.value as ProgramDurationUnit
                  )
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
              >
                <option value="hours">
                  Hours
                </option>

                <option value="days">
                  Days
                </option>

                <option value="weeks">
                  Weeks
                </option>

                <option value="months">
                  Months
                </option>
              </select>
            </div>
          </div>

          {/* Languages + Tags */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-5
            "
          >
            <div>
              <label
                className="font-medium"
              >
                Languages
              </label>

              <input
                type="text"
                value={
                  formData.languages
                }
                onChange={(e) =>
                  updateField(
                    "languages",
                    e.target.value
                  )
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
                placeholder="English, Hindi"
              />

              <p
                className="
                  text-xs
                  text-slate-500
                  mt-1
                "
              >
                Separate multiple languages
                with commas.
              </p>
            </div>

            <div>
              <label
                className="font-medium"
              >
                Tags
              </label>

              <input
                type="text"
                value={formData.tags}
                onChange={(e) =>
                  updateField(
                    "tags",
                    e.target.value
                  )
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
                placeholder="MERN, React, Node.js"
              />

              <p
                className="
                  text-xs
                  text-slate-500
                  mt-1
                "
              >
                Separate multiple tags
                with commas.
              </p>
            </div>
          </div>

          {/* Pricing */}

          <div
            className="
              border
              border-slate-200
              rounded-2xl
              p-5
            "
          >
            <h3
              className="
                text-lg
                font-semibold
                mb-5
              "
            >
              Pricing
            </h3>

            <div
              className="
                grid
                md:grid-cols-3
                gap-5
              "
            >
              <div>
                <label
                  className="font-medium"
                >
                  Price
                </label>

                <input
                  type="number"
                  min="0"
                  value={
                    formData.price
                  }
                  disabled={
                    formData.isFree
                  }
                  onChange={(e) =>
                    updateField(
                      "price",
                      Number(e.target.value)
                    )
                  }
                  className="
                    w-full
                    mt-2
                    border
                    rounded-xl
                    p-3
                    disabled:bg-slate-100
                  "
                />
              </div>

              <div>
                <label
                  className="font-medium"
                >
                  Discount Price
                </label>

                <input
                  type="number"
                  min="0"
                  value={
                    formData.discountPrice
                  }
                  disabled={
                    formData.isFree
                  }
                  onChange={(e) =>
                    updateField(
                      "discountPrice",
                      Number(e.target.value)
                    )
                  }
                  className="
                    w-full
                    mt-2
                    border
                    rounded-xl
                    p-3
                    disabled:bg-slate-100
                  "
                />
              </div>

              <div>
                <label
                  className="font-medium"
                >
                  Currency
                </label>

                <input
                  type="text"
                  value={
                    formData.currency
                  }
                  onChange={(e) =>
                    updateField(
                      "currency",
                      e.target.value.toUpperCase()
                    )
                  }
                  className="
                    w-full
                    mt-2
                    border
                    rounded-xl
                    p-3
                  "
                  placeholder="USD"
                  required
                />
              </div>
            </div>

            <div
              className="
                mt-5
                flex
                flex-col
                gap-4
              "
            >
              <label
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <input
                  type="checkbox"
                  checked={
                    formData.isFree
                  }
                  onChange={(e) =>
                    updateField(
                      "isFree",
                      e.target.checked
                    )
                  }
                />

                <span>
                  This is a free program
                </span>
              </label>

              <label
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <input
                  type="checkbox"
                  checked={
                    formData.taxIncluded
                  }
                  onChange={(e) =>
                    updateField(
                      "taxIncluded",
                      e.target.checked
                    )
                  }
                />

                <span>
                  Tax included in price
                </span>
              </label>
            </div>
          </div>

          {/* Enrollment Settings */}

          <div
            className="
              border
              border-slate-200
              rounded-2xl
              p-5
            "
          >
            <h3
              className="
                text-lg
                font-semibold
                mb-5
              "
            >
              Enrollment Settings
            </h3>

            <div
              className="
                grid
                md:grid-cols-2
                gap-5
              "
            >
              <div>
                <label
                  className="font-medium"
                >
                  Maximum Enrollments
                </label>

                <input
                  type="number"
                  min="0"
                  value={
                    formData.maxEnrollments
                  }
                  onChange={(e) =>
                    updateField(
                      "maxEnrollments",
                      Number(e.target.value)
                    )
                  }
                  className="
                    w-full
                    mt-2
                    border
                    rounded-xl
                    p-3
                  "
                />

                <p
                  className="
                    text-xs
                    text-slate-500
                    mt-1
                  "
                >
                  Use 0 for unlimited
                  enrollments.
                </p>
              </div>

              <div
                className="
                  flex
                  items-center
                "
              >
                <label
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <input
                    type="checkbox"
                    checked={
                      formData.allowEnrollment
                    }
                    onChange={(e) =>
                      updateField(
                        "allowEnrollment",
                        e.target.checked
                      )
                    }
                  />

                  <span>
                    Allow Enrollment
                  </span>
                </label>
              </div>
            </div>
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
              disabled={isSubmitting}
              className="
                border
                px-6
                py-3
                rounded-xl
                disabled:opacity-50
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-6
                py-3
                rounded-xl
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {isSubmitting
                ? program
                  ? "Updating..."
                  : "Creating..."
                : program
                  ? "Update Program"
                  : "Create Program"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProgramFormModal;