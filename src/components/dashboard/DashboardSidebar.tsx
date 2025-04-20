import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Settings, LogOut, FileText, ShoppingCart, User } from "lucide-react";
import { FileBox } from "lucide-react"; // New import for RFP icon

const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };
  return <div className="w-56 shrink-0">
      <SidebarProvider>
        <Sidebar className="border-r border-gray-800">
          <SidebarHeader className="flex flex-col gap-2 px-2 py-4">
            <Link to="/dashboard/company-profile" className="flex flex-col items-start hover:opacity-80 transition-opacity">
              <span className="text-lg font-bold text-white leading-tight">
                Baton Transport
              </span>
              <span className="text-[10px] text-gray-400">
                powered by VariasAI
              </span>
            </Link>
            
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Policies" isActive={location.pathname.includes('policies')} asChild>
                  <Link to="/dashboard/policies" className="truncate">
                    <FileText className="w-5 h-5" />
                    <span>Policies</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="RFPs" isActive={location.pathname.includes('rfps')} asChild>
                  <Link to="/dashboard/rfps" className="truncate">
                    <FileBox className="w-5 h-5" />
                    <span>RFPs</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Purchases" isActive={location.pathname.includes('purchases')} asChild>
                  <Link to="/dashboard/purchases" className="truncate">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Purchases</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings" isActive={location.pathname.includes('settings')} asChild>
                  <Link to="/settings" className="truncate">
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout} className="truncate">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
    </div>;
};
export default DashboardSidebar;