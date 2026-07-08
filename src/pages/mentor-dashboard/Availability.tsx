import { useMemo, useState } from "react";

import { mentors } from "@/data/mentors";

import type { Availability } from "@/types/availability";

import AvailabilityHeader from "@/components/mentor-dashboard/availability/AvailabilityHeader";

import AvailabilityToolbar from "@/components/mentor-dashboard/availability/AvailabilityToolbar";

import AvailabilityGridCard from "@/components/mentor-dashboard/availability/AvailabilityGridCard";

import AvailabilityListCard from "@/components/mentor-dashboard/availability/AvailabilityListCard";

import EmptyAvailability from "@/components/mentor-dashboard/availability/EmptyAvailability";

import AvailabilityFormModal from "@/components/mentor-dashboard/availability/AvailabilityFormModal";

import DeleteAvailabilityDialog from "@/components/mentor-dashboard/availability/DeleteAvailabilityDialog";

const AvailabilityPage = () => {
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
    selectedAvailability,
    setSelectedAvailability,
  ] = useState<Availability | null>(
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

  const availabilityData: Availability[] =
    mentor.availability.map(
      (
        item,
        index
      ) => ({
        id: String(index + 1),
        date: item.date,
        slots: item.slots,
      })
    );

  const filteredAvailability =
    useMemo(() => {
      return availabilityData.filter(
        (availability) =>
          availability.date
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
      setSelectedAvailability(
        null
      );

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

  const handleSaveAvailability =
    (
      availability: Availability
    ) => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Save Availability",
        availability
      );

      setIsFormOpen(false);
    };

  const confirmDelete =
    () => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Delete Availability",
        selectedAvailability
      );

      setIsDeleteOpen(false);
    };

  return (
    <div className="space-y-8">

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
                (
                  availability
                ) => (
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
                (
                  availability
                ) => (
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