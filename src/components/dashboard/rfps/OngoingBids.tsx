
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Mail } from "lucide-react";

// Mock data for ongoing bids
const ongoingBids = [
  {
    id: 1,
    title: "Cloud Infrastructure Upgrade",
    client: "Acme Corp",
    submittedDate: "2025-03-15",
    status: "submitted",
    value: "$150,000",
    docsRequired: false,
  },
  {
    id: 2,
    title: "IT Security Assessment",
    client: "TechGlobal Inc",
    submittedDate: "2025-02-28",
    status: "won",
    value: "$85,000",
    docsRequired: false,
  },
  {
    id: 3,
    title: "Data Center Migration",
    client: "Finance Solutions LLC",
    submittedDate: "2025-04-01",
    status: "lost",
    value: "$230,000",
    docsRequired: false,
  },
  {
    id: 4,
    title: "AI Implementation Project",
    client: "Healthcare Partners",
    submittedDate: "2025-03-22",
    status: "submitted",
    value: "$175,000",
    docsRequired: true,
  },
  {
    id: 5,
    title: "Network Infrastructure Upgrade",
    client: "Education Systems",
    submittedDate: "2025-04-05",
    status: "submitted",
    value: "$120,000",
    docsRequired: true,
  },
];

// Helper function to render status badge
const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case "submitted":
      return <Badge className="bg-blue-600 hover:bg-blue-700">Submitted</Badge>;
    case "won":
      return <Badge className="bg-green-600 hover:bg-green-700">Won</Badge>;
    case "lost":
      return <Badge className="bg-red-600 hover:bg-red-700">Lost</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const OngoingBids = () => {
  return (
    <div className="space-y-6 mt-4">
      <div className="rounded-md border border-gray-700 overflow-hidden">
        <Table>
          <TableHeader className="bg-graphite/70">
            <TableRow className="hover:bg-graphite/90 border-gray-700">
              <TableHead className="text-gray-300">Bid Title</TableHead>
              <TableHead className="text-gray-300">Client</TableHead>
              <TableHead className="text-gray-300">Submitted</TableHead>
              <TableHead className="text-gray-300">Value</TableHead>
              <TableHead className="text-gray-300">Status</TableHead>
              <TableHead className="text-gray-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ongoingBids.map((bid) => (
              <TableRow key={bid.id} className="hover:bg-graphite/90 border-gray-700">
                <TableCell className="font-medium text-white">
                  {bid.title}
                  {bid.docsRequired && (
                    <Badge variant="outline" className="ml-2 border-yellow-500 text-yellow-500">
                      Docs Required
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-gray-300">{bid.client}</TableCell>
                <TableCell className="text-gray-300">{bid.submittedDate}</TableCell>
                <TableCell className="text-gray-300">{bid.value}</TableCell>
                <TableCell>
                  <StatusBadge status={bid.status} />
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-neon hover:text-neon/80 hover:bg-graphite/80">
                      <Edit className="w-4 h-4 mr-1" />
                      <span className="sr-only md:not-sr-only md:inline-block">Edit</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-neon hover:text-neon/80 hover:bg-graphite/80">
                      <Mail className="w-4 h-4 mr-1" />
                      <span className="sr-only md:not-sr-only md:inline-block">Reply</span>
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

export default OngoingBids;
