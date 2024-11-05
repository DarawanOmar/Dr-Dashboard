"use client";

import Image from "next/image";
import React from "react";
import ReusableToolTip from "../reusable/reusable-tooltip";
import searchIcon from "@/public/icons/search-icon.svg";
import { SearchIcon } from "@/public/icons";
import { parseAsString, useQueryState } from "nuqs";

export const searchParamsParsers = {
  q: parseAsString.withDefault("").withOptions({
    shallow: false,
    throttleMs: 500,
  }),
};
function SearchHeader() {
  const [name, setName] = useQueryState("q", searchParamsParsers.q);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="flex items-center rounded-full bg-white shadow-[0px_0px_2px_rgba(0,0,0,0.25)] border  cursor-pointer hover:bgmuted-foreground/10 transition-all duration-300">
      {!isSearchOpen ? (
        <ReusableToolTip
          side="bottom"
          trigger={
            <div
              onClick={toggleSearch}
              className="rounded-full [8px] w-[29px] h-[29px]  bg-white  flex justify-center items-center  cursor-pointer hover:bg-mutedforeground/10  hover:border-none transition-all duration-300"
            >
              <Image src={searchIcon} alt="search" width={16} height={16} />
            </div>
          }
          className="px-0 py-0.5"
        >
          Search
        </ReusableToolTip>
      ) : (
        <div className="flex relative">
          <div
            onClick={toggleSearch}
            className="rounded-full absolute top-[3px] right-1 p-1 border bg-primary text-white"
            style={{
              boxShadow: "0px 0px 2px 1px hsl(193, 97%, 26%)",
            }}
          >
            <SearchIcon />
          </div>
          <input
            type="text"
            autoFocus
            className=" w-44 h-[32px] bg-transparent text-xs pl-4 placeholder:text-xs outline-none  px-2 "
            placeholder="Search Specialities"
            value={name ?? ""}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default SearchHeader;
