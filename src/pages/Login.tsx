
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import FooterSection from "@/components/FooterSection";

const Login = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-obsidian flex flex-col">
      <header className="py-6">
        <div className="container mx-auto px-4">
          <div 
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            Varias<span className="text-neon">AI</span>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center py-12">
        <LoginForm />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Login;
