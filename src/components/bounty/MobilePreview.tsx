import { cn } from "@/lib/utils";
import { Battery, Signal, Wifi } from "lucide-react";

interface MobilePreviewProps {
  title?: string;
  description?: string;
  bountyType?: string;
  sponsoredBy?: string;
  issuedBy?: string;
  criteria?: string[];
}

export const MobilePreview = ({
  title = "[Bounty Title] appears here",
  description = "Your bounty's description appears here",
  bountyType,
  sponsoredBy,
  issuedBy,
  criteria = ["Criteria 1", "Criteria 2", "Criteria 3", "Criteria 4"],
}: MobilePreviewProps) => {
  return (
    <div className="hidden lg:block sticky top-6">
      <div className="relative mx-auto w-[280px]">
        {/* Phone Frame */}
        <div className="rounded-[2.5rem] bg-gradient-to-b from-gray-800 to-gray-900 p-3 shadow-2xl">
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2rem] bg-white">
            {/* Status Bar */}
            <div className="flex items-center justify-between bg-primary px-4 py-2 text-white">
              <span className="text-xs font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <Signal className="h-3 w-3" />
                <Wifi className="h-3 w-3" />
                <Battery className="h-3 w-3" />
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center gap-2 bg-primary px-4 py-3 text-white">
              <button className="text-white">←</button>
              <span className="flex-1 text-center font-medium">Bounty</span>
              <button className="text-white">⋮</button>
            </div>

            {/* Content */}
            <div className="h-[420px] overflow-y-auto bg-gray-50 p-4">
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900">{title}</h3>
                <p className="text-xs text-gray-600">{description}</p>

                {bountyType && (
                  <div className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700 inline-block">
                    {bountyType}
                  </div>
                )}

                {sponsoredBy && (
                  <div className="rounded-lg bg-blue-100 px-3 py-1.5 text-xs">
                    <span className="text-gray-600">Sponsored by</span>
                    <p className="font-medium text-gray-900">{sponsoredBy}</p>
                  </div>
                )}

                {issuedBy && (
                  <div className="rounded-lg bg-blue-100 px-3 py-1.5 text-xs">
                    <span className="text-gray-600">Initiated by</span>
                    <p className="font-medium text-gray-900">{issuedBy}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-orange-100 px-2 py-0.5 text-xs text-orange-700">
                      Token Name
                    </div>
                    <span className="text-xs font-medium">00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                      Impact Points
                    </div>
                    <span className="text-xs font-medium">00</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-medium text-gray-900">Criteria for completion</p>
                  {criteria.map((criterion, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white text-[10px]">
                        {index + 1}
                      </span>
                      {criterion}
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="text-xs text-gray-600 mb-1">Impact Miner Preview</p>
                  <button className="w-full rounded-lg bg-primary py-2 text-sm font-medium text-white">
                    Add Deliverables & Tips
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};