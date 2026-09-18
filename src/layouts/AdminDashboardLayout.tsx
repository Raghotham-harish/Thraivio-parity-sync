import { useState } from "react";
import { Outlet } from "react-router-dom";

import AdminSidebar from "@/components/admin-dashboard/AdminSidebar";
import AdminTopbar from "@/components/admin-dashboard/AdminTopbar";

const AdminDashboardLayout = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar mobileOpen={mobileNavOpen} onMobileOpenChange={setMobileNavOpen} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminTopbar onMenuClick={() => setMobileNavOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
