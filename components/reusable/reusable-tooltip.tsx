import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import React from "react";

type Props = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
};

function ReusableToolTip({ children, trigger, side, className }: Props) {
  return (
    <TooltipProvider delayDuration={10}>
      <Tooltip>
        <TooltipTrigger className="flex justify-center items-center">
          {trigger}
        </TooltipTrigger>
        <TooltipContent
          className={cn("border-none shadow-none bg-transparent ", className)}
          side={side}
        >
          <p className="text-xs">{children}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ReusableToolTip;
