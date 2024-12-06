import React from "react";
import LanguageSelector from "./components/LanguageSelector";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { Heart, ShoppingCart } from "lucide-react";
import MobileNavbar from "./components/MobileNavbar";
import SearchInput from "./components/SearchInput";

const Header = () => {
  return (
    <header className="border border-b pb-5">
      <div className="bg-black text-white mb-5 lg:mb-12">
        <div className="py-4 text-sm wrapper flex">
          <div className="main-menu w-2/12 hidden md:block"></div>
          <div className="w-full md:w-8/12 text-center">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
          </div>
          <div className="w-2/12 text-end hidden md:block">
            <LanguageSelector />
          </div>
        </div>
      </div>
      <div className="wrapper flex md:items-center justify-between md:justify-between">
        <div className="lg:hidden w-2/12">
          <MobileNavbar />
        </div>
        <div className="col logo w-full text-center md:w-auto">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width="118"
              height="24"
              className="mx-auto"
            />
          </Link>
        </div>

        {/* Menu Section */}
        <div className="col menu hidden lg:block">
          <Navbar />
        </div>

        <div className="col action hidden lg:block">
          <div className="flex space-x-5 items-center justify-end">
            <SearchInput />
            <Link href="/wishlist" className="group">
              <Heart
                size={32}
                className="stroke-current text-black group-hover:fill-primary transition-colors group-hover:stroke-primary"
              />
            </Link>
            <Link href="/cart" className="group">
              <ShoppingCart
                size={32}
                className="stroke-current text-black group-hover:fill-primary transition-colors group-hover:stroke-primary"
              />
            </Link>
          </div>
        </div>
        <div className="lg:hidden flex items-center space-x-3 w-2/12 justify-end">
          <Link href="/">
            <Heart size={24} />
          </Link>
          <Link href="/">
            <ShoppingCart size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
