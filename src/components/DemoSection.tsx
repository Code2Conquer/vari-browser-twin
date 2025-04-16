import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Github, Share2, ShoppingCart } from "lucide-react";

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState("github");

  return (
    <section className="bg-graphite py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          See Varias AI in Action
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Experience how our copilot transforms your browsing experience across different scenarios.
        </p>
        
        <Tabs defaultValue="github" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="github" className="flex items-center gap-2">
              <Github size={18} />
              <span className="hidden sm:inline">GitHub PR</span>
            </TabsTrigger>
            <TabsTrigger value="rfp" className="flex items-center gap-2">
              <Share2 size={18} />
              <span className="hidden sm:inline">University Site</span>
            </TabsTrigger>
            <TabsTrigger value="shopping" className="flex items-center gap-2">
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">Amazon</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="glass-card border-electric/50 p-4 md:p-8">
            <TabsContent value="github" className="mt-0">
              <div className="bg-obsidian/80 rounded-lg p-4 h-[400px] overflow-hidden">
                <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <div className="flex items-center">
                    <Github className="mr-2 text-white" size={20} />
                    <span className="text-white font-mono text-sm">Pull Request #42: Update API endpoints</span>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  <div className="w-1/2 pr-2 border-r border-gray-700">
                    <pre className="text-red-400 text-xs"><code>- const API_URL = &apos;https://api.example.com/v1&apos;;</code></pre>
                    <pre className="text-green-400 text-xs"><code>+ const API_URL = &apos;https://api.example.com/v2&apos;;</code></pre>
                    <pre className="text-white text-xs mt-4"><code>
                    function fetchData() {"{"}
                      return fetch(`${"${API_URL}"}/data`)
                        .then(res => res.json());
                    {"}"}
                    </code></pre>
                  </div>
                  
                  <div className="w-1/2 pl-4">
                    <div className="p-3 bg-electric/10 border border-electric/30 rounded-lg mb-3">
                      <p className="text-sm text-white">
                        <span className="text-neon font-bold">Varias AI:</span> This PR updates the API endpoint from v1 to v2. 
                        You should check if all endpoints are compatible with the new version.
                      </p>
                    </div>
                    <div className="p-3 bg-neon/10 border border-neon/30 rounded-lg">
                      <p className="text-sm text-white">
                        <span className="text-neon font-bold">Suggested Action:</span> Run integration tests against v2 API to ensure compatibility.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8 animate-pulse-glow">
                  <p className="text-neon text-sm font-semibold">Varias AI is analyzing more code patterns...</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="rfp" className="mt-0">
              <div className="bg-obsidian/80 rounded-lg p-4 h-[400px] overflow-hidden">
                <div className="border-b border-gray-700 pb-2 mb-4">
                  <h3 className="text-white text-lg">Stanford University - Research Grants Portal</h3>
                </div>
                
                <div className="flex">
                  <div className="w-2/3 pr-4">
                    <div className="p-4 bg-gray-800 rounded-lg mb-4">
                      <h4 className="text-white text-md mb-2">Open RFP: AI Ethics Research</h4>
                      <p className="text-gray-400 text-sm mb-2">Stanford&apos;s Institute for Human-Centered AI is seeking proposals for research on ethical implications of autonomous agents in workplace settings.</p>
                      <ul className="text-gray-400 text-sm list-disc list-inside">
                        <li>Budget: $100,000 - $250,000</li>
                        <li>Duration: 12-18 months</li>
                        <li>Deadline: June 30, 2025</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="w-1/3">
                    <div className="p-3 bg-electric/10 border border-electric/30 rounded-lg mb-3">
                      <p className="text-sm text-white">
                        <span className="text-neon font-bold">Varias AI:</span> RFP detected! This matches your profile for AI ethics research.
                      </p>
                    </div>
                    <div className="p-3 bg-neon/10 border border-neon/30 rounded-lg mb-3">
                      <p className="text-sm text-white">
                        <span className="text-neon font-bold">Suggested Action:</span> Save to your RFP tracker or generate a proposal draft.
                      </p>
                    </div>
                    <Button variant="outline" className="w-full mt-2 border-neon text-neon hover:bg-neon/20">
                      Generate Draft Proposal
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shopping" className="mt-0">
              <div className="bg-obsidian/80 rounded-lg p-4 h-[400px] overflow-hidden">
                <div className="border-b border-gray-700 pb-2 mb-4">
                  <h3 className="text-white text-lg">Amazon - Smart Home Devices</h3>
                </div>
                
                <div className="flex">
                  <div className="w-2/3 pr-4">
                    <div className="flex mb-4">
                      <div className="w-1/3 bg-gray-800 rounded-lg p-2">
                        <div className="h-24 bg-gray-700 rounded mb-2"></div>
                        <p className="text-white text-xs">Smart Speaker Pro</p>
                        <p className="text-electric text-xs">$129.99</p>
                      </div>
                      <div className="w-1/3 mx-2 bg-gray-800 rounded-lg p-2">
                        <div className="h-24 bg-gray-700 rounded mb-2"></div>
                        <p className="text-white text-xs">Smart Display 10&quot;</p>
                        <p className="text-electric text-xs">$249.99</p>
                      </div>
                      <div className="w-1/3 bg-gray-800 rounded-lg p-2">
                        <div className="h-24 bg-gray-700 rounded mb-2"></div>
                        <p className="text-white text-xs">Smart Hub</p>
                        <p className="text-electric text-xs">$89.99</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-1/3">
                    <div className="p-3 bg-electric/10 border border-electric/30 rounded-lg mb-3">
                      <p className="text-sm text-white">
                        <span className="text-neon font-bold">Varias AI:</span> Better deal found! Smart Speaker Pro is $99.99 at Best Buy.
                      </p>
                    </div>
                    <div className="p-3 bg-neon/10 border border-neon/30 rounded-lg mb-3">
                      <p className="text-sm text-white">
                        <span className="text-neon font-bold">Reviews Summary:</span> 4.5/5 from 2,302 verified buyers. Most praise sound quality.
                      </p>
                    </div>
                    <Button variant="outline" className="w-full mt-2 border-neon text-neon hover:bg-neon/20">
                      Compare All Prices
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
        
        <div className="text-center mt-12">
          <Button className="bg-electric hover:bg-electric/80 text-white font-bold py-3 px-6 rounded-md text-lg">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
