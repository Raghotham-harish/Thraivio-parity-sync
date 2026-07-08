import { useParams } from "react-router-dom";
import { mentors } from "@/data/mentors";

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

  const mentor = mentors.find(
    (item) => item.id === Number(id)
  );

  if (!mentor) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">
          Mentor Not Found
        </h1>

        <p className="mt-4 text-slate-500">
          The mentor profile you're looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div>

      <MentorProfileHero mentor={mentor} />

      <MentorAbout mentor={mentor} />

      <MentorSkills mentor={mentor} />

      <MentorExperience mentor={mentor} />

      <MentorAvailability mentor={mentor} />

      <MentorPricing mentor={mentor} />

      <MentorPrograms mentor={mentor} />

      <MentorEvents mentor={mentor} />

      <MentorVideos mentor={mentor} />

      <MentorCertifications mentor={mentor} />

      <MentorReviews mentor={mentor} />

      <MentorFAQ />

      <MentorFinalCTA mentor={mentor} />

    </div>
  );
};

export default MentorProfilePage;