import React from "react";
import { DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import { Power } from "lucide-react";
import CustomDialogWithTrigger from "./custom-dialog-with-trigger";
import { AlretIcon } from "@/public/icons";

type Props = {
  button?: React.ReactNode;
};

function LogoutComponent({
  button = (
    <button className="hidden lg:flex  gap-2 mt-52  py-3 px-2 rounded-[10px] hover:bg-muted-foreground/10   transition-all duration-500 ease-out">
      <Power size={19} strokeWidth={3} />
      Logout
    </button>
  ),
}: Props) {
  return (
    <>
      <CustomDialogWithTrigger
        isButtonChildren
        button={button}
        header={
          <div className="flex gap-2 items-center">
            <div className="">
              <AlretIcon width={26} height={26} />
            </div>{" "}
            <h1 className="text-base">Alret</h1>
          </div>
        }
        className="p-3"
      >
        <div className="px-7 pb-3 grid gap-7">
          <div className="grid gap-1.5">
            <h1 className="text-[#363636] max-w-xs text-lg mx-auto">
              Are you sure you want to log out?
            </h1>
            <p className="text-[#363636] text-xs max-w-xs mx-auto">
              Any unsaved changes will be lost.
            </p>
          </div>

          <div className="grid grid-cols-2 mx-14 gap-14 mt-1">
            <DialogClose className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0  ring-offset-0">
              <Button className="rounded-3xl  text-[15px] font-semibold w-full bg-transparent  border-2 border-primary text-primary hover:bg-primary hover:text-white hover:border-transparent transition-all duration-500 h-9">
                No
              </Button>
            </DialogClose>
            <Button className="rounded-3xl  text-[15px] font-semibold w-full  border-2 border-transparent hover:bg-red-500 hover:text-white transition-all duration-500 h-9">
              Yes
            </Button>
          </div>
        </div>
      </CustomDialogWithTrigger>
    </>
  );
}

export default LogoutComponent;
