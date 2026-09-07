import {
  useEffect,
  useState,
} from "react";

import {
  useSearchParams,
} from "react-router-dom";

import MentorListingHero from "@/components/mentors/MentorListingHero";
import MentorFilters from "@/components/mentors/MentorFilters";
import MentorGrid from "@/components/mentors/MentorGrid";
import {
  getMentors,
  type MentorApiResponse,
} from "@/services/mentor.service";

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

  const [
    mentors,
    setMentors,
  ] = useState<MentorApiResponse[]>([]);

  const [
    isLoading,
    setIsLoading,
  ] = useState(false);

  const [
    error,
    setError,
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
      setSelectedCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await getMentors({
  search: searchTerm || undefined,
  location: selectedLocation || undefined,
});
        setMentors(
          response.data.mentors
        );
      } catch (err) {
        console.error(
          "Failed to fetch mentors:",
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
  }, [
    searchTerm,
    selectedCategory,
    selectedLocation,
  ]);

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

      {error && (
        <div className="px-6 py-4 text-sm text-red-600">
          {error}
        </div>
      )}

      <MentorGrid
        mentors={mentors}
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
        isLoading={isLoading}
      />
    </div>
  );
};

export default MentorsPage;