import { useEffect, useState } from "react";
import {
  BookOpen,
  Save,
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
  Program,
  ProgramDurationUnit,
  ProgramLevel,
  UpdateProgramPayload,
} from "@/services/program.service";

interface EditProgramDialogProps {
  open: boolean;
  program: Program | null;
  onOpenChange: (open: boolean) => void;
  onUpdate: (
    programId: string,
    data: UpdateProgramPayload
  ) => void;
  isLoading?: boolean;
}

interface EditFormState {
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  subCategory: string;
  level: ProgramLevel;
  duration: number;
  durationUnit: ProgramDurationUnit;
  price: number;
  discountPrice: number;
  isFree: boolean;
  thumbnailUrl: string;
  thumbnailAlt: string;
  tags: string;
}

const createFormState = (
  program: Program
): EditFormState => ({
  title: program.title ?? "",
  shortDescription: program.shortDescription ?? "",
  description: program.description ?? "",
  category: program.category ?? "",
  subCategory: program.subCategory ?? "",
  level: program.level ?? "beginner",
  duration: program.duration ?? 1,
  durationUnit: program.durationUnit ?? "weeks",
  price: program.pricing?.price ?? 0,
  discountPrice: program.pricing?.discountPrice ?? 0,
  isFree: program.pricing?.isFree ?? false,
  thumbnailUrl: program.thumbnail?.url ?? "",
  thumbnailAlt: program.thumbnail?.alt ?? "",
  tags: program.tags?.join(", ") ?? "",
});

export default function EditProgramDialog({
  open,
  program,
  onOpenChange,
  onUpdate,
  isLoading = false,
}: EditProgramDialogProps) {
  const [form, setForm] =
    useState<EditFormState | null>(null);

  useEffect(() => {
    if (program) {
      setForm(createFormState(program));
    }
  }, [program]);

  if (!program || !form) {
    return null;
  }

  const updateField = <K extends keyof EditFormState>(
    field: K,
    value: EditFormState[K]
  ) => {
    setForm((previous) => {
      if (!previous) return previous;

      return {
        ...previous,
        [field]: value,
      };
    });
  };

  const handleFreeChange = (isFree: boolean) => {
    setForm((previous) => {
      if (!previous) return previous;

      return {
        ...previous,
        isFree,
        price: isFree ? 0 : previous.price,
        discountPrice: isFree
          ? 0
          : previous.discountPrice,
      };
    });
  };

  const validateForm = (): string | null => {
    if (!form.title.trim()) {
      return "Program title is required";
    }

    if (!form.shortDescription.trim()) {
      return "Short description is required";
    }

    if (!form.description.trim()) {
      return "Description is required";
    }

    if (!form.category.trim()) {
      return "Category is required";
    }

    if (form.duration <= 0) {
      return "Duration must be greater than zero";
    }

    if (!form.isFree && form.price < 0) {
      return "Price cannot be negative";
    }

    if (
      !form.isFree &&
      form.discountPrice > form.price
    ) {
      return "Discount price cannot be greater than original price";
    }

    return null;
  };

  const handleSubmit = () => {
    const error = validateForm();

    if (error) {
      window.alert(error);
      return;
    }

    const tags = form.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    const payload: UpdateProgramPayload = {
      title: form.title.trim(),
      shortDescription: form.shortDescription.trim(),
      description: form.description.trim(),
      category: form.category.trim(),
      subCategory: form.subCategory.trim(),
      level: form.level,
      duration: form.duration,
      durationUnit: form.durationUnit,
      tags,
      thumbnail: {
        url: form.thumbnailUrl.trim(),
        publicId: program.thumbnail?.publicId ?? "",
        alt:
          form.thumbnailAlt.trim() ||
          form.title.trim(),
      },
      pricing: {
        price: form.isFree ? 0 : form.price,
        discountPrice: form.isFree
          ? 0
          : form.discountPrice,
        currency: program.pricing?.currency ?? "INR",
        isFree: form.isFree,
        taxIncluded:
          program.pricing?.taxIncluded ?? false,
      },
    };

    onUpdate(program.id, payload);
  };

  const handleClose = () => {
    if (!isLoading) {
      onOpenChange(false);
    }
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
        <div className="shrink-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-5 py-6 text-white sm:px-8">
          <DialogHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white/20 p-3">
                  <BookOpen className="h-7 w-7" />
                </div>

                <div>
                  <DialogTitle className="text-xl font-bold text-white sm:text-2xl">
                    Edit Program
                  </DialogTitle>

                  <DialogDescription className="mt-1 text-sm text-indigo-100">
                    Update program information and pricing.
                  </DialogDescription>
                </div>
              </div>

              <button
                type="button"
                onClick={handleClose}
                disabled={isLoading}
                className="rounded-xl p-2 text-white/80 transition hover:bg-white/15 hover:text-white disabled:opacity-50"
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
                Update the main program details.
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
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Description *
              </label>

              <textarea
                rows={5}
                value={form.description}
                onChange={(event) =>
                  updateField(
                    "description",
                    event.target.value
                  )
                }
                className="w-full resize-none rounded-xl border border-slate-200 p-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </section>

          {/* Classification */}
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
                  value={form.tags}
                  onChange={(event) =>
                    updateField("tags", event.target.value)
                  }
                  placeholder="React, Node.js, MongoDB"
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
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
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
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
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                >
                  <option value="hours">Hours</option>
                  <option value="days">Days</option>
                  <option value="weeks">Weeks</option>
                  <option value="months">Months</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Original Price (INR)
                </label>

                <input
                  type="number"
                  min={0}
                  disabled={form.isFree}
                  value={form.price}
                  onChange={(event) =>
                    updateField(
                      "price",
                      Number(event.target.value)
                    )
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-slate-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Discount Price (INR)
                </label>

                <input
                  type="number"
                  min={0}
                  disabled={form.isFree}
                  value={form.discountPrice}
                  onChange={(event) =>
                    updateField(
                      "discountPrice",
                      Number(event.target.value)
                    )
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-slate-100"
                />
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <input
                type="checkbox"
                checked={form.isFree}
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
                value={form.thumbnailUrl}
                onChange={(event) =>
                  updateField(
                    "thumbnailUrl",
                    event.target.value
                  )
                }
                placeholder="https://example.com/image.jpg"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Image Alt Text
              </label>

              <input
                value={form.thumbnailAlt}
                onChange={(event) =>
                  updateField(
                    "thumbnailAlt",
                    event.target.value
                  )
                }
                placeholder="Program image description"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </section>
        </div>

        {/* Footer */}
        <DialogFooter className="shrink-0 gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:px-8">
          <button
            type="button"
            onClick={handleClose}
            disabled={isLoading}
            className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Save className="h-4 w-4" />

            {isLoading ? "Updating..." : "Save Changes"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}