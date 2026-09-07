import { useEffect, useMemo, useState } from "react";

import type { FAQ as FAQType } from "@/types/faq";

import {
  addMentorFAQ,
  deleteMentorFAQ,
  getMentorByUserId,
  updateMentorFAQ,
} from "@/services/mentor.service";

import type { MentorApiResponse } from "@/services/mentor.service";

import FAQHeader from "@/components/mentor-dashboard/faq/FAQHeader";
import FAQToolbar from "@/components/mentor-dashboard/faq/FAQToolbar";

import FAQGridCard from "@/components/mentor-dashboard/faq/FAQGridCard";
import FAQListCard from "@/components/mentor-dashboard/faq/FAQListCard";

import EmptyFAQ from "@/components/mentor-dashboard/faq/EmptyFAQ";

import FAQFormModal from "@/components/mentor-dashboard/faq/FAQFormModal";

import DeleteFAQDialog from "@/components/mentor-dashboard/faq/DeleteFAQDialog";

const FAQ = () => {
  const [mentor, setMentor] =
    useState<MentorApiResponse | null>(null);

  const [faqData, setFaqData] =
    useState<FAQType[]>([]);

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

  const [selectedFAQ, setSelectedFAQ] =
    useState<FAQType | null>(null);

  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  /*
   * Load logged-in mentor FAQs
   */
  useEffect(() => {
    const loadFAQs = async () => {
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

        const normalizedFAQs =
          (mentorData.faqs || [])
            .map(
              (
                item: any,
                index: number
              ) => ({
                id:
                  item?.id ||
                  item?._id ||
                  String(index + 1),

                question:
                  typeof item === "object"
                    ? String(
                        item?.question || ""
                      )
                    : "",

                answer:
                  typeof item === "object"
                    ? String(
                        item?.answer || ""
                      )
                    : "",
              })
            )
            .filter(
              (item) =>
                item.question.trim() !== "" &&
                item.answer.trim() !== ""
            );

        setFaqData(
          normalizedFAQs
        );
      } catch (error: any) {
        console.error(
          "Failed to load mentor FAQs:",
          error
        );

        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to load FAQs."
        );
      } finally {
        setLoading(false);
      }
    };

    loadFAQs();
  }, []);

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

  /*
   * Create / Update FAQ
   */
  const handleSaveFAQ =
    async (
      faq: FAQType
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
        if (!faq.id) {
          const response =
            await addMentorFAQ(
              mentor.id,
              {
                question:
                  faq.question,
                answer:
                  faq.answer,
              }
            );

          if (
            !response?.success ||
            !response?.data
          ) {
            setError(
              "Failed to create FAQ."
            );
            return;
          }

          const updatedMentor =
            response.data;

          const updatedFAQs =
            (updatedMentor.faqs || [])
              .map(
                (
                  item: any,
                  index: number
                ) => ({
                  id:
                    item?.id ||
                    item?._id ||
                    String(index + 1),

                  question:
                    String(
                      item?.question || ""
                    ),

                  answer:
                    String(
                      item?.answer || ""
                    ),
                })
              )
              .filter(
                (item) =>
                  item.question.trim() !== "" &&
                  item.answer.trim() !== ""
              );

          setFaqData(
            updatedFAQs
          );
        }

        /*
         * Update
         */
        else {
          const response =
            await updateMentorFAQ(
              mentor.id,
              faq.id,
              {
                question:
                  faq.question,
                answer:
                  faq.answer,
              }
            );

          if (
            !response?.success
          ) {
            setError(
              "Failed to update FAQ."
            );
            return;
          }

          setFaqData(
            (current) =>
              current.map(
                (item) =>
                  item.id ===
                  faq.id
                    ? faq
                    : item
              )
          );
        }

        setIsFormOpen(false);
        setSelectedFAQ(null);
      } catch (error: any) {
        console.error(
          "Failed to save FAQ:",
          error
        );

        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to save FAQ."
        );
      }
    };

  /*
   * Delete FAQ
   */
  const confirmDelete =
    async () => {
      if (
        !mentor?.id ||
        !selectedFAQ?.id
      ) {
        return;
      }

      try {
        setError("");

        const response =
          await deleteMentorFAQ(
            mentor.id,
            selectedFAQ.id
          );

        if (
          !response?.success
        ) {
          setError(
            "Failed to delete FAQ."
          );
          return;
        }

        setFaqData(
          (current) =>
            current.filter(
              (item) =>
                item.id !==
                selectedFAQ.id
            )
        );

        setIsDeleteOpen(false);
        setSelectedFAQ(null);
      } catch (error: any) {
        console.error(
          "Failed to delete FAQ:",
          error
        );

        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to delete FAQ."
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
          Loading FAQs...
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
          Unable to Load FAQs
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

      <FAQHeader
        totalFAQs={
          faqData.length
        }
        onAddFAQ={
          handleAddFAQ
        }
      />

      {/* Toolbar */}

      <FAQToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
      />

      {/* Empty State */}

      {filteredFAQs.length ===
      0 ? (
        <EmptyFAQ
          onAddFAQ={
            handleAddFAQ
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

          {/* List */}

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

      {/* Create / Edit Modal */}

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

      {/* Delete Dialog */}

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