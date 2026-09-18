import {
  Archive,
  BadgeCheck,
  BadgeX,
  EyeOff,
  RotateCcw,
  Send,
  Trash2,
  Pencil,
  Power,
  PowerOff,
} from "lucide-react";

import type { Program } from "@/types/program";
import { programIsFeatured } from "@/components/shared/programDisplay";
import type { ProgramWorkflowAction } from "./useProgramWorkflow";

interface ProgramWorkflowActionsProps {
  program: Program;
  isLoading: boolean;
  error: string | null;
  onAction: (action: ProgramWorkflowAction) => void;
  onEdit: () => void;
  onDelete: () => void;
}

const iconButton =
  "rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50";

/** Edit + workflow icon actions + delete, one compact row. */
export default function ProgramWorkflowActions({
  program,
  isLoading,
  error,
  onAction,
  onEdit,
  onDelete,
}: ProgramWorkflowActionsProps) {
  const published = program.status === "published";
  const featured = programIsFeatured(program);
  const inactive = program.status === "inactive";
  const archived = program.status === "archived";

  const workflow: {
    action: ProgramWorkflowAction;
    label: string;
    icon: typeof Send;
  }[] = [
    published
      ? { action: "unpublish", label: "Unpublish", icon: EyeOff }
      : { action: "publish", label: "Publish", icon: Send },
    featured
      ? { action: "unfeature", label: "Unfeature", icon: BadgeX }
      : { action: "feature", label: "Feature", icon: BadgeCheck },
    archived
      ? { action: "restore", label: "Restore", icon: RotateCcw }
      : { action: "archive", label: "Archive", icon: Archive },
  ];
  workflow.push(
    inactive
      ? { action: "activate", label: "Activate", icon: Power }
      : { action: "deactivate", label: "Deactivate", icon: PowerOff },
  );

  return (
    <div>
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>

        {workflow.map(({ action, label, icon: Icon }) => (
          <button
            key={action}
            type="button"
            disabled={isLoading}
            onClick={() => onAction(action)}
            aria-label={`${label} program`}
            title={label}
            className={iconButton}
          >
            <Icon className="h-4 w-4" />
          </button>
        ))}

        <button
          type="button"
          onClick={onDelete}
          aria-label="Delete program"
          title="Delete"
          className="rounded-lg border border-border p-2 text-[#BA1A1A] transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      {error && <p className="mt-2 text-xs text-[#BA1A1A]">{error}</p>}
    </div>
  );
}
