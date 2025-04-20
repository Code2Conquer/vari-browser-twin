
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InternalPolicies from "@/components/dashboard/policies/InternalPolicies";
import ExternalPolicies from "@/components/dashboard/policies/ExternalPolicies";

const Policies = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Policies</h1>
      
      <Tabs defaultValue="internal" className="w-full">
        <TabsList className="bg-graphite/50 text-gray-300">
          <TabsTrigger value="internal">Internal</TabsTrigger>
          <TabsTrigger value="external">External</TabsTrigger>
        </TabsList>
        
        <TabsContent value="internal">
          <InternalPolicies />
        </TabsContent>
        
        <TabsContent value="external">
          <ExternalPolicies />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Policies;
