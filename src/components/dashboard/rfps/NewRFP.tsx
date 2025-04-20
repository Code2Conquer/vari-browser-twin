
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FilePlus } from "lucide-react";

const NewRFP = () => {
  return (
    <div className="space-y-6 mt-4">
      <Card className="bg-graphite border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <FilePlus className="w-5 h-5 mr-2 text-neon" />
            Create New RFP
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-gray-300">RFP Title</Label>
              <Input id="title" placeholder="Enter RFP title" className="bg-obsidian border-gray-700 text-white" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="department" className="text-gray-300">Department</Label>
              <Input id="department" placeholder="Department or team" className="bg-obsidian border-gray-700 text-white" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-gray-300">Budget Range</Label>
              <Input id="budget" placeholder="Budget range (USD)" className="bg-obsidian border-gray-700 text-white" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deadline" className="text-gray-300">Submission Deadline</Label>
              <Input id="deadline" type="date" className="bg-obsidian border-gray-700 text-white" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-300">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Detailed description of requirements" 
              className="bg-obsidian border-gray-700 text-white min-h-[150px]" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="requirements" className="text-gray-300">Technical Requirements</Label>
            <Textarea 
              id="requirements" 
              placeholder="Specific technical requirements" 
              className="bg-obsidian border-gray-700 text-white min-h-[100px]" 
            />
          </div>
          
          <div className="pt-4 flex justify-end space-x-3">
            <Button variant="outline" className="border-gray-700 text-gray-300">
              Save Draft
            </Button>
            <Button className="bg-neon hover:bg-neon/90 text-obsidian">
              Create RFP
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewRFP;
