import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";
import { PropsAppointmenrPage } from "../../page";

import { cn } from "@/lib/utils";
import ShownDate from "./_components-table/shown-date";

import ShownDetails from "./_components-table/shown-details";

import Startbutton from "./_components-table/start-button";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import CustomDialogWithTrigger from "@/components/reusable/custom-dialog-with-trigger";
import { AlretIcon, Detail, Details } from "@/public/icons";
import { searchParamsCache } from "../../_type";

function DataTable({ searchParams }: { searchParams: PropsAppointmenrPage }) {
  const { selected } = searchParamsCache.parse(searchParams.searchParams);
  const tableHead = [
    "",
    "Patient Name",
    "Gender",
    "Appoint",
    "Fee",
    "Visit Time",
    "Day",
    "Date",
    "Details",
  ];

  switch (selected) {
    case "new":
      tableHead.splice(2, 0, "Age");
      tableHead.splice(5, 0, "Status");
      tableHead.push("Booking Date");
      break;
    default:
      tableHead.push("Treatment Status");
      break;
  }

  return (
    <Table className="shadow-lg border rounded-lg">
      <TableHeader className="bg-[#1DC0A3] rounded-lg ">
        <TableRow className="rounded-lg">
          {tableHead.map((head, i) => (
            <TableHead key={i} className="text-white h-10 font-bold">
              {head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableBody.map((row, i) => (
          <TableRow
            key={i}
            className="hover:bg-gradient-to-tr from-[#1DC0A3]/10 to-[#1DC0A3]/15 cursor-pointer transition-all duration-300 *:p-2"
          >
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.patientName}</TableCell>
            <TableCell
              className={cn("hidden", {
                block: selected === "new",
              })}
            >
              {row.age}
            </TableCell>
            <TableCell>{row.gender}</TableCell>
            <TableCell>{row.appointmentNo}</TableCell>
            <TableCell
              className={cn("hidden", {
                block: selected === "new",
              })}
            >
              {row.status}
            </TableCell>
            <TableCell>{row.fee}</TableCell>
            <TableCell>{row.visitTime}</TableCell>
            <TableCell>{row.day}</TableCell>
            <TableCell className="whitespace-nowrap">{row.date}</TableCell>

            <TableCell className="text-center mx-auto ">
              <CustomDialogWithTrigger
                className="max-w-5xl"
                isButtonChildren
                button={
                  <div className="flex justify-center items-center cursor-pointer hover:text-primary">
                    <Detail />
                  </div>
                }
                header={
                  <div className="flex gap-2 items-center">
                    <div className="bg-primary p-1 rounded-full size-12 flex justify-center items-center  text-white details">
                      <Details height={27} width={27} />
                    </div>{" "}
                    <h1 className="font-bold text-primary">
                      Appointment Detail - Treatment Completed
                    </h1>
                  </div>
                }
              >
                <ShownDetails />
              </CustomDialogWithTrigger>
            </TableCell>
            {/* Booking Date */}

            <ShownDate selected={selected} date={row.bookingDate} />

            {/* Start */}
            <TableCell
              className={cn(
                " hidden justify-around items-center  text-center mx-auto ",
                {
                  flex: selected === "arrival",
                }
              )}
            >
              <Startbutton />
            </TableCell>
            <TableCell
              className={cn(
                " flex justify-around items-center  text-center mx-auto ",
                {
                  hidden: selected === "arrival" || selected === "new",
                }
              )}
            >
              <CustomDialogWithTrigger
                isButtonChildren
                className={cn(" p-3 rounded-2xl", {
                  "max-w-[436px]": row.treatment === "Participation status",
                })}
                disableTrigger={
                  row.treatment !== "Not Shown" &&
                  row.treatment !== "Terament Cancelled" &&
                  row.treatment !== "Participation status"
                }
                button={
                  <div
                    className={cn(
                      "text-xs font-semibold w-full h-6 flex justify-center items-center border border-transparent rounded-sm ",
                      {
                        "  shadow-[0px_0px_2px_#be2525] text-red-700":
                          row.treatment === "Not Shown" ||
                          row.treatment === "Not Arrived" ||
                          row.treatment === "Terament Cancelled",
                        "  bg-primary text-white":
                          row.treatment === "Compelted",
                        " border-green-500 shadow-[0px_0px_2px_hsl(192,62%,45%)]":
                          row.treatment === "Terament Started",
                        " border-cyan-500 shadow-[0px_0px_2px_hsl(192,62%,45%)]":
                          row.treatment === "Participation status",
                      }
                    )}
                  >
                    {row.treatment}
                  </div>
                }
                header={
                  <div className="flex gap-2 items-center">
                    <div className="">
                      <AlretIcon width={26} height={26} />
                    </div>{" "}
                    <h1 className="text-base">Alret </h1>
                  </div>
                }
              >
                {row.treatment === "Terament Cancelled" && (
                  <ContentCancled time="20:30" date="13 / 06 / 2024" />
                )}
                {row.treatment === "Not Shown" && (
                  <ContentCancled isDateShown />
                )}
                {row.treatment === "Participation status" && (
                  <ContentCancled
                    isDateShown={false}
                    isPractition
                    isDoneButton={false}
                  />
                )}
              </CustomDialogWithTrigger>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DataTable;

const tableBody = [
  {
    id: "1",
    patientName: "John Doe",
    age: "34",
    gender: "Male",
    appointmentNo: "AP001",
    status: "Confirmed",
    fee: "$100",
    visitTime: "10:30 AM",
    day: "Monday",
    date: "2024-10-28",
    // detail: "Checkup",
    bookingDate: "2024-10-22",
    treatment: "Not Shown",
  },
  {
    id: "2",
    patientName: "Jane Smith",
    age: "28",
    gender: "Female",
    appointmentNo: "AP002",
    status: "Pending",
    fee: "$120",
    visitTime: "12:00 PM",
    day: "Tuesday",
    date: "2024-10-29",
    // detail: "Consultation",
    bookingDate: "2024-10-23",
    treatment: "Compelted",
  },
  {
    id: "2",
    patientName: "Jane Smith",
    age: "28",
    gender: "Female",
    appointmentNo: "AP002",
    status: "Pending",
    fee: "$120",
    visitTime: "12:00 PM",
    day: "Tuesday",
    date: "2024-10-29",
    // detail: "Consultation",
    bookingDate: "2024-10-23",
    treatment: "Participation status",
  },
  {
    id: "3",
    patientName: "Mike Johnson",
    age: "45",
    gender: "Male",
    appointmentNo: "AP003",
    status: "Cancelled",
    fee: "$150",
    visitTime: "09:00 AM",
    day: "Wednesday",
    date: "2024-10-30",
    // detail: "Follow-up",
    bookingDate: "2024-10-24",
    treatment: "Terament Started",
  },
  {
    id: "3",
    patientName: "Mike Johnson",
    age: "45",
    gender: "Male",
    appointmentNo: "AP003",
    status: "Cancelled",
    fee: "$150",
    visitTime: "09:00 AM",
    day: "Wednesday",
    date: "2024-10-30",
    // detail: "Follow-up",
    bookingDate: "2024-10-24",
    treatment: "Terament Cancelled",
  },
  {
    id: "4",
    patientName: "Emily Davis",
    age: "50",
    gender: "Female",
    appointmentNo: "AP004",
    status: "Confirmed",
    fee: "$200",
    visitTime: "02:00 PM",
    day: "Thursday",
    date: "2024-10-31",
    // detail: "Checkup",
    bookingDate: "2024-10-25",
    treatment: "Not Arrived",
  },
  {
    id: "5",
    patientName: "Michael Brown",
    age: "62",
    gender: "Male",
    appointmentNo: "AP005",
    status: "Pending",
    fee: "$250",
    visitTime: "03:30 PM",
    day: "Friday",
    date: "2024-11-01",
    // detail: "Consultation",
    bookingDate: "2024-10-26",
    treatment: "Not Shown",
  },
];

type Props = {
  date?: string;
  time?: string;
  isDateShown?: boolean;
  isPractition?: boolean;
  isDoneButton?: boolean;
};

function ContentCancled({
  isDateShown = true,
  date = "13 / 06 / 2024",
  time = "20:30",
  isPractition = false,
  isDoneButton = true,
}: Props) {
  return (
    <div className="px-7 pb-2 grid gap-7">
      {isPractition ? (
        <h1 className="text-[#363636] max-w-xs mx-auto">
          scheduled patient appointment still appears to have not started for 3
          hours. will the patient attend the appointment
        </h1>
      ) : (
        <h1 className="text-[#363636]">
          The Appointment was cancelled by the Practitioner
        </h1>
      )}

      {!isPractition && (
        <p className="flex gap-0.5 text-primary">
          <span className="text-[#A6004F]">Reason:</span>
          Patient has changed the doctor.
        </p>
      )}
      {isDateShown && (
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold">Cancelling Date: {date}</p>
          <p className="text-sm font-bold">Cancelling time: {time}</p>
        </div>
      )}
      {isDoneButton ? (
        <DialogClose className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0  ring-offset-0">
          <Button className="rounded-2xl max-w-[100px] text-[15px] font-semibold w-full block mx-auto mt-3 border-2 border-transparent hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-500">
            Done
          </Button>
        </DialogClose>
      ) : (
        <div className="grid grid-cols-2 mx-14 gap-14 mt-1">
          <DialogClose className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0  ring-offset-0">
            <Button className="rounded-3xl  text-[15px] font-semibold w-full bg-transparent  border-2 border-primary text-primary hover:bg-primary hover:text-white hover:border-transparent transition-all duration-500 h-9">
              No
            </Button>
          </DialogClose>
          <Button className="rounded-3xl  text-[15px] font-semibold w-full  border-2 border-transparent hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-500 h-9">
            Yes
          </Button>
        </div>
      )}
    </div>
  );
}
