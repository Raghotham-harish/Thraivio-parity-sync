import {
  Camera,
  ImagePlus,
  Upload,
  X,
} from "lucide-react";

interface UploadPhotoDialogProps {
  open: boolean;

  previewImage: string;

  onClose: () => void;

  onUpload: (
    file: File
  ) => void;

  onRemove: () => void;
}

const UploadPhotoDialog = ({
  open,
  previewImage,
  onClose,
  onUpload,
  onRemove,
}: UploadPhotoDialogProps) => {
  if (!open) return null;

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    onUpload(file);
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/50

        p-6
      "
    >
      <div
  className="
    w-full
    max-w-xl

    max-h-[90vh]

    overflow-y-auto

    rounded-[32px]

    bg-white

    shadow-2xl
  "
>
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-slate-200

            p-6
          "
        >
          <div>
            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Update Profile Photo
            </h2>

            <p
              className="
                mt-2

                text-slate-500
              "
            >
              Upload a professional profile
              picture.
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-xl

              transition

              hover:bg-slate-100
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}

        <div className="p-8">

          <div
            className="
              flex
              flex-col

              items-center
            "
          >
            <div
              className="
                h-32
                w-32

                overflow-hidden

                rounded-full

                border-4
                border-slate-200
              "
            >
              <img
                src={previewImage}
                alt="Profile"
                className="
                  h-full
                  w-full

                  object-cover
                "
              />
            </div>

            <p
              className="
                mt-5

                text-sm

                text-slate-500
              "
            >
              JPG, PNG or WEBP
              <br />
              Maximum 5 MB
            </p>
                        {/* Upload Actions */}

            <div
              className="
                mt-6

                flex
                flex-col

                gap-4

                sm:flex-row
              "
            >
              <label
                className="
                  inline-flex

                  cursor-pointer

                  items-center
                  justify-center

                  gap-2

                  rounded-xl

                  bg-blue-600

                  px-6
                  py-3

                  font-medium

                  text-white

                  transition

                  hover:bg-blue-700
                "
              >
                <Upload size={18} />

                Upload New Photo

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={
                    handleFileChange
                  }
                />
              </label>

              <button
                onClick={onRemove}
                className="
                  inline-flex

                  items-center
                  justify-center

                  gap-2

                  rounded-xl

                  border
                  border-slate-200

                  px-6
                  py-3

                  font-medium

                  transition

                  hover:bg-slate-50
                "
              >
                <ImagePlus
                  size={18}
                />

                Remove Photo
              </button>
            </div>

            {/* Guidelines */}

            <div
              className="
                mt-8

                w-full

                rounded-3xl

                bg-slate-50

                p-6
              "
            >
              <div
                className="
                  flex

                  items-start

                  gap-4
                "
              >
                <div
                  className="
                    flex

                    h-12
                    w-12

                    shrink-0

                    items-center
                    justify-center

                    rounded-2xl

                    bg-blue-100
                  "
                >
                  <Camera
                    size={22}
                    className="
                      text-blue-600
                    "
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-semibold
                    "
                  >
                    Photo Guidelines
                  </h3>

                  <ul
                    className="
                      mt-3

                      list-disc

                      space-y-2

                      pl-5

                      text-sm

                      text-slate-500
                    "
                  >
                    <li>
                      Use a clear,
                      high-quality image.
                    </li>

                    <li>
                      Your face should be
                      clearly visible.
                    </li>

                    <li>
                      Avoid blurry or
                      heavily edited photos.
                    </li>

                    <li>
                      Square images work
                      best for profile
                      display.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
            </div>

        {/* Footer */}

        <div
          className="
            flex
            flex-col-reverse

            gap-4

            border-t
            border-slate-200

            p-8

            sm:flex-row
            sm:items-center
            sm:justify-end
          "
        >
          <button
            onClick={onClose}
            className="
              rounded-xl

              border
              border-slate-200

              px-6
              py-3

              font-medium

              transition

              hover:bg-slate-50
            "
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            className="
              rounded-xl

              bg-blue-600

              px-6
              py-3

              font-medium

              text-white

              transition

              hover:bg-blue-700
            "
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotoDialog;