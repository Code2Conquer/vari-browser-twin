
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { User, LogIn, MessageSquare, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const UserProfileSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="z-50">
      {!isLoggedIn ? (
        <Button 
          onClick={handleLogin} 
          className="bg-neon/90 hover:bg-neon text-obsidian font-medium"
        >
          <LogIn className="w-4 h-4 mr-2" />
          Login
        </Button>
      ) : (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-graphite hover:bg-graphite/80 text-white">
                <User className="w-4 h-4 mr-2" />
                My Profile
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-graphite border border-neon/30 p-4 rounded-md min-w-[240px]">
                <div className="flex flex-col space-y-4">
                  <NavigationMenuLink asChild>
                    <Button 
                      variant="ghost" 
                      className="justify-start text-gray-300 hover:text-neon hover:bg-graphite/80"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Past Chats
                    </Button>
                  </NavigationMenuLink>
                  
                  <NavigationMenuLink asChild>
                    <Link to="/settings">
                      <Button 
                        variant="ghost" 
                        className="justify-start w-full text-gray-300 hover:text-neon hover:bg-graphite/80"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </Button>
                    </Link>
                  </NavigationMenuLink>
                  
                  <hr className="border-gray-700" />
                  
                  <Button 
                    variant="ghost" 
                    onClick={handleLogout}
                    className="justify-start text-gray-300 hover:text-red-400 hover:bg-graphite/80"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  );
};

export default UserProfileSection;
