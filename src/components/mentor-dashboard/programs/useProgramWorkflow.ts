import { useEffect, useState } from "react";

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

export type ProgramWorkflowAction =
  | "publish"
  | "unpublish"
  | "feature"
  | "unfeature"
  | "activate"
  | "deactivate"
  | "archive"
  | "restore";

const handlers = {
  publish: publishProgram,
  unpublish: unpublishProgram,
  feature: featureProgram,
  unfeature: unfeatureProgram,
  activate: activateProgram,
  deactivate: deactivateProgram,
  archive: archiveProgram,
  restore: restoreProgram,
};

/**
 * Publish / feature / activate / archive workflow for a mentor's program.
 * Shared by the grid and list cards so both call the same service functions.
 */
export function useProgramWorkflow(
  program: Program,
  onProgramUpdate: (program: Program) => void,
) {
  const [currentProgram, setCurrentProgram] = useState<Program>(program);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);

  useEffect(() => {
    setCurrentProgram(program);
  }, [program]);

  const run = async (action: ProgramWorkflowAction) => {
    if (isActionLoading) return;
    try {
      setIsActionLoading(true);
      setActionError(null);
      const response = await handlers[action](currentProgram.id);
      if (!response?.data) throw new Error("Program response is empty.");
      setCurrentProgram(response.data);
      onProgramUpdate(response.data);
    } catch (error) {
      console.error(`Failed to ${action} program:`, error);
      setActionError(`Unable to ${action} the program. Please try again.`);
    } finally {
      setIsActionLoading(false);
    }
  };

  return { currentProgram, isActionLoading, actionError, run };
}
