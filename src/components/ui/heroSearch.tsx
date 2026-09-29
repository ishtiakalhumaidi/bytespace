"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchSection() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
  onSubmit={handleSearch}
  className="flex items-center gap-8 w-[581px] h-[52px]"
>
  <div className="flex min-w-0 flex-1 items-center bg-white rounded-[24px] h-full px-6">
    <Search className="w-5 h-5 text-gray-400 shrink-0" />

    <Input
      type="text"
      placeholder="Course, topic, creator"
      className="border-0 bg-transparent text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-full w-full font-satoshi text-[16px]"
    />
  </div>

  <Button
    type="submit"
    className="w-[104px] h-full bg-brand-yellow hover:bg-[#bce600] text-black font-poppins font-medium rounded-[24px] px-6 py-3 shrink-0"
  >
    Search
  </Button>
</form>
  );
}