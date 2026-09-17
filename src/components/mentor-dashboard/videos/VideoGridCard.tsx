import { Pencil, Play, Trash2 } from "lucide-react";

import type { Video as VideoType } from "@/types/video";

interface VideoGridCardProps {
  video: VideoType;

  onEdit: (video: VideoType) => void;

  onDelete: (video: VideoType) => void;
}

const VideoGridCard = ({ video, onEdit, onDelete }: VideoGridCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md">
      <a
        href={video.url}
        target="_blank"
        rel="noreferrer"
        className="relative block h-28 overflow-hidden bg-secondary"
      >
        <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90">
            <Play className="h-4 w-4 fill-current text-foreground" />
          </div>
        </div>
      </a>

      <div className="p-3">
        <h3 className="truncate text-sm font-semibold text-foreground">{video.title}</h3>
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onEdit(video)}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            <Pencil className="h-4 w-4" />
            Edit
          </button>
          <button
            type="button"
            onClick={() => onDelete(video)}
            aria-label="Delete video"
            title="Delete"
            className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoGridCard;
