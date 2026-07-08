import {
  PlayCircle,
  Pencil,
  Trash2,
  Video,
  Eye,
} from "lucide-react";

import type { Video as VideoType } from "@/types/video";

interface VideoGridCardProps {
  video: VideoType;

  onEdit: (
    video: VideoType
  ) => void;

  onDelete: (
    video: VideoType
  ) => void;
}

const VideoGridCard = ({
  video,
  onEdit,
  onDelete,
}: VideoGridCardProps) => {
  return (
    <div
      className="
        group

        bg-white

        border
        border-slate-200

        rounded-3xl

        overflow-hidden

        hover:border-blue-300
        hover:shadow-xl
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      {/* Thumbnail */}

      <div
        className="
          relative

          overflow-hidden
        "
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="
            h-60
            w-full

            object-cover

            transition
            duration-500

            group-hover:scale-105
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
              h-16
              w-16

              rounded-full

              bg-white

              shadow-xl

              flex
              items-center
              justify-center

              transition

              group-hover:scale-110
            "
          >
            <PlayCircle
              size={38}
              className="
                text-blue-600
              "
            />
          </div>
        </div>

        <div
          className="
            absolute
            top-4
            left-4
          "
        >
          <span
            className="
              bg-red-600

              text-white

              px-3
              py-1

              rounded-full

              text-xs
              font-semibold
            "
          >
            ▶ VIDEO
          </span>
        </div>

      </div>

      {/* Content */}

      <div className="p-6">

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
            Mentor Content
          </span>

        </div>

        <h3
          className="
            text-xl
            font-bold

            mt-4
          "
        >
          {video.title}
        </h3>

        {/* Stats */}

        <div
          className="
            flex
            flex-wrap
            gap-2

            mt-4
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
            🎥 HD
          </span>

        </div>

        {/* Bottom */}

        <div
          className="
            flex
            items-center
            justify-between

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
            <Eye size={16} />

            <span className="text-sm">
              Watch Video
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
  );
};

export default VideoGridCard;