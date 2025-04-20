
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex w-full bg-obsidian">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
