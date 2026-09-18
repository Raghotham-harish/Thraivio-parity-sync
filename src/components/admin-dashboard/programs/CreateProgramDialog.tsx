import { useState } from "react";
import {
  BookPlus,
  CheckCircle2,
  Sparkles,
  X,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type {
  CreateProgramPayload,
  ProgramDurationUnit,
  ProgramLevel,
} from "@/services/program.service";

interface CreateProgramDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (data: CreateProgramPayload) => void;
  isLoading?: boolean;
}

const INITIAL_FORM: CreateProgramPayload = {
  title: "",
  shortDescription: "",
  description: "",
  thumbnail: {
    url: "",
    publicId: "",
    alt: "",
  },
  gallery: [],
  category: "",
  subCategory: "",
  level: "beginner",
  languages: ["English"],
  tags: [],
  duration: 1,
  durationUnit: "weeks",
  pricing: {
    price: 0,
    discountPrice: 0,
    currency: "INR",
    isFree: false,
    taxIncluded: false,
  },
  benefits: [],
  requirements: [],
  learningOutcomes: [],
  curriculum: {
    sections: [
      {
        title: "Introduction",
        description: "Introduction to the program",
        order: 1,
        lessons: [
          {
            title: "Welcome to the Program",
            description: "Introduction and program overview",
            duration: 10,
            videoUrl: "",
            resourceUrl: "",
            preview: true,
            order: 1,
            isPublished: false,
          },
        ],
      },
    ],
  },
  faqs: [],
};

