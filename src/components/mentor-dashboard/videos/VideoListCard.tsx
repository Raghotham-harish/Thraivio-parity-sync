import {
  PlayCircle,
  Pencil,
  Trash2,
  Video,
  Eye,
} from "lucide-react";

import type { Video as VideoType } from "@/types/video";

interface VideoListCardProps {
  video: VideoType;

  onEdit: (
    video: VideoType
  ) => void;

  onDelete: (
    video: VideoType
  ) => void;
}

const VideoListCard = ({
  video,
  onEdit,
  onDelete,
}: VideoListCardProps) => {
  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-3xl

        overflow-hidden

        hover:shadow-xl

        transition-all
        duration-300
      "
    >
      <div
        className="
          flex
          flex-col

          xl:flex-row
        "
      >
        {/* Thumbnail */}

        <div
          className="
            relative

            xl:w-[320px]

            overflow-hidden
          "
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="
              h-full
              w-full

              object-cover

              min-h-[240px]
            "
          />

          <div
            className="
              absolute
              inset-0

              bg-black/30

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

                flex
                items-center
                justify-center

                shadow-xl
              "
            >
              <PlayCircle
                size={42}
                className="
                  text-blue-600
                "
              />
            </div>
          </div>

        </div>

        {/* Content */}

        <div
          className="
            flex-1

            p-6
          "
        >
          {/* Top */}

          <div
            className="
              flex
              flex-col

              lg:flex-row
              lg:justify-between

              gap-4
            "
          >
            <div>

              <div
                className="
                  flex
                  items-center
                  gap-2

                  text-blue-600
                "
              >
                <Video size={18} />

                <span
                  className="
                    text-sm
                    font-medium
                  "
                >
                  Video Session
                </span>

              </div>

              <h2
                className="
                  text-3xl
                  font-bold

                  mt-4
                "
              >
                {video.title}
              </h2>

            </div>

            <span
              className="
                bg-red-50
                text-red-600

                px-4
                py-2

                rounded-full

                h-fit

                text-sm
                font-medium
              "
            >
              ▶ Video Content
            </span>

          </div>

          {/* Stats */}

          <div
            className="
              flex
              flex-wrap

              gap-2

              mt-6
            "
          >
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
              👀 12K Views
            </span>

            <span
              className="
                bg-green-50
                text-green-700

                px-3
                py-1

                rounded-full

                text-xs
              "
            >
              ⭐ 4.9 Rating
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
              🎥 HD Quality
            </span>

          </div>

          {/* Footer */}

          <div
            className="
              flex
              flex-col

              lg:flex-row
              lg:items-center
              lg:justify-between

              gap-5

              mt-8
            "
          >
            <div
              className="
                flex
                items-center
                gap-2

                text-slate-500
              "
            >
              <Eye size={18} />

              <span>
                Available For Students
              </span>

            </div>

            <div
              className="
                flex
                gap-3
              "
            >
              <button
                onClick={() =>
                  onEdit(video)
                }
                className="
                  border
                  border-blue-600

                  text-blue-600

                  px-5
                  py-3

                  rounded-2xl

                  flex
                  items-center
                  gap-2

                  hover:bg-blue-600
                  hover:text-white

                  transition
                "
              >
                <Pencil size={18} />

                Edit
              </button>

              <button
                onClick={() =>
                  onDelete(video)
                }
                className="
                  bg-red-600
                  hover:bg-red-700

                  text-white

                  px-5
                  py-3

                  rounded-2xl

                  flex
                  items-center
                  gap-2

                  transition
                "
              >
                <Trash2 size={18} />

                Delete
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default VideoListCard;