import { Outlet } from "react-router-dom";

import AdminSidebar from "@/components/admin-dashboard/AdminSidebar";
import AdminTopbar from "@/components/admin-dashboard/AdminTopbar";

const AdminDashboardLayout = () => {
  return (
    <div
      className="
        h-screen
        flex

        bg-slate-50

        overflow-hidden
      "
    >
      {/* Sidebar */}

      <AdminSidebar />

      {/* Main */}

      <div
        className="
          flex-1

          flex
          flex-col

          overflow-hidden
        "
      >
        {/* Topbar */}

        <AdminTopbar />

        {/* Content */}

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

export default AdminDashboardLayout;