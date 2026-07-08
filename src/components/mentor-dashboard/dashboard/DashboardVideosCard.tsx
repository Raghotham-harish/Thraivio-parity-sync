import { Video } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  mentor: any;
}

const DashboardVideosCard = ({
  mentor,
}: Props) => {
  const videos =
    mentor.videos.slice(0, 3);

  return (
    <div
      className="
        bg-white
        border
        rounded-3xl
        p-6
        shadow-sm
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >
        <div>

          <h3
            className="
              text-xl
              font-bold
            "
          >
            Video Library
          </h3>

          <p
            className="
              text-sm
              text-slate-500
              mt-1
            "
          >
            Latest uploaded videos
          </p>

        </div>

        <Video
          className="
            text-red-600
          "
        />
      </div>

      <div className="space-y-4">

        {videos.map(
          (
            video: any,
            index: number
          ) => (
            <div
              key={index}
              className="
                border
                rounded-2xl
                overflow-hidden
              "
            >
              <img
                src={
                  video.thumbnail
                }
                alt={video.title}
                className="
                  h-36
                  w-full
                  object-cover
                "
              />

              <div className="p-4">

                <h4
                  className="
                    font-semibold
                    line-clamp-2
                  "
                >
                  {video.title}
                </h4>

              </div>
            </div>
          )
        )}

      </div>

      <Link
        to="/mentor-dashboard/videos"
        className="
          block
          text-center
          mt-6
          text-red-600
          font-medium
        "
      >
        Manage Videos
      </Link>
    </div>
  );
};

export default DashboardVideosCard;