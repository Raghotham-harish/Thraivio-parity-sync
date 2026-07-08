import "swiper/css";
import "swiper/css/pagination";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Pagination,
  Autoplay,
} from "swiper/modules";

import {
  ArrowRight,
  Clock3,
  Users,
  Star,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

interface MentorProgramsProps {
  mentor: {
    bookingLink: string;

    programs: {
      title: string;
      duration: string;
      students: number;
      price: number;
      level: string;
    }[];
  };
}

const MentorPrograms = ({
  mentor,
}: MentorProgramsProps) => {
  const navigate = useNavigate();
const { id } = useParams();
  return (
    <section className="pb-20">

      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

          {/* Heading */}

          <div className="text-center">

            <span
              className="
inline-block
bg-blue-100
text-blue-700
px-4
py-1
rounded-full
text-sm
font-medium
"
            >
              Premium Programs
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Structured Coaching Programs
            </h2>

            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              Join mentor-led learning experiences designed
              to accelerate your career and help you achieve
              measurable results faster.
            </p>

          </div>

          {/* Slider */}

          <Swiper
  modules={[Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3500,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  }}
  grabCursor={true}
  simulateTouch={true}
  allowTouchMove={true}
  touchStartPreventDefault={false}
  preventClicks={false}
  preventClicksPropagation={false}
  resistanceRatio={0.85}
  loop={true}
  spaceBetween={24}
  slidesPerView={1}
  breakpoints={{
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2.2,
    },
    1280: {
      slidesPerView: 2.7,
    },
  }}
  className="mt-10 pb-14"
>

            {mentor.programs.map((program) => (

              <SwiperSlide key={program.title}>

                <div
                  className="
                    group
                  bg-white
                    rounded-3xl
                    border
                  border-slate-200
                    overflow-hidden
                    hover:-translate-y-1
                    hover:shadow-lg
                    transition-all
                    duration-300
                  "
                >

                  {/* Banner */}

                  <div className="relative h-48">

                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
                      alt={program.title}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    <span
                      className="
                        absolute
                        top-4
                        left-4
                        bg-white/20
                        backdrop-blur
                        px-3
                        py-1
                        rounded-full
                        text-white
                        text-xs
                        font-semibold
                      "
                    >
                      {program.level}
                    </span>

                    <span
                      className="
                        absolute
                        top-4
                        right-4
                        bg-blue-600
                        text-white
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                      "
                    >
                      🔥 Best Seller
                    </span>

                    <div className="absolute bottom-5 left-5 text-white">

                      <p className="text-xs uppercase tracking-wider">
                        Career Accelerator
                      </p>

                      <h3 className="text-2xl font-bold mt-1">
                        {program.title}
                      </h3>

                    </div>

                  </div>

                  {/* Content */}

                  <div className="p-6">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-2 text-slate-600">

                        <Clock3 size={18} />

                        <span>
                          {program.duration}
                        </span>

                      </div>

                      <div className="flex items-center gap-2 text-slate-600">

                        <Users size={18} />

                        <span>
                          {program.students}+ Students
                        </span>

                      </div>

                    </div>

                    <div className="flex items-center gap-1 mt-4">

                      <Star
                        size={16}
                        fill="currentColor"
                        className="text-yellow-500"
                      />

                      <Star
                        size={16}
                        fill="currentColor"
                        className="text-yellow-500"
                      />

                      <Star
                        size={16}
                        fill="currentColor"
                        className="text-yellow-500"
                      />

                      <Star
                        size={16}
                        fill="currentColor"
                        className="text-yellow-500"
                      />

                      <Star
                        size={16}
                        fill="currentColor"
                        className="text-yellow-500"
                      />

                      <span className="ml-2 text-sm text-slate-500">
                        4.9 (120 Reviews)
                      </span>

                    </div>

                    <div className="mt-6">

                      <p className="text-sm text-slate-500">
                        Program Fee
                      </p>

                      <h2 className="text-4xl font-bold text-blue-600 mt-1">
                        ${program.price}
                      </h2>

                      <p className="text-sm text-blue-600 mt-1">
                        Flexible payment options available
                      </p>

                    </div>

                    <div className="mt-6 space-y-2 text-sm text-slate-600">

                      <p>✅ Weekly Live Sessions</p>

                      <p>✅ Resume Review</p>

                      <p>✅ Mock Interviews</p>

                      <p>✅ Priority Community Access</p>

                    </div>
                                        <div
                      className="
                        mt-6
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        bg-amber-50
                        p-4
                      "
                    >

                      <div>

                        <p className="text-sm text-slate-500">
                          Seats Remaining
                        </p>

                        <p className="font-semibold text-amber-700">
                          Only 8 Spots Left
                        </p>

                      </div>

                      <span
                        className="
                          bg-amber-100
                          text-amber-800
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                        "
                      >
                        Limited
                      </span>

                    </div>

                    {/* Buttons */}

                    <div className="grid grid-cols-2 gap-3 mt-6">

                      <button
                        className="
                          border
                          border-blue-600
                          text-blue-600
                          py-3
                          rounded-xl
                          font-medium
                          hover:bg-blue-600
                          hover:text-white
                          hover:shadow-md
                          transition
                        "
                      >
                        Preview Program
                      </button>

                      <a
                        href={mentor.bookingLink}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          bg-blue-600
                          text-white
                          rounded-xl
                          py-3
                          font-medium
                          flex
                          items-center
                          justify-center
                          gap-2
                          hover:bg-blue-700
                          hover:shadow-lg
                          transition
                        "
                      >
                        Enroll Today

                        <ArrowRight size={18} />

                      </a>

                    </div>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

          {/* View All Programs */}

<div className="mt-14 text-center">

  <h3 className="text-3xl font-bold text-slate-900">
    Want to Explore More Programs?
  </h3>

  <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
    Browse all coaching programs offered by this mentor in one
    dedicated place. Compare options and find the perfect
    learning path for your goals.
  </p>

  <button
    onClick={() => navigate(`/mentor/${id}/programs`)}
    className="
      mt-8
      inline-flex
      items-center
      gap-2
      bg-blue-600
      text-white
      px-8
      py-4
      rounded-xl
      font-semibold
      hover:bg-blue-700
      transition-all
      duration-300
      hover:shadow-lg
    "
  >
    View All Programs

    <ArrowRight size={18} />

  </button>

</div>

        </div>

      </div>

    </section>
  );
};

export default MentorPrograms;