import {
  Clock3,
  Users,
  Star,
  Pencil,
  Trash2,
  Send,
  EyeOff,
  BadgeCheck,
  BadgeX,
  Archive,
  RotateCcw,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import type { Program } from "@/types/program";

import {
  publishProgram,
  unpublishProgram,
  featureProgram,
  unfeatureProgram,
  activateProgram,
  deactivateProgram,
  archiveProgram,
  restoreProgram,
} from "@/services/program.service";

interface ProgramListCardProps {
  program: Program;

  onEdit: (
    program: Program
  ) => void;

  onDelete: (
    program: Program
  ) => void;

  onProgramUpdate: (
    program: Program
  ) => void;
}

const ProgramListCard = ({
  program,
  onEdit,
  onDelete,
  onProgramUpdate,
}: ProgramListCardProps) => {
  const [currentProgram, setCurrentProgram] =
    useState<Program>(program);

  const [isActionLoading, setIsActionLoading] =
    useState(false);

  const [actionError, setActionError] =
    useState<string | null>(null);

  useEffect(() => {
    setCurrentProgram(program);
  }, [program]);

  const image =
    currentProgram.thumbnail?.url ||
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900";

  const rating =
    currentProgram.analytics?.averageRating ?? 0;

  const reviews =
    currentProgram.analytics?.totalReviews ?? 0;

  const students =
    currentProgram.analytics?.enrollments ?? 0;

  const price =
    currentProgram.isFree
      ? 0
      : currentProgram.finalPrice ??
        currentProgram.pricing?.discountPrice ??
        currentProgram.pricing?.price ??
        0;

  const maxEnrollments =
    currentProgram.settings?.maxEnrollments ?? 0;

  const seatsLeft =
    maxEnrollments > 0
      ? Math.max(
          maxEnrollments - students,
          0
        )
      : null;

  const isFeatured =
    currentProgram.isFeatured ||
    currentProgram.settings?.featured ||
    false;

  const durationLabel =
    `${currentProgram.duration} ${currentProgram.durationUnit}`;

  const handleWorkflowAction = async (
    action:
      | "publish"
      | "unpublish"
      | "feature"
      | "unfeature"
      | "activate"
      | "deactivate"
      | "archive"
      | "restore"
  ) => {
    if (isActionLoading) {
      return;
    }

    try {
      setIsActionLoading(true);
      setActionError(null);

      let response;

      switch (action) {
        case "publish":
          response =
            await publishProgram(
              currentProgram.id
            );
          break;

        case "unpublish":
          response =
            await unpublishProgram(
              currentProgram.id
            );
          break;

        case "feature":
          response =
            await featureProgram(
              currentProgram.id
            );
          break;

        case "unfeature":
          response =
            await unfeatureProgram(
              currentProgram.id
            );
          break;

        case "activate":
          response =
            await activateProgram(
              currentProgram.id
            );
          break;

        case "deactivate":
          response =
            await deactivateProgram(
              currentProgram.id
            );
          break;

        case "archive":
          response =
            await archiveProgram(
              currentProgram.id
            );
          break;

        case "restore":
          response =
            await restoreProgram(
              currentProgram.id
            );
          break;
      }

      if (!response?.data) {
        throw new Error(
          "Program response is empty."
        );
      }

      setCurrentProgram(
        response.data
      );

      onProgramUpdate(
        response.data
      );
    } catch (error) {
      console.error(
        `Failed to ${action} program:`,
        error
      );

      setActionError(
        `Unable to ${action} the program. Please try again.`
      );
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleEdit = () => {
    onEdit(currentProgram);
  };

  const handleDelete = () => {
    onDelete(currentProgram);
  };

  return (
    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        overflow-hidden

        hover:shadow-xl

        transition-all
        duration-300
      "
    >
      <div
        className="
          flex
          flex-col

          xl:flex-row
        "
      >
        {/* Image */}

        <div
          className="
            relative

            xl:w-[340px]
            shrink-0
          "
        >
          <img
            src={image}
            alt={
              currentProgram.thumbnail?.alt ||
              currentProgram.title
            }
            className="
              h-full
              w-full
              object-cover
              min-h-[280px]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              to-transparent
            "
          />

          {/* Level */}

          <span
            className="
              absolute
              top-4
              left-4

              bg-white/20
              backdrop-blur

              px-3
              py-1

              rounded-full

              text-xs
              text-white
              font-semibold

              capitalize
            "
          >
            {currentProgram.level}
          </span>

          {/* Featured */}

          {isFeatured && (
            <span
              className="
                absolute
                top-4
                right-4

                bg-blue-600
                text-white

                px-3
                py-1

                rounded-full

                text-xs
                font-semibold
              "
            >
              🔥 Best Seller
            </span>
          )}

          {/* Status */}

          <span
            className="
              absolute
              bottom-4
              right-4

              bg-black/40
              backdrop-blur

              px-3
              py-1

              rounded-full

              text-xs
              text-white
              font-semibold

              capitalize
            "
          >
            {currentProgram.status}
          </span>

          <div
            className="
              absolute
              bottom-5
              left-5
              text-white
              right-20
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-wider
              "
            >
              {currentProgram.category ||
                "Coaching Program"}
            </p>

            <h3
              className="
                text-2xl
                font-bold
                mt-1
                line-clamp-2
              "
            >
              {currentProgram.title}
            </h3>

          </div>

        </div>

        {/* Content */}

        <div
          className="
            flex-1
            p-6
          "
        >
          {/* Top */}

          <div
            className="
              flex
              flex-col

              lg:flex-row
              lg:justify-between

              gap-5
            "
          >
            <div>

              <h2
                className="
                  text-2xl
                  font-bold
                "
              >
                {currentProgram.title}
              </h2>

              <p
                className="
                  mt-3
                  text-slate-500
                  max-w-2xl
                "
              >
                {currentProgram.shortDescription ||
                  currentProgram.description}
              </p>

            </div>

            <div>

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Program Fee
              </p>

              {currentProgram.hasDiscount &&
              currentProgram.pricing?.discountPrice >
                0 ? (
                <div
                  className="
                    flex
                    items-baseline
                    gap-3
                  "
                >
                  <h2
                    className="
                      text-4xl
                      font-bold
                      text-blue-600
                    "
                  >
                    {currentProgram.pricing.currency}
                    {" "}
                    {currentProgram.pricing.discountPrice}
                  </h2>

                  <span
                    className="
                      text-sm
                      text-slate-400
                      line-through
                    "
                  >
                    {currentProgram.pricing.currency}
                    {" "}
                    {currentProgram.pricing.price}
                  </span>
                </div>
              ) : (
                <h2
                  className="
                    text-4xl
                    font-bold
                    text-blue-600
                  "
                >
                  {currentProgram.isFree
                    ? "Free"
                    : `${currentProgram.pricing.currency} ${price}`}
                </h2>
              )}

            </div>

          </div>

          {/* Stats */}

          <div
            className="
              flex
              flex-wrap
              gap-6
              mt-6
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Clock3 size={18} />

              {durationLabel}
            </div>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Users size={18} />

              {students}
              {" "}
              Students
            </div>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Star
                size={18}
                fill="currentColor"
                className="
                  text-yellow-500
                "
              />

              {rating.toFixed(1)}

              <span
                className="
                  text-slate-500
                "
              >
                (
                {reviews}
                {" "}
                Reviews)
              </span>

            </div>

          </div>

          {/* Features */}

          {currentProgram.benefits?.length > 0 && (
            <div
              className="
                grid
                md:grid-cols-2
                gap-3
                mt-6
              "
            >
              {currentProgram.benefits
                .slice(0, 4)
                .map(
                  (benefit, index) => (
                    <div key={index}>
                      ✅ {benefit.title}
                    </div>
                  )
                )}
            </div>
          )}

          {/* Bottom */}

          <div
            className="
              flex
              flex-col

              lg:flex-row
              lg:items-center
              lg:justify-between

              gap-5

              mt-8
            "
          >
            {seatsLeft !== null && (
              <div
                className="
                  bg-amber-50
                  rounded-2xl
                  p-4
                "
              >
                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >
                  Seats Remaining
                </p>

                <p
                  className="
                    font-semibold
                    text-amber-700
                  "
                >
                  {seatsLeft === 0
                    ? "No Spots Left"
                    : `Only ${seatsLeft} Spots Left`}
                </p>

              </div>
            )}

            <div
              className="
                flex
                gap-3
                ml-auto
              "
            >
              <button
                type="button"
                onClick={handleEdit}
                disabled={isActionLoading}
                className="
                  border
                  border-blue-600

                  text-blue-600

                  px-5
                  py-3

                  rounded-xl

                  flex
                  items-center
                  gap-2

                  hover:bg-blue-600
                  hover:text-white

                  transition

                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                <Pencil size={18} />

                Edit
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={isActionLoading}
                className="
                  bg-red-600
                  hover:bg-red-700

                  text-white

                  px-5
                  py-3

                  rounded-xl

                  flex
                  items-center
                  gap-2

                  transition

                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                <Trash2 size={18} />

                Delete
              </button>

            </div>

          </div>

          {/* Workflow Error */}

          {actionError && (
            <div
              className="
                mt-6
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
              {actionError}
            </div>
          )}

          {/* Workflow Actions */}

          <div
            className="
              mt-6
              grid
              grid-cols-2
              md:grid-cols-4
              gap-2
            "
          >

            {currentProgram.status ===
              "published" ? (
              <button
                type="button"
                onClick={() =>
                  handleWorkflowAction(
                    "unpublish"
                  )
                }
                disabled={isActionLoading}
                className="
                  border
                  border-slate-300
                  text-slate-700
                  py-2.5
                  px-3
                  rounded-xl
                  text-sm
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-slate-100
                  transition
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                <EyeOff size={16} />

                {isActionLoading
                  ? "Working..."
                  : "Unpublish"}
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  handleWorkflowAction(
                    "publish"
                  )
                }
                disabled={isActionLoading}
                className="
                  border
                  border-blue-600
                  text-blue-600
                  py-2.5
                  px-3
                  rounded-xl
                  text-sm
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-blue-600
                  hover:text-white
                  transition
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                <Send size={16} />

                {isActionLoading
                  ? "Working..."
                  : "Publish"}
              </button>
            )}

            {isFeatured ? (
              <button
                type="button"
                onClick={() =>
                  handleWorkflowAction(
                    "unfeature"
                  )
                }
                disabled={isActionLoading}
                className="
                  border
                  border-amber-300
                  text-amber-700
                  py-2.5
                  px-3
                  rounded-xl
                  text-sm
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-amber-50
                  transition
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                <Star size={16} />

                {isActionLoading
                  ? "Working..."
                  : "Unfeature"}
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  handleWorkflowAction(
                    "feature"
                  )
                }
                disabled={isActionLoading}
                className="
                  border
                  border-amber-400
                  text-amber-700
                  py-2.5
                  px-3
                  rounded-xl
                  text-sm
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-amber-50
                  transition
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                <Star size={16} />

                {isActionLoading
                  ? "Working..."
                  : "Feature"}
              </button>
            )}

            {currentProgram.status ===
              "inactive" ? (
              <button
                type="button"
                onClick={() =>
                  handleWorkflowAction(
                    "activate"
                  )
                }
                disabled={isActionLoading}
                className="
                  border
                  border-emerald-600
                  text-emerald-700
                  py-2.5
                  px-3
                  rounded-xl
                  text-sm
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-emerald-50
                  transition
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                <BadgeCheck size={16} />

                {isActionLoading
                  ? "Working..."
                  : "Activate"}
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  handleWorkflowAction(
                    "deactivate"
                  )
                }
                disabled={isActionLoading}
                className="
                  border
                  border-orange-400
                  text-orange-700
                  py-2.5
                  px-3
                  rounded-xl
                  text-sm
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-orange-50
                  transition
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                <BadgeX size={16} />

                {isActionLoading
                  ? "Working..."
                  : "Deactivate"}
              </button>
            )}

            {currentProgram.status ===
              "archived" ? (
              <button
                type="button"
                onClick={() =>
                  handleWorkflowAction(
                    "restore"
                  )
                }
                disabled={isActionLoading}
                className="
                  border
                  border-emerald-600
                  text-emerald-700
                  py-2.5
                  px-3
                  rounded-xl
                  text-sm
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-emerald-50
                  transition
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                <RotateCcw size={16} />

                {isActionLoading
                  ? "Working..."
                  : "Restore"}
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  handleWorkflowAction(
                    "archive"
                  )
                }
                disabled={isActionLoading}
                className="
                  border
                  border-slate-400
                  text-slate-700
                  py-2.5
                  px-3
                  rounded-xl
                  text-sm
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-slate-100
                  transition
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                <Archive size={16} />

                {isActionLoading
                  ? "Working..."
                  : "Archive"}
              </button>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProgramListCard;