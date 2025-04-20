
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ShoppingCart, Users, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardIndex = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-graphite border-gray-700 hover:border-neon/50 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-white text-sm font-medium">Total Policies</CardTitle>
            <FileText className="h-4 w-4 text-neon" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">10</div>
            <p className="text-xs text-gray-400 mt-1">5 Internal, 5 External</p>
          </CardContent>
        </Card>
        
        <Card className="bg-graphite border-gray-700 hover:border-neon/50 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-white text-sm font-medium">Active RFPs</CardTitle>
            <FileText className="h-4 w-4 text-neon" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">5</div>
            <p className="text-xs text-gray-400 mt-1">3 Submitted, 1 Won, 1 Lost</p>
          </CardContent>
        </Card>
        
        <Card className="bg-graphite border-gray-700 hover:border-neon/50 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-white text-sm font-medium">Purchase Requests</CardTitle>
            <ShoppingCart className="h-4 w-4 text-neon" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">5</div>
            <p className="text-xs text-gray-400 mt-1">All pending approval</p>
          </CardContent>
        </Card>
        
        <Card className="bg-graphite border-gray-700 hover:border-red-500/50 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-white text-sm font-medium">Flagged Cases</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">17</div>
            <p className="text-xs text-gray-400 mt-1">Requires immediate attention</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-graphite border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
            <CardDescription className="text-gray-400">Your recent actions and notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-2 border-neon pl-4 py-1">
              <p className="text-white">New policy added to Engineering department</p>
              <p className="text-sm text-gray-400">Today at 10:30 AM</p>
            </div>
            <div className="border-l-2 border-neon pl-4 py-1">
              <p className="text-white">Purchase request approved for Marketing team</p>
              <p className="text-sm text-gray-400">Yesterday at 2:15 PM</p>
            </div>
            <div className="border-l-2 border-red-500 pl-4 py-1">
              <p className="text-white">New compliance case flagged in GDPR policy</p>
              <p className="text-sm text-gray-400">Yesterday at 11:20 AM</p>
            </div>
            <div className="border-l-2 border-green-500 pl-4 py-1">
              <p className="text-white">RFP won for IT Security Assessment</p>
              <p className="text-sm text-gray-400">April 18, 2025</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-graphite border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Quick Links</CardTitle>
            <CardDescription className="text-gray-400">Access frequently used sections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/dashboard/policies">
                <Card className="bg-obsidian hover:bg-graphite/80 transition-all cursor-pointer">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-neon" />
                    <span className="text-white">Policies</span>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/dashboard/rfps">
                <Card className="bg-obsidian hover:bg-graphite/80 transition-all cursor-pointer">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-neon" />
                    <span className="text-white">RFPs</span>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/dashboard/purchases">
                <Card className="bg-obsidian hover:bg-graphite/80 transition-all cursor-pointer">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <ShoppingCart className="h-5 w-5 text-neon" />
                    <span className="text-white">Purchases</span>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/settings">
                <Card className="bg-obsidian hover:bg-graphite/80 transition-all cursor-pointer">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Users className="h-5 w-5 text-neon" />
                    <span className="text-white">Settings</span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardIndex;
