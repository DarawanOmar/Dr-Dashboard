"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQueryState } from "nuqs";

import React from "react";

type PropsReport = {
  isReport?: boolean;
};

function SelectOptions({ isReport }: PropsReport) {
  const [selected, setSelected] = useQueryState("selected", {
    defaultValue: isReport ? "" : "new",
    shallow: false,
  });

  const handleFilter = (value: string) => {
    if (value === selected) {
      return setSelected("");
    }
    setSelected(value);
  };
  let dataMap = isReport ? dataReport : data;
  return (
    <Select
      defaultValue="new"
      value={selected}
      onValueChange={(e) => {
        handleFilter(e);
      }}
    >
      <SelectTrigger className="max-w-max h-8 py-0 rounded-[9px] border-2 border-muted-foreground/10 text-primary font-semibold text-[12px]">
        <SelectValue placeholder="Choose Appointment" />
      </SelectTrigger>
      <SelectContent className="max-w-[315px] w-full mx-3">
        {dataMap.map((item, index) => (
          <SelectItem key={index} value={item.value}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectOptions;

const data = [
  {
    name: "New Appointment",
    value: "new",
  },
  {
    name: "Patient Arrival and Examination Tracking",
    value: "arrival",
  },
  {
    name: "Checked in & Treatment started",
    value: "checked",
  },
  {
    name: "not arrived",
    value: "notarrived",
  },
  {
    name: "No-Show",
    value: "notshow",
  },
  {
    name: "Cancle",
    value: "cancle",
  },
];
const dataReport = [
  {
    name: "Checked in & Treatment started",
    value: "checked",
  },
  {
    name: "not arrived",
    value: "notarrived",
  },
  {
    name: "No-Show",
    value: "notshow",
  },
  {
    name: "Cancle",
    value: "cancle",
  },
];
