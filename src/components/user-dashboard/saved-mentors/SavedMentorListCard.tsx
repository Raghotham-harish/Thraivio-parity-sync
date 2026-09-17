import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface SavedMentorListCardProps {
  mentor: any;

  onRemove: (mentorId: number) => void;
}

const SavedMentorListCard = ({ mentor, onRemove }: SavedMentorListCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      <img
        src={mentor.image}
        alt={mentor.name}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate text-sm font-semibold text-foreground">{mentor.name}</h3>
          {mentor.featured && (
            <span className="shrink-0 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-foreground">
              Featured
            </span>
          )}
        </div>
        <p className="truncate text-xs text-muted-foreground">
          {mentor.role} · {mentor.company}
        </p>
      </div>

      <div className="hidden shrink-0 items-center gap-4 text-center text-xs text-muted-foreground sm:flex">
        <div>
          <p className="flex items-center justify-center gap-0.5 font-semibold text-foreground">
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
            {mentor.rating}
          </p>
          Rating
        </div>
        <div>
          <p className="font-semibold text-foreground">{mentor.studentsCoached}</p>
          Students
        </div>
        <div>
          <p className="font-semibold text-foreground">{mentor.sessionsCompleted}</p>
          Sessions
        </div>
      </div>

      <Link
        to={`/mentor/${mentor.id}`}
        className="shrink-0 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
      >
        View Profile
      </Link>

      <button
        type="button"
        onClick={() => onRemove(mentor.id)}
        aria-label="Remove from saved mentors"
        title="Remove"
        className="shrink-0 rounded-lg p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
      >
        <Heart className="h-4 w-4 fill-current" />
      </button>
    </div>
  );
};

export default SavedMentorListCard;
