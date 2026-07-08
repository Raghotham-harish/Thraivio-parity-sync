import {
  useState,
  useEffect,
} from "react";

import {
  useSearchParams,
} from "react-router-dom";
import MentorListingHero from "@/components/mentors/MentorListingHero";
import MentorFilters from "@/components/mentors/MentorFilters";
import MentorGrid from "@/components/mentors/MentorGrid";

const MentorsPage = () => {
  const [searchParams] =
    useSearchParams();

  const [searchTerm, setSearchTerm] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("");

  const [
    selectedExperience,
    setSelectedExperience,
  ] = useState("");

  const [
    selectedLocation,
    setSelectedLocation,
  ] = useState("");

  const [
    selectedAvailability,
    setSelectedAvailability,
  ] = useState("");

  useEffect(() => {
    const search =
      searchParams.get("search");

    const company =
      searchParams.get("company");

    const category =
      searchParams.get("category");

    if (search) {
      setSearchTerm(search);
    }

    if (company) {
      setSearchTerm(company);
    }

    if (category) {
      setSelectedCategory(
        category
      );
    }
  }, [searchParams]);

  return (
    <div>
      <MentorListingHero
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>

      <MentorFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}

        selectedCategory={
          selectedCategory
        }
        setSelectedCategory={
          setSelectedCategory
        }

        selectedExperience={
          selectedExperience
        }
        setSelectedExperience={
          setSelectedExperience
        }

        selectedLocation={
          selectedLocation
        }
        setSelectedLocation={
          setSelectedLocation
        }

        selectedAvailability={
          selectedAvailability
        }
        setSelectedAvailability={
          setSelectedAvailability
        }
      />

      <MentorGrid
        searchTerm={searchTerm}

        selectedCategory={
          selectedCategory
        }

        selectedExperience={
          selectedExperience
        }

        selectedLocation={
          selectedLocation
        }

        selectedAvailability={
          selectedAvailability
        }
      />

    </div>
  );
};

export default MentorsPage;