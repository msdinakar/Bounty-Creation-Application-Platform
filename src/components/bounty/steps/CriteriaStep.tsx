import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface CriteriaStepProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

export const CriteriaStep = ({ data, onChange }: CriteriaStepProps) => {
  const [criteria, setCriteria] = useState<string[]>(data.criteria || ["", "", "", ""]);

  const updateCriterion = (index: number, value: string) => {
    const updated = [...criteria];
    updated[index] = value;
    setCriteria(updated);
    onChange("criteria", updated);
  };

  const addCriterion = () => {
    const updated = [...criteria, ""];
    setCriteria(updated);
    onChange("criteria", updated);
  };

  const removeCriterion = (index: number) => {
    const updated = criteria.filter((_, i) => i !== index);
    setCriteria(updated);
    onChange("criteria", updated);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-1">Criteria for Completion</h2>
        <p className="text-sm text-muted-foreground">
          Define the criteria that participants must meet to complete the bounty
        </p>
      </div>

      <div className="space-y-4">
        {criteria.map((criterion, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium flex-shrink-0 mt-1">
              {index + 1}
            </div>
            <div className="flex-1 space-y-1">
              <Input
                placeholder={`Criterion ${index + 1}`}
                value={criterion}
                onChange={(e) => updateCriterion(index, e.target.value)}
              />
            </div>
            {criteria.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeCriterion(index)}
                className="flex-shrink-0 mt-1"
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            )}
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        onClick={addCriterion}
        className="gap-2"
      >
        <Plus className="h-4 w-4" />
        Add Another Criterion
      </Button>
    </div>
  );
};