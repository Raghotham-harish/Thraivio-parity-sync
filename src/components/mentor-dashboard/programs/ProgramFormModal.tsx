import { useEffect, useState } from "react";
import type { Program } from "@/types/program";

interface ProgramFormModalProps {
  open: boolean;

  program?: Program | null;

  onClose: () => void;

  onSave: (program: Program) => void;
}

const ProgramFormModal = ({
  open,
  program,
  onClose,
  onSave,
}: ProgramFormModalProps) => {
  const [formData, setFormData] =
    useState<Program>({
      title: "",
      duration: "",
      students: 0,
      price: 0,
      level: "Beginner",
      description: "",
      image: "",
      rating: 4.9,
      reviews: 120,
      seatsLeft: 8,
      featured: false,
    });

  useEffect(() => {
    if (program) {
      setFormData(program);
    }
  }, [program]);

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
            onClick={onClose}
            className="
              text-2xl
              text-slate-500
            "
          >
            ✕
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Title */}

          <div>
            <label className="font-medium">
              Program Title
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
                p-3
              "
              required
            />
          </div>

          {/* Description */}

          <div>
            <label className="font-medium">
              Description
            </label>

            <textarea
              rows={5}
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
                p-3
              "
            />
          </div>

          {/* Image */}

          <div>
            <label className="font-medium">
              Banner Image URL
            </label>

            <input
              type="text"
              value={formData.image}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  image:
                    e.target.value,
                })
              }
              className="
                w-full
                mt-2
                border
                rounded-xl
                p-3
              "
            />
          </div>

          {/* Grid */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-5
            "
          >
            <div>
              <label>
                Duration
              </label>

              <input
                type="text"
                value={
                  formData.duration
                }
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
                  p-3
                "
              />
            </div>

            <div>
              <label>
                Level
              </label>

              <select
                value={
                  formData.level
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    level:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
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

                <option>
                  Beginner to Advanced
                </option>
              </select>
            </div>
          </div>

          {/* Stats */}

          <div
            className="
              grid
              md:grid-cols-3
              gap-5
            "
          >
            <div>
              <label>
                Students
              </label>

              <input
                type="number"
                value={
                  formData.students
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    students:
                      Number(
                        e.target.value
                      ),
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
              />
            </div>

            <div>
              <label>
                Price
              </label>

              <input
                type="number"
                value={
                  formData.price
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price:
                      Number(
                        e.target.value
                      ),
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
              />
            </div>

            <div>
              <label>
                Seats Left
              </label>

              <input
                type="number"
                value={
                  formData.seatsLeft
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    seatsLeft:
                      Number(
                        e.target.value
                      ),
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
              />
            </div>
          </div>

          {/* Rating */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-5
            "
          >
            <div>
              <label>
                Rating
              </label>

              <input
                type="number"
                step="0.1"
                value={
                  formData.rating
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    rating:
                      Number(
                        e.target.value
                      ),
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
              />
            </div>

            <div>
              <label>
                Reviews
              </label>

              <input
                type="number"
                value={
                  formData.reviews
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    reviews:
                      Number(
                        e.target.value
                      ),
                  })
                }
                className="
                  w-full
                  mt-2
                  border
                  rounded-xl
                  p-3
                "
              />
            </div>
          </div>

          {/* Featured */}

          <div>
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
                  formData.featured
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    featured:
                      e.target.checked,
                  })
                }
              />

              Mark as Best Seller
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
              {program
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