import { useEffect, useMemo, useState } from "react";

import type { Achievement } from "@/types/achievement";

import {
  addMentorAchievement,
  deleteMentorAchievement,
  getMentorByUserId,
  updateMentorAchievement,
} from "@/services/mentor.service";

import type { MentorApiResponse } from "@/services/mentor.service";

import AchievementsHeader from "@/components/mentor-dashboard/achievements/AchievementsHeader";

import AchievementsToolbar from "@/components/mentor-dashboard/achievements/AchievementsToolbar";

import AchievementGridCard from "@/components/mentor-dashboard/achievements/AchievementGridCard";

import AchievementListCard from "@/components/mentor-dashboard/achievements/AchievementListCard";

import EmptyAchievements from "@/components/mentor-dashboard/achievements/EmptyAchievements";

import AchievementFormModal from "@/components/mentor-dashboard/achievements/AchievementFormModal";

import DeleteAchievementDialog from "@/components/mentor-dashboard/achievements/DeleteAchievementDialog";

const Achievements = () => {
  const [mentor, setMentor] =
    useState<MentorApiResponse | null>(null);

  const [achievements, setAchievements] =
    useState<Achievement[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">("grid");

  const [isFormOpen, setIsFormOpen] =
    useState(false);

  const [
    selectedAchievement,
    setSelectedAchievement,
  ] = useState<Achievement | null>(null);

  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  /*
   * Load logged-in mentor achievements
   */
  useEffect(() => {
    const loadAchievements = async () => {
      try {
        setLoading(true);
        setError("");

        const storedUser =
          localStorage.getItem("authUser");

        if (!storedUser) {
          setError(
            "Logged-in user information not found."
          );
          return;
        }

        const user = JSON.parse(storedUser);

        if (!user?.id) {
          setError("User ID not found.");
          return;
        }

        const response =
          await getMentorByUserId(user.id);

        if (
          !response?.success ||
          !response?.data
        ) {
          setError(
            "Mentor profile not found."
          );
          return;
        }

        const mentorData =
          response.data;

        setMentor(mentorData);

        /*
         * Backend currently exposes achievements
         * as unknown[] in MentorApiResponse.
         *
         * Preserve supported backend data while
         * adapting it to the existing UI.
         */
        const normalizedAchievements =
          (mentorData.achievements || [])
            .map(
              (
                item: any,
                index: number
              ) => ({
                id:
                  item?.id ||
                  item?._id ||
                  String(index + 1),

                title:
                  typeof item === "string"
                    ? item
                    : String(
                        item?.title ||
                          item?.name ||
                          item?.achievement ||
                          ""
                      ),
              })
            )
            .filter(
              (item) =>
                item.title.trim() !== ""
            );

        setAchievements(
          normalizedAchievements
        );
      } catch (error: any) {
        console.error(
          "Failed to load achievements:",
          error
        );

        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to load achievements."
        );
      } finally {
        setLoading(false);
      }
    };

    loadAchievements();
  }, []);

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
      setSelectedAchievement(null);
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

  /*
   * Create / Update achievement
   */
  const handleSaveAchievement =
    async (
      achievement: Achievement
    ) => {
      if (!mentor?.id) {
        setError(
          "Mentor ID not found."
        );
        return;
      }

      try {
        setError("");

        /*
         * Create
         */
        if (!achievement.id) {
          const response =
            await addMentorAchievement(
              mentor.id,
              {
                title:
                  achievement.title,
              }
            );

          if (
            !response?.success ||
            !response?.data
          ) {
            setError(
              "Failed to create achievement."
            );
            return;
          }

          const createdAchievement =
            response.data as any;

          const newAchievement: Achievement =
            {
              id:
                createdAchievement?.id ||
                createdAchievement?._id ||
                String(
                  Date.now()
                ),

              title:
                typeof createdAchievement ===
                "string"
                  ? createdAchievement
                  : String(
                      createdAchievement?.title ||
                        createdAchievement?.name ||
                        createdAchievement?.achievement ||
                        achievement.title
                    ),
            };

          setAchievements(
            (current) => [
              ...current,
              newAchievement,
            ]
          );
        }

        /*
         * Update
         */
        else {
          const response =
            await updateMentorAchievement(
              mentor.id,
              achievement.id,
              {
                title:
                  achievement.title,
              }
            );

          if (
            !response?.success
          ) {
            setError(
              "Failed to update achievement."
            );
            return;
          }

          setAchievements(
            (current) =>
              current.map(
                (item) =>
                  item.id ===
                  achievement.id
                    ? achievement
                    : item
              )
          );
        }

        setIsFormOpen(false);
        setSelectedAchievement(null);
      } catch (error: any) {
        console.error(
          "Failed to save achievement:",
          error
        );

        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to save achievement."
        );
      }
    };

  /*
   * Delete achievement
   */
  const confirmDelete =
    async () => {
      if (
        !mentor?.id ||
        !selectedAchievement?.id
      ) {
        return;
      }

      try {
        setError("");

        const response =
          await deleteMentorAchievement(
            mentor.id,
            selectedAchievement.id
          );

        if (
          !response?.success
        ) {
          setError(
            "Failed to delete achievement."
          );
          return;
        }

        setAchievements(
          (current) =>
            current.filter(
              (item) =>
                item.id !==
                selectedAchievement.id
            )
        );

        setIsDeleteOpen(false);
        setSelectedAchievement(
          null
        );
      } catch (error: any) {
        console.error(
          "Failed to delete achievement:",
          error
        );

        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to delete achievement."
        );
      }
    };

  if (loading) {
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
        <p className="text-slate-500">
          Loading achievements...
        </p>
      </div>
    );
  }

  if (error && !mentor) {
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
          Unable to Load Achievements
        </h2>

        <p
          className="
            text-slate-500
            mt-3
          "
        >
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* API Error */}

      {error && (
        <div
          className="
            bg-red-50
            border
            border-red-200
            text-red-700
            rounded-2xl
            p-4
          "
        >
          {error}
        </div>
      )}

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
                (achievement) => (
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
                (achievement) => (
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