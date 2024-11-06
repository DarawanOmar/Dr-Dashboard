"use client";

import * as React from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Date as DateIcon } from "@/public/icons/index";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  createSerializer,
  parseAsIsoDate,
  useQueryState,
  useQueryStates,
} from "nuqs";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useQueryStates(
    {
      from: parseAsIsoDate.withDefault(new Date()),
      to: parseAsIsoDate.withDefault(new Date()),
    },
    {
      history: "push",
    }
  );

  // const { lat, lng } = coordinates

  // const [date, setDate] = React.useState<DateRange | undefined>({
  //   from: undefined,
  //   to: undefined,
  // });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "max-w-[300px] justify-start text-left font-normal gap-3 h-9 rounded-[10px] border-2 border-muted-foreground/10",
              !date && "text-muted-foreground"
            )}
          >
            <DateIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Custom Date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from ?? undefined}
            selected={{
              from: date.from ?? undefined,
              to: date.to ?? undefined,
            }}
            onSelect={async (e) => {
              // setDate(e);
              await setDate({
                from: e?.from,
                to: e?.to,
              });
            }}
            numberOfMonths={1}
            footer={
              <Button
                onClick={() =>
                  setDate({
                    from: undefined,
                    to: undefined,
                  })
                }
                variant="default"
                className="w-full hover:bg-transparent hover:text-primary border hover:border-primary transition-all duration-500"
              >
                Clear
              </Button>
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
