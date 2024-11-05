"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { IoClose } from "react-icons/io5";
import { DialogProps } from "@radix-ui/react-dialog";
import React from "react";

type Props = {
  header?: React.ReactNode | string;
  title?: string[];
  isButtonChildren?: boolean;
  button?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  closeButton?: boolean;
  icon?: React.ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  classButton?: string;
  disableTrigger?: boolean;
  onClick?: () => void;
  onEventButton?: () => void;
  onCloseButton?: () => void;
  onOpenChange?: DialogProps["onOpenChange"];
  open?: boolean;
  notTrigger?: boolean;
  classHeader?: string;
  iconheader?: React.ReactNode;
  dialogContentRef?: React.RefObject<HTMLDivElement>;
};

export default function CustomDialogWithTrigger({
  title = [],
  className,
  children,
  closeButton = true,
  variant = "ghost",
  icon,
  onClick,
  classButton,
  onEventButton,
  onOpenChange,
  disableTrigger = false,
  open,
  header,
  notTrigger,
  classHeader,
  iconheader,
  size,
  onCloseButton,
  button,
  isButtonChildren = false,
  dialogContentRef,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {!notTrigger && (
        <DialogTrigger
          onClick={onClick}
          className={cn("", {
            "pointer-events-none": disableTrigger,
          })}
          asChild
        >
          {isButtonChildren ? (
            button
          ) : (
            <button onClick={onEventButton} className={cn("flex", classButton)}>
              {icon}
              {title?.length > 0 && title}
            </button>
          )}
        </DialogTrigger>
      )}
      <DialogContent
        ref={dialogContentRef}
        isCloseIcon={closeButton}
        className={cn(
          "overflow-x-hidden overflow-y-scroll  max-h-[95%] ",
          className
        )}
      >
        <DialogTitle className={cn("", classHeader)}>{header}</DialogTitle>
        <DialogDescription></DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}
