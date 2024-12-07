"use client";
import { Heart, RefreshCw, Star, Truck } from "lucide-react";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Image from "next/image";
import ProductCard from "@/app/components/ProductCard";
import Title from "@/app/components/Title";
import products from "@/data/products.json";
interface Props {
  params: { slug: string[] };
}

const ProductPage = ({ params: { slug } }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null); // Corrected type

  const productImages = [
    "/images/ps5-controller.png",
    "/images/ps5-controller.png",
    "/images/ps5-controller.png",
    "/images/ps5-controller.png",
    "/images/ps5-controller.png",
    "/images/ps5-controller.png",
    "/images/ps5-controller.png",
  ];

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <article className={`wrapper product-${slug}`}>
      <nav className="flex items-center space-x-2 text-gray-400 text-sm lg:py-20 py-10">
        <a href="#" className="hover:text-primary">
          Home
        </a>
        <span>/</span>
        <a href="#" className="hover:text-primary">
          Gaming
        </a>
        <span>/</span>
        <span className="text-black">HAVIT HV-G92 Gamepad</span>
      </nav>
      <section className="flex lg:flex-row flex-col">
        <div className="lg:w-7/12 w-full lg:pe-10 mb-10 lg:mb-0">
          <div className="flex gap-8">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper: thumbsSwiper ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
            >
              {productImages.map((image, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="bg-[#F5F5F5] px-7 py-10 rounded"
                  >
                    <Image
                      src={image}
                      alt="index"
                      width={300}
                      height={300}
                      className="mx-auto"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="lg:w-5/12 w-full">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Havic HV G-92 Gamepad
          </h2>
          <div className="flex items-center gap-3 mb-4">
            <div className="gap-1 flex">
              <Star
                size={20}
                strokeWidth={0}
                className="fill-yellow-500 border-yellow-500"
              />
              <Star
                size={20}
                strokeWidth={0}
                className="fill-yellow-500 border-yellow-500"
              />
              <Star
                size={20}
                strokeWidth={0}
                className="fill-yellow-500 border-yellow-500"
              />
              <Star
                size={20}
                strokeWidth={0}
                className="fill-yellow-500 border-yellow-500"
              />
              <Star
                size={20}
                strokeWidth={0}
                className="fill-gray-300 border-gray-300"
              />
            </div>
            <p className="text-gray-400 text-sm ">(150 Reviews)</p>
            <span className="text-gray-400">|</span>
            <p className="text-[#00FF66] text-sm">In Stock</p>
          </div>
          <p className="text-2x mb-6">$192.00</p>
          <p className="text-sm pb-6 border-b border-black mb-6">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>

          <div className="flex gap-6 items-center mb-6">
            <span className="text-xl">Colors:</span>
            <div className="flex items-center gap-2">
              <button className="transition-all rounded-full bg-[#A0BCE0] border-2 border-[#A0BCE0] hover:border-[#000000] w-5 h-5"></button>
              <button className="transition-all opacity-90 hover:opacity-1 rounded-full bg-primary border-2 border-primary hover:border-[#000000] w-5 h-5"></button>
            </div>
          </div>
          <div className="flex gap-6 items-center mb-6">
            <span className="text-xl">Size:</span>
            <div className="flex items-center gap-4">
              <button className="transition-all rounded border border-black hover:border-primary hover:bg-primary hover:text-white w-8 h-8 text-sm">
                XS
              </button>
              <button className="transition-all rounded border border-black hover:border-primary hover:bg-primary hover:text-white w-8 h-8 text-sm">
                S
              </button>
              <button className="transition-all rounded border border-black hover:border-primary hover:bg-primary hover:text-white w-8 h-8 text-sm">
                M
              </button>
              <button className="transition-all rounded border border-black hover:border-primary hover:bg-primary hover:text-white w-8 h-8 text-sm">
                X
              </button>
              <button className="transition-all rounded border border-black hover:border-primary hover:bg-primary hover:text-white w-8 h-8 text-sm">
                XL
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="flex items-center">
              <button
                onClick={decrement}
                className="w-10 h-11 text-gray-700 rounded-s border border-black border-e-0 hover:bg-primary focus:outline-none hover:text-white hover:border-primary"
              >
                -
              </button>

              <input
                type="number"
                value={quantity}
                min="1"
                readOnly
                className="border border-black focus:outline-none h-11 text-center w-20"
              />

              <button
                onClick={increment}
                className="w-10 h-11 text-gray-700 rounded-e border border-black border-s-0 hover:bg-primary focus:outline-none hover:text-white hover:border-primary"
              >
                +
              </button>
            </div>
            <button className="bg-primary text-white rounded text-center h-11 px-12 text-base hover:bg-black">
              Buy Now
            </button>
            <button className="group bg-white hover:bg-primary text-black border border-black rounded text-center h-11 px-3 text-base flex items-center justify-center hover:border-primary">
              <Heart className="stroke-black group-hover:stroke-white" />
            </button>
          </div>
          <div className="flex rounded border flex-col border-black">
            <div className="px-4 py-6 border-b border-black flex items-center gap-4">
              <Truck size={40} />
              <div>
                <h4 className="mb-2 text-base font-medium">Free Delivery</h4>
                <p className="text-xs font-medium underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="px-4 py-6 flex items-center gap-4">
              <RefreshCw size={40} />
              <div>
                <h4 className="mb-2 text-base font-medium">Return Delivery</h4>
                <p className="text-xs font-medium underline">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper lg:pt-20 pt-10 pb-10">
        <div className="flex justify-between items-center">
          <Title subtitle="Related Item" title="" />
        </div>
        <div className="flex justify-between gap-7 mb-20">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={1} // Full width (1 slide) on mobile by default
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
      </section>
    </article>
  );
};

export default ProductPage;
