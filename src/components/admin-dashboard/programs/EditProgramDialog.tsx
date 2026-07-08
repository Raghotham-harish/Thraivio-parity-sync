import { useEffect, useState } from "react";

import {
  Pencil,
  Sparkles,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


import { mentors } from "@/data/mentors";

type Mentor = (typeof mentors)[number];

type Program = Mentor["programs"][number];

interface EditProgramDialogProps {
  open: boolean;

  mentor: Mentor | null;

  program: Program | null;

  onOpenChange: (open: boolean) => void;

  onUpdate: (data: {
    mentorId: number;
    title: string;
    category: string;
    level: string;
    duration: string;
    price: number;
    description: string;
    featured: boolean;
    published: boolean;
  }) => void;
}

export default function EditProgramDialog({
  open,
  mentor,
  program,
  onOpenChange,
  onUpdate,
}: EditProgramDialogProps) {
  const [mentorId, setMentorId] =
  useState<number>(0);

  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [level, setLevel] =
    useState("Beginner");

  const [duration, setDuration] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [featured, setFeatured] =
    useState(false);

  const [published, setPublished] =
    useState(true);

  useEffect(() => {
    if (!mentor || !program) return;

    setMentorId(mentor.id);

    setTitle(program.title);

    setCategory(mentor.category);

    setLevel(program.level);

    setDuration(program.duration);

    setPrice(String(program.price));

    setDescription("");

    setFeatured(true);

    setPublished(true);
  }, [mentor, program]);

  if (!mentor || !program) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="
          flex
          max-h-[90vh]
          max-w-3xl
          flex-col
          overflow-hidden
          rounded-[32px]
          p-0
        "
      >

        {/* Header */}

        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-8 text-white">

          <div className="flex items-center gap-5">

            <div className="rounded-3xl bg-white/20 p-4">

              <Pencil className="h-10 w-10" />

            </div>

            <div>

              <DialogHeader>

                <DialogTitle className="text-3xl font-bold text-white">

                  Edit Program

                </DialogTitle>

                <DialogDescription className="mt-2 text-orange-100">

                  Update the selected coaching program.

                </DialogDescription>

              </DialogHeader>

            </div>

          </div>

        </div>

        {/* Body */}

        <div className="flex-1 space-y-6 overflow-y-auto p-8">
                      {/* Program Title */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">

              Program Title

            </label>

            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-amber-500"
            />

          </div>

          {/* Mentor */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">

              Mentor

            </label>

            <select
              value={mentorId}
              onChange={(e) =>
  setMentorId(Number(e.target.value))
}
              className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-amber-500"
            >
              {mentors.map((item) => (

                <option
                  key={item.id}
                  value={item.id}
                >
                  {item.name}

                </option>

              ))}

            </select>

          </div>

          {/* Category + Level */}

          <div className="grid gap-5 md:grid-cols-2">

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">

                Category

              </label>

              <input
                type="text"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-amber-500"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">

                Level

              </label>

              <select
                value={level}
                onChange={(e) =>
                  setLevel(e.target.value)
                }
                className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-amber-500"
              >
                <option>Beginner</option>

                <option>Intermediate</option>

                <option>Advanced</option>

              </select>

            </div>

          </div>
                    {/* Duration + Price */}

          <div className="grid gap-5 md:grid-cols-2">

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">

                Duration

              </label>

              <input
                type="text"
                value={duration}
                onChange={(e) =>
                  setDuration(e.target.value)
                }
                placeholder="8 Weeks"
                className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-amber-500"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">

                Price (₹)

              </label>

              <input
                type="number"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value)
                }
                placeholder="9999"
                className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-amber-500"
              />

            </div>

          </div>

          {/* Description */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">

              Program Description

            </label>

            <textarea
              rows={5}
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              placeholder="Update the program description..."
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-amber-500"
            />

          </div>

          {/* Settings */}

          <div className="space-y-5 rounded-3xl border border-slate-200 bg-slate-50 p-6">

            {/* Featured */}

            <div className="flex items-start justify-between gap-5">

              <div>

                <h4 className="flex items-center gap-2 font-semibold text-slate-900">

                  <Sparkles className="h-5 w-5 text-amber-500" />

                  Featured Program

                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">

                  Display this program inside featured
                  sections across the platform.

                </p>

              </div>

              <input
                type="checkbox"
                checked={featured}
                onChange={(e) =>
                  setFeatured(e.target.checked)
                }
                className="mt-1 h-5 w-5 rounded"
              />

            </div>

            {/* Publish */}

            <div className="border-t border-slate-200 pt-5">

              <div className="flex items-start justify-between gap-5">

                <div>

                  <h4 className="font-semibold text-slate-900">

                    Published

                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">

                    Make this program visible across
                    Website, Mentor Dashboard and
                    User Dashboard.

                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={published}
                  onChange={(e) =>
                    setPublished(e.target.checked)
                  }
                  className="mt-1 h-5 w-5 rounded"
                />

              </div>

            </div>

          </div>

        </div>

        {/* Footer */}

        <DialogFooter className="border-t border-slate-200 bg-white p-6">

          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() =>
              onUpdate({
                mentorId,
                title,
                category,
                level,
                duration,
                price: Number(price),
                description,
                featured,
                published,
              })
            }
            className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            <Pencil className="h-5 w-5" />

            Update Program

          </button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}