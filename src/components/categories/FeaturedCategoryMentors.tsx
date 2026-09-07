import { useEffect, useState } from "react";
import MentorCard from "@/components/mentors/MentorCard";
import {
  getMentors,
  type MentorApiResponse,
} from "@/services/mentor.service";
import { Users } from "lucide-react";

interface FeaturedCategoryMentorsProps {
  selectedCategory: string;
}

const FeaturedCategoryMentors = ({
  selectedCategory,
}: FeaturedCategoryMentorsProps) => {
  const [mentors, setMentors] =
    useState<MentorApiResponse[]>([]);

  const [isLoading, setIsLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response =
          await getMentors({
            limit: 100,
            expertise:
              selectedCategory || undefined,
          });

        setMentors(
          response.data.mentors
        );
      } catch (err) {
        console.error(
          "Failed to fetch featured mentors:",
          err
        );

        setError(
          "Failed to load mentors."
        );
        setMentors([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMentors();
  }, [selectedCategory]);

  const filteredMentors =
    selectedCategory === ""
      ? mentors
      : mentors.filter((mentor) => {
          const category =
            selectedCategory.toLowerCase();

          return (
            mentor.expertise?.some(
              (item) =>
                item
                  .toLowerCase()
                  .includes(category)
            ) ||
            mentor.skills?.some(
              (item) =>
                item
                  .toLowerCase()
                  .includes(category)
            )
          );
        });

  return (
    <section className="pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <div>
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-blue-50
                  border
                  border-blue-200
                  text-blue-700
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                "
              >
                <Users size={16} />
                {filteredMentors.length} Mentors Found
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                {selectedCategory
                  ? `${selectedCategory} Mentors`
                  : "Featured Mentors"}
              </h2>

              <p className="mt-3 text-slate-600">
                {selectedCategory
                  ? `Explore experienced mentors in ${selectedCategory}.`
                  : "Connect with experienced mentors and industry professionals."}
              </p>
            </div>

            {/* Sort */}
            <div>
              <select
                className="
                  border
                  border-slate-200
                  rounded-xl
                  px-4
                  py-3
                  bg-white
                  min-w-[220px]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              >
                <option>
                  Most Popular
                </option>

                <option>
                  Highest Rated
                </option>

                <option>
                  Most Students
                </option>

                <option>
                  Most Experienced
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-200 mb-10" />

        {/* Active Category */}
        {selectedCategory && (
          <div className="mb-8">
            <span
              className="
                bg-blue-50
                border
                border-blue-200
                text-blue-700
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
              "
            >
              Showing mentors from:{" "}
              {selectedCategory}
            </span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-6 text-red-600">
            {error}
          </div>
        )}

        {/* Loading */}
        {isLoading ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">
              ⏳
            </div>

            <p className="text-slate-500">
              Loading mentors...
            </p>
          </div>
        ) : filteredMentors.length === 0 ? (
          /* Empty State */
          <div
            className="
              text-center
              py-20
              bg-white
              rounded-3xl
              border
              border-slate-200
              shadow-sm
            "
          >
            <div className="text-6xl mb-4">
              🔍
            </div>

            <h3 className="text-3xl font-bold">
              No Mentors Found
            </h3>

            <p className="text-slate-500 mt-3">
              We couldn't find mentors in this category yet.
            </p>
          </div>
        ) : (
          <>
            {/* Results */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
              {filteredMentors.map(
                (mentor) => (
                  <MentorCard
                    key={mentor.id}
                    mentor={mentor}
                  />
                )
              )}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button
                className="
                  bg-blue-600
                  text-white
                  px-8
                  py-3
                  rounded-xl
                  font-medium
                  shadow-lg
                  hover:bg-blue-700
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                Load More Mentors
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedCategoryMentors;