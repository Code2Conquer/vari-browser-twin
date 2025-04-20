
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Loader2 } from "lucide-react";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"email" | "mobile">("email");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const { toast } = useToast();

  const handleSendOtp = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsOtpSent(true);
      toast({
        title: "OTP Sent",
        description: `A verification code has been sent to your ${loginMethod === "email" ? "email" : "mobile"}`,
      });
    }, 1500);
  };

  const handleLogin = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Mock successful login
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/dashboard";
      
      toast({
        title: "Login Successful",
        description: "Welcome to Varias AI Dashboard",
      });
    }, 1500);
  };

  return (
    <div className="w-full max-w-md space-y-6 bg-graphite/80 p-6 rounded-lg border border-neon/20">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Welcome to Varias<span className="text-neon">AI</span></h2>
        <p className="text-gray-400">Login or create an account to continue</p>
      </div>

      {!isOtpSent ? (
        <>
          <Tabs defaultValue="email" className="w-full" onValueChange={(value) => setLoginMethod(value as "email" | "mobile")}>
            <TabsList className="grid w-full grid-cols-2 bg-obsidian">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="email" className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-300">Email Address</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-obsidian border-gray-700 text-white"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="mobile" className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="mobile" className="text-sm text-gray-300">Mobile Number</label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="bg-obsidian border-gray-700 text-white"
                />
              </div>
            </TabsContent>
          </Tabs>

          <Button 
            className="w-full bg-neon hover:bg-neon/90 text-obsidian"
            onClick={handleSendOtp}
            disabled={isLoading || (loginMethod === "email" ? !email : !mobile)}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending OTP...
              </>
            ) : (
              "Get Verification Code"
            )}
          </Button>
        </>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="otp" className="text-sm text-gray-300">Enter Verification Code</label>
            <div className="flex justify-center py-4">
              <InputOTP
                value={otp}
                onChange={setOtp}
                maxLength={6}
                render={({ slots }) => (
                  <InputOTPGroup>
                    {slots.map((slot, index) => (
                      <InputOTPSlot key={index} {...slot} className="bg-obsidian border-gray-700 text-white" />
                    ))}
                  </InputOTPGroup>
                )}
              />
            </div>
            <div className="text-center text-sm">
              <button 
                onClick={() => setIsOtpSent(false)} 
                className="text-neon hover:underline"
              >
                Change {loginMethod === "email" ? "email" : "mobile"} or resend code
              </button>
            </div>
          </div>

          <Button 
            className="w-full bg-neon hover:bg-neon/90 text-obsidian"
            onClick={handleLogin}
            disabled={isLoading || otp.length < 6}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </div>
      )}

      <div className="text-center text-sm text-gray-400">
        By continuing, you agree to Varias AI's{" "}
        <a href="#" className="text-neon hover:underline">Terms of Service</a>
        {" "}and{" "}
        <a href="#" className="text-neon hover:underline">Privacy Policy</a>
      </div>
    </div>
  );
};

export default LoginForm;
