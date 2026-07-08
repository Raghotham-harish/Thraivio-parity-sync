import {
  ArrowRightLeft,
  Building2,
  CalendarDays,
  Clock3,
  GraduationCap,
  User,
  X,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";

import { mentors } from "@/data/mentors";

import type {
  AdminSession,
} from "@/types/admin-session";

type Mentor = (typeof mentors)[number];

interface AssignMentorDialogProps {
  open: boolean;

  session: AdminSession | null;

  onClose: () => void;

  onAssign: (
    sessionId: string,
    mentor: Mentor
  ) => void;
}

const AssignMentorDialog = ({
  open,
  session,
  onClose,
  onAssign,
}: AssignMentorDialogProps) => {

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    selectedMentor,
    setSelectedMentor,
  ] =
    useState<Mentor | null>(
      null
    );

  const filteredMentors =
    useMemo(() => {

      return mentors.filter(
        (mentor) => {

          const keyword =
            search.toLowerCase();

          return (

            mentor.name
              .toLowerCase()
              .includes(keyword) ||

            mentor.role
              .toLowerCase()
              .includes(keyword) ||

            mentor.company
              .toLowerCase()
              .includes(keyword) ||

            mentor.category
              .toLowerCase()
              .includes(keyword)

          );

        }
      );

    }, [search]);

  if (!open || !session)
    return null;

  return (

    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/60
        backdrop-blur-sm

        p-5
      "
    >

      <div
        className="
          flex
          max-h-[92vh]
          w-full
          max-w-7xl
          flex-col

          overflow-hidden

          rounded-[36px]

          bg-white
        "
      >

        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between

            bg-gradient-to-r
            from-violet-600
            via-purple-600
            to-indigo-600

            p-8

            text-white
          "
        >

          <div>

            <div
              className="
                mb-3

                inline-flex
                items-center
                gap-2

                rounded-full

                bg-white/20

                px-4
                py-2

                text-sm
              "
            >

              <ArrowRightLeft
                size={18}
              />

              Mentor Assignment

            </div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Reassign Mentor
            </h2>

            <p
              className="
                mt-3

                text-purple-100
              "
            >
              Assign another mentor for this
              booked session without losing
              booking history.
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-full

              bg-white/20

              transition

              hover:bg-white/30
            "
          >
            <X size={20}/>
          </button>

        </div>

        {/* Body */}

        <div
          className="
            flex-1

            overflow-y-auto

            space-y-8

            p-8
          "
        >

          {/* Session Summary */}

          <div
            className="
              rounded-[32px]

              border
              border-purple-100

              bg-purple-50

              p-6
            "
          >

            <h3
              className="
                mb-6

                text-xl
                font-bold
              "
            >
              Current Session
            </h3>

            <div
              className="
                grid
                gap-6

                lg:grid-cols-2
              "
            >

              {/* Current Mentor */}

              <div
                className="
                  flex
                  items-center
                  gap-5

                  rounded-3xl

                  bg-white

                  p-5
                "
              >

                <img
                  src={session.mentorImage}
                  alt={session.mentorName}
                  className="
                    h-20
                    w-20

                    rounded-3xl

                    object-cover
                  "
                />

                <div>

                  <h4
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {session.mentorName}
                  </h4>

                  <p
                    className="
                      mt-1

                      text-slate-500
                    "
                  >
                    {session.mentorRole}
                  </p>

                  <div
                    className="
                      mt-2

                      flex
                      items-center
                      gap-2

                      text-sm
                      text-slate-500
                    "
                  >
                    <Building2
                      size={15}
                    />

                    {session.mentorCompany}

                  </div>

                </div>

              </div>

              {/* Student */}

              <div
                className="
                  flex
                  items-center
                  gap-5

                  rounded-3xl

                  bg-white

                  p-5
                "
              >

                <img
                  src={session.studentImage}
                  alt={session.studentName}
                  className="
                    h-20
                    w-20

                    rounded-3xl

                    object-cover
                  "
                />

                <div>

                  <h4
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {session.studentName}
                  </h4>

                  <p
                    className="
                      mt-1

                      text-slate-500
                    "
                  >
                    {session.studentEmail}
                  </p>

                </div>

              </div>

            </div>

            {/* Session Information */}

            <div
              className="
                mt-6

                grid
                gap-5

                md:grid-cols-4
              "
            >

              <InfoCard
                icon={
                  <CalendarDays size={18}/>
                }
                title="Date"
                value={session.date}
              />

              <InfoCard
                icon={
                  <Clock3 size={18}/>
                }
                title="Time"
                value={session.time}
              />

              <InfoCard
                icon={
                  <GraduationCap size={18}/>
                }
                title="Program"
                value={session.programTitle}
              />

              <InfoCard
                icon={
                  <User size={18}/>
                }
                title="Student"
                value={session.studentName}
              />

            </div>

          </div>
                    {/* Mentor Selection */}

          <div
            className="
              rounded-[32px]

              border
              border-slate-200

              bg-white

              p-6
            "
          >

            <div
              className="
                mb-6

                flex
                flex-col
                gap-5

                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >

              <div>

                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Available Mentors
                </h3>

                <p
                  className="
                    mt-1

                    text-sm
                    text-slate-500
                  "
                >
                  Select another mentor to
                  reassign this session.
                </p>

              </div>

              {/* Search */}

              <div
                className="
                  w-full
                  lg:w-[340px]
                "
              >

                <input
                  type="text"
                  value={search}
                  onChange={(e)=>
                    setSearch(
                      e.target.value
                    )
                  }
                  placeholder="Search mentor..."
                  className="
                    h-12
                    w-full

                    rounded-2xl

                    border
                    border-slate-200

                    px-4

                    outline-none

                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-100
                  "
                />

              </div>

            </div>

            {/* Mentor Grid */}

            <div
              className="
                grid
                gap-6

                md:grid-cols-2
                xl:grid-cols-3
              "
            >

              {filteredMentors.map(
                (mentor) => {

                  const current =
                    mentor.id ===
                    session.mentorId;

                  const selected =
                    selectedMentor?.id ===
                    mentor.id;

                  return (

                    <div
                      key={mentor.id}
                      className={`
                        rounded-[28px]

                        border-2

                        bg-white

                        p-5

                        transition-all

                        ${
                          selected
                            ? "border-purple-600 shadow-xl"
                            : "border-slate-200 hover:border-purple-300 hover:shadow-lg"
                        }
                      `}
                    >

                      {/* Image */}

                      <div
                        className="
                          relative
                        "
                      >

                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="
                            h-24
                            w-24

                            rounded-3xl

                            object-cover
                          "
                        />

                        {current && (

                          <span
                            className="
                              absolute
                              -right-2
                              -top-2

                              rounded-full

                              bg-blue-600

                              px-3
                              py-1

                              text-xs
                              font-semibold

                              text-white
                            "
                          >
                            Current
                          </span>

                        )}

                      </div>

                      {/* Name */}

                      <h4
                        className="
                          mt-5

                          text-xl
                          font-bold
                        "
                      >
                        {mentor.name}
                      </h4>

                      <p
                        className="
                          mt-1

                          text-slate-500
                        "
                      >
                        {mentor.role}
                      </p>

                      <div
                        className="
                          mt-2

                          flex
                          items-center
                          gap-2

                          text-sm
                          text-slate-500
                        "
                      >
                        <Building2
                          size={15}
                        />

                        {mentor.company}

                      </div>

                      {/* Stats */}

                      <div
                        className="
                          mt-5

                          grid
                          grid-cols-2

                          gap-3
                        "
                      >

                        <div
                          className="
                            rounded-2xl

                            bg-slate-50

                            p-3
                          "
                        >

                          <p
                            className="
                              text-xs
                              text-slate-500
                            "
                          >
                            Rating
                          </p>

                          <h5
                            className="
                              mt-1

                              font-bold
                            "
                          >
                            ⭐ {mentor.rating}
                          </h5>

                        </div>

                        <div
                          className="
                            rounded-2xl

                            bg-slate-50

                            p-3
                          "
                        >

                          <p
                            className="
                              text-xs
                              text-slate-500
                            "
                          >
                            Experience
                          </p>

                          <h5
                            className="
                              mt-1

                              font-bold
                            "
                          >
                            {mentor.experience}
                          </h5>

                        </div>

                      </div>

                      {/* Skills */}

                      <div
                        className="
                          mt-5

                          flex
                          flex-wrap

                          gap-2
                        "
                      >

                        {mentor.skills
                          ?.slice(0,4)
                          .map((skill)=>(
                            <span
                              key={skill}
                              className="
                                rounded-full

                                bg-purple-100

                                px-3
                                py-1

                                text-xs
                                font-medium

                                text-purple-700
                              "
                            >
                              {skill}
                            </span>
                        ))}

                      </div>

                      {/* Select */}

                      <button
                        disabled={current}
                        onClick={()=>
                          setSelectedMentor(
                            mentor as Mentor
                          )
                        }
                        className={`
                          mt-6

                          w-full

                          rounded-2xl

                          py-3

                          font-semibold

                          transition-all

                          ${
                            current
                              ? "cursor-not-allowed bg-slate-200 text-slate-400"
                              : selected
                              ? "bg-purple-600 text-white"
                              : "border border-slate-300 hover:bg-purple-50"
                          }
                        `}
                      >
                        {current
                          ? "Already Assigned"
                          : selected
                          ? "Selected"
                          : "Select Mentor"}
                      </button>

                    </div>

                  );

                }
              )}

            </div>

          </div>
                    {/* Assignment Details */}

          <div
            className="
              grid
              gap-6

              xl:grid-cols-2
            "
          >

            {/* Left */}

            <div
              className="
                rounded-[32px]

                border
                border-slate-200

                bg-white

                p-6
              "
            >

              <h3
                className="
                  mb-6

                  text-xl
                  font-bold
                "
              >
                Selected Mentor
              </h3>

              {selectedMentor ? (

                <div>

                  <div
                    className="
                      flex
                      items-center
                      gap-5

                      rounded-3xl

                      bg-purple-50

                      p-5
                    "
                  >

                    <img
                      src={
                        selectedMentor.image
                      }
                      alt={
                        selectedMentor.name
                      }
                      className="
                        h-24
                        w-24

                        rounded-3xl

                        object-cover
                      "
                    />

                    <div>

                      <h4
                        className="
                          text-2xl
                          font-bold
                        "
                      >
                        {
                          selectedMentor.name
                        }
                      </h4>

                      <p
                        className="
                          mt-1

                          text-slate-500
                        "
                      >
                        {
                          selectedMentor.role
                        }
                      </p>

                      <div
                        className="
                          mt-2

                          flex
                          items-center
                          gap-2

                          text-sm
                          text-slate-500
                        "
                      >

                        <Building2
                          size={15}
                        />

                        {
                          selectedMentor.company
                        }

                      </div>

                    </div>

                  </div>

                  {/* Stats */}

                  <div
                    className="
                      mt-6

                      grid
                      grid-cols-3

                      gap-4
                    "
                  >

                    <SummaryCard
                      title="Rating"
                      value={`⭐ ${selectedMentor.rating}`}
                    />

                    <SummaryCard
                      title="Experience"
                      value={
                        selectedMentor.experience
                      }
                    />

                    <SummaryCard
                      title="Category"
                      value={
                        selectedMentor.category
                      }
                    />

                  </div>

                </div>

              ) : (

                <div
                  className="
                    flex
                    h-[260px]

                    items-center
                    justify-center

                    rounded-3xl

                    border-2
                    border-dashed
                    border-slate-300

                    text-center
                  "
                >

                  <div>

                    <ArrowRightLeft
                      size={48}
                      className="
                        mx-auto

                        text-slate-400
                      "
                    />

                    <h4
                      className="
                        mt-5

                        text-xl
                        font-semibold
                      "
                    >
                      Select a Mentor
                    </h4>

                    <p
                      className="
                        mt-2

                        text-slate-500
                      "
                    >
                      Choose any mentor from
                      the list to continue.
                    </p>

                  </div>

                </div>

              )}

            </div>

            {/* Right */}

            <div
              className="
                rounded-[32px]

                border
                border-slate-200

                bg-white

                p-6
              "
            >

              <h3
                className="
                  mb-6

                  text-xl
                  font-bold
                "
              >
                Assignment Details
              </h3>

              {/* Reason */}

              <div>

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Reassignment Reason
                </label>

                <select
                  className="
                    h-12
                    w-full

                    rounded-2xl

                    border
                    border-slate-200

                    px-4

                    outline-none

                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-100
                  "
                >

                  <option>
                    Mentor Unavailable
                  </option>

                  <option>
                    Student Request
                  </option>

                  <option>
                    Schedule Conflict
                  </option>

                  <option>
                    Expertise Match
                  </option>

                  <option>
                    Admin Decision
                  </option>

                </select>

              </div>

              {/* Notes */}

              <div className="mt-6">

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Admin Notes
                </label>

                <textarea
                  rows={8}
                  placeholder="
Reason for mentor reassignment...

Student preferences
Schedule updates
Availability issues
Internal notes..."
                  className="
                    w-full

                    resize-none

                    rounded-2xl

                    border
                    border-slate-200

                    p-4

                    outline-none

                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-100
                  "
                />

              </div>

              {/* Assignment Summary */}

              <div
                className="
                  mt-6

                  rounded-3xl

                  bg-purple-50

                  p-5
                "
              >

                <h4
                  className="
                    font-semibold

                    text-purple-700
                  "
                >
                  Assignment Summary
                </h4>

                <div
                  className="
                    mt-5

                    space-y-4
                  "
                >

                  <SummaryRow
                    label="Current Mentor"
                    value={
                      session.mentorName
                    }
                  />

                  <SummaryRow
                    label="New Mentor"
                    value={
                      selectedMentor
                        ?.name ??
                      "Not Selected"
                    }
                  />

                  <SummaryRow
                    label="Student"
                    value={
                      session.studentName
                    }
                  />

                  <SummaryRow
                    label="Program"
                    value={
                      session.programTitle
                    }
                  />

                  <SummaryRow
                    label="Schedule"
                    value={`${session.date} • ${session.time}`}
                  />

                </div>

              </div>

            </div>

          </div>
                    {/* Footer */}

          <div
            className="
              sticky
              bottom-0

              border-t
              border-slate-200

              bg-white

              pt-6
            "
          >
            <div
              className="
                flex
                flex-col-reverse

                gap-4

                sm:flex-row
                sm:justify-end
              "
            >

              <button
                onClick={onClose}
                className="
                  rounded-2xl

                  border
                  border-slate-300

                  px-8
                  py-3.5

                  font-semibold

                  transition

                  hover:bg-slate-100
                "
              >
                Cancel
              </button>

              <button
                onClick={() => {

                  if (!selectedMentor) {

                    alert(
                      "Please select a mentor first."
                    );

                    return;

                  }

                  onAssign(
                    session.id,
                    selectedMentor
                  );

                  onClose();

                }}
                className="
                  rounded-2xl

                  bg-gradient-to-r
                  from-violet-600
                  via-purple-600
                  to-indigo-600

                  px-10
                  py-3.5

                  font-semibold

                  text-white

                  shadow-lg

                  transition-all

                  hover:scale-[1.02]
                  hover:shadow-xl
                "
              >
                Assign Mentor
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

/* -------------------------- */
/* Helper Components */
/* -------------------------- */

function InfoCard({
  icon,
  title,
  value,
}:{
  icon: React.ReactNode;
  title:string;
  value:string;
}){

  return(

    <div
      className="
        rounded-2xl

        bg-white

        p-5
      "
    >

      <div className="text-purple-600">
        {icon}
      </div>

      <p
        className="
          mt-3

          text-sm
          text-slate-500
        "
      >
        {title}
      </p>

      <h4
        className="
          mt-1

          font-semibold
        "
      >
        {value}
      </h4>

    </div>

  );

}

function SummaryCard({
  title,
  value,
}:{
  title:string;
  value:string;
}){

  return(

    <div
      className="
        rounded-2xl

        bg-slate-50

        p-5
      "
    >

      <p
        className="
          text-sm
          text-slate-500
        "
      >
        {title}
      </p>

      <h4
        className="
          mt-2

          text-lg
          font-bold
        "
      >
        {value}
      </h4>

    </div>

  );

}

function SummaryRow({
  label,
  value,
}:{
  label:string;
  value:string;
}){

  return(

    <div
      className="
        flex
        items-center
        justify-between

        rounded-xl

        bg-white

        p-4
      "
    >

      <span
        className="
          text-sm
          text-slate-500
        "
      >
        {label}
      </span>

      <span
        className="
          text-right

          font-semibold
        "
      >
        {value}
      </span>

    </div>

  );

}

export default AssignMentorDialog;