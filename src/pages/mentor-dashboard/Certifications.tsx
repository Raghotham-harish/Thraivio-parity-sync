import { useMemo, useState } from "react";

import { mentors } from "@/data/mentors";

import type { Certification } from "@/types/certification";

import CertificationsHeader from "@/components/mentor-dashboard/certifications/CertificationsHeader";

import CertificationsToolbar from "@/components/mentor-dashboard/certifications/CertificationsToolbar";

import CertificationGridCard from "@/components/mentor-dashboard/certifications/CertificationGridCard";

import CertificationListCard from "@/components/mentor-dashboard/certifications/CertificationListCard";

import EmptyCertifications from "@/components/mentor-dashboard/certifications/EmptyCertifications";

import CertificationFormModal from "@/components/mentor-dashboard/certifications/CertificationFormModal";

import DeleteCertificationDialog from "@/components/mentor-dashboard/certifications/DeleteCertificationDialog";

const Certifications = () => {
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
    selectedCertification,
    setSelectedCertification,
  ] = useState<Certification | null>(
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
          Unable to load mentor information.
        </p>
      </div>
    );
  }

  const certifications: Certification[] =
    mentor.certifications.map(
      (
        item,
        index
      ) => ({
        id: String(index + 1),
        title: item,
      })
    );

  const filteredCertifications =
    useMemo(() => {
      return certifications.filter(
        (certification) =>
          certification.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [
      certifications,
      search,
    ]);

  const handleAddCertification =
    () => {
      setSelectedCertification(
        null
      );

      setIsFormOpen(true);
    };

  const handleEditCertification =
    (
      certification: Certification
    ) => {
      setSelectedCertification(
        certification
      );

      setIsFormOpen(true);
    };

  const handleDeleteCertification =
    (
      certification: Certification
    ) => {
      setSelectedCertification(
        certification
      );

      setIsDeleteOpen(true);
    };

  const handleSaveCertification =
    (
      certification: Certification
    ) => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Save Certification",
        certification
      );

      setIsFormOpen(false);
    };

  const confirmDelete =
    () => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Delete Certification",
        selectedCertification
      );

      setIsDeleteOpen(false);
    };

  return (
    <div className="space-y-8">

      {/* Header */}

      <CertificationsHeader
        totalCertifications={
          certifications.length
        }
        onAddCertification={
          handleAddCertification
        }
      />

      {/* Toolbar */}

      <CertificationsToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
      />

      {/* Empty State */}

      {filteredCertifications.length ===
      0 ? (
        <EmptyCertifications
          onAddCertification={
            handleAddCertification
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
              {filteredCertifications.map(
                (
                  certification
                ) => (
                  <CertificationGridCard
                    key={
                      certification.id
                    }
                    certification={
                      certification
                    }
                    onEdit={
                      handleEditCertification
                    }
                    onDelete={
                      handleDeleteCertification
                    }
                  />
                )
              )}
            </div>
          )}

          {/* List View */}

          {view === "list" && (
            <div className="space-y-6">

              {filteredCertifications.map(
                (
                  certification
                ) => (
                  <CertificationListCard
                    key={
                      certification.id
                    }
                    certification={
                      certification
                    }
                    onEdit={
                      handleEditCertification
                    }
                    onDelete={
                      handleDeleteCertification
                    }
                  />
                )
              )}

            </div>
          )}
        </>
      )}

      {/* Create / Edit Modal */}

      <CertificationFormModal
        open={isFormOpen}
        certification={
          selectedCertification
        }
        onClose={() =>
          setIsFormOpen(false)
        }
        onSave={
          handleSaveCertification
        }
      />

      {/* Delete Dialog */}

      <DeleteCertificationDialog
        open={isDeleteOpen}
        certification={
          selectedCertification
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

export default Certifications;