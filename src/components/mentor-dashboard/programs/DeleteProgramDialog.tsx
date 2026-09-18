import type { Program } from "@/types/program";
import { Trash2 } from "lucide-react";

interface DeleteProgramDialogProps {
  open: boolean;

  program: Program | null;

  onClose: () => void;

  onConfirm: () => void;
}

const DeleteProgramDialog = ({
  open,
  program,
  onClose,
  onConfirm,
}: DeleteProgramDialogProps) => {
  if (!open || !program) return null;

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
 bg-card

 w-full
 max-w-md

 rounded-2xl

          p-8
        "
      >
        {/* Icon */}

        <div
          className="
 h-20
 w-20

 mx-auto

 rounded-full

            bg-[#FFDAD6]

            flex
            items-center
            justify-center
          "
        >
          <Trash2
            size={36}
            className="
 text-[#BA1A1A]
 "
          />
        </div>

        {/* Content */}

        <div className="text-center mt-6">

          <h2
            className="
 text-2xl
 font-bold
 "
          >
            Delete Program?
          </h2>

          <p
            className="
 text-muted-foreground
 mt-3
 "
          >
            You are about to delete:
          </p>

          <div
            className="
 mt-5

 bg-secondary

 rounded-2xl

 p-4
            "
          >
            <h3
              className="
 font-semibold
 "
            >
              {program.title}
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
  {program.duration} {program.durationUnit}
</p>

<p className="text-sm text-primary mt-2">
  {program.isFree ? "Free" : `$${program.finalPrice}`}
</p>

          </div>

          <p
            className="
 text-[#BA1A1A]
 text-sm
 mt-5
 "
          >
            This action cannot be undone.
          </p>

        </div>

        {/* Actions */}

        <div
          className="
 grid
 grid-cols-2
 gap-3

 mt-8
          "
        >
          <button
            onClick={onClose}
            className="
 border

 py-3

 rounded-xl

 font-medium
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
 bg-[#BA1A1A]
 hover:bg-[#BA1A1A]

 text-white

 py-3

              rounded-xl

              font-medium
            "
          >
            Delete Program
          </button>

        </div>

      </div>
    </div>
  );
};

export default DeleteProgramDialog;