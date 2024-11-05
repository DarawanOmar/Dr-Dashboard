"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type CustomPopoverProps = {
  children: React.ReactNode;
  title: React.ReactNode | string;
  asChild?: boolean;
  className?: string;
  classNameTitle?: string;
  side?: "top" | "bottom" | "left" | "right";
};

function CustomPopover({
  children,
  title,
  className,
  side,
  classNameTitle,
  asChild = true,
}: CustomPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger className={cn("", classNameTitle)} asChild={asChild}>
        {title}
      </PopoverTrigger>
      <PopoverContent
        side={side}
        className={cn("max-w-max  rounded-xl p-3", className)}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}

export default CustomPopover;
