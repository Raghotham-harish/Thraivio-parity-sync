import { useState } from "react";
import { Outlet } from "react-router-dom";

import DashboardSidebar from "@/components/mentor-dashboard/DashboardSidebar";
import DashboardTopbar from "@/components/mentor-dashboard/DashboardTopbar";

const MentorDashboardLayout = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="h-screen flex bg-slate-50 overflow-hidden">

      {/* Sidebar */}
      <DashboardSidebar mobileOpen={mobileNavOpen} onMobileOpenChange={setMobileNavOpen} />

      {/* Content */}

      <div className="flex-1 flex flex-col overflow-hidden">

        <DashboardTopbar onMenuClick={() => setMobileNavOpen(true)} />

        <main
          className="
            flex-1
            overflow-y-auto
            p-4
            lg:p-8
          "
        >
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default MentorDashboardLayout;