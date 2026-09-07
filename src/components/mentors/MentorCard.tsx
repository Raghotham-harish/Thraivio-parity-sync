import {
  Briefcase,
  BadgeCheck,
  MapPin,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

import type { MentorApiResponse } from "@/services/mentor.service";

type MentorCardProps = {
  mentor: MentorApiResponse;
};

const MentorCard = ({
  mentor,
}: MentorCardProps) => {
  const experience =
    Number(mentor.experience) || 0;

  const rating =
    Number(mentor.averageRating) || 0;

  const totalStudents =
    Number(mentor.totalStudents) || 0;

  const totalReviews =
    Number(mentor.totalReviews) || 0;

  const introPrice =
    mentor.pricing?.introCall ?? 0;

  const profileUrl =
    mentor.publicProfileUrl ||
    `/mentor/${mentor.id}`;

  return (
    <div
      className="
        group
        bg-white
        border
        border-slate-200
        rounded-3xl
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      {/* Mentor Header */}
      <div className="relative">
        <div
  className="
    w-full
    h-64
    bg-slate-100
    flex
    items-center
    justify-center
    px-8
    text-center
  "
>
  <div>
    {mentor.avatar ? (
      <img
        src={mentor.avatar}
        alt={mentor.name}
        className="
          w-20
          h-20
          mx-auto
          rounded-full
          object-cover
          mb-3
          border-2
          border-white
          shadow-sm
        "
      />
    ) : (
      <div
        className="
          w-20
          h-20
          mx-auto
          rounded-full
          bg-blue-100
          flex
          items-center
          justify-center
          text-blue-700
          text-2xl
          font-bold
          mb-3
        "
      >
        {mentor.name
          ?.charAt(0)
          ?.toUpperCase() || "M"}
      </div>
    )}

    <p className="text-slate-900 font-bold">
      {mentor.name}
    </p>

    <p className="text-slate-600 text-sm mt-1">
      {mentor.role}
    </p>
  </div>
</div>

        {/* Rating */}
        <div
          className="
            absolute
            top-4
            right-4
            bg-white
            border
            border-slate-200
            shadow-sm
            rounded-full
            px-3
            py-1
            text-sm
            font-medium
            flex
            items-center
            gap-1
          "
        >
          <Star
            size={14}
            className="text-yellow-500"
          />

          {rating.toFixed(1)}
        </div>

        {/* Mentor Status */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {mentor.featured && (
            <span
              className="
                bg-amber-500
                text-white
                px-3
                py-1
                rounded-full
                text-xs
                font-medium
              "
            >
              ⭐ Top Mentor
            </span>
          )}

          <span
            className={`
              ${
                mentor.acceptingBookings
                  ? "bg-green-600"
                  : "bg-slate-500"
              }
              text-white
              px-3
              py-1
              rounded-full
              text-xs
              font-medium
            `}
          >
            {mentor.acceptingBookings
              ? "Available"
              : "Not Available"}
          </span>
        </div>
      </div>

      <div className="h-1 w-full bg-blue-600" />

      <div className="p-6">
        {/* Mentor Title */}
        <div className="flex items-start gap-2">
          <h3 className="font-bold text-xl line-clamp-2">
            {mentor.headline}
          </h3>

          {mentor.featured && (
            <BadgeCheck
              size={18}
              className="text-blue-600 shrink-0 mt-1"
            />
          )}
        </div>

        <p className="text-blue-600 font-medium mt-1">
          {mentor.company}
        </p>

        <div className="mt-3 flex items-start justify-between gap-4">
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
            {mentor.about}
          </p>

          <div
            className="
              shrink-0
              bg-blue-50
              border
              border-blue-100
              rounded-xl
              px-3
              py-2
              text-center
              min-w-[95px]
            "
          >
            <p className="text-[10px] uppercase tracking-wide text-slate-500 mb-1">
              Starts At
            </p>

            <p className="text-lg font-bold text-blue-700 leading-none">
              ${introPrice}
            </p>
          </div>
        </div>

        {/* Company + Location */}
<div className="mt-4 space-y-2">
  <div className="flex items-center gap-2 text-sm text-slate-600">
    <Briefcase size={15} />
    {mentor.company}
  </div>

  {mentor.location && (
    <div className="flex items-center gap-2 text-sm text-slate-600">
      <MapPin size={15} />
      {mentor.location}
    </div>
  )}
</div>

        {/* Experience + Students + Reviews */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
            {experience} Years Experience
          </span>

          <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
            {totalStudents}+ Mentored
          </span>

          <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
            {totalReviews} Reviews
          </span>
        </div>

        {/* Skills */}
        {mentor.skills?.length > 0 && (
          <div className="mt-5">
            <div className="flex flex-wrap gap-2">
              {mentor.skills
                .slice(0, 3)
                .map((skill) => (
                  <span
                    key={skill}
                    className="
                      bg-slate-50
                      border
                      border-slate-200
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-medium
                    "
                  >
                    {skill}
                  </span>
                ))}

              {mentor.skills.length > 3 && (
                <span
                  className="
                    bg-blue-50
                    text-blue-700
                    border
                    border-blue-100
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-medium
                  "
                >
                  +{mentor.skills.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <Link
            to={profileUrl}
            className="
              text-center
              py-3
              rounded-xl
              font-medium
              border
              border-slate-300
              hover:bg-blue-50
              hover:border-blue-300
              hover:text-blue-700
              transition-all
            "
          >
            View Profile
          </Link>

          <Link
            to={profileUrl}
            className="
              text-center
              bg-blue-600
              text-white
              py-3
              rounded-xl
              font-medium
              hover:bg-blue-700
              hover:shadow-lg
              transition-all
            "
          >
            Book Intro Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;