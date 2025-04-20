
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InternalPolicies from "@/components/dashboard/policies/InternalPolicies";
import ExternalPolicies from "@/components/dashboard/policies/ExternalPolicies";
import { Card, CardContent } from "@/components/ui/card";

const Policies = () => {
  return (
    <div className="space-y-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Policies</h1>
        <div className="flex gap-2">
          <button className="bg-neon text-obsidian px-4 py-2 rounded-md font-medium hover:bg-neon/90 transition-colors">
            Create Policy
          </button>
        </div>
      </div>
      
      <Card className="bg-graphite/30 border-graphite/50">
        <CardContent className="pt-6">
          <Tabs defaultValue="internal" className="w-full">
            <TabsList className="bg-graphite/50 text-gray-300 mb-4">
              <TabsTrigger value="internal">Internal</TabsTrigger>
              <TabsTrigger value="external">External</TabsTrigger>
            </TabsList>
            
            <TabsContent value="internal" className="mt-0">
              <InternalPolicies />
            </TabsContent>
            
            <TabsContent value="external" className="mt-0">
              <ExternalPolicies />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Policies;
