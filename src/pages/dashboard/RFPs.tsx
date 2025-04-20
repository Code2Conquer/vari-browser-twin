
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewRFP from "@/components/dashboard/rfps/NewRFP";
import OngoingBids from "@/components/dashboard/rfps/OngoingBids";
import { Card, CardContent } from "@/components/ui/card";

const RFPs = () => {
  return (
    <div className="space-y-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">RFPs & Bids</h1>
        <div className="flex gap-2">
          <button className="bg-neon text-obsidian px-4 py-2 rounded-md font-medium hover:bg-neon/90 transition-colors">
            Create RFP
          </button>
        </div>
      </div>
      
      <Card className="bg-graphite/30 border-graphite/50">
        <CardContent className="pt-6">
          <Tabs defaultValue="ongoing" className="w-full">
            <TabsList className="bg-graphite/50 text-gray-300 mb-4">
              <TabsTrigger value="ongoing">Ongoing Bids</TabsTrigger>
              <TabsTrigger value="new">New RFP</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ongoing" className="mt-0">
              <OngoingBids />
            </TabsContent>
            
            <TabsContent value="new" className="mt-0">
              <NewRFP />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default RFPs;
