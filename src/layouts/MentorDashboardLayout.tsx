import { Outlet } from "react-router-dom";

import DashboardSidebar from "@/components/mentor-dashboard/DashboardSidebar";
import DashboardTopbar from "@/components/mentor-dashboard/DashboardTopbar";

const MentorDashboardLayout = () => {
  return (
    <div className="h-screen flex bg-slate-50 overflow-hidden">

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Content */}

      <div className="flex-1 flex flex-col overflow-hidden">

        <DashboardTopbar />

        <main
          className="
            flex-1
            overflow-y-auto
            p-8
          "
        >
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default MentorDashboardLayout;