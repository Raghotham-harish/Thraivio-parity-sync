import { Outlet } from "react-router-dom";

import UserDashboardSidebar from "@/components/user-dashboard/UserDashboardSidebar";
import UserDashboardTopbar from "@/components/user-dashboard/UserDashboardTopbar";

const UserDashboardLayout = () => {
  return (
    <div className="h-screen flex bg-slate-50 overflow-hidden">

      <UserDashboardSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <UserDashboardTopbar />

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

export default UserDashboardLayout;