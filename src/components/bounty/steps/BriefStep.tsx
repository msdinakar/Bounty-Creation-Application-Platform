import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InfoIcon } from "lucide-react";

interface BriefStepProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

export const BriefStep = ({ data, onChange }: BriefStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-1">Bounty Title</h2>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="description">Bounty Description</Label>
          <InfoIcon className="h-4 w-4 text-muted-foreground" />
        </div>
        <Textarea
          id="description"
          placeholder="Briefly describe what the bounty does"
          value={data.description || ""}
          onChange={(e) => onChange("description", e.target.value)}
          className="min-h-[120px] resize-none"
          maxLength={1000}
        />
        <p className="text-xs text-muted-foreground text-right">
          character limit: {data.description?.length || 0}/1000
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="project">Project</Label>
        <Select value={data.project} onValueChange={(value) => onChange("project", value)}>
          <SelectTrigger id="project">
            <SelectValue placeholder="Choose a project to link the bounty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="project1">Project Alpha</SelectItem>
            <SelectItem value="project2">Project Beta</SelectItem>
            <SelectItem value="project3">Project Gamma</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label>Bounty Type</Label>
            <InfoIcon className="h-4 w-4 text-muted-foreground" />
          </div>
          <Select value={data.bountyType} onValueChange={(value) => onChange("bountyType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Choose category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="development">Development</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="research">Research</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label>Impact Core</Label>
            <InfoIcon className="h-4 w-4 text-muted-foreground" />
          </div>
          <Select value={data.impactCore} onValueChange={(value) => onChange("impactCore", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Choose core" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="social">Social Impact</SelectItem>
              <SelectItem value="environmental">Environmental</SelectItem>
              <SelectItem value="economic">Economic</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Label>Bounty Mode</Label>
          <InfoIcon className="h-4 w-4 text-muted-foreground" />
        </div>
        <RadioGroup
          value={data.bountyMode || "digital"}
          onValueChange={(value) => onChange("bountyMode", value)}
          className="flex gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="digital" id="digital" />
            <Label htmlFor="digital" className="font-normal cursor-pointer">
              Digital Bounty
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="physical" id="physical" />
            <Label htmlFor="physical" className="font-normal cursor-pointer">
              Physical Bounty
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};