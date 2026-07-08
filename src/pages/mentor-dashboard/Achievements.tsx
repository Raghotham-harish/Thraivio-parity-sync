import { useMemo, useState } from "react";

import { mentors } from "@/data/mentors";

import type { Achievement } from "@/types/achievement";

import AchievementsHeader from "@/components/mentor-dashboard/achievements/AchievementsHeader";

import AchievementsToolbar from "@/components/mentor-dashboard/achievements/AchievementsToolbar";

import AchievementGridCard from "@/components/mentor-dashboard/achievements/AchievementGridCard";

import AchievementListCard from "@/components/mentor-dashboard/achievements/AchievementListCard";

import EmptyAchievements from "@/components/mentor-dashboard/achievements/EmptyAchievements";

import AchievementFormModal from "@/components/mentor-dashboard/achievements/AchievementFormModal";

import DeleteAchievementDialog from "@/components/mentor-dashboard/achievements/DeleteAchievementDialog";

const Achievements = () => {
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

  const [
    isFormOpen,
    setIsFormOpen,
  ] = useState(false);

  const [
    selectedAchievement,
    setSelectedAchievement,
  ] = useState<Achievement | null>(
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

  const achievements: Achievement[] =
    mentor.achievements.map(
      (
        item,
        index
      ) => ({
        id: String(index + 1),
        title: item,
      })
    );

  const filteredAchievements =
    useMemo(() => {
      return achievements.filter(
        (achievement) =>
          achievement.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [
      achievements,
      search,
    ]);

  const handleAddAchievement =
    () => {
      setSelectedAchievement(
        null
      );

      setIsFormOpen(true);
    };

  const handleEditAchievement =
    (
      achievement: Achievement
    ) => {
      setSelectedAchievement(
        achievement
      );

      setIsFormOpen(true);
    };

  const handleDeleteAchievement =
    (
      achievement: Achievement
    ) => {
      setSelectedAchievement(
        achievement
      );

      setIsDeleteOpen(true);
    };

  const handleSaveAchievement =
    (
      achievement: Achievement
    ) => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Save Achievement",
        achievement
      );

      setIsFormOpen(false);
    };

  const confirmDelete =
    () => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Delete Achievement",
        selectedAchievement
      );

      setIsDeleteOpen(false);
    };

  return (
    <div className="space-y-8">

      {/* Header */}

      <AchievementsHeader
        totalAchievements={
          achievements.length
        }
        onAddAchievement={
          handleAddAchievement
        }
      />

      {/* Toolbar */}

      <AchievementsToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
      />

      {/* Empty State */}

      {filteredAchievements.length ===
      0 ? (
        <EmptyAchievements
          onAddAchievement={
            handleAddAchievement
          }
        />
      ) : (
        <>
          {/* Grid View */}

          {view === "grid" && (
            <div
              className="
                grid
                lg:grid-cols-2
                gap-6
              "
            >
              {filteredAchievements.map(
                (
                  achievement
                ) => (
                  <AchievementGridCard
                    key={
                      achievement.id
                    }
                    achievement={
                      achievement
                    }
                    onEdit={
                      handleEditAchievement
                    }
                    onDelete={
                      handleDeleteAchievement
                    }
                  />
                )
              )}
            </div>
          )}

          {/* List View */}

          {view === "list" && (
            <div className="space-y-6">

              {filteredAchievements.map(
                (
                  achievement
                ) => (
                  <AchievementListCard
                    key={
                      achievement.id
                    }
                    achievement={
                      achievement
                    }
                    onEdit={
                      handleEditAchievement
                    }
                    onDelete={
                      handleDeleteAchievement
                    }
                  />
                )
              )}

            </div>
          )}
        </>
      )}

      {/* Create / Edit Modal */}

      <AchievementFormModal
        open={isFormOpen}
        achievement={
          selectedAchievement
        }
        onClose={() =>
          setIsFormOpen(false)
        }
        onSave={
          handleSaveAchievement
        }
      />

      {/* Delete Dialog */}

      <DeleteAchievementDialog
        open={isDeleteOpen}
        achievement={
          selectedAchievement
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

export default Achievements;