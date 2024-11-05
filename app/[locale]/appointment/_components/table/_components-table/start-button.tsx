"use client";

import CustomPopover from "@/components/reusable/custom-popover";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

function Startbutton({ className }: Props) {
  const [start, setStart] = React.useState(false);
  const handleStart = () => {
    setStart((Prev) => !Prev);
  };
  return (
    <div
      className={cn(
        "flex justify-around items-center w-full",
        {
          "border-blue-500 shadow-[0px_0px_4px_hsl(192,62%,45%)] rounded-md":
            start,
        },
        className
      )}
    >
      {start ? (
        <CustomPopover
          asChild={false}
          title={"Participation status"}
          side="top"
          classNameTitle="font-bold text-xs h-6 rounded-lg"
          className="max-w-36 text-center leading-7 bg-slate-600 text-white border-slate-600"
        >
          <p className="text-sm  font-semibold">
            Treatment Stared Remaing time 10:00
          </p>
        </CustomPopover>
      ) : (
        <div
          onClick={handleStart}
          className="flex justify-around items-center w-full"
        >
          <div className="w-2 h-[1.5px] bg-black "></div>
          <button className="border px-4 text-sm">Start</button>
        </div>
      )}
    </div>
  );
}

export default Startbutton;
