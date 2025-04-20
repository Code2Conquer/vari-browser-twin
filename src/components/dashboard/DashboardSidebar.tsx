
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  LogOut, 
  FileText, 
  ShoppingCart, 
  User 
} from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="flex justify-between items-center">
          <div className="flex items-center gap-2 px-2">
            <span className="text-xl font-bold text-white">
              Varias<span className="text-neon">AI</span>
            </span>
          </div>
          <SidebarTrigger />
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip="Policies"
                isActive={location.pathname.includes('policies')}
                asChild
              >
                <Link to="/dashboard/policies">
                  <FileText className="w-5 h-5" />
                  <span>Policies</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip="RFPs" 
                isActive={location.pathname.includes('rfps')}
                asChild
              >
                <Link to="/dashboard/rfps">
                  <FileText className="w-5 h-5" />
                  <span>RFPs</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip="Purchases" 
                isActive={location.pathname.includes('purchases')}
                asChild
              >
                <Link to="/dashboard/purchases">
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
              <SidebarMenuButton 
                tooltip="Settings" 
                isActive={location.pathname.includes('settings')}
                asChild
              >
                <Link to="/settings">
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip="Profile" 
                isActive={location.pathname.includes('profile')}
                asChild
              >
                <Link to="/dashboard/profile">
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton onClick={handleLogout}>
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export default DashboardSidebar;
