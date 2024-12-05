import Hero from "./components/Hero";
import CategoryMenu from "./components/CategoryMenu";
import Title from "./components/Title";
import Image from "next/image";
import { Eye, Heart, Star } from "lucide-react";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
      <section className="wrapper">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/12 border-e py-10 pe-4 hidden lg:block">
            <CategoryMenu />
          </div>

          <div className="w-full lg:w-10/12 lg:py-10 py-5 lg:ps-10">
            <Hero />
          </div>
        </div>
      </section>

      <section className="wrapper pt-36 pb-10">
        <Title subtitle="Today 's" title="Flash Sales" />
        <div className="flex justify-between">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </section>
    </>
  );
}
