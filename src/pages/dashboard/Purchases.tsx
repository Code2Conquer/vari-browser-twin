
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OpenRequests from "@/components/dashboard/purchases/OpenRequests";
import { Card, CardContent } from "@/components/ui/card";

const Purchases = () => {
  return (
    <div className="space-y-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Purchases</h1>
        <div className="flex gap-2">
          <button className="bg-neon text-obsidian px-4 py-2 rounded-md font-medium hover:bg-neon/90 transition-colors">
            New Purchase
          </button>
        </div>
      </div>
      
      <Card className="bg-graphite/30 border-graphite/50">
        <CardContent className="pt-6">
          <Tabs defaultValue="open" className="w-full">
            <TabsList className="bg-graphite/50 text-gray-300 mb-4">
              <TabsTrigger value="open">Open Requests</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
            </TabsList>
            
            <TabsContent value="open" className="mt-0">
              <OpenRequests />
            </TabsContent>
            
            <TabsContent value="approved" className="mt-0">
              <div className="p-8 text-center text-gray-400">
                No approved purchases to display
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Purchases;
