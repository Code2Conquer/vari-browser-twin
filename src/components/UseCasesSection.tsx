import { Code, FileSearch, ShoppingBag } from "lucide-react";
const UseCasesSection = () => {
  return <section className="bg-obsidian py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">For Work, Play and Everything Between</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Varias AI adapts to every scenario, becoming more valuable the more you use it.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div className="flex items-start">
              <div className="p-3 bg-electric/20 rounded-lg mr-4">
                <Code className="text-electric" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-neon">Developers: Ship code faster</h3>
                <p className="text-gray-400">Automatically review PRs, generate documentation and catch bugs before they make it to production. Integrates with GitHub, GitLab and more.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 bg-electric/20 rounded-lg mr-4">
                <FileSearch className="text-electric" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-neon">Procurement Teams: Never miss an RFP</h3>
                <p className="text-gray-400">Automatically detect and create bids for RFPs from government and university sites. Get insights into compliance, requirements and deadlines at a glance.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 bg-electric/20 rounded-lg mr-4">
                <ShoppingBag className="text-electric" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-neon">Shoppers: Find deals in seconds</h3>
                <p className="text-gray-400">Compare prices across multiple sites, read summarized reviews and get alerts when prices drop on items you're watching.</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card border-electric/30 p-6 h-[500px] overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="w-full max-w-md p-4 bg-graphite/70 backdrop-blur-sm rounded-lg border border-neon/30 shadow-neon">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="space-y-3 text-left">
                  <p className="text-gray-400 text-sm">Browsing GitHub Pull Request #127</p>
                  <div className="glass-card border-electric/20 p-3">
                    <p className="text-white text-sm">
                      <span className="text-neon font-semibold">Varias AI:</span> This PR updates the database schema. I've analyzed the migrations and found 2 potential issues:
                    </p>
                    <ul className="text-gray-300 text-sm list-disc list-inside mt-2">
                      <li>Missing index on frequently queried column</li>
                      <li>Foreign key constraint needs ON DELETE CASCADE</li>
                    </ul>
                  </div>
                  
                  <div className="glass-card border-neon/20 p-3">
                    <p className="text-white text-sm">
                      <span className="text-neon font-semibold">Suggested Fix:</span>
                    </p>
                    <pre className="text-xs bg-obsidian p-2 rounded mt-2 text-green-400">
                      <code>
                        CREATE INDEX idx_user_email ON users(email);<br />
                        ALTER TABLE posts ADD CONSTRAINT fk_user<br />
                        FOREIGN KEY (user_id) REFERENCES users(id)<br />
                        ON DELETE CASCADE;
                      </code>
                    </pre>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="text-neon text-sm hover:underline">Apply Fix</button>
                    <button className="text-gray-400 text-sm ml-4 hover:underline">Ignore</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default UseCasesSection;