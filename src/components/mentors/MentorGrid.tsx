import MentorCard from "./MentorCard";
import type { MentorApiResponse } from "@/services/mentor.service";

interface MentorGridProps {
  mentors: MentorApiResponse[];
  searchTerm: string;
  selectedCategory: string;
  selectedExperience: string;
  selectedLocation: string;
  selectedAvailability: string;
  isLoading: boolean;
}

const MentorGrid = ({
  mentors,
  searchTerm,
  selectedCategory,
  selectedExperience,
  selectedLocation,
  selectedAvailability,
  isLoading,
}: MentorGridProps) => {
  const filteredMentors = mentors.filter(
    (mentor) => {
      const search =
        searchTerm.toLowerCase();

      const matchesSearch =
  !search ||
  mentor.name?.toLowerCase().includes(search) ||
  mentor.role?.toLowerCase().includes(search) ||
  mentor.headline?.toLowerCase().includes(search) ||
  mentor.company?.toLowerCase().includes(search) ||
  mentor.companiesWorked?.some((company) =>
    company.toLowerCase().includes(search)
  ) ||
  mentor.skills?.some((skill) =>
    skill.toLowerCase().includes(search)
  ) ||
  mentor.expertise?.some((item) =>
    item.toLowerCase().includes(search)
  ) ||
  mentor.languages?.some((language) =>
    language.toLowerCase().includes(search)
  );

      /*
       * Backend Mentor API does not have a `category`
       * field, so category filtering cannot be mapped
       * directly yet.
       *
       * We keep the filter UI intact for now.
       */
      const matchesCategory =
        !selectedCategory;

      /*
       * Backend experience is a number.
       */
      const years =
        Number(mentor.experience) || 0;

      const matchesExperience =
        !selectedExperience ||
        (selectedExperience === "0-5" &&
          years <= 5) ||
        (selectedExperience === "5-10" &&
          years > 5 &&
          years <= 10) ||
        (selectedExperience === "10+" &&
          years >= 10);

      /*
       * Backend Mentor API does not have a
       * `location` field.
       *
       * Keep the existing filter UI but don't
       * invent a location mapping.
       */
      const matchesLocation =
  !selectedLocation ||
  mentor.location?.toLowerCase() ===
    selectedLocation.toLowerCase();

      /*
       * Backend uses `acceptingBookings`
       * instead of the old mock `status` field.
       */
      const matchesAvailability =
  !selectedAvailability ||
  (selectedAvailability === "Available" &&
    mentor.acceptingBookings === true) ||
  (selectedAvailability === "Busy" &&
    mentor.acceptingBookings === false);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLocation &&
        matchesExperience &&
        matchesAvailability
      );
    }
  );

  return (
    <section
      id="mentors-grid"
      className="py-16 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="
            bg-white
            rounded-3xl
            border
            border-slate-200
            p-6
            md:p-8
            shadow-lg
          "
        >
          {/* Results Count + Sort */}
          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-4
              mb-8
            "
          >
            <p className="text-slate-600 text-lg">
              Showing{" "}
              <span className="font-bold text-blue-600">
                {filteredMentors.length}
              </span>{" "}
              mentors out of{" "}
              <span className="font-bold">
                {mentors.length}
              </span>
            </p>

            <select
              className="
                border
                border-slate-300
                rounded-xl
                bg-white
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all
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

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {selectedCategory && (
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                {selectedCategory}
              </span>
            )}

            {selectedExperience && (
              <span
                className="
                  bg-blue-50
                  text-blue-600
                  px-3
                  py-1
                  rounded-full
                  text-sm
                "
              >
                {selectedExperience}
              </span>
            )}

            {selectedLocation && (
              <span
                className="
                  bg-blue-50
                  text-blue-600
                  px-3
                  py-1
                  rounded-full
                  text-sm
                "
              >
                {selectedLocation}
              </span>
            )}

            {selectedAvailability && (
              <span
                className="
                  bg-blue-50
                  text-blue-600
                  px-3
                  py-1
                  rounded-full
                  text-sm
                "
              >
                {selectedAvailability}
              </span>
            )}
          </div>

          {/* Loading */}
          {isLoading ? (
            <div className="text-center py-24">
              <div className="text-4xl mb-4">
                ⏳
              </div>

              <p className="text-slate-500 text-lg">
                Loading mentors...
              </p>
            </div>
          ) : filteredMentors.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">
                🔍
              </div>

              <div
                className="
                  max-w-lg
                  mx-auto
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-3xl
                  p-10
                "
              >
                <h3 className="text-3xl font-bold">
                  No Mentors Found
                </h3>

                <p className="text-slate-500 mt-3">
                  Try changing filters or search terms.
                </p>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default MentorGrid;