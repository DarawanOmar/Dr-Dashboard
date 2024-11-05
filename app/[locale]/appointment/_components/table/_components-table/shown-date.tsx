"use client";
import { TableCell } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  date: string;
  selected: string;
};

function ShownDate({ date, selected }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <TableCell
        onClick={handleOpen}
        className={cn(
          " hidden justify-center items-center  text-center mx-auto bg-red400",
          {
            flex: selected === "new",
          }
        )}
      >
        <div
          className={cn(
            "h-[8px] w-[8px] border border-[#AFAFAF] rounded-[2px] mt-2 cursor-pointer  flex justify-center items-center hover:border-primary",
            {
              hidden: open,
            }
          )}
        ></div>
        <div
          onClick={handleOpen}
          className={cn("hidden cursor-pointer  hover:text-primary", {
            block: open,
          })}
        >
          {date}
        </div>
      </TableCell>
    </>
  );
}

export default ShownDate;
