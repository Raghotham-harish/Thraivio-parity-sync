import { useState } from "react";

import {
  PlayCircle,
  Video,
  Eye,
  ArrowRight,
  X,
} from "lucide-react";

interface MentorVideosProps {
  mentor: {
    videos: {
      title: string;
      thumbnail: string;
      url: string;
    }[];
  };
}

const isYoutubeUrl = (url: string) => {
  return (
    url.includes("youtube.com") ||
    url.includes("youtu.be")
  );
};

const getYoutubeEmbedUrl = (url: string) => {
  try {
    if (url.includes("youtu.be")) {
      const id = url.split("/").pop();
      return `https://www.youtube.com/embed/${id}`;
    }

    const videoId =
      new URL(url).searchParams.get("v");

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return url;
  }
};
const MentorVideos = ({
  mentor,
}: MentorVideosProps) => {

  const [selectedVideo, setSelectedVideo] =
    useState<string | null>(null);

  return (
    <section className="pb-20">

      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

          {/* Header */}

          <div>

            <span
              className="
inline-block
bg-blue-50
border
border-blue-200
text-blue-700
px-4
py-1
rounded-lg
text-sm
font-medium
"
            >
              Video Library
            </span>

            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mt-4">
              Mentor Videos & Insights
            </h2>

            <p className="text-slate-600 leading-7 mt-3 max-w-2xl">

              Watch mentoring sessions, interview strategies,
              career advice, success stories and practical
              lessons directly from your mentor.

            </p>

          </div>

                    {/* Featured Video */}

          {mentor.videos?.[0] && (

            <div
              onClick={() =>
                setSelectedVideo(
                  mentor.videos[0].url
                )
              }
              className="
                cursor-pointer
                block
                mt-10
                rounded-2xl
                overflow-hidden
                border
                hover:shadow-md
                transition
                group
              "
            >

              <div className="relative">

                <img
                  src={mentor.videos[0].thumbnail}
                  alt={mentor.videos[0].title}
                  className="
                    w-full
                    h-[420px]
                    object-cover
                    transition
                    duration-300
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                >

                  <div
                    className="
                      h-20
                      w-20
                      rounded-full
                      bg-white
                      shadow-md
                      flex
                      items-center
                      justify-center
                      transition
                    "
                  >

                    <PlayCircle
                      size={55}
                      className="text-blue-600"
                    />

                  </div>

                </div>

                <div
                  className="
                    absolute
                    bottom-8
                    left-8
                    text-white
                  "
                >

                  <span
                    className="
                      bg-blue-600
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      font-semibold
                    "
                  >
                    🎥 Featured Video
                  </span>

                  <h3 className="text-4xl font-bold mt-4 max-w-3xl">
                    {mentor.videos[0].title}
                  </h3>

                  <div className="flex flex-wrap gap-3 mt-5">

                    <span className="bg-white border border-slate-200  px-3 py-2 text-slate-700 rounded-lg text-sm">
                      👀 25K+ Views
                    </span>

                    <span className="bg-white border border-slate-200  px-3 py-2 text-slate-700 rounded-lg text-sm">
                      👍 98% Positive
                    </span>

                    <span className="bg-white border border-slate-200  px-3 py-2 text-slate-700 rounded-lg text-sm">
                      ⏱️ 18 Min
                    </span>

                  </div>

                </div>

              </div>

            </div>

          )}

                    <div className="flex flex-wrap gap-4 mt-8">

            <a
              href={
                mentor.videos?.[0]?.url &&
                isYoutubeUrl(
                  mentor.videos[0].url
                )
                  ? mentor.videos[0].url
                  : "https://youtube.com"
              }
              target="_blank"
              rel="noreferrer"
              className="
                px-5
                py-3
                rounded-lg
                bg-red-50
                text-red-600
                font-medium
                hover:bg-red-100
                transition
              "
            >
              ▶ Visit YouTube Channel
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="
                px-5
                py-3
                rounded-lg
                bg-blue-50
                text-blue-700
                font-medium
                hover:bg-blue-100
                transition
              "
            >
              💼 Connect on LinkedIn
            </a>

          </div>

          {/* Other Videos */}

<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

  {mentor.videos?.slice(1).map((video) => (

    <div
      key={video.title}
      onClick={() =>
        setSelectedVideo(video.url)
      }
      className="
        group
        cursor-pointer
        border
        rounded-2xl
        overflow-hidden
        bg-white
        hover:border-blue-500
        hover:shadow-sm
        transition
        duration-300
      "
    >

      <div className="relative overflow-hidden">

        <img
          src={video.thumbnail}
          alt={video.title}
          className="
            h-56
            w-full
            object-cover
            transition
            duration-300
          "
        />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">

          <div
            className="
              h-16
              w-16
              rounded-full
              bg-white
              shadow-sm
              flex
              items-center
              justify-center
              transition
            "
          >

            <PlayCircle
              size={36}
              className="text-blue-600"
            />

          </div>

        </div>

      </div>

      <div className="p-5">

        <div className="flex items-center gap-2 text-blue-600 mb-3">

          <Video size={18} />

          <span className="text-sm font-medium">
            Video Session
          </span>

        </div>

        <h3 className="font-semibold text-lg">

          {video.title}

        </h3>

        <div className="flex flex-wrap gap-2 mt-3">

          <span
            className="
              bg-white
border
border-blue-200
              text-blue-700
              px-2
              py-1
              rounded-lg
              text-xs
            "
          >
            👀 12K Views
          </span>

          <span
            className="
              bg-white
border
border-blue-200
              text-blue-700
              px-2
              py-1
              rounded-lg
              text-xs
            "
          >
            ⭐ 4.9 Rating
          </span>

          <span
            className="
              bg-white
border
border-slate-200
              text-slate-700
              px-2
              py-1
              rounded-lg
              text-xs
            "
          >
            🎥 HD
          </span>

        </div>

        <div className="mt-5 flex items-center justify-between">

          <div className="flex items-center gap-2 text-slate-500">

            <Eye size={16} />

            <span className="text-sm">
              Watch Video
            </span>

          </div>

          <ArrowRight
            size={18}
            className="
              text-blue-600
              transition
            "
          />

        </div>

      </div>

    </div>

  ))}

</div>

{/* Video Player Modal */}

{selectedVideo && (

  <div
    className="
      fixed
      inset-0
      z-50
      bg-black/70
      flex
      items-center
      justify-center
      p-4
    "
    onClick={() =>
      setSelectedVideo(null)
    }
  >

    <div
      className="
        relative
        w-full
        max-w-6xl
      "
      onClick={(e) =>
        e.stopPropagation()
      }
    >
    <p className="absolute -top-12 left-0 text-white font-medium">
  Mentor Video
</p>
      {/* Close Button */}

      <button
        onClick={() =>
          setSelectedVideo(null)
        }
        className="
          absolute
          -top-14
          right-0
          h-10
          w-10
          rounded-full
          bg-white
          flex
          items-center
          justify-center
          hover:bg-blue-100
          transition
          z-10
        "
      >

        <X
          size={22}
          className="text-blue-600"
        />

      </button>

      {/* Player */}

      <div
        className="
          relative
          bg-black
          rounded-2xl
          overflow-hidden
          shadow-lg
          aspect-video
        "
      >

        <div className="absolute top-4 left-4 z-10">
  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
    Now Playing
  </span>
</div>

        {isYoutubeUrl(selectedVideo) ? (

          <iframe
            src={`${getYoutubeEmbedUrl(selectedVideo)}?autoplay=1`}
            title="Mentor Video"
            className="
              w-full
              h-full
            "
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture
            "
            allowFullScreen
          />

        ) : (

          <video
            controls
            autoPlay
            className="
              w-full
              h-full
              object-contain
            "
          >

            <source
  src={selectedVideo}
  type="video/mp4"
/>

            Your browser does not support video.

          </video>

        )}

      </div>

    </div>

  </div>

)}

{/* Bottom CTA */}

<div
  className="
    mt-14
    
    overflow-hidden
    bg-white
border
border-slate-200
rounded-2xl
shadow-sm
    p-10
    text-center
    text-white
    
  "
>

  <h3 className="text-slate-900 text-3xl font-bold">

    Watch. Learn. Grow.

  </h3>

  <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-7">

    Discover practical insights, interview tips,
    leadership lessons and real-world strategies
    before booking your mentorship session.

  </p>

  <div className="flex justify-center gap-4 flex-wrap mt-8">

    <div className="bg-white border border-slate-200 px-5 py-3 rounded-lg text-slate-700">

      🎥 50+ Videos

    </div>

    <div className="bg-white border border-slate-200 px-5 py-3 rounded-lg text-slate-700">

      👀 100K+ Views

    </div>

    <div className="bg-white border border-slate-200 px-5 py-3 rounded-lg text-slate-700">

      ⭐ 4.9 Average Rating

    </div>

    <div className="bg-white border border-slate-200 px-5 py-3 rounded-lg text-slate-700">

      🚀 Career Insights

    </div>

  </div>

  <button
    className="
      mt-8
      bg-white
      text-blue-600
hover:shadow-sm
transition
      px-8
      py-3
      rounded-lg
      font-semibold
      border
    border-slate-300
    "
  >

    Explore Complete Library

  </button>

</div>
        </div>
      </div>
    </section>
  );
};

export default MentorVideos;