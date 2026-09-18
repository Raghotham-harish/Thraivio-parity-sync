import { Plus } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import uploadIllustration from "@/assets/illustrations/upload.svg";

interface EmptyVideosProps {
  onAddVideo: () => void;
}

const EmptyVideos = ({ onAddVideo }: EmptyVideosProps) => {
  return (
    <EmptyState
      illustration={uploadIllustration}
      title="No Videos Found"
      description="Upload mentoring videos, interview prep sessions, and learning resources for students."
      action={{
        label: "Add First Video",
        onClick: onAddVideo,
        icon: Plus,
      }}
    />
  );
};

export default EmptyVideos;
