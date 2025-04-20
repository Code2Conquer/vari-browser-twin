
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewRFP from "@/components/dashboard/rfps/NewRFP";
import OngoingBids from "@/components/dashboard/rfps/OngoingBids";

const RFPs = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">RFPs & Bids</h1>
      
      <Tabs defaultValue="ongoing" className="w-full">
        <TabsList className="bg-graphite/50 text-gray-300">
          <TabsTrigger value="ongoing">Ongoing Bids</TabsTrigger>
          <TabsTrigger value="new">New RFP</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ongoing">
          <OngoingBids />
        </TabsContent>
        
        <TabsContent value="new">
          <NewRFP />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RFPs;