export default function CreateProgramDialog({
  open,
  onOpenChange,
  onCreate,
  isLoading = false,
}: CreateProgramDialogProps) {
  const [form, setForm] =
    useState<CreateProgramPayload>(INITIAL_FORM);

  const [tagsInput, setTagsInput] = useState("");

  const updateField = <
    K extends keyof CreateProgramPayload
  >(
    field: K,
    value: CreateProgramPayload[K]
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const updatePricing = (
    field: keyof CreateProgramPayload["pricing"],
    value: string | number | boolean
  ) => {
    setForm((previous) => ({
      ...previous,
      pricing: {
        ...previous.pricing,
        [field]: value,
      },
    }));
  };

  const handleFreeChange = (isFree: boolean) => {
    setForm((previous) => ({
      ...previous,
      pricing: {
        ...previous.pricing,
        isFree,
        price: isFree ? 0 : previous.pricing.price,
        discountPrice: isFree
          ? 0
          : previous.pricing.discountPrice,
      },
    }));
  };

  const handleTagsChange = (value: string) => {
    setTagsInput(value);

    const tags = value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    updateField("tags", tags);
  };

  const validateForm = () => {
    if (!form.title.trim()) {
      return "Program title is required";
    }

    if (!form.shortDescription.trim()) {
      return "Short description is required";
    }

    if (!form.description.trim()) {
      return "Program description is required";
    }

    if (!form.category.trim()) {
      return "Category is required";
    }

    if (form.duration <= 0) {
      return "Duration must be greater than zero";
    }

    if (
      !form.pricing.isFree &&
      form.pricing.price < 0
    ) {
      return "Price cannot be negative";
    }

    if (!form.curriculum.sections.length) {
      return "At least one curriculum section is required";
    }

    return null;
  };

  const handleSubmit = () => {
    const validationError = validateForm();

    if (validationError) {
      window.alert(validationError);
      return;
    }

    const payload: CreateProgramPayload = {
      ...form,
      title: form.title.trim(),
      shortDescription: form.shortDescription.trim(),
      description: form.description.trim(),
      category: form.category.trim(),
      subCategory: form.subCategory.trim(),
      thumbnail: {
        ...form.thumbnail,
        alt: form.thumbnail.alt || form.title.trim(),
      },
    };

    onCreate(payload);
  };

  const handleClose = () => {
    if (isLoading) return;

    setForm(INITIAL_FORM);
    setTagsInput("");
    onOpenChange(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!isLoading) {
          onOpenChange(value);
        }
      }}
    >
      <DialogContent
        className="
          flex
          max-h-[92vh]
          w-[calc(100%-1.5rem)]
          max-w-3xl
          flex-col
          overflow-hidden
          rounded-3xl
          border-0
          bg-white
          p-0
        "
      >
        {/* Header */}
        <div className="shrink-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-5 py-6 text-white sm:px-8">
          <DialogHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white/20 p-3">
                  <BookPlus className="h-7 w-7" />
                </div>

                <div>
                  <DialogTitle className="text-xl font-bold text-white sm:text-2xl">
                    Create Program
                  </DialogTitle>

                  <DialogDescription className="mt-1 text-sm text-indigo-100">
                    Create a new coaching program.
                  </DialogDescription>
                </div>
              </div>

              <button
                type="button"
                onClick={handleClose}
                disabled={isLoading}
                className="rounded-xl p-2 text-white/80 transition hover:bg-white/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </DialogHeader>
        </div>

        {/* Body */}
        <div className="flex-1 space-y-6 overflow-y-auto px-5 py-6 sm:px-8">
          {/* Basic Information */}
          <section className="space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Basic Information
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Add the main details of your program.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Program Title *
              </label>

              <input
                value={form.title}
                onChange={(event) =>
                  updateField("title", event.target.value)
                }
                placeholder="Complete MERN Stack Bootcamp"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Short Description *
              </label>

              <input
                value={form.shortDescription}
                onChange={(event) =>
                  updateField(
                    "shortDescription",
                    event.target.value
                  )
                }
                placeholder="Learn full-stack web development"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Description *
              </label>

              <textarea
                value={form.description}
                onChange={(event) =>
                  updateField(
                    "description",
                    event.target.value
                  )
                }
                rows={5}
                placeholder="Write complete program description..."
                className="w-full resize-none rounded-xl border border-slate-200 p-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </section>

          {/* Category and Level */}
          <section className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Classification
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Category *
                </label>

                <input
                  value={form.category}
                  onChange={(event) =>
                    updateField(
                      "category",
                      event.target.value
                    )
                  }
                  placeholder="Technology"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Sub Category
                </label>

                <input
                  value={form.subCategory}
                  onChange={(event) =>
                    updateField(
                      "subCategory",
                      event.target.value
                    )
                  }
                  placeholder="Web Development"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Level
                </label>

                <select
                  value={form.level}
                  onChange={(event) =>
                    updateField(
                      "level",
                      event.target.value as ProgramLevel
                    )
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">
                    Intermediate
                  </option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Tags
                </label>

                <input
                  value={tagsInput}
                  onChange={(event) =>
                    handleTagsChange(event.target.value)
                  }
                  placeholder="React, Node.js, MongoDB"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />

                <p className="mt-1 text-xs text-slate-400">
                  Separate tags with commas.
                </p>
              </div>
            </div>
          </section>

          {/* Duration and Pricing */}
          <section className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Duration & Pricing
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Duration
                </label>

                <input
                  type="number"
                  min={1}
                  value={form.duration}
                  onChange={(event) =>
                    updateField(
                      "duration",
                      Number(event.target.value)
                    )
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Duration Unit
                </label>

                <select
                  value={form.durationUnit}
                  onChange={(event) =>
                    updateField(
                      "durationUnit",
                      event.target.value as ProgramDurationUnit
                    )
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                >
                  <option value="hours">Hours</option>
                  <option value="days">Days</option>
                  <option value="weeks">Weeks</option>
                  <option value="months">Months</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Price (INR)
                </label>

                <input
                  type="number"
                  min={0}
                  disabled={form.pricing.isFree}
                  value={form.pricing.price}
                  onChange={(event) =>
                    updatePricing(
                      "price",
                      Number(event.target.value)
                    )
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-slate-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Discount Price (INR)
                </label>

                <input
                  type="number"
                  min={0}
                  disabled={form.pricing.isFree}
                  value={form.pricing.discountPrice}
                  onChange={(event) =>
                    updatePricing(
                      "discountPrice",
                      Number(event.target.value)
                    )
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-slate-100"
                />
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <input
                type="checkbox"
                checked={form.pricing.isFree}
                onChange={(event) =>
                  handleFreeChange(event.target.checked)
                }
                className="h-4 w-4 rounded accent-indigo-600"
              />

              <span className="text-sm font-semibold text-slate-700">
                This is a free program
              </span>
            </label>
          </section>

          {/* Thumbnail */}
          <section className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Program Image
            </h3>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Thumbnail URL
              </label>

              <input
                value={form.thumbnail.url}
                onChange={(event) =>
                  updateField("thumbnail", {
                    ...form.thumbnail,
                    url: event.target.value,
                  })
                }
                placeholder="https://example.com/program-image.jpg"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />

              <p className="mt-1 text-xs text-slate-400">
                Cloudinary upload integration can be added separately.
              </p>
            </div>
          </section>

          {/* Program Settings */}
          <section className="space-y-4 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />

              <div>
                <h3 className="font-bold text-slate-900">
                  Program Settings
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  These settings control program visibility.
                </p>
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={Boolean(
                  form.pricing.isFree
                )}
                onChange={(event) =>
                  handleFreeChange(event.target.checked)
                }
                className="h-4 w-4 rounded accent-indigo-600"
              />

              <span className="text-sm text-slate-700">
                Keep pricing as free
              </span>
            </label>

            <div className="flex items-start gap-3 rounded-xl bg-white p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

              <p className="text-sm leading-6 text-slate-600">
                New programs will be created with draft status.
                You can publish or activate them from the program
                management actions.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <DialogFooter className="shrink-0 gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:px-8">
          <button
            type="button"
            onClick={handleClose}
            disabled={isLoading}
            className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <BookPlus className="h-4 w-4" />

            {isLoading ? "Creating..." : "Create Program"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}