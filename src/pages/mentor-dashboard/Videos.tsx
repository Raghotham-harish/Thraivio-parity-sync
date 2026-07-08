import { useMemo, useState } from "react";

import { mentors } from "@/data/mentors";

import type { Video } from "@/types/video";

import VideosHeader from "@/components/mentor-dashboard/videos/VideosHeader";

import VideosToolbar from "@/components/mentor-dashboard/videos/VideosToolbar";

import VideoGridCard from "@/components/mentor-dashboard/videos/VideoGridCard";

import VideoListCard from "@/components/mentor-dashboard/videos/VideoListCard";

import EmptyVideos from "@/components/mentor-dashboard/videos/EmptyVideos";

import VideoFormModal from "@/components/mentor-dashboard/videos/VideoFormModal";

import DeleteVideoDialog from "@/components/mentor-dashboard/videos/DeleteVideoDialog";

const Videos = () => {
  /**
   * Temporary
   *
   * Later:
   * Logged In Mentor ID
   */

  const mentorId = 1;

  const mentor = mentors.find(
    (item) => item.id === mentorId
  );

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

  const [
    isFormOpen,
    setIsFormOpen,
  ] = useState(false);

  const [
    selectedVideo,
    setSelectedVideo,
  ] = useState<Video | null>(
    null
  );

  const [
    isDeleteOpen,
    setIsDeleteOpen,
  ] = useState(false);

  if (!mentor) {
    return (
      <div
        className="
          bg-white
          border
          rounded-3xl
          p-10
          text-center
        "
      >
        <h2
          className="
            text-3xl
            font-bold
          "
        >
          Mentor Not Found
        </h2>

        <p
          className="
            text-slate-500
            mt-3
          "
        >
          Unable to load mentor
          information.
        </p>
      </div>
    );
  }

  const videosData: Video[] =
    mentor.videos.map(
      (
        video,
        index
      ) => ({
        id: String(index + 1),

        title: video.title,

        thumbnail:
          video.thumbnail,

        url: video.url,
      })
    );

  const filteredVideos =
    useMemo(() => {
      return videosData.filter(
        (video) =>
          video.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [videosData, search]);

  const handleAddVideo =
    () => {
      setSelectedVideo(
        null
      );

      setIsFormOpen(true);
    };

  const handleEditVideo =
    (
      video: Video
    ) => {
      setSelectedVideo(
        video
      );

      setIsFormOpen(true);
    };

  const handleDeleteVideo =
    (
      video: Video
    ) => {
      setSelectedVideo(
        video
      );

      setIsDeleteOpen(true);
    };

  const handleSaveVideo =
    (
      video: Video
    ) => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Save Video",
        video
      );

      setIsFormOpen(false);
    };

  const confirmDelete =
    () => {
      /**
       * Backend Integration Later
       */

      console.log(
        "Delete Video",
        selectedVideo
      );

      setIsDeleteOpen(false);
    };

  return (
    <div className="space-y-8">

      {/* Header */}

      <VideosHeader
        totalVideos={
          videosData.length
        }
        onAddVideo={
          handleAddVideo
        }
      />

      {/* Toolbar */}

      <VideosToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
      />

      {/* Empty State */}

      {filteredVideos.length ===
      0 ? (
        <EmptyVideos
          onAddVideo={
            handleAddVideo
          }
        />
      ) : (
        <>
          {/* Grid */}

          {view === "grid" && (
            <div
              className="
                grid
                lg:grid-cols-2
                gap-6
              "
            >
              {filteredVideos.map(
                (video) => (
                  <VideoGridCard
                    key={
                      video.id
                    }
                    video={
                      video
                    }
                    onEdit={
                      handleEditVideo
                    }
                    onDelete={
                      handleDeleteVideo
                    }
                  />
                )
              )}
            </div>
          )}

          {/* List */}

          {view === "list" && (
            <div className="space-y-6">

              {filteredVideos.map(
                (video) => (
                  <VideoListCard
                    key={
                      video.id
                    }
                    video={
                      video
                    }
                    onEdit={
                      handleEditVideo
                    }
                    onDelete={
                      handleDeleteVideo
                    }
                  />
                )
              )}

            </div>
          )}
        </>
      )}

      {/* Modal */}

      <VideoFormModal
        open={isFormOpen}
        video={selectedVideo}
        onClose={() =>
          setIsFormOpen(false)
        }
        onSave={
          handleSaveVideo
        }
      />

      {/* Delete Dialog */}

      <DeleteVideoDialog
        open={isDeleteOpen}
        video={selectedVideo}
        onClose={() =>
          setIsDeleteOpen(false)
        }
        onConfirm={
          confirmDelete
        }
      />

    </div>
  );
};

export default Videos;