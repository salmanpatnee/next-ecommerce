import { Eye, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <div className="min-w-64">
      <div className="relative group">
  <div className="bg-[#F5F5F5] flex items-center justify-center px-10 py-9 mb-4 rounded">
    <Image
      src="/images/products/gamepad.png"
      alt="Gamepad"
      width={172}
      height={152}
    />
  </div>
  <span className="bg-primary rounded py-1 px-3 text-white text-xs absolute top-3 left-3">
    -40%
  </span>
  <div className="absolute top-3 right-3 flex flex-col gap-2">
    <button className="bg-white hover:bg-primary rounded-full p-2 transition-colors">
      <Heart size={20} strokeWidth={1.5} className="hover:fill-white" />
    </button>
    <button className="bg-white hover:bg-primary rounded-full p-2 transition-colors">
      <Eye size={20} strokeWidth={1.5} className="hover:fill-white" />
    </button>
  </div>
  <button className="bg-black text-center font-medium text-base w-full py-2 absolute bottom-0 text-white rounded-b hover:bg-primary opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all">
    <Link href="">
      Add To Cart
    </Link>
  </button>
</div>

      <div>
        <h4 className="text-base font-medium text-black mb-2">
          HAVIT HV-G92 Gamepad
        </h4>
        <p className="flex items-center gap-3 text-base font-medium mb-3">
          <ins className="text-primary no-underline">$120</ins>
          <del className="opacity-60">$160</del>
        </p>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <Star
              size={20}
              strokeWidth={0}
              className="fill-yellow-400 border-yellow-400 "
            />
            <Star
              size={20}
              strokeWidth={0}
              className="fill-yellow-400 border-yellow-400 "
            />
            <Star
              size={20}
              strokeWidth={0}
              className="fill-yellow-400 border-yellow-400 "
            />
            <Star
              size={20}
              strokeWidth={0}
              className="fill-yellow-400 border-yellow-400 "
            />
            <Star
              size={20}
              strokeWidth={0}
              className="fill-yellow-400 border-yellow-400 "
            />
          </div>
          <span className="font-semibold opacity-60 text-sm">(88)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
