
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Folder, ArrowRight, FilePlus, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for internal policies
const internalPolicies = [
  {
    id: 1,
    department: "Engineering",
    title: "Code Review Process",
    summary: "Guidelines for peer code reviews with automatic linting and testing requirements. Focus on security, performance and documentation.",
    flaggedCases: 4,
    updatedAt: "2025-03-15",
  },
  {
    id: 2,
    department: "HR",
    title: "Remote Work Policy",
    summary: "Rules and procedures for working remotely, including equipment requirements, work hour tracking, and communication guidelines.",
    flaggedCases: 2,
    updatedAt: "2025-02-28",
  },
  {
    id: 3,
    department: "Finance",
    title: "Expense Reimbursement",
    summary: "Process for submitting and approving expense reports, required documentation, and reimbursement timelines.",
    flaggedCases: 7,
    updatedAt: "2025-04-01",
  },
  {
    id: 4,
    department: "Sales",
    title: "Discount Approval Policy",
    summary: "Guidelines for offering customer discounts, approval requirements based on discount percentage, and documentation requirements.",
    flaggedCases: 3,
    updatedAt: "2025-03-22",
  },
  {
    id: 5,
    department: "Marketing",
    title: "Brand Guidelines",
    summary: "Official brand colors, font usage, logo specifications, and content tone guidelines for all company materials.",
    flaggedCases: 0,
    updatedAt: "2025-01-15",
  },
];

const InternalPolicies = () => {
  return (
    <div className="space-y-6 mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Department Policies</h2>
        <Button className="bg-neon hover:bg-neon/90 text-obsidian">
          <FilePlus className="w-4 h-4 mr-2" />
          Add New Policy
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {internalPolicies.map((policy) => (
          <Card key={policy.id} className="bg-graphite border-gray-700 text-white hover:border-neon/50 transition-all duration-200">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <Folder className="w-5 h-5 mr-2 text-neon" />
                  <CardTitle className="text-lg">{policy.department}</CardTitle>
                </div>
                {policy.flaggedCases > 0 && (
                  <Badge variant="destructive" className="ml-2">
                    {policy.flaggedCases} {policy.flaggedCases === 1 ? 'case' : 'cases'}
                  </Badge>
                )}
              </div>
              <CardDescription className="text-gray-400">
                {policy.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">{policy.summary}</p>
            </CardContent>
            <CardFooter className="flex justify-between pt-2 text-sm text-gray-400">
              <span>Updated: {policy.updatedAt}</span>
              <div className="flex space-x-2">
                {policy.flaggedCases > 0 && (
                  <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 p-0">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    View Cases
                  </Button>
                )}
                <Button variant="ghost" size="sm" className="text-neon hover:text-neon/80 p-0">
                  <ArrowRight className="w-4 h-4 mr-1" />
                  View
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InternalPolicies;
