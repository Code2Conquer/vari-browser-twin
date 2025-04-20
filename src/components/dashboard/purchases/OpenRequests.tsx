
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Check, X, Edit } from "lucide-react";

// Mock data for purchase requests
const purchaseRequests = [
  {
    id: 1,
    item: "MacBook Pro M3 Pro",
    requester: "Jane Smith",
    department: "Engineering",
    budget: "$2,500",
    specifications: "16-inch, 36GB RAM, 1TB SSD",
    justification: "Required for ML model development with better performance",
  },
  {
    id: 2,
    item: "Flight Tickets",
    requester: "John Davis",
    department: "Sales",
    budget: "$1,200",
    specifications: "Round trip to Chicago for client meeting, May 15-18",
    justification: "In-person client meeting for contract renewal",
  },
  {
    id: 3,
    item: "Hotel Booking",
    requester: "John Davis",
    department: "Sales",
    budget: "$900",
    specifications: "Chicago downtown, 3 nights",
    justification: "Accommodation for client meeting trip",
  },
  {
    id: 4,
    item: "iPhone 15 Pro",
    requester: "Laura Chen",
    department: "Marketing",
    budget: "$1,100",
    specifications: "256GB, Titanium finish",
    justification: "Required for social media content creation",
  },
  {
    id: 5,
    item: "Conference Tickets",
    requester: "Michael Brown",
    department: "Product",
    budget: "$1,800",
    specifications: "AI Summit 2025, San Francisco, Full access pass",
    justification: "Networking and staying updated with industry trends",
  },
];

const OpenRequests = () => {
  return (
    <div className="space-y-6 mt-4">
      <div className="rounded-md border border-gray-700 overflow-hidden">
        <Table>
          <TableHeader className="bg-graphite/70">
            <TableRow className="hover:bg-graphite/90 border-gray-700">
              <TableHead className="text-gray-300 w-1/5">Item/Service</TableHead>
              <TableHead className="text-gray-300">Requester</TableHead>
              <TableHead className="text-gray-300">Department</TableHead>
              <TableHead className="text-gray-300">Budget</TableHead>
              <TableHead className="text-gray-300 w-1/4">Specifications</TableHead>
              <TableHead className="text-gray-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchaseRequests.map((request) => (
              <TableRow key={request.id} className="hover:bg-graphite/90 border-gray-700">
                <TableCell className="font-medium text-white">
                  {request.item}
                </TableCell>
                <TableCell className="text-gray-300">{request.requester}</TableCell>
                <TableCell className="text-gray-300">{request.department}</TableCell>
                <TableCell className="text-gray-300">{request.budget}</TableCell>
                <TableCell className="text-gray-300 text-sm">
                  <div className="max-h-12 overflow-y-auto">
                    <p>{request.specifications}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      <span className="font-semibold">Justification:</span> {request.justification}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm" className="text-green-500 hover:text-green-400 hover:bg-green-900/20">
                      <Check className="w-4 h-4" />
                      <span className="sr-only">Approve</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400 hover:bg-red-900/20">
                      <X className="w-4 h-4" />
                      <span className="sr-only">Reject</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-neon hover:text-neon/80 hover:bg-graphite/80">
                      <Edit className="w-4 h-4" />
                      <span className="sr-only">Modify</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OpenRequests;
