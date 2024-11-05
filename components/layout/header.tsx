import Image from "next/image";
import Link from "next/link";
import React from "react";
import notofication from "@/public/icons/notification.svg";
import { EllipsisVertical, Power } from "lucide-react";
import { AvaibleIcon, Location, SpecailIcon } from "@/public/icons";
import SearchHeader from "./search-header";
import ReusableToolTip from "../reusable/reusable-tooltip";
import CustomPopover from "../reusable/custom-popover";
import LogoutComponent from "../reusable/logout";

function Header() {
  return (
    <div className="bg-white">
      <div className="flex justify-between max-lg:ms-[23px] lg:ms-[24px] max-lg:me-[17px]  lg:me-[37px] py-[10px] ">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={200}
            height={200}
            className="w-[200px] h-[60px] "
          />
        </Link>
        <div className="flex items-center gap-3 md:gap-8">
          <SearchHeader />
          {/* Noti */}
          <ReusableToolTip
            side="bottom"
            trigger={
              <div className="rounded-full [8px] w-[32px] h-[32px] px[5px] py[3px] border border-muted-foreground/30 bg-white  flex justify-center items-center  cursor-pointer hover:bg-mutedforeground/10 boxshadow-notofication hover:border-none transition-all duration-300">
                <Image
                  src={notofication}
                  alt="Notofication"
                  width={19}
                  height={19}
                />
              </div>
            }
            className="px-0 py-0.5"
          >
            <p>Notification</p>
          </ReusableToolTip>
          {/* User */}
          <div className="flex gap-3 md:gap-7 items-center">
            <div className="flex gap-3 items-center max-md:hidden ">
              <div className="relative">
                <Image
                  src={"/doctor/1.1.jpg"}
                  alt="docotr"
                  height={100}
                  width={100}
                  className="rounded-full size-12 border-2 border-primary object-cover"
                />
                <div className="absolute bottom-0 size-3.5 bg-green-500 rounded-full end-0.5 border border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground font-bold text-xs">
                  Have a nice day!
                </span>
                <span className="font-inter font-semibold text-base">
                  Dr. Prachi Jangid
                </span>
              </div>
            </div>
            <div className="">
              <CustomPopover
                title={
                  <EllipsisVertical
                    size={28}
                    strokeWidth={2}
                    className="text-[#211B53] cursor-pointer hover:bg-[#211B53]/5 rounded-full p-1"
                  />
                }
                className="p-0 rounded-sm"
              >
                <div className="px-2 py-2 grid gap-2">
                  <Link
                    href={"/profile-managament?selected=contact"}
                    className="flex gap-2 px-2 h-8 w-full justify-between  items-center rounded-sm cursor-pointer hover:bg-muted-foreground/10 hover:text-primary transition-all duration-300 "
                  >
                    <h1 className="text-sm">Contact</h1>
                    <Location height={18} width={18} />
                  </Link>
                  <Link
                    href={"/profile-managament?selected=availabletime"}
                    className="flex gap-2 px-2 h-8 w-full justify-between  items-center rounded-sm cursor-pointer hover:bg-muted-foreground/10 hover:text-primary transition-all duration-300 "
                  >
                    <h1 className="text-sm">Availible</h1>
                    <AvaibleIcon height={14} width={16} />
                  </Link>
                  <Link
                    href={"/profile-managament?selected=specailst"}
                    className="flex gap-2 px-2 h-8 w-full justify-between  items-center rounded-sm cursor-pointer hover:bg-muted-foreground/10 hover:text-primary transition-all duration-300 "
                  >
                    <h1 className="text-sm">Specailisit</h1>
                    <SpecailIcon height={14} width={16} />
                  </Link>
                  <LogoutComponent
                    button={
                      <div className="flex gap-2 px-2 h-8 w-full justify-between  items-center rounded-sm cursor-pointer hover:bg-muted-foreground/10 hover:text-primary transition-all duration-300">
                        <h1 className="text-sm">Logout</h1>
                        <Power size={15} strokeWidth={2.5} />
                      </div>
                    }
                  />
                </div>
              </CustomPopover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
