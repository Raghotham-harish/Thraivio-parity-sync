import {
  useEffect,
  useState,
} from "react";

import type { Video } from "@/types/video";

interface VideoFormModalProps {
  open: boolean;

  video?: Video | null;

  onClose: () => void;

  onSave: (
    video: Video
  ) => void;
}

const VideoFormModal = ({
  open,
  video,
  onClose,
  onSave,
}: VideoFormModalProps) => {
  const [formData, setFormData] =
    useState<Video>({
      title: "",
      thumbnail: "",
      url: "",
    });

  useEffect(() => {
    if (video) {
      setFormData(video);
    } else {
      setFormData({
        title: "",
        thumbnail: "",
        url: "",
      });
    }
  }, [video]);

  if (!open) return null;

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onSave(formData);

    onClose();
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        bg-black/50

        flex
        items-center
        justify-center

        p-4

        overflow-y-auto
      "
    >
      <div
        className="
          bg-white

          w-full
          max-w-2xl

          rounded-3xl

          p-8

          max-h-[90vh]
          overflow-y-auto
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between

            mb-8
          "
        >
          <div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              {video
                ? "Edit Video"
                : "Add Video"}
            </h2>

            <p
              className="
                text-slate-500
                mt-2
              "
            >
              Manage mentor videos and
              YouTube content.
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              text-3xl
              text-slate-500
            "
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Title */}

          <div>

            <label className="font-medium">
              Video Title
            </label>

            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title:
                    e.target.value,
                })
              }
              className="
                w-full
                mt-2

                border

                rounded-xl

                p-4
              "
              required
            />

          </div>

          {/* Thumbnail */}

          <div>

            <label className="font-medium">
              Thumbnail URL
            </label>

            <input
              type="text"
              value={
                formData.thumbnail
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  thumbnail:
                    e.target.value,
                })
              }
              className="
                w-full
                mt-2

                border

                rounded-xl

                p-4
              "
              required
            />

          </div>

          {/* Video URL */}

          <div>

            <label className="font-medium">
              Video URL
            </label>

            <input
              type="text"
              value={formData.url}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  url:
                    e.target.value,
                })
              }
              className="
                w-full
                mt-2

                border

                rounded-xl

                p-4
              "
              required
            />

          </div>

          {/* Preview */}

          {formData.thumbnail && (
            <div>

              <p
                className="
                  font-medium
                  mb-3
                "
              >
                Preview
              </p>

              <img
                src={
                  formData.thumbnail
                }
                alt="Preview"
                className="
                  h-52
                  w-full

                  object-cover

                  rounded-2xl

                  border
                "
              />

            </div>
          )}

          {/* Footer */}

          <div
            className="
              flex
              justify-end
              gap-3

              pt-4
            "
          >
            <button
              type="button"
              onClick={onClose}
              className="
                border

                px-6
                py-3

                rounded-xl
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                bg-blue-600
                hover:bg-blue-700

                text-white

                px-6
                py-3

                rounded-xl
              "
            >
              {video
                ? "Update Video"
                : "Create Video"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default VideoFormModal;