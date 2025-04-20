
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ArrowRight, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for external policies
const externalPolicies = [
  {
    id: 1,
    location: "United States - Federal",
    title: "Data Privacy Regulations",
    summary: "Federal regulations regarding customer data protection, breach notification requirements, and consumer rights for data access and deletion.",
    flaggedCases: 3,
    updatedAt: "2025-03-10",
  },
  {
    id: 2,
    location: "California, USA",
    title: "CCPA Compliance",
    summary: "California Consumer Privacy Act requirements for businesses that collect personal information from California residents.",
    flaggedCases: 5,
    updatedAt: "2025-04-01",
  },
  {
    id: 3,
    location: "European Union",
    title: "GDPR Compliance",
    summary: "General Data Protection Regulation compliance requirements for processing data of EU residents, including consent, breach notification, and rights.",
    flaggedCases: 2,
    updatedAt: "2025-02-15",
  },
  {
    id: 4,
    location: "United Kingdom",
    title: "UK Data Protection Act",
    summary: "Post-Brexit data protection regulations, including transfer requirements, privacy rights, and business compliance obligations.",
    flaggedCases: 0,
    updatedAt: "2025-01-20",
  },
  {
    id: 5,
    location: "Australia",
    title: "Privacy Act 1988",
    summary: "Australian privacy principles for handling personal information, notification requirements, and cross-border disclosure regulations.",
    flaggedCases: 1,
    updatedAt: "2025-03-25",
  },
];

const ExternalPolicies = () => {
  return (
    <div className="space-y-6 mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Regulatory Compliance</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {externalPolicies.map((policy) => (
          <Card key={policy.id} className="bg-graphite border-gray-700 text-white hover:border-neon/50 transition-all duration-200">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-neon" />
                  <CardTitle className="text-lg">{policy.location}</CardTitle>
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

export default ExternalPolicies;
