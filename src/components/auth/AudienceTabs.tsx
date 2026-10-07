import { GraduationCap, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export type Audience = "user" | "member";

const OPTIONS: { id: Audience; label: string; hint: string; icon: typeof GraduationCap }[] = [
  { id: "user", label: "User", hint: "Book sessions", icon: GraduationCap },
  { id: "member", label: "Member", hint: "Coach / mentor", icon: BadgeCheck },
];

interface AudienceTabsProps {
  value: Audience;
  onChange: (value: Audience) => void;
  label: string;
}

/** User (learner) vs Member (coach/mentor) choice shared by login and signup. */
const AudienceTabs = ({ value, onChange, label }: AudienceTabsProps) => {
  return (
    <div role="radiogroup" aria-label={label} className="grid grid-cols-2 gap-2 rounded-xl bg-secondary p-1">
      {OPTIONS.map(({ id, label: optionLabel, hint, icon: Icon }) => {
        const active = value === id;
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(id)}
            className={cn(
              "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left transition-colors cursor-pointer",
              active ? "bg-card shadow-sm ring-1 ring-border" : "hover:bg-card/60"
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                active ? "bg-primary text-primary-foreground" : "icon-bg text-primary"
              )}
            >
              <Icon size={16} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-foreground">{optionLabel}</span>
              <span className="block truncate text-xs text-muted-foreground font-body">{hint}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default AudienceTabs;
