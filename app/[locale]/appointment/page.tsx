import React from "react";
import FilterDays from "./_components/filter-days";
import SelectOptions from "./_components/select-options";
import { Ellipsis } from "lucide-react";
import { PaginationTable } from "./_components/pagination";
import DataTable from "./_components/table/table";
import { cn } from "@/lib/utils";
import { SearchParams } from "nuqs";
import { searchParamsCache } from "./_type";

export type PropsAppointmenrPage = {
  searchParams: SearchParams;
};

function AppointmentMannagmenet({ searchParams }: PropsAppointmenrPage) {
  const { selected } = searchParamsCache.parse(searchParams);

  return (
    <div className="">
      <div className="flex justify-between items-center m-7 ">
        <FilterDays searchParams={{ searchParams }} />
        <SelectOptions />
      </div>
      <div
        className={cn(" border-2 rounded-xl border-muted-foreground/20 px-10 ")}
      >
        <div className="flex gap-2 items-center py-10">
          <div className="bg-[#1DC0A3] rounded-md p-1 flex justify-center items-center">
            <Ellipsis size={12} className="text-white" />
          </div>
          <span className="font-bold text-lg">{displayTitle(selected)}</span>
        </div>
        <DataTable searchParams={{ searchParams }} />
        <div className="my-10">
          <PaginationTable className="flex justify-end items-end" />
        </div>{" "}
      </div>
    </div>
  );
}

export default AppointmentMannagmenet;

const displayTitle = (selected: string) => {
  switch (selected) {
    case "new":
      return "All New Appointments";
    case "checked":
      return "Completed Appointments";
    case "notshow":
      return "All No-Show Appointments";
    case "cancle":
      return "All Canceled Appointments";
    case "notarrived":
      return "Paintent Not Arrived";
    case "arrival":
      return "All Today's Appointments";
    default:
      return "";
  }
};
