import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <div className="relative md:me-5">
      <Input
        placeholder="What are you looking for?"
        className="bg-[#F5F5F5] rounded-sm lg:w-[270px] w-full py-5 text-xs ps-5"
      />
      <span>
        <Search className="absolute top-2 md:right-3 right-1 hidden lg:block" />
      </span>
    </div>
  );
};

export default SearchInput;
