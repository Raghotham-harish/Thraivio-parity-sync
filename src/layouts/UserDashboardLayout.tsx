import { useState } from "react";
import { Outlet } from "react-router-dom";

import UserDashboardSidebar from "@/components/user-dashboard/UserDashboardSidebar";
import UserDashboardTopbar from "@/components/user-dashboard/UserDashboardTopbar";

const UserDashboardLayout = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="h-screen flex bg-slate-50 overflow-hidden">

      <UserDashboardSidebar mobileOpen={mobileNavOpen} onMobileOpenChange={setMobileNavOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">

        <UserDashboardTopbar onMenuClick={() => setMobileNavOpen(true)} />

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

export default UserDashboardLayout;