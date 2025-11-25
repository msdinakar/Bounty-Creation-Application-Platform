import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Upload, X } from "lucide-react";
import { useState } from "react";

interface BackerStepProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

export const BackerStep = ({ data, onChange }: BackerStepProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        onChange("sponsorLogo", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-1">
          Does the bounty have a sponsor or backer?
        </h2>
        <p className="text-sm text-muted-foreground">
          Select this option if you wish to display the bounty sponsor/backer's logo and name on the bounty
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Switch
          id="has-sponsor"
          checked={data.hasSponsor || false}
          onCheckedChange={(checked) => onChange("hasSponsor", checked)}
        />
        <Label htmlFor="has-sponsor" className="text-sm font-normal">
          Enable sponsor/backer display
        </Label>
      </div>

      {data.hasSponsor && (
        <>
          <div className="space-y-2">
            <Label htmlFor="sponsor-name">
              Enter sponsor or backer's name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="sponsor-name"
              placeholder="Mention the name that will appear on bounties & impact certs"
              value={data.sponsorName || ""}
              onChange={(e) => onChange("sponsorName", e.target.value)}
              maxLength={35}
            />
            <p className="text-xs text-muted-foreground text-right">
              (character limit: {data.sponsorName?.length || 0}/35)
            </p>
          </div>

          <div className="space-y-2">
            <Label>
              Upload sponsor or backer's logo <span className="text-destructive">*</span>
            </Label>
            
            {!preview ? (
              <label
                htmlFor="logo-upload"
                className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-8 cursor-pointer hover:border-primary transition-colors"
              >
                <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-sm font-medium text-foreground">click to choose files</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Max file size: 2 MB ; Ideal dimensions: 20×20 px
                </p>
                <input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            ) : (
              <div className="relative inline-block">
                <img
                  src={preview}
                  alt="Sponsor logo"
                  className="h-24 w-24 object-contain border border-border rounded-lg"
                />
                <button
                  onClick={() => {
                    setPreview(null);
                    onChange("sponsorLogo", null);
                  }}
                  className="absolute -top-2 -right-2 bg-destructive text-white rounded-full p-1 hover:bg-destructive/90"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="sponsor-message">Enter Sponsor Message</Label>
            <Textarea
              id="sponsor-message"
              placeholder="Add sponsor message if any, optional"
              value={data.sponsorMessage || ""}
              onChange={(e) => onChange("sponsorMessage", e.target.value)}
              className="min-h-[100px] resize-none"
              maxLength={80}
            />
            <p className="text-xs text-muted-foreground text-right">
              (character limit: {data.sponsorMessage?.length || 0}/80)
            </p>
          </div>
        </>
      )}
    </div>
  );
};