import {
  useMemo,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { mentors } from "@/data/mentors";

import SavedMentorsHeader from "@/components/user-dashboard/saved-mentors/SavedMentorsHeader";
import SavedMentorsStats from "@/components/user-dashboard/saved-mentors/SavedMentorsStats";
import SavedMentorsToolbar from "@/components/user-dashboard/saved-mentors/SavedMentorsToolbar";

import SavedMentorGridCard from "@/components/user-dashboard/saved-mentors/SavedMentorGridCard";
import SavedMentorListCard from "@/components/user-dashboard/saved-mentors/SavedMentorListCard";

import RemoveSavedMentorDialog from "@/components/user-dashboard/saved-mentors/RemoveSavedMentorDialog";
import EmptySavedMentors from "@/components/user-dashboard/saved-mentors/EmptySavedMentors";

const SavedMentors = () => {
  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  const [
    savedMentors,
    setSavedMentors,
  ] = useState(
    mentors.slice(0, 6)
  );

  const [
    selectedMentor,
    setSelectedMentor,
  ] = useState<any | null>(
    null
  );

  const [
    removeDialogOpen,
    setRemoveDialogOpen,
  ] = useState(false);

  /* -------------------------------- */
  /* Stats */
  /* -------------------------------- */

  const totalSaved =
    savedMentors.length;

  const featuredMentors =
    savedMentors.filter(
      (mentor) => mentor.featured
    ).length;

    const totalCategories =
  new Set(
    savedMentors.map(
      (mentor) => mentor.category
    )
  ).size;

  const totalSessions =
    savedMentors.reduce(
      (total, mentor) =>
        total +
        mentor.sessionsCompleted,
      0
    );

    const totalStudents =
  savedMentors.reduce(
    (total, mentor) =>
      total +
      mentor.studentsCoached,
    0
  );

  const averageRating =
    savedMentors.length
      ? (
          savedMentors.reduce(
            (total, mentor) =>
              total +
              mentor.rating,
            0
          ) / savedMentors.length
        ).toFixed(1)
      : "0";

  /* -------------------------------- */
  /* Filter */
  /* -------------------------------- */

  const filteredMentors =
    useMemo(() => {
      return savedMentors.filter(
        (mentor) => {
          const matchesSearch =
            mentor.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            mentor.company
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            mentor.role
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesCategory =
            selectedCategory ===
              "All" ||
            mentor.category
              ?.toLowerCase()
              .includes(
                selectedCategory.toLowerCase()
              );

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );
    }, [
      savedMentors,
      search,
      selectedCategory,
    ]);

  /* -------------------------------- */
  /* Actions */
  /* -------------------------------- */

  const handleRemoveClick =
    (mentor: any) => {
      setSelectedMentor(
        mentor
      );

      setRemoveDialogOpen(true);
    };

  const handleRemoveConfirm =
    (mentorId: number) => {
      setSavedMentors(
        (
          previousMentors
        ) =>
          previousMentors.filter(
            (mentor) =>
              mentor.id !== mentorId
          )
      );

      setRemoveDialogOpen(false);

      setSelectedMentor(null);
    };

  const handleBrowseMentors =
    () => {
      navigate("/mentors");
    };

  return (
    <div className="space-y-8">

      {/* Header */}

      <SavedMentorsHeader
  totalMentors={totalSaved}
  totalCategories={totalCategories}
/>

      {/* Stats */}

      <SavedMentorsStats
  totalMentors={totalSaved}
  featuredMentors={featuredMentors}
  totalStudents={totalStudents}
  totalSessions={totalSessions}
  averageRating={Number(averageRating)}
/>

      {/* Toolbar */}

      <SavedMentorsToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
        selectedCategory={
          selectedCategory
        }
        setSelectedCategory={
          setSelectedCategory
        }
      />

      {/* Empty State */}

      {filteredMentors.length ===
      0 ? (
        <EmptySavedMentors
          onBrowseMentors={
            handleBrowseMentors
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
              {filteredMentors.map(
                (mentor) => (
                  <SavedMentorGridCard
                    key={
                      mentor.id
                    }
                    mentor={
                      mentor
                    }
                    onRemove={() =>
                      handleRemoveClick(
                        mentor
                      )
                    }
                  />
                )
              )}
            </div>
          )}

          {/* List View */}

          {view === "list" && (
            <div className="space-y-6">
              {filteredMentors.map(
                (mentor) => (
                  <SavedMentorListCard
                    key={
                      mentor.id
                    }
                    mentor={
                      mentor
                    }
                    onRemove={() =>
                      handleRemoveClick(
                        mentor
                      )
                    }
                  />
                )
              )}
            </div>
          )}
        </>
      )}

      {/* Remove Dialog */}

      <RemoveSavedMentorDialog
        open={removeDialogOpen}
        mentor={
          selectedMentor
        }
        onClose={() =>
          setRemoveDialogOpen(
            false
          )
        }
        onConfirm={
          handleRemoveConfirm
        }
      />

    </div>
  );
};

export default SavedMentors;