import { useMemo, useState } from "react";

import { mentors } from "@/data/mentors";

import type { Program } from "@/types/program";

import ProgramsHeader from "@/components/mentor-dashboard/programs/ProgramsHeader";
import ProgramsToolbar from "@/components/mentor-dashboard/programs/ProgramsToolbar";

import ProgramGridCard from "@/components/mentor-dashboard/programs/ProgramGridCard";
import ProgramListCard from "@/components/mentor-dashboard/programs/ProgramListCard";

import EmptyPrograms from "@/components/mentor-dashboard/programs/EmptyPrograms";

import ProgramFormModal from "@/components/mentor-dashboard/programs/ProgramFormModal";

import DeleteProgramDialog from "@/components/mentor-dashboard/programs/DeleteProgramDialog";

const Programs = () => {
  /**
   * Temporary
   *
   * Later:
   * Logged In Mentor ID
   */

  const mentorId = 1;

  const mentor = mentors.find(
    (item) => item.id === mentorId
  );

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

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

  if (!mentor) {
    return (
      <div
        className="
          bg-white
          border
          rounded-3xl
          p-10
          text-center
        "
      >
        <h2
          className="
            text-3xl
            font-bold
          "
        >
          Mentor Not Found
        </h2>

        <p
          className="
            text-slate-500
            mt-3
          "
        >
          Unable to load mentor
          information.
        </p>
      </div>
    );
  }

  const filteredPrograms =
    useMemo(() => {
      return mentor.programs.filter(
        (program) =>
          program.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          program.level
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [mentor, search]);

  const handleAddProgram =
    () => {
      setSelectedProgram(
        null
      );

      setIsFormOpen(true);
    };

  const handleEditProgram =
    (
      program: Program
    ) => {
      setSelectedProgram(
        program
      );

      setIsFormOpen(true);
    };

  const handleDeleteProgram =
    (
      program: Program
    ) => {
      setSelectedProgram(
        program
      );

      setIsDeleteOpen(true);
    };

  const handleSaveProgram =
    (
      program: Program
    ) => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Save Program",
        program
      );

      setIsFormOpen(false);
    };

  const confirmDelete =
    () => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Delete Program",
        selectedProgram
      );

      setIsDeleteOpen(false);
    };

  return (
    <div className="space-y-8">

      {/* Header */}

      <ProgramsHeader
        totalPrograms={
          mentor.programs.length
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
                (
                  program,
                  index
                ) => (
                  <ProgramGridCard
                    key={index}
                    program={{
                      ...program,

                      image:
                        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",

                      description:
                        "Premium mentorship program designed to accelerate career growth through practical guidance and personalized coaching.",

                      rating: 4.9,

                      reviews: 120,

                      seatsLeft: 8,

                      featured:
                        index === 0,
                    }}
                    onEdit={
                      handleEditProgram
                    }
                    onDelete={
                      handleDeleteProgram
                    }
                  />
                )
              )}
            </div>
          )}

          {/* List View */}

          {view === "list" && (
            <div className="space-y-6">

              {filteredPrograms.map(
                (
                  program,
                  index
                ) => (
                  <ProgramListCard
                    key={index}
                    program={{
                      ...program,

                      image:
                        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",

                      description:
                        "Premium mentorship program designed to accelerate career growth through practical guidance and personalized coaching.",

                      rating: 4.9,

                      reviews: 120,

                      seatsLeft: 8,

                      featured:
                        index === 0,
                    }}
                    onEdit={
                      handleEditProgram
                    }
                    onDelete={
                      handleDeleteProgram
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
        onClose={() =>
          setIsFormOpen(false)
        }
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
        onClose={() =>
          setIsDeleteOpen(false)
        }
        onConfirm={
          confirmDelete
        }
      />

    </div>
  );
};

export default Programs;