import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface ExploreLink {
  to: string;
  label: string;
  icon: LucideIcon;
}

/** "You might also explore" row at the bottom of marketing pages. */
export function ExploreLinks({ title = "Explore further", links }: { title?: string; links: ExploreLink[] }) {
  return (
    <div className="border-t border-border pt-8">
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">{title}</p>
      <div className="flex flex-wrap gap-3">
        {links.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-[13px] font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
