import {
  useEffect,
  useMemo,
  useState,
} from "react";

import type { Program } from "@/types/program";

import {
  getMyPrograms,
  deleteProgram,
} from "@/services/program.service";

import ProgramsHeader from "@/components/mentor-dashboard/programs/ProgramsHeader";
import ProgramsToolbar from "@/components/mentor-dashboard/programs/ProgramsToolbar";

import ProgramGridCard from "@/components/mentor-dashboard/programs/ProgramGridCard";
import ProgramListCard from "@/components/mentor-dashboard/programs/ProgramListCard";

import EmptyPrograms from "@/components/mentor-dashboard/programs/EmptyPrograms";

import ProgramFormModal from "@/components/mentor-dashboard/programs/ProgramFormModal";

import DeleteProgramDialog from "@/components/mentor-dashboard/programs/DeleteProgramDialog";

const Programs = () => {
  const [programs, setPrograms] =
    useState<Program[]>([]);

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

  const [isLoading, setIsLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [isFormOpen, setIsFormOpen] =
    useState(false);

  const [
    selectedProgram,
    setSelectedProgram,
  ] = useState<Program | null>(
    null
  );

  const [
    isDeleteOpen,
    setIsDeleteOpen,
  ] = useState(false);

  useEffect(() => {
    const loadPrograms = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response =
          await getMyPrograms();

        setPrograms(
          response.data ?? []
        );
      } catch (error) {
        console.error(
          "Failed to load mentor programs:",
          error
        );

        setError(
          "Unable to load your programs. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadPrograms();
  }, []);

  const filteredPrograms =
    useMemo(() => {
      const normalizedSearch =
        search
          .trim()
          .toLowerCase();

      if (!normalizedSearch) {
        return programs;
      }

      return programs.filter(
        (program) =>
          program.title
            .toLowerCase()
            .includes(
              normalizedSearch
            ) ||
          program.level
            .toLowerCase()
            .includes(
              normalizedSearch
            ) ||
          program.category
            .toLowerCase()
            .includes(
              normalizedSearch
            )
      );
    }, [programs, search]);

  const handleAddProgram =
    () => {
      setSelectedProgram(null);
      setIsFormOpen(true);
    };

  const handleEditProgram =
    (
      program: Program
    ) => {
      setSelectedProgram(program);
      setIsFormOpen(true);
    };

  const handleDeleteProgram =
    (
      program: Program
    ) => {
      setSelectedProgram(program);
      setIsDeleteOpen(true);
    };

  const handleSaveProgram =
    (
      program: Program
    ) => {
      setPrograms(
        (currentPrograms) => {
          const exists =
            currentPrograms.some(
              (item) =>
                item.id === program.id
            );

          if (exists) {
            return currentPrograms.map(
              (item) =>
                item.id === program.id
                  ? program
                  : item
            );
          }

          return [
            program,
            ...currentPrograms,
          ];
        }
      );

      setIsFormOpen(false);
      setSelectedProgram(null);
    };

  const handleProgramUpdate =
    (
      updatedProgram: Program
    ) => {
      setPrograms(
        (currentPrograms) =>
          currentPrograms.map(
            (program) =>
              program.id ===
              updatedProgram.id
                ? updatedProgram
                : program
          )
      );
    };

  const confirmDelete = async () => {
    if (!selectedProgram) {
      return;
    }

    try {
      await deleteProgram(
        selectedProgram.id
      );

      setPrograms(
        (currentPrograms) =>
          currentPrograms.filter(
            (program) =>
              program.id !==
              selectedProgram.id
          )
      );

      setIsDeleteOpen(false);
      setSelectedProgram(null);
    } catch (error) {
      console.error(
        "Failed to delete program:",
        error
      );

      setError(
        "Unable to delete the program. Please try again."
      );

      setIsDeleteOpen(false);
      setSelectedProgram(null);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-8">

        <div
          className="
 bg-card
 border
 border-border
 rounded-2xl
            p-10
            text-center
          "
        >
          <p
            className="
 text-muted-foreground
 text-lg
 "
          >
            Loading your programs...
          </p>
        </div>

      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-8">

        <div
          className="
 bg-card
 border
 border-[#BA1A1A]
 rounded-2xl
            p-10
            text-center
          "
        >
          <h2
            className="
 text-2xl
 font-bold
 text-foreground
 "
          >
            Unable to Load Programs
          </h2>

          <p
            className="
 text-muted-foreground
 mt-3
 "
          >
            {error}
          </p>

          <button
            onClick={() =>
              window.location.reload()
            }
            className="
 mt-6
 bg-primary
 hover:bg-primary/90
 text-white
              px-6
              py-3
              rounded-xl
              font-medium
              transition
            "
          >
            Try Again
          </button>
        </div>

      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <ProgramsHeader
        totalPrograms={
          programs.length
        }
        onAddProgram={
          handleAddProgram
        }
      />

      {/* Toolbar */}

      <ProgramsToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
      />

      {/* Empty State */}

      {filteredPrograms.length ===
      0 ? (
        <EmptyPrograms
          onAddProgram={
            handleAddProgram
          }
        />
      ) : (
        <>
          {/* Grid View */}

          {view === "grid" && (
            <div
              className="
 grid
 md:grid-cols-2
 xl:grid-cols-3
 gap-6
              "
            >
              {filteredPrograms.map(
                (program) => (
                  <ProgramGridCard
                    key={program.id}
                    program={program}
                    onEdit={
                      handleEditProgram
                    }
                    onDelete={
                      handleDeleteProgram
                    }
                    onProgramUpdate={
                      handleProgramUpdate
                    }
                  />
                )
              )}
            </div>
          )}

          {/* List View */}

          {view === "list" && (
            <div
              className="
 space-y-6
 "
            >
              {filteredPrograms.map(
                (program) => (
                  <ProgramListCard
                    key={program.id}
                    program={program}
                    onEdit={
                      handleEditProgram
                    }
                    onDelete={
                      handleDeleteProgram
                    }
                    onProgramUpdate={
                      handleProgramUpdate
                    }
                  />
                )
              )}
            </div>
          )}
        </>
      )}

      {/* Create/Edit Modal */}

      <ProgramFormModal
        open={isFormOpen}
        program={
          selectedProgram
        }
        onClose={() => {
          setIsFormOpen(false);
          setSelectedProgram(null);
        }}
        onSave={
          handleSaveProgram
        }
      />

      {/* Delete Dialog */}

      <DeleteProgramDialog
        open={isDeleteOpen}
        program={
          selectedProgram
        }
        onClose={() => {
          setIsDeleteOpen(false);
          setSelectedProgram(null);
        }}
        onConfirm={
          confirmDelete
        }
      />

    </div>
  );
};

export default Programs;