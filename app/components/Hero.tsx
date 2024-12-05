"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import Link from "next/link";
import banner from "@/public/images/banner.jpg"

const slides = [
  { imageUrl: banner, href: "#" },
  { imageUrl: banner, href: "#" },
];

const Hero = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay, EffectCreative]}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.href}>
              <Link href={slide.href}>
                <Image
                  src={slide.imageUrl}
                  alt="iPhone"
                  width="892"
                  height="344"
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Hero;
