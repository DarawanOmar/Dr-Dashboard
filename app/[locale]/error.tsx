"use client";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { LuLoader2 } from "react-icons/lu";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const [pendding, setPendding] = useTransition();

  return (
    <div className="flex flex-col  items-center justify-center h-screen space-y-4 p-4 md:mr-14">
      <div className="flex flex-col items-center space-y-2  text-center">
        <div className="inline-flex items-center p-3  rounded-lg bg-gray-100 dark:bg-gray-800">
          <BugIcon className="h-6 w-6 mr-2 flex-shrink-0 stroke-2" />
          <p className="font-medium break-all max-w-xl w-full mx-auto">
            Error : {error.message || "Some Thing Went Wrong!"}
          </p>
        </div>
        <p className="text-sm text-gray-500 leading-loose sm:text-base dark:text-gray-400">
          Sorry, we can’t load the page you’re looking for. Please check your
          connection and try again.
        </p>
      </div>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Button
          onClick={reset}
          variant={"ghost"}
          className="flex-1 inline-flex items-center justify-center rounded-md   bg-white w-full text-sm font-medium shadow-sm py-3 transition-colors hover:bg-gray-100 hover:text-gray-900  dark:bg-black/20 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        >
          Retry Again
        </Button>
        <Button
          variant={"destructive"}
          className="flex-1 inline-flex items-center justify-center rounded-md   bg-white w-full text-sm font-medium shadow-sm py-3 transition-colors hover:bg-gray-100 hover:text-gray-900  dark:bg-black/20 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 text-balck"
        >
          {pendding ? (
            <div className="flex items-center space-x-2">
              <h1>LogOut</h1> <LuLoader2 className="size-6 animate-spin" />
            </div>
          ) : (
            "LogOut"
          )}
        </Button>
      </div>
    </div>
  );
}
function BugIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  );
}
