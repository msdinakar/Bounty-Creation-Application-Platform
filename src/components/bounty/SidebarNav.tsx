import { cn } from "@/lib/utils";

interface Step {
  id: number;
  label: string;
}

interface SidebarNavProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export const SidebarNav = ({ steps, currentStep, onStepClick }: SidebarNavProps) => {
  return (
    <div className="w-64 bg-sidebar-bg border-r border-border p-6">
      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Bounty Steps
        </p>
      </div>
      <nav className="space-y-1">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => onStepClick?.(step.id)}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
              step.id === currentStep
                ? "bg-primary/10 text-primary"
                : step.id < currentStep
                ? "text-foreground hover:bg-secondary"
                : "text-muted-foreground hover:bg-secondary"
            )}
          >
            <span
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold",
                step.id === currentStep
                  ? "bg-primary text-primary-foreground"
                  : step.id < currentStep
                  ? "bg-muted text-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {step.id}
            </span>
            {step.label}
          </button>
        ))}
      </nav>
    </div>
  );
};