"use client";
import Hero from "./components/Hero";
import CategoryMenu from "./components/CategoryMenu";
import Title from "./components/Title";
import ProductCard from "./components/ProductCard";
import products from "@/data/products.json";
import bestSelling from "@/data/bestselling-products.json";
import categories from "@/data/categories.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import CategoryCard from "./components/CategoryCard";
import Image from "next/image";

export default function Home() {
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (prevButtonRef.current && nextButtonRef.current) {
    }
  });

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

      <section className="wrapper lg:pt-36 pt-10 pb-10">
        <div className="flex justify-between items-center">
          <Title subtitle="Today 's" title="Flash Sales" />
          <div className="flex gap-2">
            <button
              className="bg-[#F5F5F5] rounded-full p-3 hover:bg-primary group transition-all"
              ref={prevButtonRef}
            >
              <ArrowLeft className="group-hover:text-white" />
            </button>
            <button
              className="bg-[#F5F5F5] rounded-full p-3 hover:bg-primary group transition-all"
              ref={nextButtonRef}
            >
              <ArrowRight className="group-hover:text-white" />
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-7 mb-20">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={1} // Full width (1 slide) on mobile by default
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            breakpoints={{
              // Mobile (default behavior)
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1180: {
                slidesPerView: 4,
              },
            }}
          >
            {products.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard key={product.id} product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="text-center border-b pb-16">
          <Link href="#" className="button">
            View All Products
          </Link>
        </div>
      </section>

      <section className="wrapper py-5">
        <div className="flex justify-between items-center">
          <Title subtitle="Categories" title="Browse By Category" />
          <div className="flex gap-2">
            <button
              className="bg-[#F5F5F5] rounded-full p-3 hover:bg-primary group transition-all"
              ref={prevButtonRef}
            >
              <ArrowLeft className="group-hover:text-white" />
            </button>
            <button
              className="bg-[#F5F5F5] rounded-full p-3 hover:bg-primary group transition-all"
              ref={nextButtonRef}
            >
              <ArrowRight className="group-hover:text-white" />
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-7 lg:mb-10 mb-0 border-b lg:pb-16 pb-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={6}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            breakpoints={{
              // Mobile (default behavior)
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1180: {
                slidesPerView: 6,
              },
            }}
          >
            {categories.map((category) => {
              return (
                <SwiperSlide key={category.id}>
                  <CategoryCard key={category.id} category={category} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section className="wrapper mb-32 ">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Title subtitle="This Month" title="Best Selling Products" />
          <Link href="#" className="button hidden sm:block">
            View All
          </Link>
        </div>
        <div className="flex justify-between gap-7 mb-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={1} // Full width (1 slide) on mobile by default
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            breakpoints={{
              // Mobile (default behavior)
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1180: {
                slidesPerView: 4,
              },
            }}
          >
            {bestSelling.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard key={product.id} product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <section className="wrapper bg-black mb-12">
        <div className="py-16 px-12 flex items-center justify-between">
          <div className="lg:w-5/12 w-full text-white text-center">
            <span className="text-[#00FF66] font-semibold text-base mb-8 block">
              Categories
            </span>
            <h3 className="font-semibold text-5xl leading-[60px] mb-8">
              Enhance Your Music Experience
            </h3>
            <Image
              src="/images/timer.png"
              alt="timer"
              width={320}
              height={62}
              className="mb-14 mx-auto"
            />
            <Link href="" className="button-alt">
              Buy Now
            </Link>
          </div>
          <div className="w-7/12 text-end hidden lg:block">
            <Image
              src="/images/headphone.png"
              alt="Headphone"
              width={600}
              height={420}
              className="max-w-lg ms-auto"
            />
          </div>
        </div>
      </section>

      <section className="wrapper lg:pt-20 pt-10 pb-10">
        <div className="flex justify-between items-center">
          <Title subtitle="Our Products" title="Explore Our Products" />
          <div className="flex gap-2">
            <button
              className="bg-[#F5F5F5] rounded-full p-3 hover:bg-primary group transition-all"
              ref={prevButtonRef}
            >
              <ArrowLeft className="group-hover:text-white" />
            </button>
            <button
              className="bg-[#F5F5F5] rounded-full p-3 hover:bg-primary group transition-all"
              ref={nextButtonRef}
            >
              <ArrowRight className="group-hover:text-white" />
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-7 mb-20">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={1} // Full width (1 slide) on mobile by default
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            breakpoints={{
              // Mobile (default behavior)
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1180: {
                slidesPerView: 4,
              },
            }}
          >
            {products.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard key={product.id} product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="text-center border-b pb-16">
          <Link href="#" className="button">
            View All Products
          </Link>
        </div>
      </section>
    </>
  );
}
