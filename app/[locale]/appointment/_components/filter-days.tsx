"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useMemo } from "react";
import { PropsAppointmenrPage } from "../page";
import { parseAsString, useQueryState } from "nuqs";
import { DatePickerWithRange } from "@/components/reusable/range-date-picker";

const days = [{ name: "Today", value: "today" }];

function FilterDays({
  searchParams: { searchParams },
  className,
  isReport,
}: {
  searchParams: PropsAppointmenrPage;
  className?: string;
  isReport?: boolean;
  select?: string;
  time?: string;
}) {
  const [time, setTime] = useQueryState("time");
  const [selected] = useQueryState(
    "selected",
    parseAsString.withDefault("new")
  );

  const modifiedDays = useMemo(() => {
    const additionalDays = getAdditionalDays(selected);
    return [...days, ...additionalDays];
  }, [selected]);

  const renderButtons = () =>
    modifiedDays.map((day, index) => (
      <Button
        onClick={() => {
          setTime(day.value);
        }}
        key={index}
        className={cn(
          "bg-transparent rounded-[10px] h-9 border-2 border-muted-foreground/10 text-black font-semibold text-[12px]",
          {
            "border-[#1DC0A3]": time === day.value,
            "border-[#026985]": time === day.value && isReport,
          }
        )}
      >
        {day.name}
      </Button>
    ));

  return (
    <div className="flex flex-wrap gap-3">
      {renderButtons()}
      {time !== "notarrived" && <DatePickerWithRange />}
    </div>
  );
}

export default FilterDays;

// Utility to get additional days based on selected option
const getAdditionalDays = (type: string) => {
  switch (type) {
    case "new":
      return [
        { name: "Weekly", value: "weekly" },
        { name: "Monthly", value: "monthly" },
        { name: "Yearly", value: "yearly" },
      ];
    case "checked":
    case "notshow":
    case "cancle":
      return [
        { name: "Last Weekly", value: "lastweekly" },
        { name: "Last Monthly", value: "lastmonthly" },
        { name: "Last Yearly", value: "lastyearly" },
      ];
    case "arrival":
      return [
        { name: "Tomorrow", value: "tommoro" },
        { name: "Day After Tomorrow", value: "day After Tommoro" },
      ];
    default:
      return [];
  }
};
