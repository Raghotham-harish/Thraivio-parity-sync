import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  Ticket,
  Users,
} from "lucide-react";

import { mentors } from "@/data/mentors";

const MentorEventsPage = () => {
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
          This mentor does not exist.
        </p>
      </div>
    );
  }

  if (mentor.events.length === 0) {
  return (
    <div className="py-32 text-center bg-white rounded-3xl border border-slate-200 max-w-3xl mx-auto mt-20">

      <div className="text-6xl mb-5">
       🎟
      </div>

      <h2 className="text-4xl font-bold">

        No Upcoming Events

      </h2>

      <p className="mt-4 text-slate-500">

        This mentor hasn't scheduled any
        live events yet.

      </p>

    </div>
  );
}

  return (
    <section className="py-16 bg-slate-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-4">

        {/* Back */}

        <Link
          to={`/mentor/${mentor.id}`}
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          <ArrowLeft size={18} />

          Back to Mentor
        </Link>

        {/* Heading */}

        <div className="mt-8 text-center">

          <span
            className="
              inline-block
         bg-blue-100
text-blue-700
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            🎟 Live Events
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-5">

            {mentor.name}'s Events

          </h1>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">

            Explore every upcoming workshop,
masterclass, AMA session and webinar
hosted by this mentor. Reserve your
seat before registrations close.

          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-10">

  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-blue-600">
      {mentor.events.length}
    </h3>
    <p className="text-slate-500">
      Upcoming Events
    </p>
  </div>

  <div className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-green-600">
      1200+
    </h3>
    <p className="text-slate-500">
      Total Attendees
    </p>
  </div>

  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-blue-600">
      4.9
    </h3>
    <p className="text-slate-500">
      Average Rating
    </p>
  </div>

</div>

        </div>

        {/* Events */}

        <div className="grid lg:grid-cols-2 gap-8 mt-14">

          {mentor.events.map((event, index) => (

            <div
              key={event.title}
              className="
                bg-white
border
border-slate-200
rounded-3xl
shadow-sm
hover:border-blue-200
                p-6
                
                hover:-translate-y-2
                hover:shadow-2xl
                duration-300
                transition-all
              "
            >

              <div className="flex gap-5">

                {/* Calendar */}

                <div
  className="
    w-24
    rounded-3xl
    overflow-hidden
    shadow-md
    border
    bg-white
    transition-all
  "
>

                  <div
  className="
    bg-blue-600
    text-white
    text-center
    py-2
    font-bold
    tracking-widest
  "
>
                    {event.month}
                  </div>

                  <div className="py-5 text-center bg-white">

                    <h2 className="text-4xl font-bold">

                      {event.day}

                    </h2>

                    <p className="text-xs text-slate-500">

                      {event.weekday}

                    </p>

                  </div>

                </div>

                {/* Right */}

                <div className="flex-1">

                  <span
                    className="
                      bg-red-100
                      text-red-600
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                    "
                  >
                    🔴 LIVE
                  </span>

                  <h2 className="text-2xl font-bold leading-snug mt-3">

                    {event.title}

                  </h2>

                  <div className="space-y-3 mt-5 bg-slate-50 rounded-2xl p-4">

                    <div className="flex items-center gap-2 text-slate-600">

                      <CalendarDays size={18} />

                      {event.date}

                    </div>

                    <div className="flex items-center gap-2 text-slate-600">

                      <Clock3 size={18} />

                      {event.time}

                    </div>

                    <div className="flex items-center gap-2 text-slate-600">

                      <MapPin size={18} />

                      {event.mode}

                    </div>

                    <div className="flex items-center gap-2 text-slate-600">

                      <Users size={18} />

                      {event.registered}+ Registered

                    </div>

                  </div>

                  <div className="flex flex-wrap gap-2 mt-5">

                    <span className="bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">

                      {event.type}

                    </span>

                    <span className="bg-orange-50 border border-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">

                      {event.mode}

                    </span>

                    <span className="bg-green-50 border border-green-100 text-green-700 px-3 py-1 rounded-full text-xs">

                      Recording Included

                    </span>

                    <span className="bg-purple-50 border border-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">

                      Certificate

                    </span>

                  </div>

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div className="bg-red-50 rounded-xl px-4 py-3">

                      <p className="text-sm text-slate-500">

                        Seats Left

                      </p>

                      <h4 className="font-bold text-red-600">

                        Only {event.seatsLeft} Left
                      </h4>

                    </div>

                    <button
                      className="
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        px-6
                        py-3
                        rounded-xl
                        flex
                        items-center
                        gap-2
                        font-semibold
                        transition-all
duration-300
hover:-translate-y-1
hover:shadow-lg
                      "
                    >

                      <Ticket size={18} />

                      Register Now

                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-16 border-t border-slate-200 pt-10 text-center">

  <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto mb-6"></div>

  <h3 className="text-3xl font-bold">
    Explore Every Upcoming Event
  </h3>

  <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
    Join live workshops, masterclasses, webinars and AMA sessions
    to gain practical insights, network with professionals, and
    accelerate your career growth through interactive learning.
  </p>

</div>

      </div>

    </section>
  );
};

export default MentorEventsPage;