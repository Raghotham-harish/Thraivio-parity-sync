import { Search } from "lucide-react";

interface MentorFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;

  selectedCategory: string;
  setSelectedCategory: (value: string) => void;

  selectedExperience: string;
  setSelectedExperience: (value: string) => void;

  selectedLocation: string;
  setSelectedLocation: (value: string) => void;

  selectedAvailability: string;
  setSelectedAvailability: (value: string) => void;
}

const MentorFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedExperience,
  setSelectedExperience,
  selectedAvailability,
  setSelectedAvailability,
  selectedLocation,
  setSelectedLocation,
}: MentorFiltersProps) => {
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedExperience("");
    setSelectedLocation("");
    setSelectedAvailability("");
  };

  const hasFilters =
    searchTerm ||
    selectedCategory ||
    selectedExperience ||
    selectedLocation || 
    selectedAvailability;

  return (
    <section className="py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
  <div
    className="bg-white
rounded-3xl
border
border-slate-200
p-6
md:p-8
shadow-lg"
  >

        <div className="flex items-center justify-between mb-5">

          <div>
            <h2 className="font-bold text-3xl">
             Find The Right Mentor
            </h2>

            <p className="text-slate-500 text-sm">
              Connect with experienced professionals for career guidance,
              mock interviews, leadership coaching and job transitions.
            </p>
          </div>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="
  px-4
  py-2
  rounded-xl
  bg-red-50
  text-red-600
  font-medium
  hover:bg-red-100
"
            >
              Clear Filters
            </button>
          )}
        </div>

        <div className="grid lg:grid-cols-6 gap-4">

          {/* Search */}
          <div className="lg:col-span-2 relative">

            <Search
              size={18}
              className="absolute left-4 top-4 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search mentor, company, skill..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="
  w-full
border
border-slate-300
rounded-2xl
py-3
pl-12
pr-4
bg-white
focus:ring-blue-500
"
            />

          </div>

          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value)
            }
            className="
border
border-slate-300
bg-white
rounded-xl
px-4
py-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition-all
"
          >
            <option value="">
              All Categories
            </option>

            <option value="Product">
              Product
            </option>

            <option value="Engineering">
              Engineering
            </option>

            <option value="Career">
              Career
            </option>

            <option value="Startup">
              Startup
            </option>

            <option value="Leadership">
              Leadership
            </option>

            <option value="Marketing">
              Marketing
            </option>
          </select>

          {/* Experience */}
          <select
            value={selectedExperience}
            onChange={(e) =>
              setSelectedExperience(e.target.value)
            }
            className="
border
border-slate-300
bg-white
rounded-xl
px-4
py-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition-all
"
          >
            <option value="">
              All Experience
            </option>

            <option value="0-5">
              0-5 Years
            </option>

            <option value="5-10">
              5-10 Years
            </option>

            <option value="10+">
              10+ Years
            </option>
          </select>

          {/* Location */}
          <select
            value={selectedLocation}
            onChange={(e) =>
              setSelectedLocation(e.target.value)
            }
            className="
border
border-slate-300
bg-white
rounded-xl
px-4
py-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition-all
"
          >
            <option value="">
              All Locations
            </option>

            <option value="USA">
              USA
            </option>

            <option value="California">
              California
            </option>

            <option value="Seattle">
              Seattle
            </option>

            <option value="New York">
              New York
            </option>

            <option value="London">
              London
            </option>

            <option value="Toronto">
              Toronto
            </option>
          </select>
          <select
  value={selectedAvailability}
  onChange={(e) =>
    setSelectedAvailability(e.target.value)
  }
  className="
border
border-slate-300
bg-white
rounded-xl
px-4
py-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition-all
"
>
  <option value="">
    Availability
  </option>

  <option value="Available">
    Available Now
  </option>

  <option value="Busy">
    Fully Booked
  </option>
</select>

        </div>

        {/* Quick Filters */}
        <p className="text-sm font-semibold tracking-wide text-slate-700 mt-6 mb-3">
         Popular Companies
        </p>
        <div className="flex flex-wrap gap-3 mt-5">

          <button
  onClick={() => setSearchTerm("Google")}
  className="
    px-4
py-2
bg-blue-50
border
border-blue-100
text-blue-600
rounded-full
hover:bg-blue-100
hover:shadow-md
transition-all
  "
>
  Google
</button>

          <button
  onClick={() => setSearchTerm("Microsoft")}
  className="
    px-4
py-2
bg-blue-50
border
border-blue-100
text-blue-600
rounded-full
hover:bg-blue-100
hover:shadow-md
transition-all
  "
>
  Microsoft
</button>

          <button
  onClick={() => setSearchTerm("Amazon")}
  className="
    px-4
py-2
bg-blue-50
border
border-blue-100
text-blue-600
rounded-full
hover:bg-blue-100
hover:shadow-md
transition-all
  "
>
  Amazon
</button>

          <button
  onClick={() => setSearchTerm("Meta")}
  className="
    px-4
py-2
bg-blue-50
border
border-blue-100
text-blue-600
rounded-full
hover:bg-blue-100
hover:shadow-md
transition-all
  "
>
  Meta
</button>

          <button
  onClick={() => setSearchTerm("Airbnb")}
  className="
    px-4
py-2
bg-blue-50
border
border-blue-100
text-blue-600
rounded-full
hover:bg-blue-100
hover:shadow-md
transition-all
  "
>
  Airbnb
</button>

<button
  onClick={() => setSearchTerm("Uber")}
  className="
  px-4
py-2
bg-blue-50
border
border-blue-100
text-blue-600
rounded-full
hover:bg-blue-100
hover:shadow-md
transition-all"
>
  Uber
</button>

        </div>
        {/* Active Filters */}
        <p className="text-sm font-semibold text-slate-700 mt-5 mb-2">
  Active Filters
</p>

<div className="flex flex-wrap gap-2 mt-5">

  {selectedCategory && (
    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
      {selectedCategory}
    </span>
  )}

  {selectedExperience && (
    <span className="bg-blue-50
text-blue-600 px-3 py-1 rounded-full text-sm">
      {selectedExperience}
    </span>
  )}

  {selectedLocation && (
    <span className="bg-blue-50
text-blue-600 px-3 py-1 rounded-full text-sm">
      {selectedLocation}
    </span>
  )}

  {selectedAvailability && (
    <span className="bg-blue-50
text-blue-600 px-3 py-1 rounded-full text-sm">
      {selectedAvailability}
    </span>
  )}

</div>

      </div>
</div>
</section>
  );
};

export default MentorFilters;