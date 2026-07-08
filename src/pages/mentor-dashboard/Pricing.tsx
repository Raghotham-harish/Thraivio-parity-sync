import { useMemo, useState } from "react";

import { mentors } from "@/data/mentors";

import type { PricingPlan } from "@/types/pricing";

import PricingHeader from "@/components/mentor-dashboard/pricing/PricingHeader";

import PricingToolbar from "@/components/mentor-dashboard/pricing/PricingToolbar";

import PricingGridCard from "@/components/mentor-dashboard/pricing/PricingGridCard";

import PricingListCard from "@/components/mentor-dashboard/pricing/PricingListCard";

import EmptyPricing from "@/components/mentor-dashboard/pricing/EmptyPricing";

import PricingFormModal from "@/components/mentor-dashboard/pricing/PricingFormModal";

import DeletePricingDialog from "@/components/mentor-dashboard/pricing/DeletePricingDialog";

const Pricing = () => {
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
    selectedPricing,
    setSelectedPricing,
  ] = useState<PricingPlan | null>(
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

  const pricingPlans: PricingPlan[] =
    [
      {
        id: "1",
        title: "Intro Call",
        price:
          mentor.pricing.introCall,
        duration:
          mentor.sessionDuration
            .introCall,
        description:
          "Perfect for career guidance and quick clarity.",
      },

      {
        id: "2",
        title:
          "Mentorship Call",
        price:
          mentor.pricing
            .mentorshipCall,
        duration:
          mentor.sessionDuration
            .mentorshipCall,
        description:
          "Deep personalized mentorship session.",
      },

      {
        id: "3",
        title:
          "Mock Interview",
        price:
          mentor.pricing
            .mockInterview,
        duration:
          mentor.sessionDuration
            .mockInterview,
        description:
          "Practice with real interview scenarios.",
      },

      {
        id: "4",
        title:
          "Monthly Program",
        price:
          mentor.pricing
            .monthlyProgram,
        duration:
          mentor.sessionDuration
            .monthlyProgram,
        description:
          "Complete transformation with structured coaching.",
        popular: true,
      },
    ];

  const filteredPlans =
    useMemo(() => {
      return pricingPlans.filter(
        (plan) =>
          plan.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [pricingPlans, search]);

  const handleAddPricing =
    () => {
      setSelectedPricing(
        null
      );

      setIsFormOpen(true);
    };

  const handleEditPricing =
    (
      pricing: PricingPlan
    ) => {
      setSelectedPricing(
        pricing
      );

      setIsFormOpen(true);
    };

  const handleDeletePricing =
    (
      pricing: PricingPlan
    ) => {
      setSelectedPricing(
        pricing
      );

      setIsDeleteOpen(true);
    };

  const handleSavePricing =
    (
      pricing: PricingPlan
    ) => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Save Pricing",
        pricing
      );

      setIsFormOpen(false);
    };

  const confirmDelete =
    () => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Delete Pricing",
        selectedPricing
      );

      setIsDeleteOpen(false);
    };

  return (
    <div className="space-y-8">

      {/* Header */}

      <PricingHeader
        totalPlans={
          pricingPlans.length
        }
        onAddPricing={
          handleAddPricing
        }
      />

      {/* Toolbar */}

      <PricingToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
      />

      {/* Empty State */}

      {filteredPlans.length ===
      0 ? (
        <EmptyPricing
          onAddPricing={
            handleAddPricing
          }
        />
      ) : (
        <>
          {/* Grid */}

          {view === "grid" && (
            <div
              className="
                grid
                lg:grid-cols-2
                gap-6
              "
            >
              {filteredPlans.map(
                (plan) => (
                  <PricingGridCard
                    key={
                      plan.id
                    }
                    pricing={
                      plan
                    }
                    onEdit={
                      handleEditPricing
                    }
                    onDelete={
                      handleDeletePricing
                    }
                  />
                )
              )}
            </div>
          )}

          {/* List */}

          {view === "list" && (
            <div className="space-y-6">

              {filteredPlans.map(
                (plan) => (
                  <PricingListCard
                    key={
                      plan.id
                    }
                    pricing={
                      plan
                    }
                    onEdit={
                      handleEditPricing
                    }
                    onDelete={
                      handleDeletePricing
                    }
                  />
                )
              )}

            </div>
          )}
        </>
      )}

      {/* Modal */}

      <PricingFormModal
        open={isFormOpen}
        pricing={
          selectedPricing
        }
        onClose={() =>
          setIsFormOpen(false)
        }
        onSave={
          handleSavePricing
        }
      />

      {/* Delete */}

      <DeletePricingDialog
        open={isDeleteOpen}
        pricing={
          selectedPricing
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

export default Pricing;