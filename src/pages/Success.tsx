import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center space-y-6 p-8 max-w-md">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <CheckCircle2 className="h-24 w-24 text-primary relative animate-in zoom-in duration-500" />
          </div>
        </div>
        
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl font-bold text-foreground">
            Bounty is published and live on Impact Miner!
          </h1>
        </div>

        <div className="pt-4 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <Button
            size="lg"
            className="w-full"
            onClick={() => navigate("/bounty")}
          >
            View Bounty
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full"
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;