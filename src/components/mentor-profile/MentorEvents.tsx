import {
  CalendarDays,
  Users,
  ArrowRight,
  Clock3,
  MapPin,
  Ticket,
} from "lucide-react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

interface MentorEventsProps {
  mentor: {
    events: {
  title: string;
  date: string;
  month: string;
  day: string;
  weekday: string;
  time: string;
  type: string;
  mode: string;
  registered: number;
  seatsLeft: number;
}[];
  };
}

const MentorEvents = ({
  mentor,
}: MentorEventsProps) => {

  const navigate = useNavigate();

const { id } = useParams();

const featuredEvent = mentor.events?.[0];
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

          {/* Header */}
          <div className="text-center">

  <span
    className="
inline-flex
items-center
gap-2
bg-blue-100
text-blue-700
px-5
py-2
rounded-full
text-sm
font-semibold
"
  >
    🎟 Live Experiences
  </span>

  <h2 className="text-5xl font-bold mt-5">

    Upcoming Events

  </h2>

  <p className="text-slate-500 mt-5 max-w-3xl mx-auto">

    Attend live workshops, webinars and exclusive
    mentoring sessions designed to accelerate your
    learning journey and connect you with industry experts.

  </p>

</div>

         {/* Featured Event */}

<div
  className="
   relative
    mt-12
    border
    rounded-3xl
    bg-gradient-to-br
    from-blue-900
    via-slate-900
    to-blue-900
    overflow-hidden
    p-8
  "
>
  <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>

  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

    {/* Left */}

    <div className="flex gap-6">

      {/* Calendar */}

      <div
        className="
          w-24
          rounded-3xl
          overflow-hidden
          bg-white
          shadow-lg
          shrink-0
        "
      >

        <div className="bg-blue-600 text-white text-center py-2 font-bold tracking-widest">

          {featuredEvent?.month}

        </div>

        <div className="py-5 text-center">

          <h2 className="text-4xl font-bold">

            {featuredEvent?.day}

          </h2>

          <p className="text-sm text-slate-500 mt-1">

            {featuredEvent?.weekday}

          </p>

        </div>

      </div>

      {/* Info */}

      <div>

        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">

          🔴 LIVE EVENT

        </span>

        <h2 className="text-4xl text-white font-bold mt-4">

          {featuredEvent?.title}

        </h2>

        <p className="text-slate-300 mt-4 max-w-2xl">

          Experience an immersive live mentoring
          session packed with practical insights,
          networking opportunities and actionable
          strategies.

        </p>

        <div className="flex flex-wrap gap-3 mt-6">

          <span className="bg-white/10 px-4 py-2 rounded-full text-white">

            👥 {featuredEvent?.registered}+ Registered

          </span>

          <span className="bg-white/10 px-4 py-2 rounded-full text-white">

            ⭐ 4.9 Rating

          </span>

          <span className="bg-white/10 px-4 py-2 rounded-full text-white">

            🎥 Recording Included

          </span>

        </div>

      </div>

    </div>

    {/* Right */}

    <div
      className="
        bg-white
        rounded-3xl
        p-6
        w-full
        max-w-sm
      "
    >

      <h3 className="text-xl font-bold">

        Event Details

      </h3>

      <div className="space-y-4 mt-6">

        <div className="flex items-center gap-3">

          <CalendarDays size={20} />

          <span>

            {featuredEvent?.date}

          </span>

        </div>

        <div className="flex items-center gap-3">

          <Clock3 size={20} />

          <span>

           {featuredEvent?.time}

          </span>

        </div>

        <div className="flex items-center gap-3">

          <MapPin size={20} />

          <span>

            {featuredEvent?.mode}

          </span>

        </div>

      </div>

      <button
        className="
          mt-8
          w-full
          bg-blue-600
hover:bg-blue-700
hover:shadow-lg
          text-white
          py-4
          rounded-2xl
          font-semibold
          flex
          items-center
          justify-center
          gap-2
          transition-all
        "
      >

        <Ticket size={18} />

        Reserve Seat

      </button>

    </div>

  </div>

</div>

          {/* Events Grid */}

<div className="grid lg:grid-cols-2 gap-6 mt-12">

  {mentor.events?.map((event) => (

    <div
      key={event.title}
      className="
        group
       bg-slate-50
rounded-3xl
border
border-slate-200
p-6
        hover:shadow-lg
hover:-translate-y-1
        transition-all
        duration-300
      "
    >

      <div className="flex gap-5">

        {/* Calendar */}

        <div
          className="
            w-24
            rounded-3xl
            overflow-hidden
            border
            shrink-0
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

          <div className="bg-white py-5 text-center">

            <h2 className="text-4xl font-bold">

              {event.day}

            </h2>

            <p className="text-xs text-slate-500 mt-1">

              {event.weekday}

            </p>

          </div>

        </div>

        {/* Content */}

        <div className="flex-1">

          <div className="flex justify-between gap-3">

            <div>

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

              <h3 className="text-2xl font-bold mt-3">

                {event.title}

              </h3>

            </div>

            <span
              className="
                bg-blue-50
                text-blue-700
                px-3
                py-1
                rounded-full
                h-fit
                text-xs
                font-semibold
              "
            >
              {event.type}
            </span>

          </div>

          {/* Info */}

          <div className="space-y-3 mt-5">

            <div className="flex items-center gap-3 text-slate-600">

              <CalendarDays size={18} />

              <span>

                {event.date}

              </span>

            </div>

            <div className="flex items-center gap-3 text-slate-600">

              <Clock3 size={18} />

              <span>

                {event.time}

              </span>

            </div>

            <div className="flex items-center gap-3 text-slate-600">

              <MapPin size={18} />

              <span>

                {event.mode}

              </span>

            </div>

            <div className="flex items-center gap-3 text-slate-600">

              <Users size={18} />

              <span>

                {event.registered}+ Registered

              </span>

            </div>

          </div>

          {/* Features */}

          <div className="flex flex-wrap gap-2 mt-6">

            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">

              🎤 Live Q&A

            </span>

            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">

              📹 Recording

            </span>

            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">

              📜 Certificate

            </span>

          </div>

          {/* Bottom */}

          <div className="flex items-center justify-between mt-8">

            <div>

              <p className="text-sm text-slate-500">

                Seats Left

              </p>

              <h4 className="font-bold text-red-600">

                Only {event.seatsLeft} Left
              </h4>

            </div>

            <button
              className="
                group
                bg-blue-600
              hover:bg-blue-700
                text-white
                px-6
                py-3
                rounded-2xl
                flex
                items-center
                gap-2
                font-semibold
                transition-all
              "
            >

              <Ticket size={18} />

              Register

              <ArrowRight
                size={18}
                className="
                  group-hover:translate-x-1
                  transition
                "
              />

            </button>

          </div>

        </div>

      </div>

    </div>

  ))}

</div>
         {/* View All Events */}

<div
  className="
    mt-14
    rounded-[32px]
    border
    bg-gradient-to-br
    from-blue-900
via-slate-900
to-blue-900
    overflow-hidden
    relative
    p-10
  "
>

  {/* Background Glow */}

  <div className="absolute -top-16 -right-16 w-60 h-60 bg-blue-500/20 blur-3xl rounded-full" />

  <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-500/20 blur-3xl rounded-full" />

  <div className="relative z-10">

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

      {/* Left */}

      <div>

        <span
          className="
            inline-flex
            items-center
            gap-2
            bg-white/10
            text-white
            px-4
            py-2
            rounded-full
            text-sm
          "
        >
          📅 Event Calendar
        </span>

        <h2 className="text-4xl font-bold text-white mt-5">

          Explore Every Upcoming Event

        </h2>

        <p className="text-slate-300 mt-5 max-w-2xl leading-8">

          Discover workshops, webinars, AMA sessions,
          bootcamps and networking events designed to
          accelerate your career and connect you directly
          with industry mentors.

        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          <span className="bg-white/10 text-white px-4 py-2 rounded-xl">

            🎟 50+ Events

          </span>

          <span className="bg-white/10 text-white px-4 py-2 rounded-xl">

            🌎 Online & Offline

          </span>

          <span className="bg-white/10 text-white px-4 py-2 rounded-xl">

            ⭐ Top Rated

          </span>

        </div>

      </div>

      {/* Right */}

      <div className="flex flex-col gap-4 w-full lg:w-auto">

        <button
          onClick={() =>
            navigate(`/mentor/${id}/events`)
          }
          className="
            bg-white
            text-slate-900
            px-8
            py-4
            rounded-2xl
            font-bold
            flex
            items-center
            justify-center
            gap-2
            hover:shadow-lg
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >

          View All Events

          <ArrowRight size={18} />

        </button>

        <div
          className="
            rounded-2xl
            bg-white/10
              border
            border-white/20
            backdrop-blur
            p-5
            text-white
          "
        >

          <p className="text-sm opacity-80">

            Next Live Session

          </p>

          <h3 className="text-2xl font-bold mt-2">

            {featuredEvent?.weekday} • {featuredEvent?.time}

          </h3>

          <p className="text-sm mt-2 opacity-80">

            Only {featuredEvent?.seatsLeft} seats remaining.

          </p>

        </div>

      </div>

    </div>

  </div>

</div>
        </div>

      </div>
    </section>
  );
};

export default MentorEvents;