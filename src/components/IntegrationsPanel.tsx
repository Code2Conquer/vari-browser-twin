
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Link2,
  Link2Off,
  RefreshCw,
  Check,
  Slack,
  Github,
  FileText,
  Calendar,
  Mail,
  Trello,
} from "lucide-react";

interface IntegrationItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  connected?: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}

const IntegrationItem = ({
  title,
  description,
  icon,
  connected = false,
  onConnect,
  onDisconnect,
}: IntegrationItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-graphite/30 rounded-lg border border-graphite/50">
      <div className="flex items-center space-x-4">
        <div className="bg-obsidian p-3 rounded-full">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium text-white flex items-center gap-2">
            {title}
            {connected && <Check size={16} className="text-green-500" />}
          </h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
      <Button
        variant={connected ? "outline" : "default"}
        onClick={connected ? onDisconnect : onConnect}
        className={
          connected
            ? "border-red-500/50 hover:border-red-500 hover:text-red-500"
            : "bg-electric hover:bg-electric/80 text-white"
        }
      >
        {connected ? (
          <>
            <Link2Off size={16} className="mr-2" />
            Disconnect
          </>
        ) : (
          <>
            <Link2 size={16} className="mr-2" />
            Connect
          </>
        )}
      </Button>
    </div>
  );
};

const IntegrationsPanel = () => {
  const { toast } = useToast();
  const [connectedServices, setConnectedServices] = useState<string[]>([
    "Google Calendar",
  ]);

  const handleConnect = (serviceName: string) => {
    if (!connectedServices.includes(serviceName)) {
      setConnectedServices([...connectedServices, serviceName]);
      toast({
        title: "Service connected",
        description: `${serviceName} has been successfully connected.`,
      });
    }
  };

  const handleDisconnect = (serviceName: string) => {
    setConnectedServices(connectedServices.filter((s) => s !== serviceName));
    toast({
      title: "Service disconnected",
      description: `${serviceName} has been disconnected.`,
      variant: "destructive",
    });
  };

  const integrations = [
    {
      title: "Google Mail",
      description: "Connect your Gmail account to manage emails",
      icon: <Mail size={24} className="text-neon" />,
      id: "Google Mail",
    },
    {
      title: "Google Calendar",
      description: "Schedule and manage your events and meetings",
      icon: <Calendar size={24} className="text-neon" />,
      id: "Google Calendar",
    },
    {
      title: "Google Drive",
      description: "Access and manage your documents and files",
      icon: <FileText size={24} className="text-neon" />,
      id: "Google Drive",
    },
    {
      title: "Slack",
      description: "Connect your Slack workspace for communication",
      icon: <Slack size={24} className="text-neon" />,
      id: "Slack",
    },
    {
      title: "Jira",
      description: "Manage your tasks and projects with Jira",
      icon: <Trello size={24} className="text-neon" />,
      id: "Jira",
    },
    {
      title: "GitHub",
      description: "Access your GitHub repositories and issues",
      icon: <Github size={24} className="text-neon" />,
      id: "GitHub",
    },
  ];

  return (
    <div className="space-y-4">
      {integrations.map((integration) => (
        <IntegrationItem
          key={integration.id}
          title={integration.title}
          description={integration.description}
          icon={integration.icon}
          connected={connectedServices.includes(integration.id)}
          onConnect={() => handleConnect(integration.id)}
          onDisconnect={() => handleDisconnect(integration.id)}
        />
      ))}

      <div className="mt-8 p-4 border border-dashed border-gray-600 rounded-lg">
        <h3 className="text-lg font-medium text-white mb-2">Add Custom Integration</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="integration-name" className="text-gray-300">Integration Name</Label>
            <Input
              id="integration-name"
              placeholder="Enter integration name"
              className="bg-graphite/50 border-graphite/70 mt-1"
            />
          </div>
          <div>
            <Label htmlFor="integration-url" className="text-gray-300">API URL</Label>
            <Input
              id="integration-url"
              placeholder="https://"
              className="bg-graphite/50 border-graphite/70 mt-1"
            />
          </div>
          <Button className="bg-electric hover:bg-electric/80 text-white">
            Add Integration
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPanel;
