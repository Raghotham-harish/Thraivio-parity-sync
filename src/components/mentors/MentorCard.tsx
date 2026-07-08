import {
  MapPin,
  Briefcase,
  BadgeCheck,
  Star,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";

type MentorCardProps = {
  mentor: {
    id: number;
    name: string;
    role: string;
    company: string;
    location: string;
    experience: string;
    rating: number;
    reviewsCount: number;
    image: string;

    studentsCoached: number;

    languages: string[];

    companiesWorked: string[];

    skills: string[];
    
    headline: string;
    featured: boolean;
    status: string;

    pricing: {
  introCall: number;
  mentorshipCall: number;
  mockInterview: number;
  monthlyProgram: number;
};

sessionDuration: {
  introCall: string;
};
  };
};

const MentorCard = ({
  mentor,
}: MentorCardProps) => {
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
      {/* Image */}
      <div className="relative">

        <img
          src={mentor.image}
          alt={mentor.name}
          className="
  w-full
h-64
object-cover
transition-transform
duration-500
hover:scale-105
"
        />

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

          {mentor.rating}         
          </div>

        {/* Available Badge */}
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
    className="
      bg-green-600
      text-white
      px-3
      py-1
      rounded-full
      text-xs
      font-medium
    "
  >
    {mentor.status}
  </span>

</div>

      </div>

      <div className="h-1 w-full bg-blue-600" />

      <div className="p-6">

        {/* Name */}
        <div className="flex items-center gap-2">

          <h3 className="font-bold text-xl">
            {mentor.name}
          </h3>

          <BadgeCheck
            size={18}
            className="text-blue-600"
          />

        </div>

        <p className="text-blue-600 font-medium mt-1">
          {mentor.role}
        </p>
        <div className="mt-3 flex items-start justify-between gap-4">

  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 flex-1">
    {mentor.headline}
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
    ${mentor.pricing.introCall}
    <span className="text-xs font-medium text-slate-500 ml-1">
      /hr
    </span>
  </p>
</div>

</div>
        {/* Company */}
        <div className="mt-4 space-y-2">

          <div className="flex items-center gap-2 text-sm text-slate-600">
  <Briefcase size={15} />
  {mentor.company}
</div>

<div className="flex items-center gap-2 text-sm text-slate-500">
  <MapPin size={15} />
  {mentor.location}
</div>
        </div>

        {/* Students */}
          <div className="flex flex-wrap gap-2 mt-4">

  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
    {mentor.experience} Experience
  </span>

  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
    {mentor.studentsCoached}+ Mentored
  </span>

</div>
        {/* Companies Worked */}
        <div className="mt-5">

          <div className="flex flex-wrap gap-2">

            {mentor.companiesWorked
              .slice(0, 2)
              .map((company) => (
                <span
                  key={company}
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
                  {company}
                </span>
              ))}

              {mentor.companiesWorked.length > 2 && (
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
    +{mentor.companiesWorked.length - 2}
  </span>
)}

          </div>

        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6">

          <Link
            to={`/mentor/${mentor.id}`}
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
            to={`/mentor/${mentor.id}`}
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