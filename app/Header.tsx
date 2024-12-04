import React from "react";
import LanguageSelector from "./components/LanguageSelector";

const Header = () => {
  return (
    <header>
      <div className="bg-black text-white">
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
      <div className="flex">
        
      </div>
    </header>
  );
};

export default Header;
