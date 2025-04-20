
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OpenRequests from "@/components/dashboard/purchases/OpenRequests";

const Purchases = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Purchases</h1>
      
      <Tabs defaultValue="open" className="w-full">
        <TabsList className="bg-graphite/50 text-gray-300">
          <TabsTrigger value="open">Open Requests</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
        </TabsList>
        
        <TabsContent value="open">
          <OpenRequests />
        </TabsContent>
        
        <TabsContent value="approved">
          <div className="p-8 text-center text-gray-400">
            No approved purchases to display
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Purchases;
