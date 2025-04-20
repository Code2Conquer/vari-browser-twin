
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardIndex from "./pages/dashboard/Index";
import Policies from "./pages/dashboard/Policies";
import RFPs from "./pages/dashboard/RFPs";
import Purchases from "./pages/dashboard/Purchases";

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  
  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsAuthenticated(isLoggedIn);
    };
    
    checkAuth();
  }, []);
  
  if (isAuthenticated === null) {
    // Still loading
    return <div className="min-h-screen bg-obsidian flex items-center justify-center">Loading...</div>;
  }
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const App = () => {
  // Create a client instance inside the component
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Settings />} />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<DashboardIndex />} />
              <Route path="policies" element={<Policies />} />
              <Route path="rfps" element={<RFPs />} />
              <Route path="purchases" element={<Purchases />} />
            </Route>
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
