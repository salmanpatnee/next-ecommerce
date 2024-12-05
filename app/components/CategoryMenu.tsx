import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const CategoryMenu = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="text-base border-0 mb-5">
        <AccordionTrigger className="p-0 hover:text-primary">
          Men&apos;s Clothing
        </AccordionTrigger>
        <AccordionContent className="ms-3 mt-3">
          <Link href="/">Shirts</Link>
          <hr className="my-2" />
          <Link href="/">T-Shirts</Link>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="text-base border-0 mb-5">
        <AccordionTrigger className="p-0 hover:text-primary">
          Women&apos;s Clothing
        </AccordionTrigger>
        <AccordionContent className="ms-3 mt-3">
          <Link href="/">Dresses</Link>
          <hr className="my-2" />
          <Link href="/">Tops</Link>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="text-base border-0 mb-5">
        <AccordionTrigger className="p-0 hover:text-primary">
          Kids&apos;s Clothing
        </AccordionTrigger>
        <AccordionContent className="ms-3 mt-3">
          <Link href="/">Babywear</Link>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="text-base border-0 mb-5">
        <AccordionTrigger className="p-0 hover:text-primary">
          Accessories
        </AccordionTrigger>
        <AccordionContent className="ms-3 mt-3">
          <Link href="/">Bags</Link>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="text-base border-0 mb-5">
        <AccordionTrigger className="p-0 hover:text-primary">
          Mobile Phones
        </AccordionTrigger>
        <AccordionContent className="ms-3 mt-3">
          <Link href="/">Smartphones</Link>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6" className="text-base border-0 mb-5">
        <AccordionTrigger className="p-0 hover:text-primary">
          Laptops & Computers
        </AccordionTrigger>
        <AccordionContent className="ms-3 mt-3">
          <Link href="/">Laptops</Link>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7" className="text-base border-0 mb-5">
        <AccordionTrigger className="p-0 hover:text-primary">
          Home Appliances
        </AccordionTrigger>
        <AccordionContent className="ms-3 mt-3">
          <Link href="/">Refrigerators</Link>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8" className="text-base border-0 mb-5">
        <AccordionTrigger className="p-0 hover:text-primary">
          Audio & Video
        </AccordionTrigger>
        <AccordionContent className="ms-3 mt-3">
          <Link href="/">Headphones</Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CategoryMenu;
