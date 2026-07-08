import BecomeMentorHero from "@/components/become-mentor/BecomeMentorHero";
import WhyBecomeMentor from "@/components/become-mentor/WhyBecomeMentor";
import HowItWorks from "@/components/become-mentor/HowItWorks";
import MentorCategories from "@/components/become-mentor/MentorCategories";
import MentorApplicationForm from "@/components/become-mentor/MentorApplicationForm";
import MentorSuccessStories from "@/components/become-mentor/MentorSuccessStories";
import MentorFAQ from "@/components/become-mentor/MentorFAQ";

const BecomeCoachPage = () => {
  return (
    <>
      <BecomeMentorHero />

      <WhyBecomeMentor />

      <HowItWorks />

      <MentorCategories />

      <MentorApplicationForm />

      <MentorSuccessStories />

      <MentorFAQ />
    </>
  );
};

export default BecomeCoachPage;