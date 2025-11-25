import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  totalSteps: number;
  currentStep: number;
}

export const StepIndicator = ({ totalSteps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-2 py-6">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={stepNumber} className="flex items-center">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-all",
                isActive && "bg-primary text-primary-foreground ring-4 ring-primary/20",
                isCompleted && "bg-primary text-primary-foreground",
                !isActive && !isCompleted && "bg-muted text-muted-foreground"
              )}
            >
              {isCompleted ? <CheckIcon className="h-4 w-4" /> : stepNumber}
            </div>
            {index < totalSteps - 1 && (
              <div className={cn(
                "mx-1 h-0.5 w-8",
                stepNumber < currentStep ? "bg-primary" : "bg-muted"
              )} />
            )}
          </div>
        );
      })}
    </div>
  );
};