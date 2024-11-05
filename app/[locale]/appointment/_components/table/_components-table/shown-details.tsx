"use client";
import ReusableToolTip from "@/components/reusable/reusable-tooltip";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  BigDetails,
  InfoIcon,
  Prescription,
  Service,
  Term,
} from "@/public/icons";
import React from "react";

function ShownDetails() {
  const [shownNote, setShownNote] = React.useState(false);
  const [addPrescription, setAddPrescription] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const handleSatrt = () => {
    setStart((Prev) => !Prev);
  };
  const handleOpen = () => {
    setOpen((Prev) => !Prev);
  };
  const handlePrescription = () => {
    setAddPrescription((Prev) => !Prev);
  };
  return (
    <div className="p-10 grid gap-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div
          className="rounded-md w-full  flex flex-col  bg-white p-5 border "
          style={{
            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 className="font-bold mb-5 text-lg">Paintent Details</h1>
          <div className="grid gap-3  ">
            <div className="flex gap-1">
              <h1 className="text-sm">Patient Name:</h1>
              <h1 className="text-sm font-bold">Dr.Lee Doe</h1>
            </div>
            <div className="flex gap-1">
              <h1 className="text-sm">Age: </h1>
              <h1 className="text-sm font-bold">22</h1>
            </div>
            <div className="flex gap-1">
              <h1 className="text-sm">Gender: </h1>
              <h1 className="text-sm font-bold">male</h1>
            </div>
            <div className="flex gap-1 w-full">
              <h1 className="text-sm">Note: </h1>
              <p
                className={cn("text-sm font-bold w-full line-clamp-1 ", {
                  "line-clamp-none": shownNote,
                })}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, dignissimos!
              </p>
              <div
                className="cursor-pointer hover:text-primary"
                onClick={() => {
                  setShownNote((prev) => !prev);
                }}
              >
                <InfoIcon height={20} width={20} />
              </div>{" "}
            </div>
            <div className="flex gap-1">
              <h1 className="text-sm">Booking Date: </h1>
              <h1 className="text-sm font-bold">28 May 2024</h1>
            </div>

            <div className="flex gap-1 items-center">
              <h1 className="text-sm">Phone: </h1>
              <h1
                className={cn(
                  "text-sm font-bold cursor-pointer hover:text-primary",
                  {
                    hidden: open,
                  }
                )}
                onClick={handleOpen}
              >
                View
              </h1>
              <div
                className={cn(
                  "text-sm font-bold hidden cursor-pointer  relative",
                  {
                    block: open,
                  }
                )}
              >
                0770000000
                <div
                  onClick={handleOpen}
                  className="absolute top-0 -end-4 border bg-gray-200 p-1 size-3 font-bold text-xs rounded-full flex justify-center items-center"
                >
                  x
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-md w-full  flex flex-col justify-between bg-white p-5 border min-h-max max-h-max"
          style={{
            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex justify-between items-start">
            <h1 className="font-bold mb-5 text-lg">Booking Details</h1>
            <ReusableToolTip
              trigger={
                <div
                  className={cn("hover:text-primary", {
                    "text-primary": addPrescription,
                  })}
                  onClick={handlePrescription}
                >
                  <Prescription />
                </div>
              }
              side="left"
            >
              {addPrescription ? (
                <p className=" text-primary px-2 py-1 rounded-md text-xs">
                  Prescription Added
                </p>
              ) : (
                <p className="bg-primary text-white px-2 py-1 rounded-md text-xs">
                  Add Prescription
                </p>
              )}
            </ReusableToolTip>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-4 max-w-[360px] w-full ">
              <div className="flex gap-1">
                <h1 className="text-sm">Appointment No:</h1>
                <h1 className="text-sm font-bold">1234124</h1>
              </div>
              <div className="flex gap-1">
                <h1 className="text-sm">Visit Date:</h1>
                <h1 className="text-sm font-bold">28 May 2024</h1>
              </div>
              <div className="flex gap-1">
                <h1 className="text-sm">Visit Time: </h1>
                <h1 className="text-sm font-bold">28 May 2024</h1>
              </div>
              <div className="flex gap-1">
                <h1 className="text-sm">Fee: </h1>
                <h1 className="text-sm font-bold">12,000 IQD</h1>
              </div>
              <div className="flex gap-1">
                <h1 className="text-sm">Booker: </h1>
                <h1 className="text-sm font-bold">Patient</h1>
              </div>
              <div
                onClick={handleSatrt}
                className={cn(
                  "border-2 border-muted-foreground/50 px-2 h-6 text-xs font-bold flex justify-center items-center rounded-sm hover:bg-primary hover:text-white cursor-pointer transition-all duration-500 self-end ",
                  {
                    "border-green-300 shadow-[0px_0px_1px_hsl(192,62%,45%)]":
                      start,
                  }
                )}
              >
                {start ? "Treatment Completed" : "Start"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col mt-2  rounded-xl px-5 pt-5 border"
        style={{
          boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="flex gap-4 items-center">
          <BigDetails />
          <h1 className="font-semibold text-primary text-lg">Important Note</h1>
        </div>
        <div className="p-5">
          <ul className="list-disc ms-5 text-sm text-[#787878] font-bold">
            <li>Please prepare for the patient's appointment.</li>
            <li>
              The patient has been reminded to bring their photo ID, insurance
              card, referral letters, list of medications, and relevant medical
              records.
            </li>
            <li>
              They are also asked to arrive 30 minutes early for check-in.
            </li>
          </ul>
          <h1 className="text-lg font-semibold text-primary mt-6">
            Patient Note
          </h1>
          <ul className="list-disc ms-5 text-sm text-[#787878] font-bold">
            <li>Please prepare for the patient's appointment.</li>
            <li>
              The patient has been reminded to bring their photo ID, insurance
              card, referral letters, list of medications, and relevant medical
              records.
            </li>
            <li>
              They are also asked to arrive 30 minutes early for check-in.
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-20 max-w-5xl w-full mx-auto ">
        <button className="max-sm:max-w-max flex justify-center items-center gap-2 rounded-2xl bg-white text-primary_thin py-3 px-8 hover:text-primary transition-all duration-300 border">
          <Term />
          <span className="font-bold text-sm">Platform Terms of Use</span>
        </button>

        <button className="max-sm:max-w-max flex justify-center items-center gap-2 rounded-2xl bg-white text-primary_thin py-3 px-8 hover:text-primary transition-all duration-300 border">
          <Service />
          <span className="font-bold text-sm">Service Agreement</span>
        </button>
      </div>
      <DialogClose>
        <Button className="max-w-[225px] w-full block mx-auto mt-5 hover:opacity-100 border-2 border-primary hover:bg-transparent transition-all duration-300 hover:text-primary boxshadow-special">
          Done
        </Button>
      </DialogClose>
    </div>
  );
}

export default ShownDetails;
