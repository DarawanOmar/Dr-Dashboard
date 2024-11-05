import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  color?: string;
};

export function PaginationTable({ className, color }: Props) {
  return (
    <Pagination className={cn("", className)}>
      <PaginationContent className="flex gap-5">
        <PaginationItem className="hover:bg-none">
          <PaginationPrevious
            href="#"
            className="max-sm:text-xs hover:bg-none"
          />
        </PaginationItem>
        <Button className={cn("bg-[#1DC0A3] h-8", color)}>1</Button>
        <PaginationItem className="hover:bg-none">
          <PaginationNext href="#" className="max-sm:text-xs hover:bg-none" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
