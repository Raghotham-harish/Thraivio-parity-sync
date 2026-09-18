import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import { mentors } from "@/data/mentors";

import {
  getMentorBySlug,
  incrementMentorProfileView,
  type MentorApiResponse,
} from "@/services/mentor.service";

import MentorProfileHero from "@/components/mentor-profile/MentorProfileHero";
import MentorAbout from "@/components/mentor-profile/MentorAbout";
import MentorSkills from "@/components/mentor-profile/MentorSkills";
import MentorExperience from "@/components/mentor-profile/MentorExperience";
import MentorReviews from "@/components/mentor-profile/MentorReviews";

import MentorPricing from "@/components/mentor-profile/MentorPricing";
import MentorPrograms from "@/components/mentor-profile/MentorPrograms";
import MentorEvents from "@/components/mentor-profile/MentorEvents";
import MentorVideos from "@/components/mentor-profile/MentorVideos";
import MentorAvailability from "@/components/mentor-profile/MentorAvailability";
import MentorCertifications from "@/components/mentor-profile/MentorCertifications";
import MentorFAQ from "@/components/mentor-profile/MentorFAQ";
import MentorFinalCTA from "@/components/mentor-profile/MentorFinalCTA";

const MentorProfilePage = () => {
  const { id } = useParams();

  /*
   * Existing hardcoded mentor data is still kept because
   * Events, Certifications, Reviews testimonials and
   * Final CTA currently depend on this existing data.
   *
   * Programs themselves are now loaded from the backend
   * inside MentorPrograms.
   */
  const hardcodedMentor = mentors[0];

  const [
    mentor,
    setMentor,
  ] = useState<MentorApiResponse | null>(
    null
  );

  const [
    isLoading,
    setIsLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  useEffect(() => {
    const fetchMentor = async () => {
      if (!id) {
        setError(
          "Mentor ID is missing."
        );

        setIsLoading(false);

        return;
      }

      try {
        setIsLoading(true);

        setError("");

        const response =
          await getMentorBySlug(id);

        setMentor(
          response.data
        );

        /*
         * Register a profile view after
         * successfully loading the mentor.
         *
         * Failure here should not prevent
         * the profile from being displayed.
         */
        try {
          await incrementMentorProfileView(
            response.data.id
          );
        } catch (viewError) {
          console.error(
            "Failed to increment mentor profile view:",
            viewError
          );
        }
      } catch (err) {
        console.error(
          "Failed to fetch mentor:",
          err
        );

        setError(
          "Failed to load mentor profile."
        );

        setMentor(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMentor();
  }, [id]);

  if (isLoading) {
    return (
      <div className="py-32 text-center">

        <div className="text-5xl mb-4">
          ⏳
        </div>

        <h1 className="text-3xl font-bold">
          Loading Mentor Profile...
        </h1>

        <p className="mt-4 text-muted-foreground">
          Please wait while we load the mentor details.
        </p>

      </div>
    );
  }

  if (error || !mentor) {
    return (
      <div className="py-32 text-center">

        <h1 className="text-4xl font-bold">
          Mentor Not Found
        </h1>

        <p className="mt-4 text-muted-foreground">
          {error ||
            "The mentor profile you're looking for does not exist."}
        </p>

      </div>
    );
  }

  return (
    <div>

      {/* Backend integrated sections */}

      <MentorProfileHero
        mentor={mentor}
      />

      <MentorAbout
        mentor={mentor}
      />

      <MentorSkills
        mentor={mentor}
      />

      <MentorExperience
        mentor={mentor}
      />

      <MentorAvailability
        mentor={mentor}
      />

      <MentorPricing
        mentor={mentor}
      />

      {/* Programs */}

      {/*
       * Program data is now fetched from the backend
       * inside MentorPrograms.
       *
       * Existing mentor prop is preserved because the
       * current component still uses bookingLink for
       * the existing Enroll Today UI.
       */}
      <MentorPrograms
        mentor={hardcodedMentor}
      />

      {/* Events remain hardcoded for now */}

      <MentorEvents
        mentor={hardcodedMentor}
      />

      {/* Videos */}

      <MentorVideos
        mentor={mentor}
      />

      {/* Certifications remain hardcoded for now */}

      <MentorCertifications
        mentor={hardcodedMentor}
      />

      {/* Reviews */}

      <MentorReviews
        mentor={{
          rating:
            mentor.averageRating,

          reviewsCount:
            mentor.totalReviews,

          testimonials:
            hardcodedMentor?.testimonials ??
            [],
        }}
      />

      {/* FAQ */}

      <MentorFAQ
        mentor={mentor}
      />

      {/* Final CTA */}

      <MentorFinalCTA
        mentor={{
          bookingLink:
            hardcodedMentor?.bookingLink ??
            "#",

          rating:
            mentor.averageRating,

          reviewsCount:
            mentor.totalReviews,

          studentsCoached:
            mentor.totalStudents,
        }}
      />

    </div>
  );
};

export default MentorProfilePage;