import { useMemo, useState } from "react";

import { userPrograms } from "@/data/userPrograms";
import type { UserProgram } from "@/types/userProgram";

import MyProgramsHeader from "@/components/user-dashboard/programs/MyProgramsHeader";
import MyProgramsStats from "@/components/user-dashboard/programs/MyProgramsStats";
import MyProgramsToolbar from "@/components/user-dashboard/programs/MyProgramsToolbar";

import ProgramGridCard from "@/components/user-dashboard/programs/ProgramGridCard";
import ProgramListCard from "@/components/user-dashboard/programs/ProgramListCard";

import ProgramDetailsModal from "@/components/user-dashboard/programs/ProgramDetailsModal";

import EmptyPrograms from "@/components/user-dashboard/programs/EmptyPrograms";

const MyPrograms = () => {
  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

  const [
    selectedFilter,
    setSelectedFilter,
  ] = useState("all");

  const [
    selectedProgram,
    setSelectedProgram,
  ] =
    useState<UserProgram | null>(
      null
    );

  const [
    isDetailsOpen,
    setIsDetailsOpen,
  ] = useState(false);

  const filteredPrograms =
    useMemo(() => {
      return userPrograms.filter(
        (program) => {
          const matchesSearch =
            program.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            program.mentorName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            program.mentorCompany
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesFilter =
            selectedFilter === "all"
              ? true
              : program.status ===
                selectedFilter;

          return (
            matchesSearch &&
            matchesFilter
          );
        }
      );
    }, [search, selectedFilter]);

  const handleViewProgram =
    (
      program: UserProgram
    ) => {
      setSelectedProgram(
        program
      );

      setIsDetailsOpen(true);
    };

  const activePrograms =
    userPrograms.filter(
      (program) =>
        program.status ===
        "active"
    ).length;

  const completedPrograms =
    userPrograms.filter(
      (program) =>
        program.status ===
        "completed"
    ).length;

  const certificatesEarned =
    userPrograms.filter(
      (program) =>
        program.certificateAvailable
    ).length;

  return (
    <div className="space-y-8">
      <MyProgramsHeader
        totalPrograms={
          userPrograms.length
        }
      />

      <MyProgramsStats
        activePrograms={
          activePrograms
        }
        completedPrograms={
          completedPrograms
        }
        certificatesEarned={
          certificatesEarned
        }
        totalPrograms={
          userPrograms.length
        }
      />

      <MyProgramsToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
        selectedFilter={
          selectedFilter
        }
        setSelectedFilter={
          setSelectedFilter
        }
      />

      {filteredPrograms.length ===
      0 ? (
        <EmptyPrograms
          onBrowsePrograms={() =>
            console.log(
              "Browse Programs"
            )
          }
        />
      ) : (
        <>
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
                    key={
                      program.id
                    }
                    program={
                      program
                    }
                    onView={
                      handleViewProgram
                    }
                  />
                )
              )}
            </div>
          )}

          {view === "list" && (
            <div className="space-y-6">
              {filteredPrograms.map(
                (program) => (
                  <ProgramListCard
                    key={
                      program.id
                    }
                    program={
                      program
                    }
                    onView={
                      handleViewProgram
                    }
                  />
                )
              )}
            </div>
          )}
        </>
      )}

      <ProgramDetailsModal
        open={
          isDetailsOpen
        }
        program={
          selectedProgram
        }
        onClose={() =>
          setIsDetailsOpen(false)
        }
      />
    </div>
  );
};

export default MyPrograms;