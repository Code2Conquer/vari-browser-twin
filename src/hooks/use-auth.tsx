
import { useState, useEffect, createContext, useContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is logged in on initial load
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsAuthenticated(loggedInStatus);
  }, []);

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
