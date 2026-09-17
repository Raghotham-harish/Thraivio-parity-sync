import { Pencil, Play, Trash2 } from "lucide-react";

import type { Video as VideoType } from "@/types/video";

interface VideoListCardProps {
  video: VideoType;

  onEdit: (video: VideoType) => void;

  onDelete: (video: VideoType) => void;
}

const VideoListCard = ({ video, onEdit, onDelete }: VideoListCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      <a
        href={video.url}
        target="_blank"
        rel="noreferrer"
        className="relative block h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-secondary"
      >
        <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <Play className="h-4 w-4 fill-current text-white" />
        </div>
      </a>

      <h3 className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground">
        {video.title}
      </h3>

      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onEdit(video)}
          aria-label="Edit video"
          title="Edit"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(video)}
          aria-label="Delete video"
          title="Delete"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default VideoListCard;
