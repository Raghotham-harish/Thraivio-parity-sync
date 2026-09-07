import { useEffect, useMemo, useState } from "react";

import type { Video } from "@/types/video";

import {
  addMentorVideo,
  deleteMentorVideo,
  getMentorByUserId,
  updateMentorVideo,
} from "@/services/mentor.service";

import type { MentorApiResponse } from "@/services/mentor.service";

import VideosHeader from "@/components/mentor-dashboard/videos/VideosHeader";

import VideosToolbar from "@/components/mentor-dashboard/videos/VideosToolbar";

import VideoGridCard from "@/components/mentor-dashboard/videos/VideoGridCard";

import VideoListCard from "@/components/mentor-dashboard/videos/VideoListCard";

import EmptyVideos from "@/components/mentor-dashboard/videos/EmptyVideos";

import VideoFormModal from "@/components/mentor-dashboard/videos/VideoFormModal";

import DeleteVideoDialog from "@/components/mentor-dashboard/videos/DeleteVideoDialog";

const Videos = () => {
  const [mentor, setMentor] =
    useState<MentorApiResponse | null>(null);

  const [videosData, setVideosData] =
    useState<Video[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">("grid");

  const [isFormOpen, setIsFormOpen] =
    useState(false);

  const [
    selectedVideo,
    setSelectedVideo,
  ] = useState<Video | null>(null);

  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  /*
   * Load logged-in mentor videos
   */
  useEffect(() => {
    const loadVideos = async () => {
      try {
        setLoading(true);
        setError("");

        const storedUser =
          localStorage.getItem("authUser");

        if (!storedUser) {
          setError(
            "Logged-in user information not found."
          );
          return;
        }

        const user = JSON.parse(storedUser);

        if (!user?.id) {
          setError("User ID not found.");
          return;
        }

        const response =
          await getMentorByUserId(user.id);

        if (
          !response?.success ||
          !response?.data
        ) {
          setError(
            "Mentor profile not found."
          );
          return;
        }

        const mentorData =
          response.data;

        setMentor(mentorData);

        const normalizedVideos =
          (mentorData.videos || [])
            .map(
              (
                item: any,
                index: number
              ) => ({
                id:
                  item?.id ||
                  item?._id ||
                  String(index + 1),

                title:
                  typeof item === "string"
                    ? item
                    : String(
                        item?.title || ""
                      ),

                thumbnail:
                  typeof item === "object"
                    ? String(
                        item?.thumbnail || ""
                      )
                    : "",

                url:
                  typeof item === "object"
                    ? String(
                        item?.url || ""
                      )
                    : "",
              })
            )
            .filter(
              (item) =>
                item.title.trim() !== ""
            );

        setVideosData(
          normalizedVideos
        );
      } catch (error: any) {
        console.error(
          "Failed to load mentor videos:",
          error
        );

        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to load videos."
        );
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

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
      setSelectedVideo(null);
      setIsFormOpen(true);
    };

  const handleEditVideo =
    (
      video: Video
    ) => {
      setSelectedVideo(video);
      setIsFormOpen(true);
    };

  const handleDeleteVideo =
    (
      video: Video
    ) => {
      setSelectedVideo(video);
      setIsDeleteOpen(true);
    };

  /*
   * Create / Update video
   */
  const handleSaveVideo =
    async (
      video: Video
    ) => {
      if (!mentor?.id) {
        setError(
          "Mentor ID not found."
        );
        return;
      }

      try {
        setError("");

        /*
         * Create
         */
        if (!video.id) {
          const response =
            await addMentorVideo(
              mentor.id,
              {
                title: video.title,
                thumbnail:
                  video.thumbnail,
                url: video.url,
              }
            );

          if (
            !response?.success ||
            !response?.data
          ) {
            setError(
              "Failed to create video."
            );
            return;
          }

          const updatedMentor =
            response.data;

          const createdVideos =
            (updatedMentor.videos || [])
              .map(
                (
                  item: any,
                  index: number
                ) => ({
                  id:
                    item?.id ||
                    item?._id ||
                    String(index + 1),

                  title:
                    String(
                      item?.title || ""
                    ),

                  thumbnail:
                    String(
                      item?.thumbnail || ""
                    ),

                  url:
                    String(
                      item?.url || ""
                    ),
                })
              )
              .filter(
                (item) =>
                  item.title.trim() !== ""
              );

          setVideosData(
            createdVideos
          );
        }

        /*
         * Update
         */
        else {
          const response =
            await updateMentorVideo(
              mentor.id,
              video.id,
              {
                title: video.title,
                thumbnail:
                  video.thumbnail,
                url: video.url,
              }
            );

          if (
            !response?.success
          ) {
            setError(
              "Failed to update video."
            );
            return;
          }

          setVideosData(
            (current) =>
              current.map(
                (item) =>
                  item.id ===
                  video.id
                    ? video
                    : item
              )
          );
        }

        setIsFormOpen(false);
        setSelectedVideo(null);
      } catch (error: any) {
        console.error(
          "Failed to save video:",
          error
        );

        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to save video."
        );
      }
    };

  /*
   * Delete video
   */
  const confirmDelete =
    async () => {
      if (
        !mentor?.id ||
        !selectedVideo?.id
      ) {
        return;
      }

      try {
        setError("");

        const response =
          await deleteMentorVideo(
            mentor.id,
            selectedVideo.id
          );

        if (
          !response?.success
        ) {
          setError(
            "Failed to delete video."
          );
          return;
        }

        setVideosData(
          (current) =>
            current.filter(
              (item) =>
                item.id !==
                selectedVideo.id
            )
        );

        setIsDeleteOpen(false);
        setSelectedVideo(null);
      } catch (error: any) {
        console.error(
          "Failed to delete video:",
          error
        );

        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to delete video."
        );
      }
    };

  if (loading) {
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
        <p className="text-slate-500">
          Loading videos...
        </p>
      </div>
    );
  }

  if (error && !mentor) {
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
          Unable to Load Videos
        </h2>

        <p
          className="
            text-slate-500
            mt-3
          "
        >
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* API Error */}

      {error && (
        <div
          className="
            bg-red-50
            border
            border-red-200
            text-red-700
            rounded-2xl
            p-4
          "
        >
          {error}
        </div>
      )}

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
                    video={video}
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
                    video={video}
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