
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Settings, 
  X, 
  Bell, 
  Link,
  Shield,
  Layers, 
  Globe, 
  CircleSlash,
  AlertCircle
} from "lucide-react";
import IntegrationsPanel from "./IntegrationsPanel";
import { useToast } from "@/hooks/use-toast";

const SettingsSection = () => {
  const { toast } = useToast();
  const [isTabsEnabled, setIsTabsEnabled] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isPrivacyConsentGiven, setIsPrivacyConsentGiven] = useState(true);

  const handleSavePreferences = () => {
    toast({
      title: "Preferences saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="bg-graphite/50 backdrop-blur-md rounded-lg p-6 shadow-xl border border-graphite/30">
      <Tabs defaultValue="integrations" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8 bg-graphite/50">
          <TabsTrigger value="integrations" className="flex items-center gap-2">
            <Link size={16} />
            <span>Integrations</span>
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center gap-2">
            <Settings size={16} />
            <span>Preferences</span>
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <Shield size={16} />
            <span>Privacy</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="integrations" className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">Connect Your Services</h2>
          <p className="text-gray-400 mb-8">
            Enhance your Varias<span className="text-neon">AI</span> experience by connecting your favorite services.
            This allows your copilots to access and integrate with your workflow.
          </p>
          
          <IntegrationsPanel />
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">Customize Your Experience</h2>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-graphite/30 p-4 rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Layers size={18} className="text-neon" />
                  <h3 className="text-lg font-medium text-white">Enable Tabs</h3>
                </div>
                <p className="text-sm text-gray-400">
                  Allow Varias<span className="text-neon">AI</span> to manage multiple tabs in your browser
                </p>
              </div>
              <Switch 
                checked={isTabsEnabled} 
                onCheckedChange={setIsTabsEnabled}
                className="data-[state=checked]:bg-neon" 
              />
            </div>

            <div className="flex items-center justify-between bg-graphite/30 p-4 rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Bell size={18} className="text-neon" />
                  <h3 className="text-lg font-medium text-white">Notifications</h3>
                </div>
                <p className="text-sm text-gray-400">
                  Receive notifications from Varias<span className="text-neon">AI</span>
                </p>
              </div>
              <Switch 
                checked={isNotificationsEnabled} 
                onCheckedChange={setIsNotificationsEnabled}
                className="data-[state=checked]:bg-neon" 
              />
            </div>

            <div className="flex items-center justify-between bg-graphite/30 p-4 rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Globe size={18} className="text-neon" />
                  <h3 className="text-lg font-medium text-white">Language Preference</h3>
                </div>
                <p className="text-sm text-gray-400">
                  Choose your preferred language for the interface
                </p>
              </div>
              <div className="w-40">
                <select className="w-full bg-graphite text-white rounded px-3 py-2 border border-graphite/70">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Button 
              onClick={handleSavePreferences}
              className="bg-neon hover:bg-neon/90 text-obsidian font-medium"
            >
              Save Preferences
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">Privacy Settings</h2>
          
          <div className="space-y-6">
            <div className="space-y-1 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <CircleSlash size={18} className="text-neon" />
                <h3 className="text-lg font-medium text-white">Opt-out Settings</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Control how Varias<span className="text-neon">AI</span> interacts with your data
              </p>
              
              <div className="space-y-4 ml-2">
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="data-collection" 
                    checked={!isPrivacyConsentGiven}
                    onCheckedChange={(checked) => setIsPrivacyConsentGiven(!checked)}
                    className="mt-1"
                  />
                  <div className="space-y-1">
                    <Label htmlFor="data-collection" className="text-white">
                      Opt out of data collection
                    </Label>
                    <p className="text-xs text-gray-400">
                      Prevents Varias<span className="text-neon">AI</span> from collecting data about your usage patterns
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox id="personalization" className="mt-1" />
                  <div className="space-y-1">
                    <Label htmlFor="personalization" className="text-white">
                      Opt out of personalization
                    </Label>
                    <p className="text-xs text-gray-400">
                      Prevents Varias<span className="text-neon">AI</span> from personalizing your experience based on your behavior
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox id="third-party" className="mt-1" />
                  <div className="space-y-1">
                    <Label htmlFor="third-party" className="text-white">
                      Opt out of third-party sharing
                    </Label>
                    <p className="text-xs text-gray-400">
                      Prevents Varias<span className="text-neon">AI</span> from sharing your data with third parties
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <Button 
                onClick={handleSavePreferences}
                className="bg-neon hover:bg-neon/90 text-obsidian font-medium"
              >
                Save Privacy Settings
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsSection;
