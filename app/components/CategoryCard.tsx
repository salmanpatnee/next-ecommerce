import Image from "next/image";
import Link from "next/link";
import React from "react";

type Category = {
  id: number;
  title: string;
  imageUrl: string;
};

interface Props {
  category: Category;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <div className="min-w-[170px] h-[145px] flex flex-col items-center border rounded hover:bg-primary pt-5 group transition-all">
      <Link href="#" className="text-center">
        <Image
          src={category.imageUrl}
          alt={category.title}
          width={56}
          height={56}
          className="mb-4 mx-auto group-hover:filter group-hover:invert"
        />
        <h4 className="text-base group-hover:text-white">{category.title}</h4>
      </Link>
    </div>
  );
};

export default CategoryCard;
