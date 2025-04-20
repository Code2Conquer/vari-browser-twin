
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Building, Package } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CompanyProfile = () => {
  const companyData = {
    name: "Baton Transport",
    overview: "Leading transportation and logistics solutions provider specializing in efficient cargo movement across North America.",
    employeeCount: "500+",
    businessLines: [
      "Full Truckload Services",
      "Less Than Truckload (LTL)",
      "Intermodal Transportation",
      "Supply Chain Solutions"
    ],
    locations: [
      {
        city: "Chicago, IL",
        type: "Headquarters",
        address: "123 Logistics Way"
      },
      {
        city: "Dallas, TX",
        type: "Regional Office",
        address: "456 Transport Blvd"
      }
    ],
    plans: [
      {
        name: "Enterprise Suite",
        status: "Active",
        renewalDate: "2025-12-31"
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Company Profile</h1>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-graphite/50 text-gray-300">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="plans">Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-4">
          <Card className="bg-graphite/30 border-graphite/50">
            <CardHeader>
              <CardTitle className="text-xl text-white">Company Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">{companyData.overview}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-5 h-5 text-neon" />
                  <span>{companyData.employeeCount} Employees</span>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">Business Lines</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {companyData.businessLines.map((line, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <Building className="w-4 h-4 text-neon" />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="locations" className="space-y-4 mt-4">
          <Card className="bg-graphite/30 border-graphite/50">
            <CardHeader>
              <CardTitle className="text-xl text-white">Office Locations</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {companyData.locations.map((location, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-graphite/20">
                  <MapPin className="w-5 h-5 text-neon mt-1" />
                  <div>
                    <h4 className="text-white font-medium">{location.city}</h4>
                    <p className="text-gray-400 text-sm">{location.type}</p>
                    <p className="text-gray-400 text-sm">{location.address}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4 mt-4">
          <Card className="bg-graphite/30 border-graphite/50">
            <CardHeader>
              <CardTitle className="text-xl text-white">Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  { name: "John Smith", role: "Admin", email: "john@batontransport.com" },
                  { name: "Sarah Johnson", role: "Manager", email: "sarah@batontransport.com" }
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-graphite/20">
                    <Users className="w-5 h-5 text-neon" />
                    <div>
                      <h4 className="text-white font-medium">{user.name}</h4>
                      <p className="text-gray-400 text-sm">{user.role}</p>
                      <p className="text-gray-400 text-sm">{user.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plans" className="space-y-4 mt-4">
          <Card className="bg-graphite/30 border-graphite/50">
            <CardHeader>
              <CardTitle className="text-xl text-white">Active Plans</CardTitle>
            </CardHeader>
            <CardContent>
              {companyData.plans.map((plan, index) => (
                <div key={index} className="p-4 rounded-lg bg-graphite/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-5 h-5 text-neon" />
                    <h4 className="text-white font-medium">{plan.name}</h4>
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>Status: <span className="text-green-400">{plan.status}</span></p>
                    <p>Renewal Date: {plan.renewalDate}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyProfile;
