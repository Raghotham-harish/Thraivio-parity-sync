import { Bell, ChevronDown, Search } from "lucide-react";

import { MobileNavTrigger } from "@/components/shared/MobileNavDrawer";

interface AdminTopbarProps {
  onMenuClick: () => void;
}

const AdminTopbar = ({ onMenuClick }: AdminTopbarProps) => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex h-20 items-center justify-between gap-4 border-b border-border bg-card px-4 lg:px-8">
      {/* Left */}

      <div className="flex items-center gap-6">
        <MobileNavTrigger onClick={onMenuClick} />

        <div className="relative hidden lg:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <input
            type="text"
            placeholder="Search mentors, users, payments..."
            className="w-[420px] rounded-2xl border border-border bg-background py-3 pl-11 pr-4 text-foreground outline-none transition-all focus:border-primary focus:bg-card"
          />
        </div>

        <div className="hidden xl:block">
          <p className="text-sm font-medium text-muted-foreground">{today}</p>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">
        <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-border text-foreground transition hover:bg-secondary">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
        </button>

        <button className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?img=68"
            alt="Admin"
            className="h-11 w-11 rounded-full object-cover"
          />

          <div className="hidden text-left md:block">
            <h4 className="font-semibold text-foreground">Sunil Kumar</h4>
            <p className="text-xs text-muted-foreground">Super Admin</p>
          </div>

          <ChevronDown size={18} className="text-muted-foreground" />
        </button>
      </div>
    </header>
  );
};

export default AdminTopbar;
