import { useEffect, useMemo, useState } from "react";

import type { Availability } from "@/types/availability";

import {
  getMentorByUserId,
  updateMentorAvailability,
} from "@/services/mentor.service";

import type { MentorApiResponse } from "@/services/mentor.service";

import AvailabilityHeader from "@/components/mentor-dashboard/availability/AvailabilityHeader";

import AvailabilityToolbar from "@/components/mentor-dashboard/availability/AvailabilityToolbar";

import AvailabilityGridCard from "@/components/mentor-dashboard/availability/AvailabilityGridCard";

import AvailabilityListCard from "@/components/mentor-dashboard/availability/AvailabilityListCard";

import EmptyAvailability from "@/components/mentor-dashboard/availability/EmptyAvailability";

import AvailabilityFormModal from "@/components/mentor-dashboard/availability/AvailabilityFormModal";

import DeleteAvailabilityDialog from "@/components/mentor-dashboard/availability/DeleteAvailabilityDialog";

const AvailabilityPage = () => {
  const [mentor, setMentor] =
    useState<MentorApiResponse | null>(null);

  const [availabilityData, setAvailabilityData] =
    useState<Availability[]>([]);

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
    selectedAvailability,
    setSelectedAvailability,
  ] = useState<Availability | null>(null);

  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  /*
   * Load logged-in mentor availability
   */
  useEffect(() => {
    const loadAvailability = async () => {
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

        const normalizedAvailability =
          (mentorData.availability || [])
            .map((item: any, index: number) => ({
              id:
                item.id ||
                item._id ||
                String(index + 1),

              day: item.day || "",

              enabled:
                typeof item.enabled === "boolean"
                  ? item.enabled
                  : true,

              slots:
                Array.isArray(item.slots)
                  ? item.slots
                      .filter(
                        (slot: any) =>
                          slot &&
                          typeof slot === "object" &&
                          typeof slot.start === "string" &&
                          typeof slot.end === "string"
                      )
                      .map((slot: any) => ({
                        start: slot.start,
                        end: slot.end,
                      }))
                  : [],
            }))
            .filter(
              (item) =>
                item.day &&
                Array.isArray(item.slots)
            );

        setAvailabilityData(
          normalizedAvailability
        );
      } catch (error: any) {
        console.error(
          "Failed to load mentor availability:",
          error
        );

        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to load availability."
        );
      } finally {
        setLoading(false);
      }
    };

    loadAvailability();
  }, []);

  const filteredAvailability =
    useMemo(() => {
      return availabilityData.filter(
        (availability) =>
          availability.day
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [
      availabilityData,
      search,
    ]);

  const handleAddAvailability =
    () => {
      setSelectedAvailability(null);
      setIsFormOpen(true);
    };

  const handleEditAvailability =
    (
      availability: Availability
    ) => {
      setSelectedAvailability(
        availability
      );

      setIsFormOpen(true);
    };

  const handleDeleteAvailability =
    (
      availability: Availability
    ) => {
      setSelectedAvailability(
        availability
      );

      setIsDeleteOpen(true);
    };

  /*
   * Save / Update availability
   *
   * Backend provides one PATCH endpoint
   * for the complete availability array.
   */
  const handleSaveAvailability =
    async (
      availability: Availability
    ) => {
      if (!mentor?.id) {
        setError(
          "Mentor ID not found."
        );
        return;
      }

      try {
        setError("");

        let updatedAvailability: Availability[];

        if (availability.id) {
          updatedAvailability =
            availabilityData.map(
              (item) =>
                item.id ===
                availability.id
                  ? availability
                  : item
            );
        } else {
          updatedAvailability = [
            ...availabilityData,
            {
              ...availability,
              id: String(
                Date.now()
              ),
            },
          ];
        }

        await updateMentorAvailability(
          mentor.id,
          {
            availability:
              updatedAvailability.map(
                ({
                  id,
                  ...item
                }) => item
              ),
          }
        );

        setAvailabilityData(
          updatedAvailability
        );

        setIsFormOpen(false);

        setSelectedAvailability(
          null
        );
      } catch (error: any) {
        console.error(
          "Failed to save availability:",
          error
        );

        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to save availability."
        );
      }
    };

  /*
   * Delete availability
   *
   * Backend has no separate delete endpoint.
   * We send the remaining availability array
   * through the same PATCH endpoint.
   */
  const confirmDelete =
    async () => {
      if (
        !mentor?.id ||
        !selectedAvailability?.id
      ) {
        return;
      }

      try {
        setError("");

        const updatedAvailability =
          availabilityData.filter(
            (item) =>
              item.id !==
              selectedAvailability.id
          );

        await updateMentorAvailability(
          mentor.id,
          {
            availability:
              updatedAvailability.map(
                ({
                  id,
                  ...item
                }) => item
              ),
          }
        );

        setAvailabilityData(
          updatedAvailability
        );

        setIsDeleteOpen(false);

        setSelectedAvailability(
          null
        );
      } catch (error: any) {
        console.error(
          "Failed to delete availability:",
          error
        );

        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to delete availability."
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
          Loading availability...
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
          Unable to Load Availability
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

      <AvailabilityHeader
        totalDays={
          availabilityData.length
        }
        onAddAvailability={
          handleAddAvailability
        }
      />

      {/* Toolbar */}

      <AvailabilityToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
      />

      {/* Empty State */}

      {filteredAvailability.length ===
      0 ? (
        <EmptyAvailability
          onAddAvailability={
            handleAddAvailability
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
              {filteredAvailability.map(
                (availability) => (
                  <AvailabilityGridCard
                    key={
                      availability.id
                    }
                    availability={
                      availability
                    }
                    onEdit={
                      handleEditAvailability
                    }
                    onDelete={
                      handleDeleteAvailability
                    }
                  />
                )
              )}
            </div>
          )}

          {/* List View */}

          {view === "list" && (
            <div className="space-y-6">
              {filteredAvailability.map(
                (availability) => (
                  <AvailabilityListCard
                    key={
                      availability.id
                    }
                    availability={
                      availability
                    }
                    onEdit={
                      handleEditAvailability
                    }
                    onDelete={
                      handleDeleteAvailability
                    }
                  />
                )
              )}
            </div>
          )}
        </>
      )}

      {/* Create / Edit Modal */}

      <AvailabilityFormModal
        open={isFormOpen}
        availability={
          selectedAvailability
        }
        onClose={() =>
          setIsFormOpen(false)
        }
        onSave={
          handleSaveAvailability
        }
      />

      {/* Delete Dialog */}

      <DeleteAvailabilityDialog
        open={isDeleteOpen}
        availability={
          selectedAvailability
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

export default AvailabilityPage;