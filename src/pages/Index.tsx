import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { PlusCircle, TrendingUp, Award, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block animate-in fade-in slide-in-from-top duration-500">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Award className="h-4 w-4" />
              Impact Miner Platform
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground animate-in fade-in slide-in-from-bottom duration-700 tracking-tight">
            Create Meaningful
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}
              Bounties
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Launch impact-driven bounties, reward contributors, and build a community around your projects with our comprehensive bounty management system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button
              size="lg"
              onClick={() => navigate("/bounty")}
              className="gap-2 text-base h-12 px-8"
            >
              <PlusCircle className="h-5 w-5" />
              Create New Bounty
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base h-12 px-8"
            >
              View Documentation
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-24">
          <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Multi-Step Wizard</h3>
            <p className="text-muted-foreground text-sm">
              Intuitive 6-step process to create comprehensive bounties with all necessary details.
            </p>
          </div>

          <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Reward System</h3>
            <p className="text-muted-foreground text-sm">
              Flexible reward configuration with impact points, certificates, and monetary compensation.
            </p>
          </div>

          <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Sponsor Integration</h3>
            <p className="text-muted-foreground text-sm">
              Showcase sponsors and backers with custom logos and messages on your bounties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;