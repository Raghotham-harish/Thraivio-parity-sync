import { NavLink } from "react-router-dom";

import { GraduationCap, LogOut } from "lucide-react";

import { adminSidebarItems } from "@/data/admin-sidebar";
import { cn } from "@/lib/utils";

const AdminSidebar = () => {
  return (
    <aside className="flex h-screen w-72 shrink-0 flex-col border-r border-border bg-card">
      {/* Logo */}

      <div className="flex h-20 items-center border-b border-border px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <GraduationCap size={24} />
          </div>

          <div>
            <h2 className="font-heading text-lg font-medium text-foreground">
              Admin Panel
            </h2>
            <p className="text-xs text-muted-foreground">Thraivio</p>
          </div>
        </div>
      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
        <div className="space-y-2">
          {adminSidebarItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "text-muted-foreground hover:bg-secondary hover:text-primary",
                  )
                }
              >
                <Icon size={20} />
                <span className="font-medium">{item.title}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-border p-4">
        <div className="rounded-2xl bg-secondary p-4">
          <h4 className="font-semibold text-foreground">Platform Overview</h4>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Manage mentors, users, sessions, payments, reports and platform
            settings from one place.
          </p>

          <button className="mt-5 flex items-center gap-2 rounded-xl border border-destructive/30 px-4 py-2 text-sm font-medium text-destructive transition hover:bg-destructive/10">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
