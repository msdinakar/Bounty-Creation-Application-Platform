import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { StepIndicator } from "@/components/bounty/StepIndicator";
import { SidebarNav } from "@/components/bounty/SidebarNav";
import { MobilePreview } from "@/components/bounty/MobilePreview";
import { BriefStep } from "@/components/bounty/steps/BriefStep";
import { CriteriaStep } from "@/components/bounty/steps/CriteriaStep";
import { BackerStep } from "@/components/bounty/steps/BackerStep";
import { RewardsStep } from "@/components/bounty/steps/RewardsStep";
import { useNavigate } from "react-router-dom";

const STEPS = [
  { id: 1, label: "Brief" },
  { id: 2, label: "Criteria" },
  { id: 3, label: "Microtasks" },
  { id: 4, label: "Config" },
  { id: 5, label: "Backer" },
  { id: 6, label: "Rewards" },
];

const BountyWizard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({
    bountyMode: "digital",
  });

  const handleDataChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/success");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BriefStep data={formData} onChange={handleDataChange} />;
      case 2:
        return <CriteriaStep data={formData} onChange={handleDataChange} />;
      case 5:
        return <BackerStep data={formData} onChange={handleDataChange} />;
      case 6:
        return <RewardsStep data={formData} onChange={handleDataChange} />;
      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Step {currentStep}</h2>
            <p className="text-muted-foreground">
              This step is under construction. Click Next to continue.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <SidebarNav steps={STEPS} currentStep={currentStep} onStepClick={setCurrentStep} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-border bg-background">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => navigate("/")}
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <StepIndicator totalSteps={6} currentStep={currentStep} />
            <div className="w-8" /> {/* Spacer for alignment */}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-12">
              {/* Form */}
              <div className="max-w-2xl">
                {renderStep()}

                {/* Navigation Buttons */}
                <div className="mt-8 flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="min-w-[100px]"
                  >
                    Back
                  </Button>
                  <Button onClick={handleNext} className="min-w-[100px]">
                    {currentStep === STEPS.length ? "Publish Bounty" : "Next"}
                  </Button>
                </div>
              </div>

              {/* Mobile Preview */}
              <MobilePreview
                title={formData.title}
                description={formData.description}
                bountyType={formData.bountyType}
                sponsoredBy={formData.sponsorName}
                issuedBy={formData.issuedBy}
                criteria={formData.criteria?.filter((c: string) => c.trim()) || ["Criteria 1", "Criteria 2", "Criteria 3", "Criteria 4"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BountyWizard;