import {
  BadgeCheck,
  Briefcase,
  MapPin,
  Star,
  Users,
  Calendar,
  Globe,
} from "lucide-react";

import {
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import type {
  MentorApiResponse,
} from "@/services/mentor.service";

interface MentorProfileHeroProps {
  mentor: MentorApiResponse;
}

const MentorProfileHero = ({
  mentor,
}: MentorProfileHeroProps) => {
  const rating =
    Number(mentor.averageRating) || 0;

  const totalStudents =
    Number(mentor.totalStudents) || 0;

  const totalSessions =
    Number(mentor.totalSessions) || 0;

  const totalReviews =
    Number(mentor.totalReviews) || 0;

  const introPrice =
    mentor.pricing?.introCall ?? 0;

  const monthlyPrice =
    mentor.pricing?.monthlyProgram ?? 0;

  const socialLinks =
    mentor.socialLinks as
      | {
          linkedin?: string;
          twitter?: string;
          github?: string;
          youtube?: string;
          website?: string;
          portfolio?: string;
        }
      | undefined;

  return (
    <section>
      {/* Cover */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-[#1677FF]" />

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            text-center
            text-white
            z-10
          "
        >
          <div>
            <p className="uppercase tracking-[5px] text-sm opacity-80">
              VERIFIED CAREER MENTOR
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Mentor Profile
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="-mt-16 relative z-20">
          <div
            className="
              bg-white
              rounded-2xl
              shadow-sm
              border
              border-slate-200
              p-10
            "
          >
            <div className="flex flex-col xl:flex-row justify-between gap-10">

              {/* Left */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Placeholder */}
                {/* Mentor Profile Image */}
<div
  className="
    h-44
    w-44
    rounded-3xl
    border
    border-slate-200
    bg-blue-50
    shadow-md
    shrink-0
    flex
    items-center
    justify-center
    overflow-hidden
  "
>
  {mentor.avatar ? (
    <img
      src={mentor.avatar}
      alt={mentor.name}
      className="h-full w-full object-cover"
    />
  ) : (
    <span className="text-5xl font-bold text-blue-600">
      {mentor.name
        ?.charAt(0)
        ?.toUpperCase() || "M"}
    </span>
  )}
</div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <div>
  <div className="flex items-center gap-2 flex-wrap">
    <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
      {mentor.name}
    </h1>

    {mentor.verificationStatus ===
      "verified" && (
      <BadgeCheck
        size={26}
        className="text-blue-600"
      />
    )}
  </div>

  <p className="text-slate-500 text-lg mt-1">
    {mentor.role}
  </p>

  <p className="text-xl font-medium text-blue-600 mt-2">
    {mentor.headline}
  </p>
</div>

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-medium
                        ${
                          mentor.acceptingBookings
                            ? "bg-green-100 text-green-700"
                            : "bg-slate-500 text-white"
                        }
                      `}
                    >
                      {mentor.acceptingBookings
                        ? "Available Now"
                        : "Not Available"}
                    </span>
                  </div>

                  <p className="text-blue-600 text-xl mt-2">
                    {mentor.company}
                  </p>

                  <p className="text-slate-600 mt-3 max-w-2xl leading-7">
                    {mentor.about}
                  </p>

                  {/* Stats badges */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-white
                        border
                        border-slate-200
                        text-amber-700
                        text-sm
                        font-medium
                      "
                    >
                      ⭐ {rating.toFixed(1)} Rating
                    </span>

                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-white
                        border
                        border-slate-200
                        text-green-700
                        text-sm
                        font-medium
                      "
                    >
                      {totalStudents}+ Students
                    </span>

                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-white
                        border
                        border-slate-200
                        text-blue-700
                        text-sm
                        font-medium
                      "
                    >
                      {totalSessions}+ Sessions
                    </span>
                  </div>

                  {/* Social proof */}
                  <div className="flex items-center mt-5">
                    <p className="text-sm text-slate-600">
                      <span className="font-semibold text-slate-900">
                        {totalStudents}+
                      </span>{" "}
                      mentees have worked with this mentor
                    </p>
                  </div>

                  {/* Company + Location */}
<div className="mt-5 space-y-3">
  <div className="flex items-center gap-2 text-slate-600">
    <Briefcase size={18} />
    {mentor.company}
  </div>

  {mentor.location && (
    <div className="flex items-center gap-2 text-slate-600">
      <MapPin size={18} />
      {mentor.location}
    </div>
  )}
</div>

                  {/* Social Links */}
                  {(socialLinks?.linkedin ||
                    socialLinks?.youtube ||
                    socialLinks?.website ||
                    socialLinks?.portfolio) && (
                    <div className="flex flex-wrap gap-3 mt-5">

                      {socialLinks.linkedin && (
                        <a
                          href={
                            socialLinks.linkedin
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-lg
                            bg-white
                            border
                            border-slate-200
                            hover:bg-blue-100
                            hover:text-blue-700
                            transition
                            font-medium
                          "
                        >
                          <FaLinkedin size={18} />
                          LinkedIn
                        </a>
                      )}

                      {socialLinks.youtube && (
                        <a
                          href={
                            socialLinks.youtube
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-lg
                            bg-white
                            border
                            border-slate-200
                            hover:bg-red-100
                            hover:text-red-600
                            transition
                            font-medium
                          "
                        >
                          <FaYoutube size={18} />
                          YouTube
                        </a>
                      )}

                      {(socialLinks.website ||
                        socialLinks.portfolio) && (
                        <a
                          href={
                            socialLinks.website ||
                            socialLinks.portfolio
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-lg
                            bg-white
                            border
                            border-slate-200
                            hover:bg-green-100
                            hover:text-green-700
                            transition
                            font-medium
                          "
                        >
                          <Globe size={18} />
                          Website
                        </a>
                      )}
                    </div>
                  )}

                  {/* Companies Worked */}
                  {mentor.companiesWorked &&
                    mentor.companiesWorked.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-slate-700 mb-2">
                          Experience At
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {mentor.companiesWorked.map(
                            (company) => (
                              <span
                                key={company}
                                className="
                                  px-4
                                  py-2
                                  bg-white
                                  border
                                  border-slate-200
                                  rounded-lg
                                  text-sm
                                  font-semibold
                                  shadow-sm
                                "
                              >
                                {company}
                              </span>
                            )
                          )}
                        </div>

                        <p className="text-sm text-slate-600 mt-3">
                          Professional experience across
                          leading organizations.
                        </p>
                      </div>
                    )}
                </div>
              </div>

              {/* Right CTA */}
              <div className="xl:w-[350px] xl:pt-4">
                <div
                  className="
                    bg-white
                    border
                    border-slate-200
                    rounded-2xl
                    p-6
                    shadow-sm
                  "
                >
                  <p className="text-slate-600">
                    Starting From
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    ${introPrice}
                  </h2>

                  <div
  className={`mt-4 flex items-center gap-2 text-sm font-medium ${
    mentor.acceptingBookings
      ? "text-green-600"
      : "text-slate-500"
  }`}
>
  ●{" "}
  {mentor.acceptingBookings
    ? "Available for bookings"
    : "Not available for bookings"}
</div>

                  <div className="mt-3 space-y-2 text-sm text-slate-600">
                    <p>
                      {mentor.verificationStatus ===
                      "verified"
                        ? "✅ Verified Mentor"
                        : "⏳ Verification Pending"}
                    </p>

                    <p>
                      🎯 Personalized Career Guidance
                    </p>

                    <p>
                      ⭐ {totalReviews} Reviews
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm mt-4">
                    Intro Discovery Call
                  </p>

                  <div className="mt-4 rounded-lg bg-slate-50 border border-slate-200 p-4">
                    <p className="text-sm text-slate-600">
                      Monthly Mentorship
                    </p>

                    <h4 className="text-2xl font-bold text-blue-700 mt-1">
                      ${monthlyPrice}
                    </h4>

                    <p className="text-xs text-slate-600 mt-1">
                      Monthly mentorship pricing
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      to="/login"
                      className="
                        bg-blue-600
                        text-white
                        py-3
                        rounded-lg
                        text-center
                        font-medium
                        hover:bg-blue-700
                        transition
                      "
                    >
                      Book Intro Call
                    </Link>

                    <Link
                      to="/login"
                      className="
                        border
                        border-slate-300
                        py-3
                        rounded-lg
                        text-center
                        font-medium
                        hover:bg-blue-50
                        hover:border-blue-300
                        hover:text-blue-700
                        transition-all
                        duration-300
                      "
                    >
                      Ask A Question
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div
              className="
                grid
                md:grid-cols-2
                xl:grid-cols-5
                gap-5
                mt-10
              "
            >
              {/* Rating */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5">
                <div className="flex items-center gap-2">
                  <Star
                    size={18}
                    className="text-amber-500"
                  />

                  <span className="font-medium">
                    Rating
                  </span>
                </div>

                <h3 className="text-3xl font-bold mt-2">
                  {rating.toFixed(1)}
                </h3>

                <p className="text-slate-600">
                  {totalReviews}+ Reviews
                </p>
              </div>

              {/* Students */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5">
                <div className="flex items-center gap-2">
                  <Users size={18} />

                  <span className="font-medium">
                    Students
                  </span>
                </div>

                <h3 className="text-3xl font-bold mt-2">
                  {totalStudents}+
                </h3>

                <p className="text-slate-600">
                  Students Trained
                </p>
              </div>

              {/* Sessions */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />

                  <span className="font-medium">
                    Sessions
                  </span>
                </div>

                <h3 className="text-3xl font-bold mt-2">
                  {totalSessions}+
                </h3>

                <p className="text-slate-600">
                  Sessions Completed
                </p>
              </div>

              {/* Experience */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5">
                <div className="flex items-center gap-2">
                  <Briefcase size={18} />

                  <span className="font-medium">
                    Experience
                  </span>
                </div>

                <h3 className="text-3xl font-bold mt-2">
                  {mentor.experience}
                </h3>

                <p className="text-slate-600">
                  Years Experience
                </p>
              </div>

              {/* Languages */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe
                    size={18}
                    className="text-cyan-600"
                  />

                  <span className="font-semibold text-slate-700">
                    Languages
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {mentor.languages.map(
                    (language) => (
                      <span
                        key={language}
                        className="
                          px-3
                          py-1
                          bg-white
                          border
                          border-cyan-200
                          rounded-lg
                          text-sm
                          font-medium
                          text-cyan-700
                        "
                      >
                        {language}
                      </span>
                    )
                  )}
                </div>

                <p className="text-xs text-slate-600 mt-4">
                  Languages supported by this mentor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorProfileHero;