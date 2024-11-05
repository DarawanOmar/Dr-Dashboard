"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  Appointment,
  Discount,
  Gallery,
  Profile,
  Report,
  UserAccount,
} from "@/public/icons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Power } from "lucide-react";
import { Button } from "@/components/ui/button";

import { TooltipWrapper } from "../reusable/tool-tip-reusable";
import LogoutComponent from "../reusable/logout";
import { parseAsBoolean, useQueryState } from "nuqs";

function SideBar() {
  const pathname = usePathname();
  const spliteLang = pathname.split("/");
  const [sidebar, setSideBar] = useQueryState(
    "open",
    parseAsBoolean.withDefault(true)
  );
  const [mobaileView, setMobaileView] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSideBar(false);
        setMobaileView(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenSidebar = () => {
    if (sidebar) {
      setSideBar(false);
    } else {
      setSideBar(true);
    }
  };
  return (
    <div className="relative">
      <motion.div
        animate={
          mobaileView
            ? { width: "full" }
            : { width: !sidebar ? "70px" : "250px" }
        }
        transition={{ duration: 0.3 }}
        className={cn(
          "flex flex-row lg:flex-col mb10 lg:mb20 gap-[20px] mt-[50px]  bg-white max-lg:overflow-x-auto px-3 mb-10 max-lg:border-b-4 max-lg:border-primary max-lg:pb-2 bg-green400 "
        )}
      >
        {sidebarLink?.map((item, index) => (
          <TooltipWrapper
            key={index}
            content={item.title}
            hidden={sidebar}
            className={cn(
              "border border-input text-foreground bg-background hover:bg-accent hover:text-accent-foreground text-xs border-none",
              {
                "bg-primary text-white": `/${spliteLang[2]}` === item.href,
              }
            )}
          >
            <Link
              href={item.href}
              key={index}
              className={cn(
                " min-h-[45px] transition-all duration-100  rounded-[10px] max-lg:px-3 max-w-[250px] lg:min-w-[230px]  gap-2.5  whitespace-nowrap   w-full flex justify-start items-center  bg-white bg-amber400 hover:bg-muted-foreground/10  cursor-pointer max-lg:text-sm",
                {
                  "bg-primary text-white hover:text-white hover:bg-primary":
                    `/${spliteLang[2]}` === item.href,
                  "max-lg:px-0 max-w-16 lg:min-w-12  gap-0 ps-1 transition-all duration-100":
                    !sidebar,
                }
              )}
            >
              <span className="ps-2">{item.icon}</span>
              {sidebar && <span className="">{item.title}</span>}
            </Link>
          </TooltipWrapper>
        ))}
        <LogoutComponent
          button={
            <button className="hidden lg:flex items-center gap-2 mt-52 ps-3 py-3 px-2 rounded-[10px] hover:bg-muted-foreground/10   transition-all duration-500 ease-out">
              <TooltipWrapper
                content={"Logout"}
                hidden={sidebar}
                className="bg-primary text-white text-xs border-none"
              >
                <>
                  <Power size={19} strokeWidth={3} />
                  {sidebar && "Logout"}
                </>
              </TooltipWrapper>
            </button>
          }
        />
      </motion.div>
      <div className="hidden lg:flex absolute -end-4 top-6 rounded-full bg-white p-[2px]">
        <Button
          size="icon"
          variant="outline"
          onClick={handleOpenSidebar}
          className=" hover:text-primary rounded-full size-7 transition-all duration-500 "
        >
          {!sidebar ? (
            <ChevronLeft className="me-0.5" size={20} />
          ) : (
            <ChevronRight className="ms-0.5" size={20} />
          )}
        </Button>
      </div>
    </div>
  );
}

export default SideBar;

const sidebarLink = [
  {
    title: "General Panel",
    href: "/general",
    icon: <UserAccount height={20} width={20} />,
  },
  {
    title: "Appointment Mang",
    href: "/appointment",
    icon: <Appointment height={20} width={20} />,
  },
  {
    title: "Gallery",
    href: "/gallery",
    icon: <Gallery height={20} width={20} />,
  },
  {
    title: "Report",
    href: "/report",
    icon: <Report height={20} width={20} />,
  },
  {
    title: "Discount",
    href: "/discount",
    icon: <Discount height={23} width={23} />,
  },
  {
    title: "Profile Management",
    href: "/profile-managament",
    icon: <Profile height={20} width={20} />,
  },
];
