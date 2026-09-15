import { Outlet } from "react-router-dom";

import AdminSidebar from "@/components/admin-dashboard/AdminSidebar";
import AdminTopbar from "@/components/admin-dashboard/AdminTopbar";

const AdminDashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminTopbar />

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
