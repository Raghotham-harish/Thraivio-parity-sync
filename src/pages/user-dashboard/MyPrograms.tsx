import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getPublishedPrograms,
} from "@/services/program.service";

import type {
  Program,
} from "@/services/program.service";

import MyProgramsHeader from "@/components/user-dashboard/programs/MyProgramsHeader";
import MyProgramsStats from "@/components/user-dashboard/programs/MyProgramsStats";
import MyProgramsToolbar from "@/components/user-dashboard/programs/MyProgramsToolbar";

import ProgramGridCard from "@/components/user-dashboard/programs/ProgramGridCard";
import ProgramListCard from "@/components/user-dashboard/programs/ProgramListCard";

import ProgramDetailsModal from "@/components/user-dashboard/programs/ProgramDetailsModal";

import EmptyPrograms from "@/components/user-dashboard/programs/EmptyPrograms";

const MyPrograms = () => {
  const [programs, setPrograms] =
    useState<Program[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">("grid");

  const [
    selectedFilter,
    setSelectedFilter,
  ] = useState("all");

  const [
    selectedProgram,
    setSelectedProgram,
  ] = useState<Program | null>(null);

  const [
    isDetailsOpen,
    setIsDetailsOpen,
  ] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadPrograms = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response =
          await getPublishedPrograms();

        if (!isMounted) {
          return;
        }

        setPrograms(
          response.data ?? []
        );
      } catch (err) {
        if (!isMounted) {
          return;
        }

        console.error(
          "Failed to load published programs:",
          err
        );

        setError(
          "Unable to load programs. Please try again."
        );

        setPrograms([]);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadPrograms();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredPrograms =
    useMemo(() => {
      const normalizedSearch =
        search
          .toLowerCase()
          .trim();

      return programs.filter(
        (program) => {
          const matchesSearch =
            normalizedSearch === "" ||
            program.title
              .toLowerCase()
              .includes(
                normalizedSearch
              ) ||
            program.shortDescription
              .toLowerCase()
              .includes(
                normalizedSearch
              ) ||
            program.description
              .toLowerCase()
              .includes(
                normalizedSearch
              ) ||
            program.category
              .toLowerCase()
              .includes(
                normalizedSearch
              ) ||
            program.subCategory
              .toLowerCase()
              .includes(
                normalizedSearch
              ) ||
            program.tags.some(
              (tag) =>
                tag
                  .toLowerCase()
                  .includes(
                    normalizedSearch
                  )
            );

          const matchesFilter =
            selectedFilter === "all"
              ? true
              : selectedFilter ===
                "featured"
              ? program.isFeatured
              : selectedFilter ===
                "free"
              ? program.isFree
              : program.level ===
                selectedFilter;

          return (
            matchesSearch &&
            matchesFilter
          );
        }
      );
    }, [
      programs,
      search,
      selectedFilter,
    ]);

  const handleViewProgram = (
    program: Program
  ) => {
    setSelectedProgram(
      program
    );

    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedProgram(null);
  };

  const handleBrowsePrograms = () => {
    setSearch("");
    setSelectedFilter("all");
  };

  const totalPrograms =
    programs.length;

  const featuredPrograms =
    programs.filter(
      (program) =>
        program.isFeatured
    ).length;

  const freePrograms =
    programs.filter(
      (program) =>
        program.isFree
    ).length;

  const publishedPrograms =
    programs.filter(
      (program) =>
        program.status ===
        "published"
    ).length;

  const hasActiveSearchOrFilter =
    search.trim() !== "" ||
    selectedFilter !== "all";

  return (
    <div className="space-y-8">
      <MyProgramsHeader
        totalPrograms={
          totalPrograms
        }
      />

      <MyProgramsStats
        activePrograms={
          publishedPrograms
        }
        completedPrograms={
          featuredPrograms
        }
        certificatesEarned={
          freePrograms
        }
        totalPrograms={
          totalPrograms
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

      {isLoading ? (
        <div
          className="
 bg-card
 border
 border-border
 rounded-2xl
            p-12
            text-center
          "
        >
          <p className="text-muted-foreground">
            Loading programs...
          </p>
        </div>
      ) : error ? (
        <div
          className="
 bg-card
 border
 border-[#BA1A1A]
 rounded-2xl
            p-12
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
        </div>
      ) : filteredPrograms.length ===
        0 ? (
        <EmptyPrograms
          onBrowsePrograms={
            handleBrowsePrograms
          }
          hasSearch={
            hasActiveSearchOrFilter
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
            <div
              className="
 space-y-6
 "
            >
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
        onClose={
          handleCloseDetails
        }
      />
    </div>
  );
};

export default MyPrograms;