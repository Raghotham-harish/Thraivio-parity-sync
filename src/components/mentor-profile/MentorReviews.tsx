import { useState } from "react";

import {
  Star,
  ThumbsUp,
  BadgeCheck,
  Quote,
  TrendingUp,
} from "lucide-react";

interface MentorReviewsProps {
  mentor: {
    rating: number;
    reviewsCount: number;

    testimonials: {
      name: string;
      role: string;
      company: string;
      text: string;
      rating: number;
    }[];
  };
}

const MentorReviews = ({
  mentor,
}: MentorReviewsProps) => {

  const [expandedReview, setExpandedReview] =
    useState<number | null>(null);

  return (

    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

          {/* Header */}

          <div className="flex flex-col lg:flex-row justify-between gap-8">

            <div className="max-w-2xl">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-blue-100
                  text-blue-700
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                ⭐ Trusted by Professionals
              </span>

              <h2 className="text-4xl font-bold mt-5">

                Success Stories &
                Real Career Transformations

              </h2>

              <p className="text-slate-500 mt-4 leading-7">

                Hear directly from professionals who
                secured promotions, switched careers,
                cracked top interviews and accelerated
                their growth with personalized mentorship.

              </p>

            </div>

            {/* Rating Dashboard */}

            <div
              className="
                w-full
                lg:w-[360px]
                rounded-3xl
                bg-gradient-to-br
                from-blue-600
via-indigo-600
to-slate-900
                p-7
                text-white
                shadow-xl
              "
            >

              <p className="text-blue-100">

                Overall Rating

              </p>

              <div className="flex items-center gap-4 mt-3">

                <h2 className="text-6xl font-bold">

                  {mentor.rating}

                </h2>

                <div>

                  <div className="flex">

                    {Array.from({
                      length: 5,
                    }).map((_, i) => (

                      <Star
                        key={i}
                        size={18}
                        fill="white"
                        color="white"
                      />

                    ))}

                  </div>

                  <p className="text-blue-100 mt-2">

                    Based on {mentor.reviewsCount}+ reviews

                  </p>

                </div>

              </div>

              <div className="mt-6 space-y-3">

                <div className="flex justify-between">

                  <span>Career Growth</span>

                  <span>98%</span>

                </div>

                <div className="h-2 rounded-full bg-white/20">

                  <div className="w-[98%] h-full rounded-full bg-white"></div>

                </div>

                <div className="flex justify-between">

                  <span>Interview Success</span>

                  <span>95%</span>

                </div>

                <div className="h-2 rounded-full bg-white/20">

                  <div className="w-[95%] h-full rounded-full bg-white"></div>

                </div>

                <div className="flex justify-between">

                  <span>Mentorship Quality</span>

                  <span>99%</span>

                </div>

                <div className="h-2 rounded-full bg-white/20">

                  <div className="w-[99%] h-full rounded-full bg-white"></div>

                </div>

              </div>

            </div>

          </div>

          {/* Quick Stats */}

          <div className="grid md:grid-cols-3 gap-5 mt-10">

            <div className="rounded-2xl bg-blue-50 p-5">

              <p className="text-slate-500 text-sm">

                Success Rate

              </p>

              <h3 className="text-3xl font-bold text-blue-600 mt-2">

                96%

              </h3>

            </div>

            <div className="rounded-2xl bg-slate-100 p-5">

              <p className="text-slate-500 text-sm">

                Salary Growth

              </p>

              <h3 className="text-3xl font-bold text-slate-700 mt-2">

                +42%

              </h3>

            </div>

            <div className="rounded-2xl bg-blue-50 p-5">

              <p className="text-slate-500 text-sm">

                Promotions

              </p>

              <h3 className="text-3xl font-bold text-blue-600 mt-2">

                500+

              </h3>

            </div>

          </div>

          {/* Reviews Grid */}
          {/* Rating Breakdown */}

<div className="mt-14">

  <div className="flex items-center justify-between flex-wrap gap-4">

    <div>

      <h3 className="text-2xl font-bold">
        Community Feedback
      </h3>

      <p className="text-slate-500 mt-2">
        Thousands of professionals trust this mentor for
        career guidance and interview success.
      </p>

    </div>

    <div
      className="
        bg-blue-50
        px-5
        py-3
        rounded-2xl
        flex
        items-center
        gap-3
      "
    >

      <TrendingUp
        size={22}
        className="text-blue-600"
      />

      <div>

        <p className="font-semibold">
          97% Recommendation Rate
        </p>

        <p className="text-sm text-slate-500">
          Based on verified learners
        </p>

      </div>

    </div>

  </div>

  {/* Rating Bars */}

  <div className="grid lg:grid-cols-2 gap-10 mt-8">

    <div className="space-y-5">

      {[
        {
          star: "5",
          value: "92%",
          width: "w-[92%]",
        },
        {
          star: "4",
          value: "6%",
          width: "w-[6%]",
        },
        {
          star: "3",
          value: "1%",
          width: "w-[1%]",
        },
        {
          star: "2",
          value: "0.5%",
          width: "w-[1%]",
        },
        {
          star: "1",
          value: "0.5%",
          width: "w-[1%]",
        },
      ].map((item) => (

        <div
          key={item.star}
          className="flex items-center gap-4"
        >

          <div className="w-12 font-semibold">

            {item.star} ★

          </div>

          <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">

            <div
              className={`h-full bg-gradient-to-r
from-blue-500
to-indigo-600 ${item.width}`}
            />

          </div>

          <div className="w-14 text-sm text-slate-500">

            {item.value}

          </div>

        </div>

      ))}

    </div>

    {/* Trust Card */}

    <div
      className="
        rounded-3xl
        border
        bg-gradient-to-br
        from-slate-50
        to-blue-50
        p-7
      "
    >

      <div className="flex items-center gap-3">

        <BadgeCheck
          size={30}
          className="text-blue-600"
        />

        <div>

          <h3 className="font-bold text-xl">
            Verified Mentor Reviews
          </h3>

          <p className="text-slate-500 text-sm mt-1">
            Reviews collected from real mentorship
            sessions and career coaching programs.
          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="bg-white rounded-2xl p-4">

          <p className="text-slate-500 text-sm">
            Happy Learners
          </p>

          <h3 className="text-3xl font-bold mt-2 text-blue-600">
            2,500+
          </h3>

        </div>

        <div className="bg-white rounded-2xl p-4">

          <p className="text-slate-500 text-sm">
            Interviews Cracked
          </p>

          <h3 className="text-3xl font-bold mt-2 text-blue-600">
            1,200+
          </h3>

        </div>

        <div className="bg-white rounded-2xl p-4">

          <p className="text-slate-500 text-sm">
            Avg Response
          </p>

          <h3 className="text-3xl font-bold mt-2 text-blue-600">
            2 hrs
          </h3>

        </div>

        <div className="bg-white rounded-2xl p-4">

          <p className="text-slate-500 text-sm">
            Repeat Learners
          </p>

          <h3 className="text-3xl font-bold mt-2 text-blue-600">
            88%
          </h3>

        </div>

      </div>

    </div>

  </div>

</div>

{/* Reviews Grid */}

<div className="grid lg:grid-cols-2 gap-7 mt-14">
  {mentor.testimonials?.map((review, index) => (

  <div
    key={index}
    className="
      group
      rounded-3xl
      border
      bg-white
      p-7
      hover:shadow-lg
hover:-translate-y-1
      transition-all
      duration-300
    "
  >

    {/* Top */}

    <div className="flex justify-between items-start">

      <div className="flex gap-4">

        {/* Avatar */}

        <div
          className="
            h-14
            w-14
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-indigo-600
            text-white
            font-bold
            flex
            items-center
            justify-center
            text-lg
            shrink-0
          "
        >
          {review.name.charAt(0)}
        </div>

        {/* Info */}

        <div>

          <div className="flex items-center gap-2 flex-wrap">

            <h3 className="font-bold">

              {review.name}

            </h3>

            <span
              className="
                bg-green-100
                text-green-700
                px-2
                py-1
                rounded-full
                text-xs
                font-medium
              "
            >
              ✔ Verified Learner
            </span>

          </div>

          <p className="text-sm text-slate-500 mt-1">

            {review.role}

          </p>

          <p className="text-sm text-blue-600">

            {review.company}

          </p>

          <p className="text-xs text-slate-400 mt-2">

            Reviewed 2 weeks ago

          </p>

        </div>

      </div>

      {/* Rating */}

      <div
        className="
         bg-blue-50
          px-3
          py-2
          rounded-xl
          text-center
        "
      >

        <div className="font-bold text-blue-600">

          ⭐ {review.rating}

        </div>

      </div>

    </div>

    {/* Quote */}

    <div className="mt-6">

      <Quote
        size={28}
        className="text-slate-300"
      />

    </div>

    {/* Review */}

    <p
      className="
        mt-4
        text-slate-700
        leading-8
      "
    >

      {expandedReview === index
        ? review.text
        : `${review.text.slice(0, 180)}...`}

    </p>

    {/* Read More */}

    {review.text.length > 180 && (

      <button
        onClick={() =>
          setExpandedReview(

            expandedReview === index
              ? null
              : index

          )
        }
        className="
          mt-3
          text-blue-600
          text-sm
          font-semibold
          hover:underline
        "
      >

        {expandedReview === index

          ? "Read Less"

          : "Read More"}

      </button>

    )}

    {/* Footer */}

    <div
      className="
        mt-7
        flex
        justify-between
        items-center
        flex-wrap
        gap-3
      "
    >

      <div className="flex gap-2 flex-wrap">

        <span
          className="
            bg-blue-50
            text-blue-700
            px-3
            py-1
            rounded-full
            text-xs
          "
        >
          Career Growth
        </span>

        <span
          className="
            bg-slate-100
text-slate-700
            px-3
            py-1
            rounded-full
            text-xs
          "
        >
          Interview Prep
        </span>

      </div>

      <button
        className="
          flex
          items-center
          gap-2
          text-slate-500
          hover:text-blue-600
          transition
        "
      >

        <ThumbsUp size={16} />

        Helpful (24)

      </button>

    </div>

  </div>

))}
</div>
{/* Bottom Trust Banner */}

<div
  className="
    mt-16
    rounded-[32px]
    overflow-hidden
    bg-gradient-to-r
    from-slate-900
    via-blue-900
    to-indigo-900
    p-10
    text-white
    relative
  "
>
  <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 z-10"></div>

  {/* Background Blur */}

  <div className="absolute top-0 right-0 h-64 w-64 bg-white/5 rounded-full blur-3xl"></div>

  <div className="relative z-10">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* Left */}

      <div>

        <span
          className="
            inline-flex
            items-center
            gap-2
            bg-white/10
            px-4
            py-2
            rounded-full
            text-sm
          "
        >
          ⭐ Trusted Mentorship Platform
        </span>

        <h2 className="text-4xl font-bold mt-6">

          Ready To Become The Next Success Story?

        </h2>

        <p className="text-slate-300 mt-5 leading-8">

          Thousands of professionals have already accelerated
          their careers through personalized mentorship,
          interview preparation, leadership coaching and
          strategic career planning.

        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          <span
            className="
              bg-white/10
              px-4
              py-2
              rounded-xl
            "
          >
            🚀 Career Switch
          </span>

          <span
            className="
              bg-white/10
              px-4
              py-2
              rounded-xl
            "
          >
            💰 Salary Growth
          </span>

          <span
            className="
              bg-white/10
              px-4
              py-2
              rounded-xl
            "
          >
            🎯 Interview Success
          </span>

        </div>

      </div>

      {/* Right */}

      <div className="grid grid-cols-2 gap-5">

        <div
          className="
            rounded-2xl
            bg-white/10
            backdrop-blur
            p-6
          "
        >

          <h3 className="text-4xl font-bold">

            98%

          </h3>

          <p className="text-slate-300 mt-2">

            Would Recommend
            This Mentor

          </p>

        </div>

        <div
          className="
            rounded-2xl
            bg-white/10
            backdrop-blur
            p-6
          "
        >

          <h3 className="text-4xl font-bold">

            2500+

          </h3>

          <p className="text-slate-300 mt-2">

            Career
            Transformations

          </p>

        </div>

        <div
          className="
            rounded-2xl
            bg-white/10
            backdrop-blur
            p-6
          "
        >

          <h3 className="text-4xl font-bold">

            4.9★

          </h3>

          <p className="text-slate-300 mt-2">

            Average
            Satisfaction

          </p>

        </div>

        <div
          className="
            rounded-2xl
            bg-white/10
            backdrop-blur
            p-6
          "
        >

          <h3 className="text-4xl font-bold">

            24h

          </h3>

          <p className="text-slate-300 mt-2">

            Average
            Response Time

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

export default MentorReviews;