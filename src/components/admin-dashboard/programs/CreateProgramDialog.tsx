import { useState } from "react";

import {
  BookPlus,
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

interface CreateProgramDialogProps {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  onCreate: (data: {
    mentor: string;
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

export default function CreateProgramDialog({
  open,
  onOpenChange,
  onCreate,
}: CreateProgramDialogProps) {
  const [mentor, setMentor] =
    useState("");

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

        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-8 text-white">

          <div className="flex items-center gap-5">

            <div className="rounded-3xl bg-white/20 p-4">

              <BookPlus className="h-10 w-10" />

            </div>

            <div>

              <DialogHeader>

                <DialogTitle className="text-3xl font-bold text-white">

                  Create Program

                </DialogTitle>

                <DialogDescription className="mt-2 text-indigo-100">

                  Create a new coaching program that
                  can be published across the platform.

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
              placeholder="Program title..."
              className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-indigo-500"
            />

          </div>

          {/* Mentor */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">

              Mentor

            </label>

            <select
              value={mentor}
              onChange={(e) =>
                setMentor(e.target.value)
              }
              className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-indigo-500"
            >

              <option value="">

                Select Mentor

              </option>

              {mentors.map((mentor) => (

                <option
                  key={mentor.id}
                  value={mentor.id}
                >
                  {mentor.name}
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
                placeholder="Technology"
                className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-indigo-500"
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
                className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-indigo-500"
              >
                <option>

                  Beginner

                </option>

                <option>

                  Intermediate

                </option>

                <option>

                  Advanced

                </option>

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
                className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-indigo-500"
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
                className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-indigo-500"
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
              placeholder="Write a short description about this coaching program..."
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-indigo-500"
            />

          </div>

          {/* Settings */}

          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">

            <div className="flex items-start justify-between gap-5">

              <div>

                <h4 className="flex items-center gap-2 font-semibold text-slate-900">

                  <Sparkles className="h-5 w-5 text-amber-500" />

                  Featured Program

                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">

                  Display this program in featured sections
                  across the website.

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

            <div className="border-t border-slate-200 pt-4">

              <div className="flex items-start justify-between gap-5">

                <div>

                  <h4 className="font-semibold text-slate-900">

                    Publish Immediately

                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">

                    Make this program available to users
                    immediately after creation.

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
              onCreate({
                mentor,
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
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            <BookPlus className="h-5 w-5" />

            Create Program

          </button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}