import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { InfoIcon } from "lucide-react";

interface RewardsStepProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

export const RewardsStep = ({ data, onChange }: RewardsStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-1">Bounty Reward</h2>
        <p className="text-sm text-muted-foreground">
          Choose bounty reward token and set the amount
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>What is your budget for this bounty?</Label>
          <div className="flex gap-2">
            <Select value={data.currency || "INR"} onValueChange={(value) => onChange("currency", value)}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="INR">₹ INR</SelectItem>
                <SelectItem value="USD">$ USD</SelectItem>
                <SelectItem value="EUR">€ EUR</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="number"
              value={data.budget || ""}
              onChange={(e) => onChange("budget", e.target.value)}
              placeholder="12,000"
              className="flex-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>How many winners?</Label>
          <Input
            type="number"
            value={data.winners || ""}
            onChange={(e) => onChange("winners", e.target.value)}
            placeholder="3"
          />
          <p className="text-xs text-muted-foreground">in USD: 420</p>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Each winner will be awarded:</Label>
        <Input
          type="number"
          value={data.perWinner || ""}
          onChange={(e) => onChange("perWinner", e.target.value)}
          placeholder="500"
        />
      </div>

      <div className="space-y-2">
        <Label>Maximum Impact Points allocated</Label>
        <Input
          type="number"
          value={data.impactPoints || ""}
          onChange={(e) => onChange("impactPoints", e.target.value)}
          placeholder="175"
        />
      </div>

      <div className="space-y-2">
        <Label>Set Failure Threshold %</Label>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={data.failureThreshold || ""}
            onChange={(e) => onChange("failureThreshold", e.target.value)}
            placeholder="Enter the points %"
          />
          <InfoIcon className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label>Impact Certificate</Label>
            <InfoIcon className="h-4 w-4 text-muted-foreground" />
          </div>
          <Switch
            checked={data.impactCertificate || false}
            onCheckedChange={(checked) => onChange("impactCertificate", checked)}
          />
        </div>
        <p className="text-xs text-muted-foreground">
          Do you wish to issue impact certificates for this bounty?
        </p>
      </div>

      {data.impactCertificate && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label>Impact Certificate Blurb</Label>
            <InfoIcon className="h-4 w-4 text-muted-foreground" />
          </div>
          <Textarea
            placeholder="Enter blurb copy, this will appear on the issued certificate"
            value={data.certificateBlurb || ""}
            onChange={(e) => onChange("certificateBlurb", e.target.value)}
            className="min-h-[80px] resize-none"
            maxLength={100}
          />
          <p className="text-xs text-muted-foreground text-right">
            Max 100 characters
          </p>
        </div>
      )}

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label>SDGs</Label>
          <InfoIcon className="h-4 w-4 text-muted-foreground" />
        </div>
        <Select value={data.sdgs} onValueChange={(value) => onChange("sdgs", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Choose sdgs & secondary SDGs (optional)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sdg1">No Poverty</SelectItem>
            <SelectItem value="sdg2">Zero Hunger</SelectItem>
            <SelectItem value="sdg3">Good Health</SelectItem>
            <SelectItem value="sdg13">Climate Action</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};