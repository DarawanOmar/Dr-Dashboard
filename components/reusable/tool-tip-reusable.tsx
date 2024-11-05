"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface TooltipWrapperProps {
  children: React.ReactNode;
  content: React.ReactNode;
  hidden?: boolean;
  className?: string;
}

export function TooltipWrapper({
  children,
  content,
  hidden = false,
  className,
}: TooltipWrapperProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side="left"
          hidden={hidden}
          className={cn("bg-black text-white", className)}
        >
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
