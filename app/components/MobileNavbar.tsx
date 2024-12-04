import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SearchInput from "./SearchInput";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/" },
  { label: "About", href: "/" },
  { label: "Sign Up", href: "/" },
];

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription className="mt-8">
            <SearchInput />
            <nav>
              <ul className="mt-4 space-y-4 text-sm text-black text-start">
                {links.map((link) => (
                  <li className="border-b pb-2" key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
