import { useMemo, useState } from "react";

import { mentors } from "@/data/mentors";

import type { FAQ as FAQType } from "@/types/faq";

import FAQHeader from "@/components/mentor-dashboard/faq/FAQHeader";
import FAQToolbar from "@/components/mentor-dashboard/faq/FAQToolbar";

import FAQGridCard from "@/components/mentor-dashboard/faq/FAQGridCard";
import FAQListCard from "@/components/mentor-dashboard/faq/FAQListCard";

import EmptyFAQ from "@/components/mentor-dashboard/faq/EmptyFAQ";

import FAQFormModal from "@/components/mentor-dashboard/faq/FAQFormModal";

import DeleteFAQDialog from "@/components/mentor-dashboard/faq/DeleteFAQDialog";

const FAQ = () => {
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

  const [selectedFAQ, setSelectedFAQ] =
    useState<FAQType | null>(null);

  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  if (!mentor) return null;

  const faqData: FAQType[] =
    mentor.faqs.map(
      (
        faq,
        index
      ) => ({
        id: String(index + 1),

        question:
          faq.question,

        answer:
          faq.answer,
      })
    );

  const filteredFAQs =
    useMemo(() => {
      return faqData.filter(
        (faq) =>
          faq.question
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          faq.answer
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [faqData, search]);

  const handleAddFAQ =
    () => {
      setSelectedFAQ(null);
      setIsFormOpen(true);
    };

  const handleEditFAQ =
    (
      faq: FAQType
    ) => {
      setSelectedFAQ(faq);
      setIsFormOpen(true);
    };

  const handleDeleteFAQ =
    (
      faq: FAQType
    ) => {
      setSelectedFAQ(faq);
      setIsDeleteOpen(true);
    };

  const handleSaveFAQ =
    (
      faq: FAQType
    ) => {
      console.log(
        "Save FAQ",
        faq
      );

      setIsFormOpen(false);
    };

  const confirmDelete =
    () => {
      console.log(
        "Delete FAQ",
        selectedFAQ
      );

      setIsDeleteOpen(false);
    };

  return (
    <div className="space-y-8">

      <FAQHeader
        totalFAQs={
          faqData.length
        }
        onAddFAQ={
          handleAddFAQ
        }
      />

      <FAQToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
      />

      {filteredFAQs.length ===
      0 ? (
        <EmptyFAQ
          onAddFAQ={
            handleAddFAQ
          }
        />
      ) : (
        <>
          {view === "grid" && (
            <div
              className="
                grid
                lg:grid-cols-2
                gap-6
              "
            >
              {filteredFAQs.map(
                (faq) => (
                  <FAQGridCard
                    key={faq.id}
                    faq={faq}
                    onEdit={
                      handleEditFAQ
                    }
                    onDelete={
                      handleDeleteFAQ
                    }
                  />
                )
              )}
            </div>
          )}

          {view === "list" && (
            <div className="space-y-6">

              {filteredFAQs.map(
                (faq) => (
                  <FAQListCard
                    key={faq.id}
                    faq={faq}
                    onEdit={
                      handleEditFAQ
                    }
                    onDelete={
                      handleDeleteFAQ
                    }
                  />
                )
              )}

            </div>
          )}
        </>
      )}

      <FAQFormModal
        open={isFormOpen}
        faq={selectedFAQ}
        onClose={() =>
          setIsFormOpen(false)
        }
        onSave={
          handleSaveFAQ
        }
      />

      <DeleteFAQDialog
        open={isDeleteOpen}
        faq={selectedFAQ}
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

export default FAQ;