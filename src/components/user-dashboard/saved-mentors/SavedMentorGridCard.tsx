import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface SavedMentorGridCardProps {
  mentor: any;

  onRemove: (mentorId: number) => void;
}

const SavedMentorGridCard = ({ mentor, onRemove }: SavedMentorGridCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Identity */}
      <div className="flex items-start gap-3">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="h-11 w-11 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate font-semibold text-foreground">{mentor.name}</h3>
            {mentor.featured && (
              <span className="shrink-0 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-foreground">
                Featured
              </span>
            )}
          </div>
          <p className="truncate text-sm text-muted-foreground">
            {mentor.role} · {mentor.company}
          </p>
        </div>
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

      {/* Stat strip */}
      <div className="mt-3 grid grid-cols-3 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="flex items-center justify-center gap-0.5 text-xs font-bold text-foreground">
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
            {mentor.rating}
          </p>
          <p className="text-[10px] text-muted-foreground">{mentor.reviewsCount} reviews</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{mentor.studentsCoached}</p>
          <p className="text-[10px] text-muted-foreground">Students</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{mentor.sessionsCompleted}</p>
          <p className="text-[10px] text-muted-foreground">Sessions</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
        {mentor.skills?.slice(0, 3).map((skill: string) => (
          <span
            key={skill}
            className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Actions */}
      <Link
        to={`/mentor/${mentor.id}`}
        className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
      >
        View Profile
      </Link>
    </div>
  );
};

export default SavedMentorGridCard;
