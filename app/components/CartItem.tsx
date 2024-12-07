import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Product = {
  id?: number;
  title?: string;
  slug?: string;
  imageUrl?: string;
  price?: number | undefined;
  salePrice?: number;
  discountPercentage?: number | undefined;
  rating?: number; // rating out of 6
  reviewsCount?: number;
};

interface Props {
  product: Product;
}

const CartItem = ({ product }: Props) => {
  return (
    <div className="min-w-[270px]">
      <div className="relative group">
        <Link href={`/products/${product.slug}`}>
          <div className="bg-[#F5F5F5] flex items-center justify-center px-10 py-10 mb-4 rounded min-h-[250px]">
            <div className="relative w-[170px] h-[150px]">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Link>
        {product.discountPercentage && (
          <span className="bg-primary rounded py-1 px-3 text-white text-xs absolute top-3 left-3">
            -{product.discountPercentage}%
          </span>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="bg-white hover:bg-primary rounded-full p-2 transition-colors group">
            <Trash2 size={20} strokeWid?th={1.5} className="stroke-current text-black group-hover:fill-primary transition-colors group-hover:stroke-white" />
          </button>
 ?       </div>
        <button className="bg-black text-center font-medium text-base w-full py-2 absolute bottom-0 text-white rounded-b hover:bg-primary  group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all">
    ?      <Link href="">Add To Cart</Link>
        </button>
     ? </div>

  ?    <div className="bg-white">
        ?<Link href={`/products/${product.slug}`}>
          <h4 className="text-base font-medium text-black mb-2">
            {product.title}
          </h4>
        </Link>
        <p className="flex items-center gap-3 text-base font-medium mb-3">
          {product.salePrice && (
            <ins className="text-primary no-underline">
              ${product.salePrice}
            </ins>
          )}
          <del className="opacity-60">${product.price}</del>
        </p>
      
      </div>
    </div>
  );
};

export default CartItem;
