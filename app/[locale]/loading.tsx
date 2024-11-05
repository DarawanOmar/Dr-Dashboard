import { LuLoader2 } from "react-icons/lu";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-2 items-center">
        <LuLoader2 className="animate-spin  duration-500" />
        <h1>Loading...</h1>
      </div>
    </div>
  );
}
