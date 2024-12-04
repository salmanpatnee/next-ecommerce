import React from "react";
import LanguageSelector from "./components/LanguageSelector";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input"

const Header = () => {
  return (
    <header>
      <div className="bg-black text-white mb-12">
        <div className="py-4 text-sm wrapper flex">
          <div className="w-2/12"></div>
          <div className="w-8/12 text-center">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
          </div>
          <div className="w-2/12 text-end">
            <LanguageSelector />
          </div>
        </div>
      </div>
      <div className="wrapper flex items-center">
        <div className="w-3/12">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width="118" height="24" />
          </Link>
        </div>
        <div className="w-5/12">
          <Navbar />
        </div>
        <div className="w-4/12">
          <div className="flex space-x-5 items-center justify-end">
            <div className="relative me-5">

          <Input placeholder="What are you looking for?" className="bg-[#F5F5F5] rounded-sm w-[253px] py-5 text-xs"/>
          <span><Search className="absolute top-2 right-3" /></span>
            </div>
            <Link href="/" >
              <Heart size={32}/>
            </Link>
            <Link href="/">
              <ShoppingCart size={32}/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
